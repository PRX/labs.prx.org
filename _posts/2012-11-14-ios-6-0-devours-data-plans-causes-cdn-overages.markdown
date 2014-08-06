---
layout: post
status: publish
published: true
title: " iOS 6.0 Causes CDN Overages"
author:
  display_name: Chris Rhoden
  login: chris
  email: chris@prx.org
  url: http://prx.org/
author_login: chris
author_email: chris@prx.org
author_url: http://prx.org/
wordpress_id: 650
wordpress_url: http://labs.prx.org/?p=650
date: '2012-11-14 16:16:26 -0600'
date_gmt: '2012-11-14 21:16:26 -0600'
categories:
- Mobile
- iPhone
- iPad
tags: []
comments:
- id: 5441
  author: Roman Mars
  author_email: roman@prx.org
  author_url: http://99percentinvisible.org
  date: '2012-11-14 16:44:08 -0600'
  date_gmt: '2012-11-14 21:44:08 -0600'
  content: Despite all this "research" I stand by my assertion that the episode in
    question had 373,000 individual downloads from hip, beautiful women with cool
    eyeglasses.
- id: 5443
  author: VPHedderel
  author_email: vanceman@gmail.com
  author_url: http://trendstrain.com
  date: '2012-11-14 17:04:20 -0600'
  date_gmt: '2012-11-14 22:04:20 -0600'
  content: May I blame the Podcast app directly? I very much dislike it divorced from
    the iOS Music app and I think it's the best example of the failure of skeuomorphic
    design.
- id: 5445
  author: Ken Adams
  author_email: hostmaster@fralnet.com
  author_url: http://www.nagradio.com
  date: '2012-11-14 17:37:19 -0600'
  date_gmt: '2012-11-14 22:37:19 -0600'
  content: "have have see the same problem on our servers. We have our own CDN network
    and at one stage some of our servers have crashed due the shear amount of request.
    The has been no word form Apple in regards to this issue. Nor there has been any
    details for the customers that have been affected and getting huge bills. \r\n\r\nSo
    its about this time that news will finally will hit the pipes and perhaps some
    one from apple will come up with explanation how this could have happened and
    not fixed for so long."
- id: 5447
  author: Bill Gearhiser
  author_email: TheGear@aol.com
  author_url: ''
  date: '2012-11-14 18:13:15 -0600'
  date_gmt: '2012-11-14 23:13:15 -0600'
  content: Based on my experience in the computer bidness and my experience with Stitcher
    on my iPhone, I'd be willing to posit that what you're seeing is a bug in the
    Stitcher software. I see Stitcher reset itself in the middle of playing podcasts
    numerous times a day. Many of those occasions seem to be for the purpose of updating
    the current podcast list, but many of THOSE include resetting my current podcast
    to the beginning. Who knows? It might be re-downloading at that time.
- id: 5453
  author: Marckus Anderson
  author_email: aenima@xs4all.nl
  author_url: ''
  date: '2012-11-14 18:36:21 -0600'
  date_gmt: '2012-11-14 23:36:21 -0600'
  content: "Another sysadmin here. With our podcasts we used to be able to handle
    our clients' requests with a simple 32 bit webserver. Once IOS 6 (first the developer
    beta, then public stable) started to hit our server it choked. Too many requests
    from these clients, effectively ddossing our server.\r\n\r\nSince that time I
    have done a whole lot to try and mitigate these issues, investigating what was
    going on. It is exactly the same as is reported in this article that does a great
    job in describing it. Well done!\r\n\r\nSo I tested many different webservers.
    I don't know why Apache logs 88MB, I think it is because Apache logs the _requested_
    accumulated byte range rather than the actually _transferred_ bytecount. When
    you try nginx, varnish, thttpd, lighttpd and so on they all log different requests.
    Also, there is a difference with Linux and FreeBSD where the latter logs the minimum
    used buffer, which I think normally is 8 kbyte.\r\n\r\nSo while investigating
    I became none the wiser on how to mitigate the issue for IOS6 devices. I've even
    come to believe that there is no way at all, at the sending side, to resolve it.\r\n\r\nLuckily
    I did test so many servers that I am at least able to say that lighttpd performed
    much better than all other webservers. Especially with fam&#47;gamin, which tells
    lighttpd whether a file has been changed or not. Disk IO went way down while throughput
    went way up. For all devices except IOS6. :-)\r\n\r\nGreat article, well written,
    nice screenshots. Much regards to you, Chris."
