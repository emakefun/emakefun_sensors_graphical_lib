/*--------------------------------------------------------------------
This file is part of the Arduino WiFiEsp library.

The Arduino WiFiEsp library is free software: you can redistribute it
and/or modify it under the terms of the GNU General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

The Arduino WiFiEsp library is distributed in the hope that it will be
useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with The Arduino WiFiEsp library.  If not, see
<http://www.gnu.org/licenses/>.
--------------------------------------------------------------------*/

#include <inttypes.h>

#include "WiFiEsp.h"
#include "WiFiEspClient.h"
// #include "WiFiEspServer.h"

#include "EspDrv.h"
#include "debug.h"

WiFiEspClient::WiFiEspClient() : _sock(255)
{
}

WiFiEspClient::WiFiEspClient(uint8_t sock) : _sock(sock)
{
}


////////////////////////////////////////////////////////////////////////////////
// Overrided Print methods
////////////////////////////////////////////////////////////////////////////////

// the standard print method will call write for each character in the buffer
// this is very slow on ESP
size_t WiFiEspClient::print(const __FlashStringHelper *ifsh)
{
  printFSH(ifsh, false);
}

// if we do override this, the standard println will call the print
// method twice
size_t WiFiEspClient::println(const __FlashStringHelper *ifsh)
{
  printFSH(ifsh, true);
}

////////////////////////////////////////////////////////////////////////////////
// Implementation of Client virtual methods
////////////////////////////////////////////////////////////////////////////////

int WiFiEspClient::connectSSL(const char* host, uint16_t port)
{
  return connect(host, port, SSL_MODE);
}

int WiFiEspClient::connectSSL(IPAddress ip, uint16_t port)
{
  char s[16];
  sprintf_P(s, PSTR("%d.%d.%d.%d"), ip[0], ip[1], ip[2], ip[3]);
  return connect(s, port, SSL_MODE);
}

int WiFiEspClient::connect(const char* host, uint16_t port)
{
    WiFiEspClient::host = String(host);
    WiFiEspClient::port = port;
    return connect(host, port, TCP_MODE);
}

int WiFiEspClient::connect(IPAddress ip, uint16_t port)
{
  char s[16];
  sprintf_P(s, PSTR("%d.%d.%d.%d"), ip[0], ip[1], ip[2], ip[3]);

  return connect(s, port, TCP_MODE);
}

/* Private method */
int WiFiEspClient::connect(const char* host, uint16_t port, uint8_t protMode)
{
//  LOGINFO1(F("Connecting to"), host);

  _sock = WiFiEspClass::getFreeSocket();
//   Serial.print("connect: ");
    
    if (_sock != NO_SOCKET_AVAIL)
    {
      int r = EspDrv::startClient(host, port, _sock, protMode);
      if (!r)
      return 0;
     
      WiFiEspClass::allocateSocket(_sock);
    }
  else
  {
      LOGERROR(F("No socket available"));
      return 0;
    }
//    Serial.println("connect http server success!");
    return 1;
}



size_t WiFiEspClient::write(uint8_t b)
{
    return write(&b, 1);
}

size_t WiFiEspClient::write(const uint8_t *buf, size_t size)
{
  
  if (_sock >= MAX_SOCK_NUM or size==0)
  {
    setWriteError();
    return 0;
  }
  bool r = EspDrv::sendData(_sock, buf, size);
  if (!r)
  {
    setWriteError();
    LOGERROR1(F("Failed to write to socket"), _sock);
    delay(4000);
    stop();
    return 0;
  }

  return size;
}

int WiFiEspClient::available()
{
  if (_sock != 255)
  {
    int bytes = EspDrv::availData(_sock);
    if (bytes>0)
    {
      return bytes;
    }
  }

  return 0;
}

int WiFiEspClient::read()
{
  uint8_t b;
  if (!available())
    return -1;

  bool connClose = false;
  EspDrv::getData(_sock, &b, false, &connClose);

  if (connClose)
  {
    WiFiEspClass::releaseSocket(_sock);
    _sock = 255;
  }

  return b;
}

