---
layout: post
title: A graphical pseudo-3D environment in an Android app
date: '2012-03-13 11:00:42 -0400'
categories:
- Mobile
- iPhone
- Android
author: rebeccanesson
permalink: /2012/03/13/a-graphical-pseudo-3d-environment-in-an-android-app
---
<p>At PRX we're lucky to get to work with creative, fun-loving clients who want their apps to be more interesting to play with than the average app made from iOS standard components or Android widgets.  In one app we're currently developing, we're creating an engaging and fun pop-up book style environment in which the user encounters the program content as she navigates through an imaginary world.  It's beautiful and fun and a real programming challenge.  On the iOS side, Devin created the 3D-ish environment using native iOS layers positioned in 3D space.  It's my job to create the same effect in the Android version of the app.  The native views in Android don't support this kind of positioning in z space and there isn't a build in "camera" <a href="http://watchingapple.com/2008/04/core-animation-3d-perspective/">that can be transformed to give the illusion of depth</a>.  OpenGL could provide the 3D environment, but it would be a steep learning curve for me and it would make it harder to use the usual Android widgets and activities for performing the basic functions of the app like presenting lists of content and playing audio.  Enter <a href="http://www.andengine.org/">AndEngine</a>.</p>
<p>AndEngine is a free 2D game engine for Android.  It allows the creation of a game activity that I could combine with other Android activities to present content.  (I use <a href="http://developer.android.com/guide/topics/fundamentals/fragments.html">Android Fragments</a> via the <a href="http://developer.android.com/reference/android/support/v4/app/Fragment.html">Android Support V4 library</a> to incorporate traditional Android views into the game environment.)  Although AndEngine is intended for 2D games, a <a href="http://www.andengine.org/forums/tutorials/3d-perspective-tutorial-t1790.html">forum thread</a> demonstrated how to do the same perspective trick to the camera we're doing on the iOS side:</p>
<p>[java] private void setFrustum(GL10 pGL)<br />
 {<br />
    // set field of view to 60 degrees<br />
   float fov_degrees = 60;<br />
   float fov_radians = fov_degrees / 180 * (float)Math.PI;</p>
<p>   // set aspect ratio and distance of the screen<br />
   float aspect = this.getWidth() / this.getHeight();<br />
   float camZ = this.getHeight()/2 / (float)Math.tan(fov_radians/2);</p>
<p>   // set projection<br />
   GLHelper.setProjectionIdentityMatrix(pGL);<br />
   GLU.gluPerspective(pGL, fov_degrees, aspect, camZ/10, camZ*10);</p>
<p>   // set view<br />
   GLU.gluLookAt(pGL, 0, 0, camZ, 0, 0, 0, 0, 1, 0); // move camera back<br />
   pGL.glScalef(1,-1,1); // reverse y-axis<br />
   pGL.glTranslatef(-CAMERA_WIDTH/2,-CAMERA_HEIGHT/2,0); // origin at top left<br />
}[/java]</p>
<p>What's happening here is that the camera is being pulled back away from the scene and a perspective transform is being applied that causes things in the distance to appear farther away.  I can't explain it any better than the cryptic m34 transform that is applied to the camera on the iOS side, but the effect is the same.</p>
<p>The only other modification I had to make to AndEngine was to create a 3D sprite class that wraps the provided Sprite class and allows the user to set the z position of sprites as well as their x,y position.  In our app world the user doesn't interact directly with the scene but rather with an scrolling mechanism that moves the scene "on rails" as the user scrolls.  The effect is beautiful but also somewhat hard to capture in screenshots.  You'll just have to buy the app when it comes out!</p>
<p><a href="http://labs.prx.org/2012/03/13/a-graphical-pseudo-3d-environment-in-an-android-app/png/" rel="attachment wp-att-499"><img class="aligncenter size-medium wp-image-499" title="png" src="http://labs.prx.org/wp-content/uploads/2012/03/png-171x300.png" alt="" width="171" height="300" /></a></p>
<p><a href="http://labs.prx.org/2012/03/13/a-graphical-pseudo-3d-environment-in-an-android-app/png-1/" rel="attachment wp-att-496"><img class="aligncenter size-medium wp-image-496" title="png-1" src="http://labs.prx.org/wp-content/uploads/2012/03/png-1-171x300.png" alt="" width="171" height="300" /></a></p>
<p><a href="http://labs.prx.org/2012/03/13/a-graphical-pseudo-3d-environment-in-an-android-app/png-3/" rel="attachment wp-att-498"><img class="aligncenter size-medium wp-image-498" title="png-3" src="http://labs.prx.org/wp-content/uploads/2012/03/png-3-171x300.png" alt="" width="171" height="300" /></a></p>
<p><a href="http://labs.prx.org/2012/03/13/a-graphical-pseudo-3d-environment-in-an-android-app/png-2/" rel="attachment wp-att-497"><img class="aligncenter size-medium wp-image-497" title="png-2" src="http://labs.prx.org/wp-content/uploads/2012/03/png-2-171x300.png" alt="" width="171" height="300" /></a></p>
<div style="clear: both;"></div>
<p>The good news is, the app is shaping up beautifully and AndEngine has really come through for what we needed to do.  But there's a big remaining issue that I'd like to solve.  AndEngine takes care of all of the touches on the scene and passes them to the sprites.  But it does it based on their x,y coordinates.  Unfortunately, the x,y coordinates it calculates based on the touches of the screen do not correspond to the location of the sprites within the scene because of the perspective transformation based on depth.  Under the covers OpenGL knows where the sprites are because it drew them correctly on the screen, but AndEngine itself does not know.  Additionally, I can only get access to a GL10 instance which does not provide the functions I need to project and unproject coordinates.  For now I'm working around this issue, but theoretically I should be able to do the math to convert 2D screen coordinates into 3D scene coordinates using the ratio of the scene size to the screen size, the position of the camera, the angle of view, and the distance of the object in question from the camera.  So far I haven't succeeded in doing it, but when I get a few days to step back from the project I'll turn to it again.  If you think you know how it should be done, please comment!</p>
