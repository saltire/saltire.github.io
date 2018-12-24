---
title: NeoPixel Desk
summary: A controller for a NeoPixel display on the desk in my living room.
tags: code, coding, computer, languages, learning, programming, development
github: neopixeldesk
---

A controller for a strip of
[NeoPixels](https://learn.adafruit.com/adafruit-neopixel-uberguide/overview),
which I currently have attached to my desk at home.
The desk has a frosted glass surface,
and the LED strip runs around the perimeter of the desk underneath,
making a nicely customizable light display for my work area.

Aside from being a basic colour picker, it also has a marquee mode, a pulse mode,
and my personal favourite, a gently shifting rainbow mode.
I find myself putting this on a lot when I'm sitting down to work;
somehow the stimulation of pulsing colours helps me to focus, kind of like visual background music.

It's controlled from a web panel written in React.js, because I wanted to try React out.
It's also got a couple of quick command line shortcuts.
The server connects to an Arduino to send data to the LEDs, and was originally written in Python,
but I later switched it to Node.js since I'm doing so much of that lately.

*Languages:* Javascript, Python, Arduino
