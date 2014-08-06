---
layout: post
status: publish
published: true
title: 'Exploring The Depths Of KCRW Music Mine: Part One'
author:
  display_name: Daniel Gross
  login: daniel
  email: daniel@prx.org
  url: ''
author_login: daniel
author_email: daniel@prx.org
wordpress_id: 394
wordpress_url: http://labs.prx.org/?p=394
date: '2011-09-19 16:28:47 -0500'
date_gmt: '2011-09-19 21:28:47 -0500'
categories:
- Mobile
- iPad
- KCRW
tags: []
comments: []
---
<p><em><a href="http:&#47;&#47;www.kcrw.com&#47;about&#47;musicmine-for-ipad">KCRW Music Mine<&#47;a> launched recently to rave reviews. The free iPad app is the result of a collaboration between <a href="http:&#47;&#47;www.kcrw.com">KCRW<&#47;a>,&nbsp;<a href="http:&#47;&#47;www.roundarch.com">RoundArch<&#47;a> and&nbsp;<a href="http:&#47;&#47;www.prx.org">PRX<&#47;a>, which led the project and development efforts. Music Mine pushes the limits of the tablet platform to create a truly unique music discovery experience. Daniel Gross interviews <a href="http:&#47;&#47;www.prx.org&#47;users&#47;30890-mattmac">Matt MacDonald, PRX&rsquo;s Director of Project Management<&#47;a>, about the app.<&#47;em></p>
<h3>What can Music Mine do?<&#47;h3><br />
The app is a iPad music player that opens up to a grid of 100 songs from artists that played on KCRW shows in the last week. What the app does is highlight these tracks that have been hand-picked by a KCRW DJ who wanted you to hear it. You might find odd pairings, maybe TV on the Radio right next to the newest Jeff Bridges country song. What they have in common is that these are all great songs that were picked by humans with taste and a point of view, not selected by an algorithm. The app lets you explore each of these artists in greater depth and we use software to add supporting songs, videos, photos, bios and blog posts.</p>
<h3>How did it all get started?<&#47;h3><br />
We started talking with KCRW in the summer of 2010 about building an iPad app. PRX has been doing iOS development since late 2008 with apps including the <a href="http:&#47;&#47;apps.prx.org&#47;our-apps&#47;public-radio-player&#47;">Public Radio Player for iPhone<&#47;a> and <a href="http:&#47;&#47;apps.prx.org&#47;our-apps&#47;this-american-life&#47;">This American Life app for iPhone, iPad and Android<&#47;a>. So we knew we could make this project ambitious.</p>
<p>As a public radio station, KCRW produces a ton of content. But we wanted to build an app tightly focused on their music. Anil Dewan at KCRW helped us understand their online music identity. But given the existing competition facing KCRW and listening platforms, we were asking: how the heck do we stand out and differentiate ourselves?</p>
<h3>And? What makes Music Mine so different from other apps?<&#47;h3><br />
The biggest difference is Music Mine&rsquo;s human touch. Other music apps like Pandora, Discover, Spotify or Last.fm are designed to provide access to every song and every artist in their huge catalogs. When you&rsquo;re listening to Wilco, say, those apps use an algorithm to automatically recommend the next 5 or 6 'related' artists. KCRW has a huge and diverse catalog but we wanted to amplify and highlight the work that the DJs do by narrowing what you should be listening to.</p>
<p>The user interactions in the app have an attitude and a point of view like the KCRW DJs. One goal for us was to encourage, musical exploration and delight so some of our interaction decisions basically force you to try out music that you might not be familiar with. We made sure to encourage that by not adding features like search or sorting and filtering tools. We also could have directly presented the underlying ordered list that backs the grid layout but we felt that doing so would have made you less likely to try out new songs and that you might only search and tap those you know.</p>
<h3>So you want an app with people behind it &ndash; but you still want to take advantage of technology, right? What do you need to do that?<&#47;h3><br />
Yep, we definitely want to use technology to help us out here. Our office is in Harvard Square, and the local tech scene here is pretty amazing. One of the companies we&rsquo;d wanted to work with for a long time was <a href="http:&#47;&#47;the.echonest.com">The Echo Nest<&#47;a> over in Somerville. When we started dreaming up the Music Mine idea we went straight to them.</p>
<p><a href="http:&#47;&#47;developer.echonest.com&#47;">The Echo Nest provides APIs<&#47;a> that allow us to request a ton of information about artists and songs, found audio, video, relevant blog posts, bios and photos. We knew that merging the KCRW playlists with Echo Nest data sources would give us the ability to create a unique window into the KCRW music universe. Rebecca Nesson here at PRX led the effort to merge the data sources from KCRW and Echo Nest. While each of the songs available in the grid is initially picked by a human, PRX wrote software to help narrow down the thousands of tracks that could be available to the 100 available on the grid.</p>
<h3>How did the project evolve as you built and rebuilt the product?<&#47;h3><br />
A big question early in the project was: should the primary experience for how people listen in the app be focused on the long, multi-hour DJ sets, or center on playback of individual tracks? PRX and <a href="http:&#47;&#47;www.roundarch.com">RoundArch<&#47;a> interviewed people specifically about what they might want in a music discovery app from KCRW and after hearing from them we decided to focus the experience on track-by-track selection. That decision proved challenging and mid-way through the project there was a point where we really had to consider ditching the track-by-track access and move back to a DJ set focused app.</p>
<p>The sub-views in the app like the artist photo, song, video, bio, blog pages came together pretty quickly and didn&rsquo;t change much over the project but the home view, the grid, was definitely an area where we iterated on ideas for a long time. Yeah -- that took a really long time. We might have had 8 or 10 significant tweaks to the layout and presentation. But I think all the time we spent iterating on the ideas really paid off in the execution.</p>
<p>[caption id="" align="aligncenter" width="300" caption="Alternate DJ set focused home view"]<a href="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2011&#47;09&#47;music-mine-grid-03.png"><img class="size-medium wp-image-397  " title="music-mine-grid-03" src="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2011&#47;09&#47;music-mine-grid-03-300x225.png" alt="" width="300" height="225" &#47;><&#47;a><&#47;dt><&#47;dl></p>
<div class="mceTemp mceIEcenter">
<dl id="attachment_399" class="wp-caption aligncenter" style="width: 310px;">
<dt class="wp-caption-dt"><a href="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2011&#47;09&#47;music-mine-grid-01.png"><img class="size-medium wp-image-399" title="music-mine-grid-01" src="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2011&#47;09&#47;music-mine-grid-01-300x225.png" alt="" width="300" height="225" &#47;><&#47;a>[&#47;caption]</p>
<dl id="attachment_397" class="wp-caption aligncenter" style="width: 310px;">
<dt class="wp-caption-dt"><&#47;dt>
<dd class="wp-caption-dd">Early DJ focused home view<&#47;dd><&#47;dl><&#47;div></p>
<div>
<h3 id="internal-source-marker_0.506858385168016" dir="ltr"><&#47;h3><br />
[caption id="attachment_402" align="aligncenter" width="300" caption="Initial grid comp"]<a href="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2011&#47;09&#47;music-mine-grid-00.png"><img class="size-medium wp-image-402" title="music-mine-grid-00" src="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2011&#47;09&#47;music-mine-grid-00-300x225.png" alt="" width="300" height="225" &#47;><&#47;a>[&#47;caption]</p>
<p>[caption id="attachment_403" align="aligncenter" width="300" caption="Final grid design."]<a href="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2011&#47;09&#47;music-mine-grid-final.jpg"><img class="size-medium wp-image-403" title="music-mine-grid-final" src="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2011&#47;09&#47;music-mine-grid-final-300x225.jpg" alt="" width="300" height="225" &#47;><&#47;a>[&#47;caption]</p>
<h3 dir="ltr"><&#47;h3></p>
<h3 dir="ltr">How do you feel about it? Is there anything you'd improve or add?<&#47;h3><br />
Well...no. Actually, I'm really happy with it. I just re-read the original product vision and I think we've really held true to that over the last ten or so months.</p>
<blockquote>
<p dir="ltr"><em>The KCRW iPad Experience project will focus on creating an iPad experience that quickly engages target users by leveraging KCRW&rsquo;s unique style, taste and hand picked music. In addition, tight conceptual focus and appealing interaction models will aid in driving long-term user engagement.<&#47;em><&#47;p><br />
<&#47;blockquote><br />
People that we interviewed about what they might want in an music discovery app said they wanted us to make good music important to them, help them find new good music and improve their awareness. We've done that. People wanted us to connect them with great new artists, and help them learn more about music and artists they're already familiar with. I think we've done that too.</p>
<h3 dir="ltr">What's next from the PRX team?<&#47;h3><br />
I&rsquo;m really excited about an iPhone project that we&rsquo;re working on with a very popular public radio show. I feel like we&rsquo;re developing a unique way to help people interact and connect with the show. We&rsquo;re pushing the device&rsquo;s capabilities, coming up with new interactions that can surprise and delight people.</p>
<h3 dir="ltr">Any last thoughts?<&#47;h3><br />
People talk about software as engineering, and it's partially that, but it's also a craft. This kind of work is like building a beautiful piece of furniture. When it's done poorly, you end up with a cheap nothing that you throw away. But when it's done well, you&rsquo;ll never see all the work that went into it. Sometimes that means a lack of appreciation for the thought and care that was put in.</p>
<p><a href="http:&#47;&#47;doormouse.org&#47;">Devin Chalmers<&#47;a>, <a href="http:&#47;&#47;www.eecs.harvard.edu&#47;~nesson&#47;">Rebecca Nesson<&#47;a>&nbsp;and <a href="http:&#47;&#47;www.prx.org&#47;users&#47;25617-akuklewicz">Andrew Kuklewicz<&#47;a>&nbsp;are top-notch developers, maybe the best people I've ever worked with. But even with the best people working together, it requires time and freedom to explore and do it right. We could have finished a long time ago if we'd done it poorly. Instead, we came up with something that we&rsquo;re proud of, KCRW is happy with, and it seems so are the people using it.</p>
<h3>Part Two<&#47;h3><br />
Coming up: Rebecca Nesson and Devin Chalmers will be digging into other more technical aspects of the KCRW Music Mine app,&nbsp;perspective transformations on scroll views, knob-twiddly stuff to tweak behavior and how we had to figure out layouts of a 4x6 grid in both portrait and landscape modes.</p>
<p><&#47;div></p>
