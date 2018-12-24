---
title: Adventure Engine
summary: An iteration of my text adventure engine, written in Python.
tags: code, coding, computer, languages, learning, programming, development
github: advengine-tdd
---

This was my first attempt at test-driven development,
a method I found (and still find) quite useful.

The goal of this project was to allow anyone to write and play their own text adventures.
There's a command-line front end as well as a web-based player.
Each adventure is stored in a single data file. I used XML at first but later switched to JSON.

The first version of this was web-based and written in PHP.
Later I reimplemented it from scratch as a way of learning Python.
When I decided to learn test-driven development, I started from a clean slate once more,
cloning the engine using the new paradigm. So this is actually the third version.
(I even wrote a fourth version in Ruby as a way of learning that language.)

Realizing that most people wouldn't want to hand-edit a JSON file,
I had always planned to make a control panel for composing adventures.
At one point I started building this in AngularJS (again as a way of learning the framework),
though I didn't get far with it.

I've actually received a few emails about this project from aspiring programmers,
likely because I posted an article about it way back when it was still in the PHP stage.
A text adventure is a good starting project for novices to a language,
because it's fun, a bit nostalgic, doesn't require graphical libraries or any other add-ons,
and doesn't take too much effort to get to that initial reward of a working game.

*Languages:* Python, HTML, Javascript

*Future plans:* Back end might not be feature complete.
Make the builder, probably in a separate project.
