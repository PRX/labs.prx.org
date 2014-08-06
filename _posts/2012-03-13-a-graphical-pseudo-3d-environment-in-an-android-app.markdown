---
layout: post
status: publish
published: true
title: A graphical pseudo-3D environment in an Android app
author:
  display_name: Rebecca Nesson
  login: rebecca
  email: rebecca@prx.org
  url: ''
author_login: rebecca
author_email: rebecca@prx.org
wordpress_id: 493
wordpress_url: http://labs.prx.org/?p=493
date: '2012-03-13 11:00:42 -0500'
date_gmt: '2012-03-13 16:00:42 -0500'
categories:
- Mobile
- iPhone
- Android
tags: []
comments:
- id: 4668
  author: Behind the Scenes of an Android App | Public Radio Exchange
  author_email: ''
  author_url: http://blog.prx.org/2012/03/behind-the-scenes-of-an-android-app/
  date: '2012-03-13 14:38:00 -0500'
  date_gmt: '2012-03-13 19:38:00 -0500'
  content: "[...] and how they come to be, you&#8217;ll want to check out PRX Lead
    Developer Rebecca Nesson&#8217;s post over at PRX Labs on the work she&#8217;s
    doing to create a beautiful, pseudo 3D environment in an Android [...]"
- id: 4672
  author: PRX Gets Tan | Public Radio Exchange
  author_email: ''
  author_url: http://blog.prx.org/2012/03/prx-gets-tan/
  date: '2012-03-14 09:09:31 -0500'
  date_gmt: '2012-03-14 14:09:31 -0500'
  content: "[...] Did you know we have a blog on tech and innovation at PRX? Check
    out the latest post on creating a beautiful, pseudo 3D environment in an Android
    app. [...]"
