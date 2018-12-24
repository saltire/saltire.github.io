---
title: Minecraft maps
summary: Worlds envisioned through my Minecraft map generator.
tags: [code, coding, computer, languages, learning, programming, development]
github: cmapbash
link: https://minemap.saltiresable.com
maps:
  - uberworld
  - Timber
---

I got into Minecraft pretty early on in its development, and of course
the first thing I wanted to do after building all this stuff was to show it to people!

There are already a ton of map generators for Minecraft, of course, but that's not the point.
I was always fascinated knowing that the data making up an entire game world was just
sitting on my hard drive, waiting for me to do something with it.

I initially started this in Python, but since it loops over a potentially huge amount of data,
I quickly found it to be way too slow.
So that's what finally motivated me to write something in C. 
Finally, for the first time, a real language!

Results not too bad. I learned a lot about managing memory and optimizing for speed.
Outputs as a single image, or a series of tiles suitable for Google Maps.
I've written scripts in Python and Javascript that take care of the Google end,
and have a couple of shell scripts that upload the data to Amazon S3.

{% include maps.html maps=page.maps %}

As of this writing it's up to date with Minecraft version 1.10.
[Check out my results!](/minemap)
