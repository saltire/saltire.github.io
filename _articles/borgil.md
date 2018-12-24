---
title: borgil
summary: An IRC chatbot that can talk on other networks too.
tags: code, coding, computer, languages, learning, programming, development
github: borgil
---

A chatbot, originally written for IRC but expanded to support other networking protocols,
including Telegram. Inspired by Willie (now known as [Sopel](https://sopel.chat)),
a Python IRC bot, which is the first open-source project to which I ever contributed.

For a long time, some friends and I used Willie to run a chat bot in our IRC channel.
Like many such projects, Willie is plugin-based, which was fun because it let me add bits
of custom functionality to the bot, depending on what we found useful.

Eventually we started a second channel on the I2P IRC network.
We wanted the bot to sit in both channels and act as a relay between the two,
but found that Willie wasn't really built for multiple connections.
So this was my excuse to start my own bot from scratch.

At the time I was doing a lot of asynchronous web stuff in Node.js and saw a lot of overlap,
so that's what I used for this project.
Taking inspiration from Willie, I made a sort of plugin API,
and tried to put most of the functionality into plugins.

Taking it a step further, I also separated out the network code into plugin-like adapters
called 'transports', modelled after the Winston logging module for Node.
The goal was to normalize the input and output from these transports as much as possible
so that in theory, the bot could talk on whatever messaging platform it wanted
without caring too much what it was.
And of course, I wanted to make it easy for people to write their own transports
so the bot could be extended to fit whatever weird needs they might have.

As a proof of concept I made a transport for IRC and a second one for Telegram.
The Telegram API is entirely different from IRC, and sends messages via HTTP requests.
But, after massaging the data a bit, I was able to get the bot to pass messages from the chat room
to a Telegram conversation on my phone.

I also got the I2P relay up and running (with the permission of the IRC2P admins),
and wrote an article about that.
It wasn't all smooth, of course: the I2P connection gave me latency issues that I don't think
I've entirely ironed out yet. But like all my other projects, it's eternally a work in progress.

*Languages:* Javascript

*Future plans:* Create adapters for other network protocols, build more plugins.