- id: 5455
  author: Marckus Anderson
  author_email: aenima@xs4all.nl
  author_url: ''
  date: '2012-11-14 18:40:07 -0600'
  date_gmt: '2012-11-14 23:40:07 -0600'
  content: "Two additional comments: when I said \"When you try nginx, varnish, thttpd,
    lighttpd and so on they all log different requests,\" I meant different transferred
    bytecounts, the number right of the 206 response code. With apache the number
    is quite high. However, lighttpd for example logs 64k and if I remember well,
    nginx logs 8k.\r\n\r\nSecondly; lighttpd performed well indeed, I forgot to say
    that we serve _only_ static mp3 files of approx. 100MB and no dynamic content,
    e.g. PHP sites, with this server."
- id: 5461
  author: Anonymous
  author_email: null@example.com
  author_url: ''
  date: '2012-11-14 19:28:39 -0600'
  date_gmt: '2012-11-15 00:28:39 -0600'
  content: http:&#47;&#47;bugreporter.apple.com
- id: 5462
  author: chris
  author_email: chris@prx.org
  author_url: http://prx.org/
  date: '2012-11-14 19:44:24 -0600'
  date_gmt: '2012-11-15 00:44:24 -0600'
  content: "@Anon - Thanks for the reminder! I filed a bug report but suspect it's
    of dubious value since, as mentioned in the article, it's been resolved in the
    most recent version of iOS."
- id: 5464
  author: chris
  author_email: chris@prx.org
  author_url: http://prx.org/
  date: '2012-11-14 19:46:01 -0600'
  date_gmt: '2012-11-15 00:46:01 -0600'
  content: "@Marckus - Yeah I mentioned briefly in the article above that we don't
    think that the complete file is being downloaded each time, and that byte value
    is essentially unhelpful."
- id: 5465
  author: chris
  author_email: chris@prx.org
  author_url: http://prx.org/
  date: '2012-11-14 19:47:28 -0600'
  date_gmt: '2012-11-15 00:47:28 -0600'
  content: |-
    @Bill - As far as we could tell, because the most recent version of Stitcher appears to be using their own Audio Playback utilities, they were unaffected by this. It's possible that we would have been able to reproduce if we waited long enough, but I suspect that they are immune from this particular issue.

    As you point out, they are likely susceptible to their own issues as a result of this strategy.
- id: 5466
  author: chris
  author_email: chris@prx.org
  author_url: http://prx.org/
  date: '2012-11-14 19:48:05 -0600'
  date_gmt: '2012-11-15 00:48:05 -0600'
  content: "@Ken - I think many people are getting their bills and scratching their
    heads around now, since we posted we have heard many similar stories."
- id: 5467
  author: chris
  author_email: chris@prx.org
  author_url: http://prx.org/
  date: '2012-11-14 19:49:09 -0600'
  date_gmt: '2012-11-15 00:49:09 -0600'
  content: "@VPHedderel - As I mentioned above, this affects all apps using the Apple
    suggested APIs (including the Podcast app, and many of ours). You may feel free
    to blame whatever you would like, but the purpose of this post is not to issue
    blame but diagnose a problem."
- id: 5470
  author: Giuseppe Taibi
  author_email: social@giuseppetaibi.com
  author_url: http://about.me/giuseppetaibi
  date: '2012-11-14 20:21:13 -0600'
  date_gmt: '2012-11-15 01:21:13 -0600'
  content: Thank you for bringing visibility to this HUGE problem. This bug is totally
    real and has already cost me over $45 in overage charges. I know of tons of people,
    especially in the AT&amp;T network that are reporting unusual battery drains and
    overheating after upgrading to iOS6. As an Apple developer I have filed a bug
    but Apple is ignoring it as they very often unfortunately do. This is class action
    material.
