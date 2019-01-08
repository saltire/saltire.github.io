---
title: Processing GIFs
summary: Looping eye candy written in Processing.
thumbnail: /static/processing-gifs/thumbnail.png
tags: [art, code, generative, learning, programming, processing]
github: bbgifs
date: 2018-12-28 14:00:00
---

This is my foray into the 'hypnotic GIF' section of the internet,
and also my excuse to learn Processing.

Inspired by lots of Twitter and Tumblr accounts dedicated to cranking out stuff like this,
but particularly indebted to [bees & bombs](https://beesandbombs.tumblr.com),
who shared [some of his code](https://gist.github.com/beesandbombs) and gave me a starting point.
Reverse engineering is once of my favourite ways to learn,
so I deobfuscated and picked apart some of his animations and adapted his framework to my own ends.
Here's what I came up with!

{% include vimeo.html video=308326091 %}

In my first attempt, I tried to recreate a psychedelic landscape from
[Crawl Space](http://koyamapress.com/projects/crawl-space),
a recent book by the always-awesome Jesse Jacobs.
I changed it to an isometric perspective and added pulsing colours to make it extra-trippy.
Maybe I should put some hazy distortion in there too.

{% include vimeo.html video=308326205 %}

My next one was built with the same pieces, but simpler and with a lot more depth.
I was going for mountains but ended up with clouds. Big, waxy clouds.

Each of these took me a good chunk of a weekend to create.
A big part of the first one was figuring out how to generate the random patterns;
if you want a technical diversion, read
[how I came up with a tiling 2D noise generator!]({% link _posts/2018-12-28-perlin-donut.md %})
