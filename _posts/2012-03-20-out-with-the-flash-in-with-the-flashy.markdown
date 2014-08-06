---
layout: post
status: publish
published: true
title: Out with the Flash, in with the flashy
author:
  display_name: Chris Kalafarski
  login: farski
  email: chris.kalafarski@prx.org
  url: ''
author_login: farski
author_email: chris.kalafarski@prx.org
wordpress_id: 507
wordpress_url: http://labs.prx.org/?p=507
date: '2012-03-20 15:26:19 -0500'
date_gmt: '2012-03-20 20:26:19 -0500'
categories:
- Javascript
- HTML5
- Audio
tags: []
comments:
- id: 4717
  author: Lex
  author_email: alex@allclassical.org
  author_url: http://allclassical.org
  date: '2012-03-20 15:51:57 -0500'
  date_gmt: '2012-03-20 20:51:57 -0500'
  content: Great, good work.  Really looking forward to trying your jPlayer-based
    player.  Don't want to force undue pressure, but do you have an ETA?
- id: 4718
  author: chris
  author_email: chris@prx.org
  author_url: http://prx.org/
  date: '2012-03-20 15:55:44 -0500'
  date_gmt: '2012-03-20 20:55:44 -0500'
  content: |-
    Hey Lex,

    We've actually already released it. You can see the new player in action on any PRX piece page, such as this episode of <a href="http:&#47;&#47;prx.org&#47;p&#47;66615" rel="nofollow">The Moth Radio Hour<&#47;a>.

    Let us know what you think or if you have any feedback!
- id: 4719
  author: 'New Player: New Ways to Listen | Public Radio Exchange'
  author_email: ''
  author_url: http://blog.prx.org/2012/03/new-player-new-ways-to-listen/
  date: '2012-03-20 16:13:41 -0500'
  date_gmt: '2012-03-20 21:13:41 -0500'
  content: "[...] to know how we made this happen? Player developer Farski shares
    the process in Out With the Flash, In With the Flashy on PRX&#8217;s tech blog,
    PRX [...]"
- id: 4726
  author: Jacob
  author_email: jacob.phillips@csus.edu
  author_url: http://capradio.org
  date: '2012-03-21 12:25:43 -0500'
  date_gmt: '2012-03-21 17:25:43 -0500'
  content: Awesome, thanks for sharing and insights.
- id: 4760
  author: Paul
  author_email: paul.baranowski@sourcefabric.org
  author_url: http://sourcefabric.org
  date: '2012-03-30 08:38:16 -0500'
  date_gmt: '2012-03-30 13:38:16 -0500'
  content: We've had an issue with loading files larger than 15MB on chrome - if the
    player is in a separate window, then chrome will not allow you navigate to another
    page on the main window.  Did you run into that issue?  If so, how did you solve
    it?
- id: 4761
  author: chris
  author_email: chris@prx.org
  author_url: http://prx.org/
  date: '2012-03-30 09:08:14 -0500'
  date_gmt: '2012-03-30 14:08:14 -0500'
  content: |-
    Hey Paul,

    We didn't run into that issue, and when I just tested it out in Chrome with a piece with large audio files, the issue didn't show up.

    After doing some translation, the audio files are served directly from S3, which may be why we haven't hit the issue. I suspect you're running into the per-host connection limit, and the typical solution to that problem is to have a set of cnames (media1.domain.com...median.domain.com) which resolve to your asset host.
- id: 4798
  author: PRX Monthly Update | Public Radio Exchange
  author_email: ''
  author_url: http://blog.prx.org/2012/04/prx-monthly-update-3/
  date: '2012-04-10 10:54:58 -0500'
  date_gmt: '2012-04-10 15:54:58 -0500'
  content: "[...] has been blogging away about tech and innovation at PRX. Learn more
    about the projects behind our new audio player, a graphical pseudo-3d environment
    in our upcoming Android app, or PlayerHater: PRX&#8217;s way of [...]"
