---
title: Jumbotron
summary: A Minecraft mod to display in-game blocks on a hardware LED display.
tags: code, coding, computer, languages, learning, programming, development
github: jumbotron
---

A few years ago I picked up
[an LED matrix panel from Adafruit](https://www.adafruit.com/product/420),
without really knowing what I was going to do with it.
Well, with the amount of Minecraft I was playing at the time,
anything grid-based was bound to get me thinking about how to hook it up with that game.

So I wrote a mod, using the then-popular Bukkit modding framework.
This is probably the first (and as of this writing, only) thing I ever wrote in Java.
It links a grid of blocks in-game to the LED panel, using Arduino to push the data.
Just make a selection in game, fire a command, and watch your blocks appear in meatspace!
I'll see if I can get this working again, and put some pictures up.

I later used this same LED panel in conjunction with my
[Hard Livin'](/articles/hardlivin) art installation.

*Languages:* Java, Arduino

*Future plans:* Depends on whether Minecraft ever releases an official modding API,
as Bukkit is no longer available. Aside from that I can only look for other weird sources of
pixel data to display on the screen.
