---
layout: post
status: publish
published: true
title: 99% Invisible Countdown to 5000 Backers
author:
  display_name: Chris Rhoden
  login: chris
  email: chris@prx.org
  url: http://prx.org/
author_login: chris
author_email: chris@prx.org
author_url: http://prx.org/
wordpress_id: 616
wordpress_url: http://labs.prx.org/?p=616
date: '2012-08-07 14:49:33 -0500'
date_gmt: '2012-08-07 18:49:33 -0500'
categories:
- Uncategorized
tags: []
comments: []
---
<p>1) Go to the 99% Invisible page on Kickstarter (<a href="http:&#47;&#47;www.kickstarter.com&#47;projects&#47;1748303376&#47;99-invisible-season-3" target="_blank">http:&#47;&#47;www.kickstarter.com&#47;projects&#47;1748303376&#47;99-invisible-season-3<&#47;a>)</p>
<p>2) Copy and paste this whole string into the address bar and press enter:</p>
<pre><textarea onclick="javascript:this.select()" style="height:50px">javascript:(function(){function a(){return parseInt($("#backers_count span").data("value"))}var b=a()-1,c=setInterval(function(){var f;if((f=a())!=b){b=f;d=5e3-b;if(d){alert(d+" to go...")}else{alert("WE DID IT!");clearInterval(c)}}},500)})()<&#47;textarea><&#47;pre></p>
<p>(note: Google Chrome seems to strip the "javascript:" from the beginning if you paste it into the address bar, so make sure it's there before you hit enter or else this won't work!)</p>
