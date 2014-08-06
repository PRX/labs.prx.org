---
layout: post
status: publish
published: true
title: 'Android Love: Part 1 of 2'
author:
  display_name: Chris Rhoden
  login: chris
  email: chris@prx.org
  url: http://prx.org/
author_login: chris
author_email: chris@prx.org
author_url: http://prx.org/
wordpress_id: 205
wordpress_url: http://labs.prx.org/?p=205
date: '2011-02-03 17:35:41 -0600'
date_gmt: '2011-02-03 17:35:41 -0600'
categories:
- Mobile
- Android
tags:
- android
- threading
- java
comments: []
---
<p>Hey everyone! First, I want to apologize for what has been a much longer than anticipated break in posts on our technical blog. The tech team is keeping very busy, and it's difficult to remember to make a post sometimes. That said, we know it's very important for us to share what we are working on at a more technical level.</p>
<p>Recently, I've been getting to play with Android much more and it's been making me very happy. Specifically, I have been working with the code provided by <a href="http:&#47;&#47;www.publicradioplayer.org&#47;?p=1487">our Google Summer of Code student last year<&#47;a> which will (very shortly!) become the Public Radio Player port for Android Smartphones. We're very, very excited.</p>
<p>[caption id="attachment_212" align="alignleft" width="200" caption="Force Close Dialog. Oh No!"]<a rel="attachment wp-att-212" href="http:&#47;&#47;labs.prx.org&#47;2011&#47;02&#47;03&#47;android-love&#47;acore-stopped&#47;"><img class="size-medium wp-image-212" title="Oh no!" src="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2011&#47;02&#47;acore-stopped-200x300.png" alt="Force Close Dialog" width="200" height="300" &#47;><&#47;a>[&#47;caption]</p>
<p>As I have been playing with the application, adding polish, and fleshing out functionality, I have run into a couple of situations where serious computation is being done on the UI thread. The application slows to a halt, and the user receives the dreaded <strong>Force Close<&#47;strong> dialog. No good.</p>
<p>In general, it's a good idea to keep everything that does not deal directly with the UI on a separate thread. Unfortunately, because the Android UI framework is <em>not<&#47;em> thread safe, you can't simply spin off threads that perform some long-running action and then update the UI; you need to actually <strong>tell<&#47;strong> the code living on the UI thread to update.</p>
<p>There are dozens and dozens of ways you can accomplish this, but there are only two that are appropriate if you want anyone to be able to read your code in the future. They're useful in different situations, and they're <code><a href="http:&#47;&#47;developer.android.com&#47;reference&#47;android&#47;os&#47;Handler.html">Handlers<&#47;a><&#47;code> and <code><a href="http:&#47;&#47;developer.android.com&#47;reference&#47;android&#47;os&#47;AsyncTask.html">AsyncTasks<&#47;a><&#47;code>.</p>
<p>I'll talk about <code>AsyncTasks<&#47;code> next week, but this week I will cover a pattern that is used all over Android, <code>Handlers<&#47;code>.</p>
<h2>Android Handlers: How Do They Work?<&#47;h2><br />
Handlers basically allow interthread communication by allowing one to pass <code>Messages<&#47;code> back and forth. This means that you can create a <code>Handler<&#47;code> on the UI thread, fire up a new thread passing reference to your <code>Handler<&#47;code>, and do all of your UI stuff where it belongs.</p>
<p>Now, there are a couple of reasons why you might not want to use <code>Handlers<&#47;code> for everything. For one, they're expensive (sort of) and they're not the most readable way to handle background tasks. There are some best practices for working with <code>Handlers<&#47;code> which alleviate some of this, and I am going to scratch the surface here.</p>
<p>First, you should always use one <code>Handler<&#47;code> per <code>Activity<&#47;code>. <code>Messages<&#47;code> include an integer property called <code>what<&#47;code>, which is typically used to describe how the Handler should process the message with a switch statement:</p>
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
[&#47;java]</p>
<p>You should also take advantage of the properties available in <code>Messages<&#47;code> as much as possible, rather than subclassing it. Check out the <a href="http:&#47;&#47;developer.android.com&#47;reference&#47;android&#47;os&#47;Message.html">documentation<&#47;a> for what properties are available.</p>
<h2>For Example<&#47;h2><br />
Let's take a look at using a <code>Handler<&#47;code> in the context of an Android <code>Activity<&#47;code>:</p>
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
                mDialog.setMessage("Calculating distances...");<br />
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
        mDialog = ProgressDialog.show(this, "", "Getting your location...", true);<br />
        locHelper.obtainLocation(mHandler);<br />
    }<br />
}<br />
[&#47;java]</p>
<p>In our <code>LocationHelper<&#47;code> class, we accept a <code>Handler<&#47;code> for each of the long running methods. Our <code>calculateDistances()<&#47;code> method might look something like the following:</p>
<p>[java]<br />
public void calculateDistances(final Location loc, final Handler h){<br />
    new Thread(new Runnable(){<br />
        public void run(){<br />
            &#47;* Do some expensive calculation here *&#47;<br />
            Message.obtain(h, DISTANCES_CALCULATED, null, null).sendToTarget();<br />
    }).start();<br />
}<br />
[&#47;java]</p>
<p>This method starts up a new thread that then informs the main UI thread when the calculations are done. At no point is the main UI thread blocked, but we are still able to properly present the user with information about what is currently happening.</p>
<h2>Handlers are not the Last Word<&#47;h2><br />
As I briefly mentioned earlier, there is another system available (called an <code>AsyncTask<&#47;code>) which provides an additional layer of abstraction for cases like this. I will go into those in detail next week, with a full working code example.</p>
<p>Thanks so much for reading, and if you have any questions, drop them in the comments below!</p>
