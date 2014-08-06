---
layout: post
status: publish
published: true
title: Our Experience with Chef
author:
  display_name: Chris Rhoden
  login: chris
  email: chris@prx.org
  url: http://prx.org/
author_login: chris
author_email: chris@prx.org
author_url: http://prx.org/
wordpress_id: 336
wordpress_url: http://labs.prx.org/?p=336
date: '2011-07-05 14:32:34 -0500'
date_gmt: '2011-07-05 19:32:34 -0500'
categories:
- Ruby
tags: []
comments: []
---
<p>Part of the rollout for some automation features we have been working on is a requirement that we have a very scalable set of FTP servers. We've been using Amazon Web Services for many things at PRX, and the ability to spin up very cheap instances on both sides of the country is a huge win for performance and reliability. Unfortunately, there's a fair amount of work that needs to be done when a new server is spun up. Because the specifics of this work changes with some frequency and because we have a number of different kinds of servers we need to be able to spin up (and more are coming), the standard use of AMIs will be a nightmare to maintain.</p>
<p>Enter <a href="http:&#47;&#47;www.opscode.com&#47;chef&#47;">Chef<&#47;a>.</p>
<p>Chef allows us to develop (in source control) a system which describes both a particular configuration we would like our servers to have, and how to achieve this configuration. The configuration files are implemented in ruby, so the learning curve is primarily around nomenclature (and there's a whole lot of it to learn). That having been said, most of the new concepts introduced by chef make sense once the system at large, "clicks." I don't expect a blog post to explain all of the nuance of an infrastructure configuration framework, but I think I can give enough introduction that one can walk away confident in their ability to do some simple deployments.</p>
<h3>Clients and Servers<&#47;h3><br />
[caption id="attachment_346" align="alignright" width="300" caption="An Example Chef Deployment"]<a rel="attachment wp-att-346" href="http:&#47;&#47;labs.prx.org&#47;2011&#47;07&#47;05&#47;our-experience-with-chef&#47;chef-setup&#47;"><img class="size-medium wp-image-346" title="Chef Setup" src="http:&#47;&#47;labs.prx.org&#47;wp-content&#47;uploads&#47;2011&#47;07&#47;Chef-Setup-300x236.png" alt="An Example Chef Deployment" width="300" height="236" &#47;><&#47;a>[&#47;caption]</p>
<p>The first thing one needs to learn about Chef is the notion of a <strong>server<&#47;strong> and a <strong>client<&#47;strong>. A chef server holds information about the chef clients ((This is not strictly true - chef makes a distinction between <strong>clients<&#47;strong> and <strong>nodes<&#47;strong>; the former being something which interacts with the chef server and the latter being something which is assigned a set of code to execute. In nearly every case, however, the two are interchangeable. Just remember that when you assign something a role or recipe, you are assigning a <strong>node<&#47;strong>, and when you download updated configuration details from the chef server, you are using a <strong>client<&#47;strong>.))&nbsp;in your deployment environment and what configuration they should have in order to be considered set up. It also stores the code you have written so that clients can achieve the expected configuration, but it never executes it. A chef server can be thought of, in simple terms, as a database.</p>
<p>One can install the server themselves, or can opt to use the Opscode platform, which is free for smaller deployments.</p>
<p>Clients pull down information about how they are expected to configure themselves from the chef server, and then execute the code you have written to get to that point. They do this by manually or periodically running <code>chef-client<&#47;code>, which reads from the chef server what code it will execute, then downloads and executes it.</p>
<h3>Cookbooks and Recipes<&#47;h3><br />
The ruby code stored on a chef server is grouped into files called <strong>recipes<&#47;strong>, and those recipes are grouped into directories called <strong>cookbooks<&#47;strong>. Usually, cookbooks are collections of recipes that relate to a specific software package. For instance, one might write a cookbook for the <a href="http:&#47;&#47;httpd.apache.org&#47;">Apache web server<&#47;a> that included a recipe for the web server itself, a recipe for <a href="http:&#47;&#47;www.modssl.org&#47;">mod_ssl<&#47;a>, and a recipe for <a href="http:&#47;&#47;www.webdav.org&#47;mod_dav&#47;">mod_dav<&#47;a>.</p>
<p>Many cookbooks (and, by extension, many many recipes), are available on the <a href="http:&#47;&#47;community.opscode.com&#47;cookbooks">opscode community website<&#47;a>. If you see one you would like to install, you can use the <code>knife cookbook site install <cookbook name><&#47;code> command. Recently, Opscode did a major overhaul and made sure that many of these cookbooks are in working order. Please be aware, however, that many of them were written months or years ago, and may require some tweaking, especially if the software package they work with changes often.</p>
<h3>Run Lists and Roles<&#47;h3><br />
Another construct to be aware of is the, <strong>run list<&#47;strong>. These are usually recipes, listed in order, that should be executed by the client every time it pulls information down from the chef server. Chef also supports&nbsp;<strong>roles<&#47;strong>, which are run lists in their own right, but can be referenced in other roles and run lists. In our current deployment system, we have a few roles which each contain several recipes, and each Chef client is configured to have only one or two roles in its run list.</p>
<h3>Starting a Chef-Managed Instance<&#47;h3><br />
The typical workflow for starting a new instance is to spin one up, install chef, register it as a client with your chef server, add things to the client's run list on the chef server, and then run <code>chef-client<&#47;code> to pull down the run list and execute it. Quite a mouthful!</p>
<p>Thankfully, in practice, this can easily be rolled up into one step. Because we are making use of Amazon EC2 at PRX, we installed the <code>knife-ec2<&#47;code> gem and we can run <code>knife ec2 server create -r "run list"<&#47;code>. This spins up an ec2 instance, bootstraps chef, registers it as a client with the chef server, and sets the run list appropriately. It also runs <code>chef-client<&#47;code> automatically when everything is set up, so one should have a new EC2 instance with all of the software one wants installed and configured.</p>
<h3>Wrapping Up<&#47;h3><br />
We've covered the actual steps involved in using a configured chef server to deploy new EC2 instances, but we haven't touched on how to actually configure the server. For that, I will refer you to the fantastic <a href="http:&#47;&#47;wiki.opscode.com&#47;display&#47;chef&#47;Chef+Repository">Chef Repo article on the Opscode Wiki<&#47;a>, which will explain the directory structure and basic workings of the repository you will use to interact with the chef server.</p>
<p>I found much of the language involved in learning the chef framework confusing when I was learning it, and I hope that this article serves to make the more fundamental concepts that are needed a little easier to understand.</p>
