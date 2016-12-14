# ESP8266 Fauxmo (WeMo Switch) + Web Server + MQTT

## Objective

Create a IoT device that can be controlled by Alexa, have a pretty local web server to interact with the switch and also MQTT to interact with the internet (Currenlty using Adafruit IO)

## Phisical components

- 1 ESP8266 web enabled microcontroller (with USB serial and power)
- 1 Relay board
- 1 Power supply
- 1 Four gang extension lead 

## Details

The code uses the flash file system to store the internal web page (using milligram and normalize as a pretty but light web framework). The internal web server is also Apple Web App compatible, this means that you can create a shortcut in an iOS device and it will behave as an app.

The switch can be seen or controlled from the internal web page (that uses a lightweight local REST API that could also be called with simple json message) or from MQTT pubs and subs to Adafruit IO, this allow to link it to other things using the Adafruit IFTTT channel.

The switch can be discovered and controlled from an Amazon Echo (aka Alexa)

This project uses (as of 2016-12-14) the dev version of the esp8266 arduino hardware components (required by the fauxmo library). For more details of the fauxmo library see (https://github.com/makermusings/fauxmo)

## TODOs

- Use secure MQTT
- Clean up the code

## See it in action

### The Alexa connected switch in action (with live web site update)
[![Video](http://img.youtube.com/vi/ynBR8wsPKC0/0.jpg)](http://www.youtube.com/watch?v=ynBR8wsPKC0)
### The front of the extension lead (one place is used for the electronics)
![Back](http://i.imgur.com/2W85tQJ.jpg)
### The back of the extension lead (you can see the ESP8266)
![Back](http://i.imgur.com/AbDjojx.jpg)