- id: 5472
  author: chris
  author_email: chris@prx.org
  author_url: http://prx.org/
  date: '2012-11-14 20:29:16 -0600'
  date_gmt: '2012-11-15 01:29:16 -0600'
  content: "@Giuseppe - I want to be clear, there's no reason to think that this is
    the sole cause of the bandwidth issues. This, coupled with issues already covered
    elsewhere, could result in overages. I think it is likely that this played a part,
    and I think it's all but certain that for the podcast hosts who have been reporting
    huge traffic spikes it is also likely that this is at least one of the major contributors."
- id: 5473
  author: iOS 6 Bug Causes Data Overages By Downloading Audio Streams And Podcasts
    Multiple Times, Fixed In iOS 6.0.1 | Redmond Pie
  author_email: ''
  author_url: http://www.redmondpie.com/ios-6-bug-causes-data-overages-by-downloading-audio-streams-and-podcasts-multiple-times-fixed-in-ios-6.0.1/
  date: '2012-11-14 20:31:21 -0600'
  date_gmt: '2012-11-15 01:31:21 -0600'
  content: "[...] Discovered by Public Radio Exchange Labs, which has been carrying
    research on the issue, noted: Because the ranges of these requests seem to overlap
    and the requests themselves each carry some overhead, this causes a single download
    of an MP3 to use significantly more bandwidth than in iOS 5. In one case, the
    playback of a single 30MB episode caused the transfer of over 100MB of data. [...]"
