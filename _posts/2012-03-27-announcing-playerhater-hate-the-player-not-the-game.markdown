---
layout: post
status: publish
published: true
title: Announcing PlayerHater. Hate the Player, not the Game.
author:
  display_name: Chris Rhoden
  login: chris
  email: chris@prx.org
  url: http://prx.org/
author_login: chris
author_email: chris@prx.org
author_url: http://prx.org/
wordpress_id: 490
wordpress_url: http://labs.prx.org/?p=490
date: '2012-03-27 09:11:33 -0500'
date_gmt: '2012-03-27 14:11:33 -0500'
categories:
- Mobile
- Android
tags: []
comments: []
---
<p>TL; DR: Happy Tuesday! I wrote a library for working with background audio in Android apps. <a href="http:&#47;&#47;prx.org">PRX<&#47;a> is letting me <a href="http:&#47;&#47;github.com&#47;PRX&#47;PlayerHater">give it away<&#47;a>. Yay Android! Yay PRX!</p>
<p>Let's talk a little history, shall we?</p>
<p>PRX makes mobile <a href="http:&#47;&#47;apps.prx.org">apps<&#47;a> for public radio programs and stations. When we were asked to make an Android app for This American Life, we found that the Android ecosystem was just a little bit fractured. We built a very large and somewhat messy chunk of code to help us work through the issues of supporting 4 different major versions of an operating system, including handling weird and widely covered bugs and device&#47;os interactions.</p>
<p>But no more! We found that by dropping support for the <strong>very very old<&#47;strong>&nbsp;versions of Android, we were able to lock into a much more stable API. There's still a whole bunch of work that needs to be done in order to start playing audio in the background properly, though (think foreground notifications, the prepare&#47;play api, and handling audio session changes). So I set to work building something completely from scratch which tackles these problems. We even thought long and hard about what should happen if your audio is interrupted with a phone call (we start back up again when you hang up if the call took less than 5 minutes. Otherwise, we kill the session.)</p>
<p>There are a whole bunch of goals for the player moving forward, including a default player widget and notification with play&#47;pause buttons where they're supported. For now, we hope that the dramatically simplified API and sensible default behavior will be useful to some people, and we can gain enough traction to make PlayerHater the de-facto way to play background audio on Android.</p>
<p>Check out <a href="http:&#47;&#47;github.com&#47;PRX&#47;PlayerHater">PlayerHater on GitHub<&#47;a>&nbsp;and let us know what you think!</p>
