---
layout: post
title: 'Android Love: Part 1 of 2'
date: '2011-02-03 17:35:41 -0500'
categories:
- Mobile
- Android
author: chrisrhoden
permalink: /2011/02/03/android-love
---
<p>Hey everyone! First, I want to apologize for what has been a much longer than anticipated break in posts on our technical blog. The tech team is keeping very busy, and it's difficult to remember to make a post sometimes. That said, we know it's very important for us to share what we are working on at a more technical level.</p>
<p>Recently, I've been getting to play with Android much more and it's been making me very happy. Specifically, I have been working with the code provided by <a href="http://www.publicradioplayer.org/?p=1487">our Google Summer of Code student last year</a> which will (very shortly!) become the Public Radio Player port for Android Smartphones. We're very, very excited.</p>
<p>[caption id="attachment_212" align="alignleft" width="200" caption="Force Close Dialog. Oh No!"]<a rel="attachment wp-att-212" href="http://labs.prx.org/2011/02/03/android-love/acore-stopped/"><img class="size-medium wp-image-212" title="Oh no!" src="http://labs.prx.org/wp-content/uploads/2011/02/acore-stopped-200x300.png" alt="Force Close Dialog" width="200" height="300" /></a>[/caption]</p>
<p>As I have been playing with the application, adding polish, and fleshing out functionality, I have run into a couple of situations where serious computation is being done on the UI thread. The application slows to a halt, and the user receives the dreaded <strong>Force Close</strong> dialog. No good.</p>
<p>In general, it's a good idea to keep everything that does not deal directly with the UI on a separate thread. Unfortunately, because the Android UI framework is <em>not</em> thread safe, you can't simply spin off threads that perform some long-running action and then update the UI; you need to actually <strong>tell</strong> the code living on the UI thread to update.</p>
<p>There are dozens and dozens of ways you can accomplish this, but there are only two that are appropriate if you want anyone to be able to read your code in the future. They're useful in different situations, and they're <code><a href="http://developer.android.com/reference/android/os/Handler.html">Handlers</a></code> and <code><a href="http://developer.android.com/reference/android/os/AsyncTask.html">AsyncTasks</a></code>.</p>
<p>I'll talk about <code>AsyncTasks</code> next week, but this week I will cover a pattern that is used all over Android, <code>Handlers</code>.</p>
<h2>Android Handlers: How Do They Work?</h2>
<p>Handlers basically allow interthread communication by allowing one to pass <code>Messages</code> back and forth. This means that you can create a <code>Handler</code> on the UI thread, fire up a new thread passing reference to your <code>Handler</code>, and do all of your UI stuff where it belongs.</p>
<p>Now, there are a couple of reasons why you might not want to use <code>Handlers</code> for everything. For one, they're expensive (sort of) and they're not the most readable way to handle background tasks. There are some best practices for working with <code>Handlers</code> which alleviate some of this, and I am going to scratch the surface here.</p>
<p>First, you should always use one <code>Handler</code> per <code>Activity</code>. <code>Messages</code> include an integer property called <code>what</code>, which is typically used to describe how the Handler should process the message with a switch statement:</p>
<p>[java]<br />
Handler mHandler = new Handler(){<br />
    @Override<br />
    public void handleMessage(Message m){<br />
        switch(m.what){<br />
        case MESSAGE_1:<br />
            doSomething(m.obj);<br />
            break;<br />
        case MESSAGE_A:<br />
            doSomethingElse(m.obj);<br />
        }<br />
    }<br />
}<br />
[/java]</p>
<p>You should also take advantage of the properties available in <code>Messages</code> as much as possible, rather than subclassing it. Check out the <a href="http://developer.android.com/reference/android/os/Message.html">documentation</a> for what properties are available.</p>
<h2>For Example</h2>
<p>Let's take a look at using a <code>Handler</code> in the context of an Android <code>Activity</code>:</p>
<p>[java]</p>
<p>package org.prx.myapp;</p>
<p>import android.app.Activity;<br />
import android.app.ProgressDialog;<br />
import android.location.Location;<br />
import android.os.Handler;<br />
import android.os.Message;<br />
import org.prx.myapp.LocationHelper;</p>
<p>class ShowLocationActivity extends Activity {</p>
<p>    protected final LocationHelper locHelper;<br />
    protected final ProgressDialog mDialog;<br />
    private Handler mHandler = new Handler(){<br />
        @Override<br />
        public void handleMessage(Message msg){<br />
            switch(msg.what){<br />
            case LocationHelper.LOCATION_OBTAINED:<br />
                locHelper.calulateDistances((Location) msg.obj, this);<br />
                mDialog.setMessage(&quot;Calculating distances...&quot;);<br />
                break;<br />
            case LocationHelper.DISTANCES_CALCULATED:<br />
                mDialog.dismiss();<br />
            }<br />
        }<br />
    };</p>
<p>    @Override<br />
    public void onCreate(Bundle savedInstanceState){<br />
        super.onCreate(savedInstanceState);<br />
        if (locHelper == null) locHelper = new LocationHelper(this);<br />
        mDialog = ProgressDialog.show(this, &quot;&quot;, &quot;Getting your location...&quot;, true);<br />
        locHelper.obtainLocation(mHandler);<br />
    }<br />
}<br />
[/java]</p>
<p>In our <code>LocationHelper</code> class, we accept a <code>Handler</code> for each of the long running methods. Our <code>calculateDistances()</code> method might look something like the following:</p>
<p>[java]<br />
public void calculateDistances(final Location loc, final Handler h){<br />
    new Thread(new Runnable(){<br />
        public void run(){<br />
            /* Do some expensive calculation here */<br />
            Message.obtain(h, DISTANCES_CALCULATED, null, null).sendToTarget();<br />
    }).start();<br />
}<br />
[/java]</p>
<p>This method starts up a new thread that then informs the main UI thread when the calculations are done. At no point is the main UI thread blocked, but we are still able to properly present the user with information about what is currently happening.</p>
<h2>Handlers are not the Last Word</h2>
<p>As I briefly mentioned earlier, there is another system available (called an <code>AsyncTask</code>) which provides an additional layer of abstraction for cases like this. I will go into those in detail next week, with a full working code example.</p>
<p>Thanks so much for reading, and if you have any questions, drop them in the comments below!</p>
