---
title: Mario 3 Glitch Worlds
summary: The Game Genie took me to the upside-down on my way to becoming a hacker.
thumbnail: /static/mario-3-glitch-worlds/thumbnail.png
date: 2019-01-02 10:00:00
---

A couple months back, I saw a [thread on Twitter](https://twitter.com/moshboy/status/1050695669965451264)
about the eye-opening experience of discovering bugs in video games.
I've been playing games my whole life and I've run into (not to mention created!)
a whole lot of weird glitches in that time.
But the first thing that came to mind was a bizarre experience I had around age 10 or 12,
with no less esteemed a game than *Super Mario Bros. 3*.
So I posted my [my own little thread](https://twitter.com/saltire/status/1050904631327494144) in response.

{% include tweet-mario3.html %}

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

![World 1½](/static/mario-3-glitch-worlds/world1.jpg)

A corrupted World 1... let's say World 1½.
Not too weird except some wrong tiles along the bottom,
and Mario starts outside the frame in the eternal black void, unable to move, doomed.

I plugged in the next code, and proceeded to...

![World 2½](/static/mario-3-glitch-worlds/world2.jpg)

...World 2½, much the same, but also with a weird palette on the Hammer Bro.
Mario is out in the open desert, far from the roads he usually travels on.
Whether he can survive there is unclear.

![World 3½](/static/mario-3-glitch-worlds/world3.jpg)

Here's World 3½. Same weird palettes, and Mario is in the ocean.
We know he can swim, but how far?

![World 4½](/static/mario-3-glitch-worlds/world4.jpg)

AAAGH! The colours in World 4½ are a hellish mockery of World 4's idyllic campo de' fiori.
Mario has spawned far below the map.
There are no clamours for help from the castle, only silent screams.

![World 5½](/static/mario-3-glitch-worlds/world5.jpg)

The corrupted tiles on World 5½ include the animated clouds around the edge,
and for some reason all the animated tiles in this map cycle at a blistering speed,
giving us vibrating bushes and a flickering jumble of chaos
where the clouds and the spiral castle once were.

![World 6½](/static/mario-3-glitch-worlds/world6.jpg)

World 6½ isn't so different, unless you count the blood-red icebergs.
Not pictured, though: while some of these maps have the wrong music,
this one cycles through a whole selection of tunes from the game, one loop of each,
forming a nice medley before ending in a sudden crash.

![World 7½](/static/mario-3-glitch-worlds/world7.jpg)

World 7½: almost normal. Mario was sooo close to landing on an actual road,
and I was reallllly hoping I'd finally be able to explore one of these neitherworlds,
but no dice. He's stuck.

![World 8½](/static/mario-3-glitch-worlds/world8.jpg)

World 8½ is kind of my favourite, because it's the opposite of 4½.
We can see what World 8 would look like if it had green fields and blue sea
instead of being Mario's Mordor.
I mean sure, the whole thing's still in flames, but you know.
Smells like campfires instead of sulphur.

![World 9½](/static/mario-3-glitch-worlds/world9.jpg)

BONUS: World 9½, or Evil Warp Zone!
Of course I never saw this as a kid with a Game Genie,
since I only had 16 letters to use with this particular incantation.
But technology has evolved: now that I'm doing this with an emulator,
I know exactly what memory address I'm changing and can just poke whatever value I want into it.

So after screencapping all these in-between worlds for the Twitter thread, I just kept going...

![World 0](/static/mario-3-glitch-worlds/world0.jpg)

Ever wonder what World 0 looks like? Now you know.
I had to grab it before Mario spawned because, it being the zero realm,
he immediately underwent a Spontaneous Massive Existence Failure and the game crashed.

![A black/blue/green level](/static/mario-3-glitch-worlds/other1.jpg)
![A baby pink and baby blue level](/static/mario-3-glitch-worlds/other2.jpg)
![A black/red/green level](/static/mario-3-glitch-worlds/other3.jpg)
![A black/brown/red level](/static/mario-3-glitch-worlds/other4.jpg)

I've got 256 worlds to choose from just by altering a single byte.
They're mostly dead ends, but they're interesting,
and as a kid they made me think about what's under the hood.
How the memory is structured, how it's traversed.

![A mint-green and black level](/static/mario-3-glitch-worlds/other5.jpg)
![A glitchy pink/red/black screen](/static/mario-3-glitch-worlds/other6.jpg)
![A screen of peach and black lines](/static/mario-3-glitch-worlds/other7.jpg)
![A completely lime-green screen](/static/mario-3-glitch-worlds/other8.jpg)

Despite this early dabbling I never really got into ROM hacking.
One of the many paths I could have taken but didn't. There are so many; far more than 256.

Anyway, next time you're doing something and get an unexpected result
that makes you go "Hmm, that's weird,"
look closer and see if you can make it do something even weirder.

![A glitchy world entirely of green Frog Marios](/static/mario-3-glitch-worlds/other9.jpg)
