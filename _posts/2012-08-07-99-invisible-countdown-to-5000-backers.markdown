---
layout: post
title: 99% Invisible Countdown to 5000 Backers
date: '2012-08-07 14:49:33 -0400'
categories:
- Uncategorized
author: chrisrhoden
---
<p>1) Go to the 99% Invisible page on Kickstarter (<a href="http://www.kickstarter.com/projects/1748303376/99-invisible-season-3" target="_blank">http://www.kickstarter.com/projects/1748303376/99-invisible-season-3</a>)</p>
<p>2) Copy and paste this whole string into the address bar and press enter:</p>
<pre><textarea onclick="javascript:this.select()" style="height:50px">javascript:(function(){function a(){return parseInt($("#backers_count span").data("value"))}var b=a()-1,c=setInterval(function(){var f;if((f=a())!=b){b=f;d=5e3-b;if(d){alert(d+" to go...")}else{alert("WE DID IT!");clearInterval(c)}}},500)})()</textarea></pre>
<p>(note: Google Chrome seems to strip the "javascript:" from the beginning if you paste it into the address bar, so make sure it's there before you hit enter or else this won't work!)</p>