- id: 5475
  author: DS
  author_email: dustin@churchplantmedia.com
  author_url: ''
  date: '2012-11-14 20:55:53 -0600'
  date_gmt: '2012-11-15 01:55:53 -0600'
  content: "Hi Chris,\r\n\r\nMy company hosts tons of media-rich sites on Amazon S3.
    Our bill jumped from an average of $700 a month to $941 in September, then up
    to $1900 in October. We're on pace to hit about $2000 this month. I analyzed our
    logs and saw a massive jump on 9&#47;25. The graphs you posted above look like
    they spiked on 9&#47;20. Ours didn't spike until 9&#47;25 because our clients
    are churches, and most don't post their sermon mp3s online until Monday (9&#47;24)
    or Tuesday (9&#47;25). So most listeners to their podcasts started getting the
    episodes on 9&#47;25. Hence, our massive spike a few days after yours. Here is
    our traffic from Aug 1 until Nov 13: http:&#47;&#47;cl.ly&#47;image&#47;3p160v2h1n26.
    To get a full historical view, check it out from Jan of last year: http:&#47;&#47;cl.ly&#47;image&#47;2P1y1e150f1N.\r\n\r\nI
    know it's not Amazon's issue, but I'm hoping they'll hear me out and give us a
    credit. This extra amount is killer.\r\n\r\nI really appreciate you taking the
    time to research and document this. You saved us a ton of hassle trying to sort
    this out."
- id: 5477
  author: iOS 6.0 bug causing massive data consumption on podcasts | VentureBeat
  author_email: ''
  author_url: http://venturebeat.com/2012/11/14/ios-6-0-bug-causing-massive-data-consumption-on-podcasts/
  date: '2012-11-14 21:06:27 -0600'
  date_gmt: '2012-11-15 02:06:27 -0600'
  content: "[...] } .pw-widget-inline .ra1-pw-native-twitter { width:80px; }      Public
    Radio Exchange has found and documented a bug in Apple&#8217;s iOS 6.0 mobile
    operating system that apparently causes multiple downloads of podcasts, boosting
    data usage [...]"
- id: 5524
  author: What Haveyou
  author_email: hugatoilet@hotmail.com
  author_url: ''
  date: '2012-11-15 05:39:17 -0600'
  date_gmt: '2012-11-15 10:39:17 -0600'
  content: What is "CDN"?  You use the term repeatedly but never define it.
- id: 5530
  author: Mike Adler
  author_email: adler@wfmu.org
  author_url: ''
  date: '2012-11-15 09:01:29 -0600'
  date_gmt: '2012-11-15 14:01:29 -0600'
  content: At WFMU, we also experienced related issues with the large volume of byte
    range requests from iOS 6.0. Thanks for the detailed write up.
- id: 5539
  author: PRX Tech Team Discovers iOS 6 Bug | Public Radio Exchange
  author_email: ''
  author_url: http://blog.prx.org/2012/11/prx-tech-team-discovers-ios-6-bug/
  date: '2012-11-15 13:15:25 -0600'
  date_gmt: '2012-11-15 18:15:25 -0600'
  content: "[...] tech team is in the news today for their discovery of an iPhone&#47;iPad
    iOS 6 bug that is causing large overage charges for podcasters like This American
    Life and probably for their [...]"
- id: 5540
  author: JoelSu
  author_email: jsucherman@npr.org
  author_url: ''
  date: '2012-11-15 13:31:07 -0600'
  date_gmt: '2012-11-15 18:31:07 -0600'
  content: "@What Haveyou  \r\nCDN = Content Delivery Network. These are the companies
    like Akamai and Limelight that stream the content to a listener's device."
- id: 5542
  author: Traced
  author_email: dirkjan@sanoweb.nl
  author_url: ''
  date: '2012-11-15 14:25:15 -0600'
  date_gmt: '2012-11-15 19:25:15 -0600'
  content: "This is specific to iOS6 for audio, but in iOS5 it already existed for
    video. Same thing, 1 iPad takes enough resources for a whole server.\r\nI've filed
    a bug report for it ages ago and posted about it at apple dev forums, but nobody
    bothered."
- id: 5584
  author: flohei
  author_email: flo@flohei.de
  author_url: http://flohei.de
  date: '2012-11-16 11:51:27 -0600'
  date_gmt: '2012-11-16 16:51:27 -0600'
  content: "Thanks for the great article.\r\n\r\nI've been experiencing a similar
    problem (if not the exact same one) this month, though I'm running 6.0.1. So I
    wonder if it's a different problem or if I somehow magically reproduced the iOS
    6.0 bug on 6.0.1.\r\n\r\nFor years now, I have never exceeded my plan limit of
    1 GB (except for once, when I moved and had no internet at home for 10 days or
    so). This month, I did already pay for four additional gigabytes. \r\n\r\nWas
    there anybody contacting you having this issue on 6.0.1?\r\n\r\n&mdash;f"
- id: 5594
  author: Alex
  author_email: bokkusunotegami@gmail.com
  author_url: ''
  date: '2012-11-16 17:05:18 -0600'
  date_gmt: '2012-11-16 22:05:18 -0600'
  content: Is this only audio streams bug? After I watched last Apple's presentation
    on my iPhone I also received huge bill. I downloaded more than 16GB, though this
    presentation on YouTube in 1080p resolution have a bit more than 1 GB size.
- id: 5632
  author: Derek
  author_email: finnamored@gmail.com
  author_url: ''
  date: '2012-11-18 21:16:05 -0600'
  date_gmt: '2012-11-19 02:16:05 -0600'
  content: "Glad to see other people are trying to get to the bottom of this as well!\r\n\r\nChris
    is right in saying the specific problem discussed in this post is not the sole
    cause of the data spikes for some customers, but it seems to be one of many that
    all stem from iOS6. The biggest problem seems to be the leakage of mobile data
    when connected to wi-fi, at least from the end-user's perspective. If the download
    loop was happening on wi-fi, only CDNs would notice and care about the extra bandwidth,
    but because its also using mobile data, customers are seeing the proof in the
    $$, too.\r\n\r\nEven after the release of 6.0.1 and carrier settings update,I'm
    still experiencing significant mobile data use when connected to wi-fi. Just this
    morning (Nov 18), there was 50MB of mobile data use while I was at home, on wi-fi.\r\n\r\nMy
    network provider (Fido Mobile, in Canada) has completely dropped the ball on this
    one. Their tech support seems to be completely unaware of the issue, yet there
    website forums contain official company posts that acknowledge they've looked
    into the matter, and conclude that \"THERE IS NO ISSUE.\" I was charged $180 in
    extra data fees for Oct."
- id: 5650
  author: 'iOS 6.0.1: atualiza&ccedil;&atilde;o corrige v&aacute;rios problemas |
    Blog do iPhone e iPod Touch BR Brasil'
  author_email: ''
  author_url: http://www.blogiphone.com.br/?p=6189
  date: '2012-11-21 14:21:14 -0600'
  date_gmt: '2012-11-21 19:21:14 -0600'
  content: "[...] estudado pelo PRX Labs, foi descoberto que o bug estava nos frameworks
    de reprodu&ccedil;&atilde;o de &aacute;udio (audio playback) do iOS [...]"
- id: 5651
  author: Tales from the BCrypt | TechSNAP | Jupiter Broadcasting
  author_email: ''
  author_url: http://www.jupiterbroadcasting.com/27761/tales-from-the-bcrypt-techsnap-85/
  date: '2012-11-21 21:36:23 -0600'
  date_gmt: '2012-11-22 02:36:23 -0600'
  content: "[...] Original PRX Labs post  [...]"
- id: 5687
  author: 'Community News: CSS Performance, How to Make a Web Standard &amp; More
    | New Relic blog'
  author_email: ''
  author_url: http://blog.newrelic.com/2012/12/07/community-news-css-performance-how-to-make-a-web-standard-more/
  date: '2012-12-07 18:51:22 -0600'
  date_gmt: '2012-12-07 23:51:22 -0600'
  content: "[...] seems.* Chromium Projects tells you how to make a web standards
    proposal.* iOS 6.0 has been causing CDN overages.* AWS shows how to deploy Ruby
    apps to AWS Elastic Beanstalk with Git.* Spotify shares how it [...]"
- id: 5691
  author: TechnoBuffalo |
  author_email: ''
  author_url: http://staging.technobuffalo.com/2012/11/16/ios-6-bug-makes-podcasts-download-over-and-over-leading-to-huge-data-usage/
  date: '2012-12-08 14:56:47 -0600'
  date_gmt: '2012-12-08 19:56:47 -0600'
  content: "[...] [Via The Next Web, Redmond Pie, source PRX Labs] [...]"
- id: 5701
  author: Verursacht(e) ein Fehler in iOS 6 einen enormen Anstieg des Datenverbrauchs?
    | iDienstler.de
  author_email: ''
  author_url: http://idienstler.de/343/verursachte-ein-fehler-in-ios-6-einen-enormen-anstieg-des-datenverbrauchs/
  date: '2012-12-10 11:04:38 -0600'
  date_gmt: '2012-12-10 16:04:38 -0600'
  content: "[...] einem&nbsp;Bericht von PRX (Public Radio Exchange) scheint sich
    in Apples iOS 6.0.0 AV Foundation Framework &nbsp;ein wohl &auml;u&szlig;erst
    schwerwiegender [...]"
- id: 5707
  author: iOS 6 data bug problem not mended for all with iOS 6.0.1 | iphone 4S issues
  author_email: ''
  author_url: http://iphone4sissues.net/ios-6-data-bug-problem-not-mended-for-all-with-ios-6-0-1.html
  date: '2012-12-12 22:17:47 -0600'
  date_gmt: '2012-12-13 03:17:47 -0600'
  content: "[...] there seem to be others whose devices are still suffering from the
    bug after the update.Apparently PRX Labs has described in a blog post how an audio
    bug seems to be the cause of data overages and after [...]"
- id: 5713
  author: Bob
  author_email: bob.haffner@gmail.com
  author_url: ''
  date: '2012-12-19 13:50:09 -0600'
  date_gmt: '2012-12-19 18:50:09 -0600'
  content: Anyone still having this problem after the release of 6.0.1?  I know of
    one podcast producer that is having similar issues even when 6.0.1 users are trying
    to access content.
- id: 5756
  author: wiki.minimoto.es
  author_email: sammy_mcclure@zoho.com
  author_url: http://wiki.minimoto.es/index.php/Usuario:SusanAndr
  date: '2013-03-11 00:06:28 -0500'
  date_gmt: '2013-03-11 04:06:28 -0500'
  content: "It is significant to grow to be familiar with these treatments to ensure
    \r\nthat you are in a position to keep your solutions \r\nopen when searching
    for methods to raise your power.\r\nGrowth hormone supplements have develop into
    popular mostly among bodybuilders \r\nand athletes.A lot of#!!#individuals suffer
    from low power levels since they are taking \r\ndrugs that can result in this
    scenario.Fruits and vegetables \r\ncan be fantastic sources of energy.The supplement
    \r\ntargets the pituitary gland with all organic herbs and minerals, \r\nforcing
    it to make a lot more human growth hormone and slow down the aging procedure."
- id: 5785
  author: http:&#47;&#47;miketyson.com&#47;mike-tyson-in-the-hangover
  author_email: edgardoirby@googlemail.com
  author_url: http://miketyson.com/mike-tyson-in-the-hangover/
  date: '2013-05-16 21:47:23 -0500'
  date_gmt: '2013-05-17 01:47:23 -0500'
  content: "You need to have certain lab work done in addition \r\nto fine lines also
    appearing. What you need is to make it effective."
- id: 5788
  author: Un bug en iOS 6.0 provoca un consumo masivo de datos | SiliconWeek.com
  author_email: ''
  author_url: http://www.siliconweek.com/noticias/un-bug-en-ios-6-0-provoca-un-consumo-masivo-de-datos-29556
  date: '2013-05-23 10:11:10 -0500'
  date_gmt: '2013-05-23 14:11:10 -0500'
  content: "[...] en un estado en el que realiza varias solicitudes por segundo y
    las cierra r&aacute;pidamente&#8221;, dicen los miembros de PRX Labs. &#8220;Debido
    a que los rangos de estas peticiones parecen solaparse y [...]"
- id: 5789
  author: Un bug en iOS 6.0 provoca un consumo masivo de datos | SiliconWeek.com
  author_email: ''
  author_url: http://www.siliconweek.com/noticias/un-bug-en-ios-6-0-provoca-un-consumo-masivo-de-datos-29556
  date: '2013-05-23 10:11:10 -0500'
  date_gmt: '2013-05-23 14:11:10 -0500'
  content: "[...] en un estado en el que realiza varias solicitudes por segundo y
    las cierra r&aacute;pidamente&#8221;, dicen los miembros de PRX Labs. &#8220;Debido
    a que los rangos de estas peticiones parecen solaparse y [...]"
- id: 5790
  author: Un bug en iOS 6.0 provoca un consumo masivo de datos
  author_email: ''
  author_url: http://www.siliconweek.es/noticias/un-bug-en-ios-6-0-provoca-un-consumo-masivo-de-datos-29556
  date: '2013-05-24 10:25:04 -0500'
  date_gmt: '2013-05-24 14:25:04 -0500'
  content: "[...] en un estado en el que realiza varias solicitudes por segundo y
    las cierra r&aacute;pidamente&#8221;, dicen los miembros de PRX Labs. &#8220;Debido
    a que los rangos de estas peticiones parecen solaparse y [...]"
- id: 5801
  author: Louis Cunningham
  author_email: bernardshanahan@gmail.com
  author_url: http://louiscunningham.kazeo.com/
  date: '2013-08-01 15:09:55 -0500'
  date_gmt: '2013-08-01 19:09:55 -0500'
  content: "I pay a quick visit daily some web pages \r\nand websites to read posts,
    however this website provides feature \r\nbased articles."
- id: 5816
  author: September 6, 2013Fix the iOS 6 Data over Wi-Fi Bug by Updating iOS; Podcast
    App Affected | RedHuck.Com
  author_email: ''
  author_url: http://redhuck.com/fix-the-ios-6-data-over-wi-fi-bug-by-updating-ios-podcast-app-affected/
  date: '2013-09-06 07:26:55 -0500'
  date_gmt: '2013-09-06 11:26:55 -0500'
  content: "[&#8230;] which is affected by a bug in iOS 6&#8242;s AV Foundation framework,
    as detailed in tests by PRX Labs (via The Next [&#8230;]"
- id: 5817
  author: Fix the iOS 6 Data over Wi-Fi Bug by Updating iOS; Podcast App Affected
    - RedHuck.Com
  author_email: ''
  author_url: http://redhuck.com/news/fix-the-ios-6-data-over-wi-fi-bug-by-updating-ios-podcast-app-affected.html
  date: '2013-09-07 13:02:24 -0500'
  date_gmt: '2013-09-07 17:02:24 -0500'
  content: "[&#8230;] which is affected by a bug in iOS 6&#8242;s AV Foundation framework,
    as detailed in tests by PRX Labs (via The Next [&#8230;]"
- id: 5840
  author: Apple behebt Fehler in iBooks und merzt Datenfresser bei der Audio-&Uuml;bertragung
    aus | iPhone-Ticker
  author_email: ''
  author_url: http://www.iphone-ticker.de/apple-behebt-fehler-in-ibooks-und-merzt-datenfresser-bei-der-audio-ubertragung-aus-40630/
  date: '2013-12-20 13:03:16 -0600'
  date_gmt: '2013-12-20 18:03:16 -0600'
  content: "[&#8230;] von den &#8220;Public Radio Exchange Labs&#8221; geschilderte
    iOS 6-Fehler w&auml;hrend der Daten&uuml;bertragung von Audio-Dateien, Podcasts
    und Musik-Streams ist eher theoretischer [&#8230;]"
- id: 5841
  author: iOS 6.0 bug causes massive data consumption on&nbsp;podcasts | BaciNews
  author_email: ''
  author_url: http://www.bacinews.com/?p=1280
  date: '2013-12-26 10:57:37 -0600'
  date_gmt: '2013-12-26 15:57:37 -0600'
  content: "[&#8230;] Radio Exchange has found and documented a bug in Apple&#8217;s
    iOS 6.0 mobile operating system that apparently causes multiple downloads of podcasts,
    boosting data usage [&#8230;]"
---
<p>We received a report from the folks at <a title="This American Life" href="http:&#47;&#47;thisamericanlife.org">This American Life<&#47;a> of extremely high bills from their CDN for the month of October. It is our belief after researching the problem that this is caused by bugs in the iOS 6 Audio Playback frameworks resulting in files being downloaded multiple times - this could result in dramatic overage charges for both content distributers and data plan customers.</p>
<h3>Background<&#47;h3><br />
We had seen a pretty intense spike in traffic on <a title="99% Invisible" href="http:&#47;&#47;99percentinvisible.org&#47;">99% Invisible<&#47;a> and <a title="The Moth" href="http:&#47;&#47;www.themoth.org&#47;">The Moth<&#47;a> (both of which we host) last month, and had a pretty good idea of the when the spike began as a result. At the time, we had chalked the rather extreme increase in bandwidth (seen below) to the release of Apple's new Podcast app, which featured 99% Invisible prominently at release. We figured that Apple had brought 99% Invisible and The Moth some new subscribers, and were pretty happy once we had battened the hatches a bit.</p>
<p><a href="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2012&#47;11&#47;download-2.png" rel="attachment wp-att-681"><img class="aligncenter size-medium wp-image-681" style="width: 100%;" title="PRX Podcasts Bandwidth Bump" src="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2012&#47;11&#47;download-2.png" alt="" &#47;><&#47;a></p>
<p>But when we heard from <a title="This American Life" href="http:&#47;&#47;thisamericanlife.org">This American Life<&#47;a> that they were seeing an order of magnitude increase in their bandwidth usage, we needed to ensure that there wasn't a problem with our apps that was causing unusual download behavior. Based on our research, it looks like the issue is iOS 6.</p>
<h3>The Behavior<&#47;h3><br />
To begin, we wanted to know if there was a way that we could differentiate traffic originating from one of our apps from traffic originating from other apps. Because we are using the AV Foundation framework, it turned out that we couldn't (the User Agent String is the OS Standard one, not app specific). We were able to see that the version of iOS was 6.0 but not the name of the app playing the audio. However, the Apache logs we looked at suggested something unusual. In the following screenshot, the file being downloaded is 8614457 bytes long.</p>
<p><a href="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2012&#47;11&#47;Screenshot-111412-135-PM-2.png"><img class=" wp-image-651  " style="width: 100%;" title="Too Many Requests" src="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2012&#47;11&#47;Screenshot-111412-135-PM-2.png" alt="" &#47;><&#47;a>Click to view full size.</p>
<p>What you can see is that the first 2 bytes of the file (in most cases, this will be ID, as in ID3) are downloaded in one request and then what appears to be the file being downloaded multiple times on iOS 6 and only once on iOS 5. (This appears to be an artifact of the way that Apache logs range requests, and we have reason to believe that the file was not downloaded many complete times, but there are still clearly problems.)</p>
<p>Following this, we set up a proxy so that we could watch requests as they were coming from the app. The player appears to get into a state where it makes multiple requests per second and closes them rapidly. Because the ranges of these requests seem to overlap and the requests themselves each carry some overhead, this causes a single download of an MP3 to use significantly more bandwidth than in iOS 5. In one case, the playback of a single 30MB episode caused the transfer of over 100MB of data.</p>
<p><a href="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2012&#47;11&#47;Screen-Shot-2012-11-14-at-11.29.30-AM-21.png" rel="attachment wp-att-653"><img class="aligncenter size-medium wp-image-653" style="width: 100%;" title="Rapid Requests" src="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2012&#47;11&#47;Screen-Shot-2012-11-14-at-11.29.30-AM-21.png" alt="" &#47;><&#47;a></p>
<p>We saw this behavior start after a period of behaving correctly (in some cases behaving correctly for about 5 minutes before the issue appeared) in both our own apps and the Apple Podcast app. We were able to reproduce the issue with several podcasts in the Podcast app, including podcasts using Limelight and Akamai CDNs. We have been unable to reproduce the issue using iOS 5 or using iOS 6.0.1, but there are still many people using iOS 6.0.0. We believe that this issue, combined with the bug causing the phone to behave as though it is connected to WiFi even when it is not, could account for the <a href="http:&#47;&#47;www.guardian.co.uk&#47;technology&#47;2012&#47;oct&#47;17&#47;iphone-5-iphone">significant data overages<&#47;a> <a href="https:&#47;&#47;discussions.apple.com&#47;message&#47;20271621?ac_cid=tw123456#20271621">reported with the release of iOS 6<&#47;a>.</p>
<p>The strangest bit of behavior happens when the ranges on these requests reach the end of the file. We were able to consistently see that when the file has completed downloading, it begins downloading again from the beginning of the file and continues for as long as one is streaming the file. This means that, for as long as one is listening to audio being streamed with iOS 6, it is using significant amounts of data. Watch the range headers in this video, which is monitoring the HTTP activity of the stock Podcast app (v1.1.2) on iOS 6.0.0 playing back an episode of This Week in Tech. The file finishes buffering and is completely downloaded at around 0:36.</p>
<p><iframe src="http:&#47;&#47;player.vimeo.com&#47;video&#47;53539483?badge=0" frameborder="0" width="500" height="352"><&#47;iframe></p>
<h3>Conclusion<&#47;h3><br />
There appears to be a system-wide problem with the AV Foundation framework in iOS 6.0.0, resulting in significantly higher data costs to iPhone users and internet distributors. Users who have not done so should immediately upgrade iOS 6.0.0 devices to iOS 6.0.1, which we can confirm appears to fix the issue on Wifi. While <a title="Verizon won't charge for iPhone 5 data problems" href="http:&#47;&#47;arstechnica.com&#47;apple&#47;2012&#47;10&#47;verizon-iphone-5-users-wont-be-charged-for-erroneous-data-usage&#47;">some carriers are offering concessions to customers<&#47;a> who may have been affected by this problem, Apple does not appear to have acknowledged the specific issue. The release notes for iOS 6.0.1 mention a change related to Wifi (likely referring to the problem with devices that reported that they were connected to Wifi while connected to 3G and LTE networks), which may be related to the change which fixed this issue.</p>
<h3>Caveats<&#47;h3><br />
Our tests did not cover 3g or LTE data, as we relied on connecting to Wifi to perform them. Because of the server logs we have access to, it appears that this issue exists over mobile broadband as well.</p>
