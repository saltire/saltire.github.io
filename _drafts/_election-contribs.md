---
title: Election contrib scraper
summary: A data scraper for financial contributions on the Elections Canada website.
tags: code, coding, computer, languages, learning, programming, development
github: election-contribs
---

In 2014 I attended [Random Hacks of Kindness](http://www.rhoktoronto.com),
a hackathon for projects aimed at the general betterment of society.
There were quite a few interesting pitches, but the one that caught my attention
was from a research manager at [Samara Canada](http://www.samaracanada.com),
who was looking for a way to increase the transparency of campaign contributions
to Canada's political parties.

Political donations in Canada are (mostly) public information.
[Elections Canada](http://www.elections.ca/) maintains a list of all cash contributions
over a certain amount, including who contributed, where they live, how much they gave,
when, and to whom.
The list was on the site, but as anyone who has been on a government site might imagine,
it wasn't the easiest thing to access, particularly in any kind of bulk form.

We tried a few tricks, but in the end it came down to brute force:
I built a scraper that posted manually to their search form, and parsed the HTML of the results.
This would run for hours at a time
(surprisingly, the site didn't seem to mind us hammering it with thousands of requests)
and give us a CSV file full of records of every time someone sent money
to a federal political party in Canada.

As a proof of concept we also created a visualization of all this data.
I created another script to break down all the contributions by postal code,
then drew coloured circles on a map of Canada to show where each party's money came from.
This had its own challenges
(for instance, we had to find data mapping postal codes to geographic coordinates),
but revealed some interesting patterns.
It also demonstrated a few notorious loopholes, such as the fact that until 2012,
contributors could ignore the usual $1200 limit by willing money through their estate.
There were a few of these outliers that, normally buried in the database, showed up pretty clearly
once we plotted them on the map!

After I handed this over to Samara, I got to see them run with it.
They enlisted the help of Data For Good, who put about a dozen people on cleaning up the data,
so the analysts could process it in a more scientific way. Fascinating to watch.

*Languages:* Python, Javascript