String WiFiEspClient::readData(char *str, SoftwareSerial *espSerial, unsigned int timeout) 
{
//  Serial.println("----------status------------");
//	Serial.println(status());
  if(status() != ESTABLISHED) {
    connect(WiFiEspClient::host.c_str(), WiFiEspClient::port);
  }
  String requestStr;
  String getStr = "";
  if(str[0] == '/') {
    getStr = "GET ";
  } else {
    getStr = "GET /";
  }
  const String headStr = " HTTP/1.1\r\nHost: ";
  const String host = WiFiEspClient::host;
  const String str1 = ":";
  const String port = String(WiFiEspClient::port);
  const String endStr = "\r\nConnection: keep-alive\r\n\r\n";
  requestStr = getStr + str + headStr  + host + str1 + port + endStr;
  Serial.print("request head Str: ");
  Serial.println(requestStr);
  const char *result = requestStr.c_str();
  // const char *result = "GET /index HTTP/1.1\r\nHost: 192.168.2.79:8082\r\n\r\n";
  write(result, strlen(result));
  long _startMillis = millis();
  String responseStr = "";
  long respLength ;
  uint8_t _connId;
  static uint8_t  _remoteIp[WL_IPV4_LENGTH];
  static uint16_t _remotePort;
  bool connClose = false;
  do{
    if (espSerial->available())
    {
//		Serial.println(espSerial->read());
      if(espSerial->find((char *)"+IPD,")){
        _connId = espSerial->parseInt();    // <ID>
        espSerial->read();                  // ,
        respLength = espSerial->parseInt();    // <len>
        espSerial->read();   
        _remoteIp[0] = espSerial->parseInt();    // <remote IP>
        espSerial->read();                  // .
        _remoteIp[1] = espSerial->parseInt();
        espSerial->read();                  // .
        _remoteIp[2] = espSerial->parseInt();
        espSerial->read();                  // .
        _remoteIp[3] = espSerial->parseInt();
        espSerial->read();                  // "
        espSerial->read();                  // ,
        _remotePort = espSerial->parseInt();     // <remote port>
        espSerial->read();                  // :
      }
      if(espSerial->find((char *)"\r\n\r\n")) {
          espSerial->read(); 
          respLength--; 
       }
       String head = espSerial->readStringUntil("\r\n\r\n");
//	   Serial.println(head);
       responseStr += head;
       espSerial->read();  
       respLength--;
       delay(5);
       if(respLength == 0) {
        if(espSerial->available())
        {
          // 48 = '0'
          if(espSerial->peek() == 48 + _connId)
          {
            int idx = EspDrv::readUntil(500, ",CLOSED\r\n", false);
            if(idx != 5)
            {
              LOGERROR(F("Tag CLOSED not found"));
            }
            LOGDEBUG();
            LOGDEBUG(F("Connection closed"));
//            connClose=true; 
          }
      }
        }
    }
  }while(millis() - _startMillis < timeout);
   stop(); //断开http connect
    if(connClose) {
      WiFiEspClass::releaseSocket(_sock);
      _sock = 255;
    }
//  Serial.println(responseStr);
  String secondStr = split(responseStr, "\n", 1);
  if(secondStr == "-1") {
    return split(responseStr, "\n", 0);
  } else {
    return secondStr;
  }
//  
//  return "";
}

String WiFiEspClient::split(String tagStr, String splitStr, int index)
{
// Serial.print("tagStr: ");
// Serial.println(tagStr);
 int offset;
 String temps[tagStr.length()];
 int i = 0;
 do
 {
    offset = tagStr.indexOf(splitStr);
    if(offset != -1)
    {
      temps[i] =  tagStr.substring(0, offset);
      tagStr = tagStr.substring(offset + splitStr.length(), tagStr.length());
      i++;
      } else {
        if(tagStr.length() > 0)
        temps[i] = tagStr;
      }
 }
  while(offset >= 0);
  if(index > i) return "-1";
  return temps[index];
}

int WiFiEspClient::read(uint8_t* buf, size_t size)
{
  if (!available())
    return -1;
  Serial.println("client read");
  return EspDrv::getDataBuf(_sock, buf, size);
}

int WiFiEspClient::peek()
{
  uint8_t b;
  if (!available())
    return -1;

  bool connClose = false;
  EspDrv::getData(_sock, &b, true, &connClose);

  if (connClose)
  {
    WiFiEspClass::releaseSocket(_sock);
    _sock = 255;
  }

  return b;
}


void WiFiEspClient::flush()
{
  while (available())
    read();
}



void WiFiEspClient::stop()
{
  if (_sock == 255)
    return;

//  LOGINFO1(F("Disconnecting "), _sock);

  EspDrv::stopClient(_sock);

  WiFiEspClass::releaseSocket(_sock);
  _sock = 255;
}


uint8_t WiFiEspClient::connected()
{
  return (status() == ESTABLISHED);
}


WiFiEspClient::operator bool()
{
  return _sock != 255;
}


////////////////////////////////////////////////////////////////////////////////
// Additional WiFi standard methods
////////////////////////////////////////////////////////////////////////////////


uint8_t WiFiEspClient::status()
{
  if (_sock == 255)
  {
    return CLOSED;
  }

  if (EspDrv::availData(_sock))
  {
    return ESTABLISHED;
  }

  if (EspDrv::getClientState(_sock))
  {
    return ESTABLISHED;
  }

  WiFiEspClass::releaseSocket(_sock);
  _sock = 255;

  return CLOSED;
}

IPAddress WiFiEspClient::remoteIP()
{
  IPAddress ret;
  EspDrv::getRemoteIpAddress(ret);
  return ret;
}

////////////////////////////////////////////////////////////////////////////////
// Private Methods
////////////////////////////////////////////////////////////////////////////////

size_t WiFiEspClient::printFSH(const __FlashStringHelper *ifsh, bool appendCrLf)
{
  size_t size = strlen_P((char*)ifsh);
  
  if (_sock >= MAX_SOCK_NUM or size==0)
  {
    setWriteError();
    return 0;
  }

  bool r = EspDrv::sendData(_sock, ifsh, size, appendCrLf);
  if (!r)
  {
    setWriteError();
    LOGERROR1(F("Failed to write to socket"), _sock);
    delay(4000);
    stop();
    return 0;
  }

  return size;
}