---
layout: post
status: publish
published: true
title: Interactive mobile app wireframes with OmniGraffle, PDF & GoodReader
author:
  display_name: Matt MacDonald
  login: matt
  email: matt@prx.org
  url: ''
author_login: matt
author_email: matt@prx.org
wordpress_id: 136
wordpress_url: http://labs.prx.org/?p=136
date: '2010-11-12 20:11:19 -0600'
date_gmt: '2010-11-12 20:11:19 -0600'
categories:
- Mobile
- Wireframes
- OmniGraffle
tags:
- OmniGraffle
- UI&#47;UX
- Mobile
- Wireframes
comments:
- id: 1500
  author: Jingya Yu
  author_email: cacatherion@hotmail.com
  author_url: http://www.yujingya.com
  date: '2011-05-11 10:18:26 -0500'
  date_gmt: '2011-05-11 15:18:26 -0500'
  content: Very helpful! Thanks!
- id: 5429
  author: Ruba Hatem
  author_email: rh@ruba.net
  author_url: ''
  date: '2012-09-19 12:51:06 -0500'
  date_gmt: '2012-09-19 16:51:06 -0500'
  content: Very helpful! Thanks for the tip!
---
<p>I'm late to the game in&nbsp;<a href="http:&#47;&#47;www.bioneural.net&#47;2007&#47;06&#47;22&#47;hyperlinked-pdfs-made-with-omnigraffle&#47;">figuring out that the Action property existed in OmniGraffle<&#47;a> but I did find what I think is a pretty cool way to create super quick, easy to build, interactive mobile app demos to test out concepts.&nbsp;I've been working quite a bit on the user experience side for our iPhone&#47;iPad projects and I mentioned the <a href="http:&#47;&#47;labs.prx.org&#47;2010&#47;10&#47;19&#47;useful-omnigraffle-stencils-and-templates-for-iphone-and-ipad&#47;">awesome OmniGraffle iPhone and iPad stencils<&#47;a> that I've been using in a previous post. When thinking about ways to test out some ideas we've been floating for the This American Life iPad app that we've been designing, I discovered the "Action" property for objects in OmniGraffle. This property gives us great power.</p>
<p>You'll want to create multiple canvases in your demo document to really see the benefit.</p>
<h2>Mini Tutorial<&#47;h2><br />
There isn't much to it once you figure out the options. Create a new Document in OmniGraffle and draw an object. After selecting the object, open the inspector (Shift + Command +&nbsp;I). Open the properties dialog (Command + 2). The object will default to Geometry, which is the only view that I ever cared to check out until I stumbled on the Action dialog. Choose the Action view (third tab over for OmniGraffle Pro 5.2.3).</p>
<p>You should see something similar to this:</p>
<p>[caption id="attachment_137" align="alignnone" width="242" caption="OmniGraffle Action Property dialog"]<a rel="attachment wp-att-137" href="http:&#47;&#47;labs.prx.org&#47;2010&#47;11&#47;12&#47;interactive-mobile-apps-wireframes-with-omnigraffle-pdf-goodreader&#47;action-property&#47;"><img class="size-full wp-image-137" title="OmniGraffle Action Property dialog" src="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2010&#47;11&#47;Action-Property.png" alt="OmniGraffle Action Property dialog" width="242" height="216" &#47;><&#47;a>[&#47;caption]</p>
<p>Note the Jumps Elsewhere option. When you have multiple canvases you can direct the users click action to another canvas, which can simulate your app functionality. In my demo here I've wired up the Home canvas New object&#47;grouping to point to the News canvas.</p>
<p>[caption id="attachment_138" align="alignnone" width="201" caption="Interactive PDF home screen"]<a rel="attachment wp-att-138" href="http:&#47;&#47;labs.prx.org&#47;2010&#47;11&#47;12&#47;interactive-mobile-apps-wireframes-with-omnigraffle-pdf-goodreader&#47;home-screen&#47;"><img class="size-medium wp-image-138" title="Interactive PDF home screen" src="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2010&#47;11&#47;home-screen-201x300.png" alt="Interactive PDF home screen" width="201" height="300" &#47;><&#47;a>[&#47;caption]</p>
<h2>Export as &nbsp;PDF<&#47;h2><br />
Now that you have your actions wired up in OmniGraffle you can export the interactive wireframe as a PDF and share with the world. In OmniGraffle select (Option + Command + E) and choose the Format as PEF vector image and make sure the Export Area is Entire Document.</p>
<h2>Running the demo on a device<&#47;h2><br />
<span style="font-weight: normal; font-size: 13px;">After exporting the PDF I use the really nice <a href="http:&#47;&#47;www.goodiware.com&#47;goodreader.html">Good Reader iPhone&#47;iPad app<&#47;a> to get the PDF on a device for demo purposes. It's a paid app but it makes getting PDFs on the device super easy, supports the hyperlink&#47;action functions and runs full screen without navigation chrome.<&#47;span></p>
<h2><span style="font-weight: normal; font-size: 13px;"> <&#47;span>Downside<&#47;h2><br />
<span style="font-weight: normal; font-size: 13px;"> <&#47;span><span style="font-weight: normal; font-size: 13px;">Lack of gesture support. Users have become accustomed to interacting with the iPhone and iPad using the swipe and pinch gestures. The PDF obviously doesn't support that so there is a little setup when placing the demo in a users hands.<&#47;span></p>
<h2>Resources<&#47;h2></p>
<li>Sample PDF: <a href="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2010&#47;11&#47;interactive-pdf.pdf">interactive-pdf.pdf<&#47;a><&#47;li>
<li>Sample OmniGraffle file: <a href="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2010&#47;11&#47;interactive-pdf.zip">interactive-pdf.zi<&#47;a>p<&#47;li><br />
