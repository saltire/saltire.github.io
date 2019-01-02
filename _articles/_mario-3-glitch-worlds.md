---
title: Mario 3 Glitch Worlds
summary: Game Genie takes us to the upside-down.
date: 2019-01-02 10:00:00
---

A couple months back, I saw a [thread on Twitter](https://twitter.com/moshboy/status/1050695669965451264)
about the eye-opening experience of discovering bugs in video games.
I've been playing games my whole life and I've run into (not to mention created!)
a whole lot of weird glitches in that time.
But the first thing that came to mind was a bizarre experience I had around age 10 or 12,
with no less esteemed a game than *Super Mario Bros. 3*.
So I posted my [my own little thread](https://twitter.com/saltire/status/1050904631327494144) in response.

In the early 90s there was a third-party peripheral for the major game consoles called the
*Game Genie*. It was a special cartridge that you could attach your Nintendo or Sega
cartridges to before plugging it into the game system. In a bit of arcane magic,
this little artifact would cause your system to display a cheat code entry screen before
booting the actual game, and it came with a book full of codes you could enter to gain
infinite lives, upgrade your powers, or skip entire levels.

![Game Genie code screen](/static/mario-3-glitch-worlds/game-genie.gif)

Game Genie codes were seemingly-random words made from an alphabet of 16 letters:
`AEPOZXLUGKISTVYN`.
Now, Mario 3 has 8 different worlds, and the Genie listed codes to skip to each one
(minus the first, since that wouldn't be much of a cheat).
To get to world 2, you entered `PEUZUGAA`; for world 3, `ZEUZUGAA`; world 4, `LEUZUGAA`, and so on.

The pattern was obvious: only one letter changed in each code.
I didn't know how it all worked under the hood,
but I figured that the 16 available letters must be stand-ins for hexadecimal digits.
Interestingly, the codes used every *other* letter out of the available sixteen... `P`, `Z`, `L`, etc.
I wondered: what would happen if I entered codes that used the *other* 8 letters in between?

So I plugged in `EEUZUGAA`, wondering if there was a world halfway between 1 and 2.
Here's what came up:
