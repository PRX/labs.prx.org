---
layout: post
title: Interactive mobile app wireframes with OmniGraffle, PDF & GoodReader
date: '2010-11-12 20:11:19 -0500'
categories:
- Mobile
- Wireframes
- OmniGraffle
author: driki
permalink: /2010/11/12/interactive-mobile-apps-wireframes-with-omnigraffle-pdf-goodreader
---
<p>I'm late to the game in <a href="http://www.bioneural.net/2007/06/22/hyperlinked-pdfs-made-with-omnigraffle/">figuring out that the Action property existed in OmniGraffle</a> but I did find what I think is a pretty cool way to create super quick, easy to build, interactive mobile app demos to test out concepts. I've been working quite a bit on the user experience side for our iPhone/iPad projects and I mentioned the <a href="http://labs.prx.org/2010/10/19/useful-omnigraffle-stencils-and-templates-for-iphone-and-ipad/">awesome OmniGraffle iPhone and iPad stencils</a> that I've been using in a previous post. When thinking about ways to test out some ideas we've been floating for the This American Life iPad app that we've been designing, I discovered the "Action" property for objects in OmniGraffle. This property gives us great power.</p>
<p>You'll want to create multiple canvases in your demo document to really see the benefit.</p>
<h2>Mini Tutorial</h2>
<p>There isn't much to it once you figure out the options. Create a new Document in OmniGraffle and draw an object. After selecting the object, open the inspector (Shift + Command + I). Open the properties dialog (Command + 2). The object will default to Geometry, which is the only view that I ever cared to check out until I stumbled on the Action dialog. Choose the Action view (third tab over for OmniGraffle Pro 5.2.3).</p>
<p>You should see something similar to this:</p>
<p>[caption id="attachment_137" align="alignnone" width="242" caption="OmniGraffle Action Property dialog"]<a rel="attachment wp-att-137" href="http://labs.prx.org/2010/11/12/interactive-mobile-apps-wireframes-with-omnigraffle-pdf-goodreader/action-property/"><img class="size-full wp-image-137" title="OmniGraffle Action Property dialog" src="http://labs.prx.org/wp-content/uploads/2010/11/Action-Property.png" alt="OmniGraffle Action Property dialog" width="242" height="216" /></a>[/caption]</p>
<p>Note the Jumps Elsewhere option. When you have multiple canvases you can direct the users click action to another canvas, which can simulate your app functionality. In my demo here I've wired up the Home canvas New object/grouping to point to the News canvas.</p>
<p>[caption id="attachment_138" align="alignnone" width="201" caption="Interactive PDF home screen"]<a rel="attachment wp-att-138" href="http://labs.prx.org/2010/11/12/interactive-mobile-apps-wireframes-with-omnigraffle-pdf-goodreader/home-screen/"><img class="size-medium wp-image-138" title="Interactive PDF home screen" src="http://labs.prx.org/wp-content/uploads/2010/11/home-screen-201x300.png" alt="Interactive PDF home screen" width="201" height="300" /></a>[/caption]</p>
<h2>Export as  PDF</h2>
<p>Now that you have your actions wired up in OmniGraffle you can export the interactive wireframe as a PDF and share with the world. In OmniGraffle select (Option + Command + E) and choose the Format as PEF vector image and make sure the Export Area is Entire Document.</p>
<h2>Running the demo on a device</h2>
<p><span style="font-weight: normal; font-size: 13px;">After exporting the PDF I use the really nice <a href="http://www.goodiware.com/goodreader.html">Good Reader iPhone/iPad app</a> to get the PDF on a device for demo purposes. It's a paid app but it makes getting PDFs on the device super easy, supports the hyperlink/action functions and runs full screen without navigation chrome.</span></p>
<h2><span style="font-weight: normal; font-size: 13px;"> </span>Downside</h2>
<p><span style="font-weight: normal; font-size: 13px;"> </span><span style="font-weight: normal; font-size: 13px;">Lack of gesture support. Users have become accustomed to interacting with the iPhone and iPad using the swipe and pinch gestures. The PDF obviously doesn't support that so there is a little setup when placing the demo in a users hands.</span></p>
<h2>Resources</h2>
<li>Sample PDF: <a href="http://labs.prx.org/wp-content/uploads/2010/11/interactive-pdf.pdf">interactive-pdf.pdf</a></li>
<li>Sample OmniGraffle file: <a href="http://labs.prx.org/wp-content/uploads/2010/11/interactive-pdf.zip">interactive-pdf.zi</a>p</li>
