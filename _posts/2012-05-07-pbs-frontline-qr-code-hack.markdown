---
layout: post
title: PBS Frontline QR Code Hack
date: '2012-05-07 16:29:35 -0400'
categories:
- Mobile
- Javascript
- Node.js
author: chrisrhoden
permalink: /2012/05/07/pbs-frontline-qr-code-hack
---
<p>Hey everyone! I recently built a system which was designed to turn your phone into a sort of smart remote control which works over the internet. This is the first part of a two-part post about that system, where I discuss what I built. In a future post, I will discuss how everything was put together from a much more technical side.</p>
<p>A couple of weeks ago, I participated in a hackfest which was thrown by the folks at Frontline. The goal was to spend a few hours putting together a glimpse of the future of documentary storytelling. Four projects came out of the day, but I would like to talk about the project I worked on.</p>
<p>As far as I could tell, I was the only developer resource on the team I was on, which resulted in a bit more focus on the technical aspects of things than is typical. As such, I can tell you that the documentary I worked with was:</p>
<ol>
<li>Already slated to receive some level of interactive work.</li>
<li>About the abuses of our economic system by Wall Street.</li>
<li>A Frontline documentary.</li>
</ol>
<p>There's really not much else I could say. I did end up watching the trailer a bunch of times, but even that started blurring, as my primary goal was to get something that sort of worked ready for demo.</p>
<p>The point of all of this context is that it seems very clear to me that this could be used in a variety of situations - not just those where a documentary is concerned. Anyway, on to the demo.</p>
<p>The first interaction you will have with the system is a QR code, which you are invited to scan with your phone. This QR code points at a mobile-optimized website.</p>
<p><a href="http://labs.prx.org/wp-content/uploads/2012/04/Screen-Shot-2012-04-27-at-1.00.59-PM.png"><img class="size-medium wp-image-554 aligncenter" title="The QR Code" src="http://labs.prx.org/wp-content/uploads/2012/04/Screen-Shot-2012-04-27-at-1.00.59-PM-300x230.png" alt="" width="300" height="230" /></a></p>
<p style="text-align: left;">When the website loads in your mobile browser, the QR code disappears and a video begins playing on your computer. The video on the computer screen is deliberately uncluttered, as the point is to allow you to watch the video in a lean-back manner, with no need to interact with your computer.</p>
<p><a href="http://labs.prx.org/2012/05/07/pbs-frontline-qr-code-hack/device-2012-04-27-130558ggg/" rel="attachment wp-att-556"><img class="size-medium wp-image-556 aligncenter" style="margin-left: 10px;" title="device-2012-04-27-130558ggg" src="http://labs.prx.org/wp-content/uploads/2012/04/device-2012-04-27-130558ggg-200x300.png" alt="" width="200" height="300" /></a></p>
<p style="text-align: left;">In your mobile browser, you are given a big green button which also acts as an indicator for your progress through the film. Pressing the button causes a bookmark to be saved of where you are in the film, including context for the segment you were watching and, in some cases, additional content and research. During our demo, one segment of the film, when bookmarked, provided access to watch additional raw footage.</p>
<p><a href="http://labs.prx.org/2012/05/07/pbs-frontline-qr-code-hack/screen-shot-2012-04-27-at-1-05-06-pm/" rel="attachment wp-att-557"><img class="size-medium wp-image-557 aligncenter" title="Screen Shot 2012-04-27 at 1.05.06 PM" src="http://labs.prx.org/wp-content/uploads/2012/04/Screen-Shot-2012-04-27-at-1.05.06-PM-300x230.png" alt="" width="300" height="230" /></a></p>
<p style="text-align: left;">When the bookmark button is pressed, a small indication is shown on the main screen that the bookmark has been saved.</p>
<p style="text-align: left;">The goal for the project was to provide a way to augment a viewing experience while in no way compromising the narrative created by the filmmaker. There were a number of additional features which I would have loved to have implemented, such as controls for the onscreen content, and a dashboard showing your bookmarks on the main screen when the video has finished. That having been said, I believe that the goals for the project were shown off well, and am proud of what we walked out with.</p>
<p style="text-align: left;">Next time, I'll go into the actual guts of how this system worked, and maybe some other uses for the technology.</p>
