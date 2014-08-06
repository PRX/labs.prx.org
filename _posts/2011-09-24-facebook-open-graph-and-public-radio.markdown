---
layout: post
status: publish
published: true
title: Facebook Open Graph and Public Radio
author:
  display_name: Andrew Kuklewicz
  login: andrew
  email: andrew@prx.org
  url: http://labs.prx.org
author_login: andrew
author_email: andrew@prx.org
author_url: http://labs.prx.org
wordpress_id: 419
wordpress_url: http://labs.prx.org/?p=419
date: '2011-09-24 12:09:44 -0500'
date_gmt: '2011-09-24 17:09:44 -0500'
categories:
- Social Media
- Big Data
tags: []
comments: []
---
<h3>Watch what you're doing<&#47;h3></p>
<p>Love it or mock it, <a href="https:&#47;&#47;developers.facebook.com&#47;docs&#47;beta&#47;" target="_blank">Facebook's on to something with the latest beta features for Open Graph<&#47;a>.  I'm not saying they are the first to realize there is more to the world than liking, as <a href="http:&#47;&#47;www.last.fm&#47;help&#47;faq?category=Scrobbling" target="_blank">scrobbling on last.fm<&#47;a> has been going on for awhile, and we even worked with Doc Searls to do <a href="http:&#47;&#47;cyber.law.harvard.edu&#47;projectvrm&#47;ListenLog" target="_blank">listen log<&#47;a>, which has the added (and hopefully inevitable) twist that you own your own data about what you hear&#47;read&#47;like&#47;hate.  Imagine that, not just giving that kind of useful, private information away to some company?  But I digress.</p>
<p>Many have seen the writing on the wall that personal analytics (i.e. my latest favorite is <a href="http:&#47;&#47;runkeeper.com&#47;" target="_blank">RunKeeper<&#47;a>) is a natural outcome (or accomplice) of the  big data and social networking trends, but Facebook is in a position to take it to 11.  Not to mention they have real motivation, with the competition at google+ looking for a differentiator or twenty.  I embrace personal analytics as providing a new perspective on one's self, and a way to know each other better.</p>
<p>In public media, during pledge drives, stations often ask listeners to imagine how many hours they listen in a year, and what value that has to them. Why imagine or guess at that when we can actually answer the question with data?</p>
<blockquote><p><a href="http:&#47;&#47;cyber.law.harvard.edu&#47;projectvrm&#47;ListenLog">"With ListenLog data, listeners can make fully informed choices about how they support streams, podcasts and on-demand sources of programming."<&#47;a><&#47;blockquote></p>
<p>...and that is every bit as true for what Facebook wants to start logging.  I don't know who's version of media logging will 'win', and as we've learned from friendster and myspace, winning is not a permanent condition, but the concept is powerful, and the potential effect on our behavior profound.  Or at least, I hope it is.  I also hope to find a way to have my cake and eat it too; own my data, but share intentionally.  Facebook may not be there yet (not extreme understatement), but it can't be ignored in the meantime.</p>
<h3>And now what?<&#47;h3></p>
<p>For listeners to public radio, what we listen to is as much a part of our lives as the TV and movies we watch, the music we hear, and the books we read.  No one is forcing anyone to log this stuff, but if someone should want to, be it for their own curiosity, what it says about them, or just amusement, we should make sharing this easy, and as complete as other commercial media.  In fact, we should do better &ndash; folks should be proud to share public media, and lead others to that experience as well.  </p>
<p>While I have focused so far on media logging, we have another action besides 'listen' that we want to encourage and shout from the pixelated rooftops: 'support'.  I want to see that early and often, whether it is supporting a broadcast, stream, program, episode, network, host or even <a href="http:&#47;&#47;spot.us&#47;" target="blank">a program that hasn't been made yet<&#47;a>.</p>
<h3>Brass tacks<&#47;h3></p>
<p>I can't write a labs blog without getting to something more technical, they'll take away my public keys.</p>
<p>Here's some ideas I think come next, and I hope others in public media think and will do the same. Hopefully we can even agree and work together (it has been known to happen):</p>
<ol>
<li>There are movie, video and TV <a href="http:&#47;&#47;developers.facebook.com&#47;docs&#47;beta&#47;opengraph&#47;objects&#47;builtin&#47;", target="_blank">action and object types already defined<a&#47;>.  I think these should be adopted by public&#47;community TV, with perhaps some embroidery over time.  As they say, "adopt and extend", not analysis seems like the way to go.<&#47;li>
<li>Audio is lacking standard definition of simple actions (e.g. listen), though for video&#47;TV <a href="http:&#47;&#47;developers.facebook.com&#47;docs&#47;beta&#47;opengraph&#47;actions&#47;builtin&#47;" target="_blank">there is a built-in 'watch' action defined<&#47;a> that is a good basis. We also need to define action types for public media (e.g. 'support' leaps to mind).<&#47;li>
<li>We also need to define audio media objects for radio programs, episodes, stories, segments, streams, and podcasts.  Probably others have started to do this as well in their facebook apps, but wouldn't be nice if at least in public media we could agree? Audio is where we need to do work; news stories (e.g. Articles) and video&#47;TV are <a href="http:&#47;&#47;developers.facebook.com&#47;docs&#47;beta&#47;opengraph&#47;objects&#47;builtin&#47;", target="_blank">pretty well covered in the built-in object types.<&#47;a><&#47;li>
<li>With these standard objects and actions, then we need to make this easy to log.  That means adding this to however users listen.  For PRX, that means integrating optional Facebook open graph listen logging to our station and program mobile <a href="http:&#47;&#47;apps.prx.org" target="_blank">apps<&#47;a> and the <a href="http:&#47;&#47;apps.prx.org&#47;our-apps&#47;public-radio-player&#47;" target="_blank">Public Radio Player<&#47;a>, and websites like <a href="http:&#47;&#47;www.prx.org" target="_blank">prx.org<&#47;a>.<&#47;li>
<li>We also need to make it easier for station websites to log this listening activity, just as they do facebook and other kinds of sharing now.  Integrating listen logging into the media players via open source drupal and wordpress plugins seems to be the easiest way to do that, since between those two you seen a majority of new work, especially with the drupal work by NPR on <a href="http:&#47;&#47;core.digitalservices.npr.org&#47;">Core Publisher<&#47;a>, PBS on <a href="http:&#47;&#47;www.pbs.org&#47;services&#47;open&#47;applications&#47;bento&#47;">bento<&#47;a>, APM using Drupal for the new Marketplace site, and PRI shows like <a href="http:&#47;&#47;ttbook.org&#47;">To The Best Of Our Knowledge<&#47;a> developing their new site on drupal with a talented team at <a href="http:&#47;&#47;wpr.org&#47;" target="_blank">Wisconsin Public Radio<&#47;a>.  And that's just to name a few.  Figure out how to integrate with these drupal distros, and you get a big bang for your buck.<&#47;li>
<li><a href="http:&#47;&#47;www.integratedmedia.org&#47;" target="_blank">IMA<&#47;a> launched <a href="http:&#47;&#47;publicmediametrics.org&#47;">Public Media Metrics<&#47;a> to combine traffic data from all public media websites.  This worked because we all have learned to share, and when we all use Google Analytics, it is comparing apples to apples.  If we can standardize on the actions and objects used in Facebook's open graph, not only is it less confusing, but there is a similar opportunity for aggregating social media metrics.<&#47;li>
<p><&#47;ol></p>
<p>Some commercial and start-up media companies already have a jump on us with integrating these facebook beta features, and that's fine, but let's not wait too long to catch up and exceed them.  Our capacity or cooperation also means we have a unique chance to combine our efforts across public media for design, implementation and measurement. We have millions of listeners and viewers; we should let them prove it.</p>