- id: 4854
  author: Transom &raquo; HTML5 Audio Tag Test
  author_email: ''
  author_url: http://transom.org/?p=26567
  date: '2012-04-24 09:48:21 -0500'
  date_gmt: '2012-04-24 14:48:21 -0500'
  content: "[...] Transom uses a Flash player, with HTML5 audio fallback for iOS devices
    like iPad&#47;iPhone. But it might be time to reverse that and default to HTML5
    with a Flash fallback for Firefox and older browsers. That&#8217;s the route PRX
    took in their new embeddable player. [...]"
- id: 5031
  author: Transom &raquo; Slides Get Sound
  author_email: ''
  author_url: http://transom.org/?p=27556
  date: '2012-05-25 13:54:45 -0500'
  date_gmt: '2012-05-25 18:54:45 -0500'
  content: "[...] slideshow uses the versatile jPlayer (same as in PRX&#8217;s new
    audio player). That provides the text minutes-seconds counter and the progress
    [...]"
---
<p>FlowPlayer has been PRX's audio player of choice (ok, not really a choice) for a very long time. Even without a mobile-specific version of PRX.org, we've seen a dramatic increase in the number of requests for a way to audition pieces on an iPad. It's simply a matter of people's usage habits changing. While an HTML5 audio player has been on our radar since browsers began supporting the technology, demand finally reached a point where the transition became necessary.</p>
<p>There are several fairly robust open source projects out there to help with the switch. MediaElement.js and jPlayer were the two main contenders, with jPlayer winning out do to internal familiarity. Both work by having a Flash fallback option when the native HTML5&#47;JavaScript handling in a given browser can support the file. jPlayer allows you to define multiple source files to help with browser coverage. Currently our catalog is mp3, which IE8 (and lower), Firefox, and Opera do not support natively. We would need to re-encode our entire catalog to ogg or WebM to provide native support there, which may happen at some point, but for now relying on the Flash fallback in jPlayer is a perfectly acceptable solution.</p>
<p>One major advantage of having a single player UI and having it built in HTML that will be consistent across all platforms and browsers regardless of what's handling the audio is&nbsp;extensibility. Whereas previously we had slightly different Flash widgets for the main player, the popup window player, and the embeddable player, we now need to only maintain a single HTML file. The player is fluid, so it will resize to fit whatever space it is given. Adding additional features or elements to the player down the road will be an extremely simple process.</p>
<p>The move hasn't been without issue. jPlayer has a few shortcomings that we've had to work around. The most significant being an issue with the way in which the Flash player reports file duration when the file is loading. It often fails to accurately estimate the total duration before the entire file loads. This can cause some unexpected behavior with large files. It was fairly trivial to work around, but it shows that supporting two vastly different technologies at the same time is not an exact science. There are a handful of finicky UI limitations with jPlayer as well. Want a vertical volume bar? Get ready to fork.</p>
<p>Performance as a whole, though, has been good. Even on some of our playlist pages which load up dozens of individual players, results from our testing has on par with or better than FlowPlayer.</p>
<p>We're very excited about the prospects of having this new player out in the wild. Aside from the obvious benefits of iOS support, and the boost in street cred for having using more HTML5, there are likely some&nbsp;advantages&nbsp;we haven't even considered yet. PRX hopes to help drive innovation in this space, so expect to see any improvements we make flow back into the community.</p>
<p>Old vs New:</p>
<p><img src="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2012&#47;03&#47;Screen-Shot-2012-03-02-at-4.29.28-PM.png" alt="" width="560" &#47;><br />
<img src="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2012&#47;03&#47;Screen-Shot-2012-03-02-at-4.29.42-PM.png" alt="" width="560" &#47;></p>
<p><strong>Demo<&#47;strong></p>
<p><script id='prx-p74200-embed' src='http:&#47;&#47;www.prx.org&#47;p&#47;74200&#47;embed.js?size=full'><&#47;script></p>
