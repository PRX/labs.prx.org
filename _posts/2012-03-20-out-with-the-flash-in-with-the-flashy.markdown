---
layout: post
title: Out with the Flash, in with the flashy
date: '2012-03-20 15:26:19 -0400'
categories:
- Javascript
- HTML5
- Audio
author: farski
---
<p>FlowPlayer has been PRX's audio player of choice (ok, not really a choice) for a very long time. Even without a mobile-specific version of PRX.org, we've seen a dramatic increase in the number of requests for a way to audition pieces on an iPad. It's simply a matter of people's usage habits changing. While an HTML5 audio player has been on our radar since browsers began supporting the technology, demand finally reached a point where the transition became necessary.</p>
<p>There are several fairly robust open source projects out there to help with the switch. MediaElement.js and jPlayer were the two main contenders, with jPlayer winning out do to internal familiarity. Both work by having a Flash fallback option when the native HTML5/JavaScript handling in a given browser can support the file. jPlayer allows you to define multiple source files to help with browser coverage. Currently our catalog is mp3, which IE8 (and lower), Firefox, and Opera do not support natively. We would need to re-encode our entire catalog to ogg or WebM to provide native support there, which may happen at some point, but for now relying on the Flash fallback in jPlayer is a perfectly acceptable solution.</p>
<p>One major advantage of having a single player UI and having it built in HTML that will be consistent across all platforms and browsers regardless of what's handling the audio is extensibility. Whereas previously we had slightly different Flash widgets for the main player, the popup window player, and the embeddable player, we now need to only maintain a single HTML file. The player is fluid, so it will resize to fit whatever space it is given. Adding additional features or elements to the player down the road will be an extremely simple process.</p>
<p>The move hasn't been without issue. jPlayer has a few shortcomings that we've had to work around. The most significant being an issue with the way in which the Flash player reports file duration when the file is loading. It often fails to accurately estimate the total duration before the entire file loads. This can cause some unexpected behavior with large files. It was fairly trivial to work around, but it shows that supporting two vastly different technologies at the same time is not an exact science. There are a handful of finicky UI limitations with jPlayer as well. Want a vertical volume bar? Get ready to fork.</p>
<p>Performance as a whole, though, has been good. Even on some of our playlist pages which load up dozens of individual players, results from our testing has on par with or better than FlowPlayer.</p>
<p>We're very excited about the prospects of having this new player out in the wild. Aside from the obvious benefits of iOS support, and the boost in street cred for having using more HTML5, there are likely some advantages we haven't even considered yet. PRX hopes to help drive innovation in this space, so expect to see any improvements we make flow back into the community.</p>
<p>Old vs New:</p>
<p><img src="http://labs.prx.org/wp-content/uploads/2012/03/Screen-Shot-2012-03-02-at-4.29.28-PM.png" alt="" width="560" /><br />
<img src="http://labs.prx.org/wp-content/uploads/2012/03/Screen-Shot-2012-03-02-at-4.29.42-PM.png" alt="" width="560" /></p>
<p><strong>Demo</strong></p>
<p><script id='prx-p74200-embed' src='http://www.prx.org/p/74200/embed.js?size=full'></script></p>
