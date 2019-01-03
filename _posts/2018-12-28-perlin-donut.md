---
title: Perlin donut
summary: Tiling 2D wallpaper patterns using random noise.
thumbnail: /static/perlin-donut/thumbnail.png
tags: art, code, coding, computer, languages, learning, programming, development, processing
github: bbgifs
date: 2018-12-28 16:00:00
---

One of the challenges I faced while creating [my first Processing animation]({% link _posts/2018-12-28-processing-gifs.md %})
was getting a nice, procedurally generated but continuous landscape.
A lot of procedural visual art uses a [Perlin noise](https://en.wikipedia.org/wiki/Perlin_noise)
function to get smooth, semi-random textures.
Processing provides such a function that gives you as much smooth noise as you need,
but since I wanted to do an *infinitely scrolling* animation,
I needed not only smooth noise, but smooth *repeating* noise, sort of like a wallpaper pattern.

The way to get a looping sequence of values from a Perlin noise function
is to sample points on a circle from a two-dimensional array, like this:

![Circle of pixels highlighted on a 2D Perlin noise field](/static/perlin-donut/perlin-2d-circle.png)

This will get you a one-dimensional string of noise values that loop seamlessly and vary smoothly.
Problem is, I needed a *two-dimensional array* of noise values,
and since I'm scrolling diagonally, I need it to loop on *both* axes.
So how do I extrapolate the circle example above to an extra dimension?

A map that repeats on the X and Y axes can be represented in 3D space by a torus (i.e. a donut).
Processing provides a Perlin noise function in 3D, so all I had to do was sample points on the
surface of a torus. Of course, I had to figure out how to calculate that first,
so I wrote a math function to translate the U,V points on the torus' surface to X,Y,Z points in 3D,
and tested it out with a little interactive Processing sketch:

![Torus with moving mouse cursor and red dot indicating matching position on the surface](/static/perlin-donut/torus.gif)

Here, the X and Y position of the mouse cursor in the frame are mapped on the surface of the torus
and indicated by the red dot. The white dot is 0,0.

Anyway, I took the noise values along the surface of the donut and flattened them out to a 2D grid.
The result looked like this:

![Noise field that repeats horizontally and vertically](/static/perlin-donut/tilingnoise.png)

Success! A clear tiling pattern with no obvious seams.
Reminds me of the background on my first GeoCities site.

The only problem with this method is some visible distortion, with horizontal bands that are
less detailed than others and look blurry.
This is basically the same problem that the [Mercator projection](https://en.wikipedia.org/wiki/Mercator_projection) has:
along the inner surface of the torus,
a smaller section of the noise field gets stretched out over a larger area.
I couldn't think of a way around this, but I was able to minimize it by adjusting the dimensions
of the torus. At the level of detail I needed for these animations, it didn't really matter anyway.

### Cool, now animate it

The fun part came when I needed *animated* noise that changes over the course of the animation.
That's basically like adding a third dimension to my 2D array, and it still needs to loop.
I suppose I could further extrapolate this into the fourth dimension and sample the 3D surface
of whatever the tesseract version of a torus is, but Processing doesn't have a 4D Perlin function,
and I'm not *that* much of a masochist.

Instead, I just translated the torus around in a circular motion in all three directions.
As the torus wobbles along this diagonal circle, it passes through different areas of noise
before coming back to where it started, and the result looks like this:

![Animated noise field](/static/perlin-donut/animatednoise.gif)

Cool! Kinda like churning lava, with a bit of that gross DOOM-pulsating-flesh vibe.
I could experiment with different kinds of movement to get different results,
but this was quite adequate for my purposes.
So now you know what's driving the pulsing shapes in my weird Processing doodles.