---
<p>At PRX we're lucky to get to work with creative, fun-loving clients who want their apps to be more interesting to play with than the average app made from iOS standard components or Android widgets. &nbsp;In one app we're currently developing, we're creating an engaging and fun pop-up book style environment in which the user encounters the program content as she navigates through an imaginary world. &nbsp;It's beautiful and fun and a real programming challenge. &nbsp;On the iOS side, Devin created the 3D-ish environment using native iOS layers positioned in 3D space. &nbsp;It's my job to create the same effect in the Android version of the app. &nbsp;The native views in Android don't support this kind of positioning in z space and there isn't a build in "camera" <a href="http:&#47;&#47;watchingapple.com&#47;2008&#47;04&#47;core-animation-3d-perspective&#47;">that can be transformed to give the illusion of depth<&#47;a>. &nbsp;OpenGL could provide the 3D environment, but it would be a steep learning curve for me and it would make it harder to use the usual Android widgets and activities for performing the basic functions of the app like presenting lists of content and playing audio. &nbsp;Enter <a href="http:&#47;&#47;www.andengine.org&#47;">AndEngine<&#47;a>.</p>
<p>AndEngine is a free 2D game engine for Android. &nbsp;It allows the creation of a game activity that I could combine with other Android activities to present content. &nbsp;(I use <a href="http:&#47;&#47;developer.android.com&#47;guide&#47;topics&#47;fundamentals&#47;fragments.html">Android Fragments<&#47;a>&nbsp;via the <a href="http:&#47;&#47;developer.android.com&#47;reference&#47;android&#47;support&#47;v4&#47;app&#47;Fragment.html">Android Support V4 library<&#47;a> to incorporate traditional Android views into the game environment.) &nbsp;Although AndEngine is intended for 2D games, a <a href="http:&#47;&#47;www.andengine.org&#47;forums&#47;tutorials&#47;3d-perspective-tutorial-t1790.html">forum thread<&#47;a> demonstrated how to do the same perspective trick to the camera we're doing on the iOS side:</p>
<p>[java] private void setFrustum(GL10 pGL)<br />
 {<br />
    &#47;&#47; set field of view to 60 degrees<br />
   float fov_degrees = 60;<br />
   float fov_radians = fov_degrees &#47; 180 * (float)Math.PI;</p>
<p>   &#47;&#47; set aspect ratio and distance of the screen<br />
   float aspect = this.getWidth() &#47; this.getHeight();<br />
   float camZ = this.getHeight()&#47;2 &#47; (float)Math.tan(fov_radians&#47;2);</p>
<p>   &#47;&#47; set projection<br />
   GLHelper.setProjectionIdentityMatrix(pGL);<br />
   GLU.gluPerspective(pGL, fov_degrees, aspect, camZ&#47;10, camZ*10);</p>
<p>   &#47;&#47; set view<br />
   GLU.gluLookAt(pGL, 0, 0, camZ, 0, 0, 0, 0, 1, 0); &#47;&#47; move camera back<br />
   pGL.glScalef(1,-1,1); &#47;&#47; reverse y-axis<br />
   pGL.glTranslatef(-CAMERA_WIDTH&#47;2,-CAMERA_HEIGHT&#47;2,0); &#47;&#47; origin at top left<br />
}[&#47;java]</p>
<p>What's happening here is that the camera is being pulled back away from the scene and a perspective transform is being applied that causes things in the distance to appear farther away. &nbsp;I can't explain it any better than the cryptic m34 transform that is applied to the camera on the iOS side, but the effect is the same.</p>
<p>The only other modification I had to make to AndEngine was to create a 3D sprite class that wraps the provided Sprite class and allows the user to set the z position of sprites as well as their x,y position. &nbsp;In our app world the user doesn't interact directly with the scene but rather with an scrolling mechanism that moves the scene "on rails" as the user scrolls. &nbsp;The effect is beautiful but also somewhat hard to capture in screenshots. &nbsp;You'll just have to buy the app when it comes out!</p>
<p><a href="http:&#47;&#47;labs.prx.org&#47;2012&#47;03&#47;13&#47;a-graphical-pseudo-3d-environment-in-an-android-app&#47;png&#47;" rel="attachment wp-att-499"><img class="aligncenter size-medium wp-image-499" title="png" src="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2012&#47;03&#47;png-171x300.png" alt="" width="171" height="300" &#47;><&#47;a></p>
<p><a href="http:&#47;&#47;labs.prx.org&#47;2012&#47;03&#47;13&#47;a-graphical-pseudo-3d-environment-in-an-android-app&#47;png-1&#47;" rel="attachment wp-att-496"><img class="aligncenter size-medium wp-image-496" title="png-1" src="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2012&#47;03&#47;png-1-171x300.png" alt="" width="171" height="300" &#47;><&#47;a></p>
<p><a href="http:&#47;&#47;labs.prx.org&#47;2012&#47;03&#47;13&#47;a-graphical-pseudo-3d-environment-in-an-android-app&#47;png-3&#47;" rel="attachment wp-att-498"><img class="aligncenter size-medium wp-image-498" title="png-3" src="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2012&#47;03&#47;png-3-171x300.png" alt="" width="171" height="300" &#47;><&#47;a></p>
<p><a href="http:&#47;&#47;labs.prx.org&#47;2012&#47;03&#47;13&#47;a-graphical-pseudo-3d-environment-in-an-android-app&#47;png-2&#47;" rel="attachment wp-att-497"><img class="aligncenter size-medium wp-image-497" title="png-2" src="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2012&#47;03&#47;png-2-171x300.png" alt="" width="171" height="300" &#47;><&#47;a></p>
<div style="clear: both;"><&#47;div><br />
The good news is, the app is shaping up beautifully and AndEngine has really come through for what we needed to do. &nbsp;But there's a big remaining issue that I'd like to solve. &nbsp;AndEngine takes care of all of the touches on the scene and passes them to the sprites. &nbsp;But it does it based on their x,y coordinates. &nbsp;Unfortunately, the x,y coordinates it calculates based on the touches of the screen do not correspond to the location of the sprites within the scene because of the perspective transformation based on depth. &nbsp;Under the covers OpenGL knows where the sprites are because it drew them correctly on the screen, but AndEngine itself does not know. &nbsp;Additionally, I can only get access to a GL10 instance which does not provide the functions I need to project and unproject coordinates. &nbsp;For now I'm working around this issue, but theoretically I should be able to do the math to convert 2D screen coordinates into 3D scene coordinates using the ratio of the scene size to the screen size, the position of the camera, the angle of view, and the distance of the object in question from the camera. &nbsp;So far I haven't succeeded in doing it, but when I get a few days to step back from the project I'll turn to it again. &nbsp;If you think you know how it should be done, please comment!</p>
