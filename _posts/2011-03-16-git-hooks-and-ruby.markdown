---
layout: post
status: publish
published: true
title: Git Hooks and Ruby
author:
  display_name: Chris Rhoden
  login: chris
  email: chris@prx.org
  url: http://prx.org/
author_login: chris
author_email: chris@prx.org
author_url: http://prx.org/
wordpress_id: 259
wordpress_url: http://labs.prx.org/?p=259
date: '2011-03-16 14:03:32 -0500'
date_gmt: '2011-03-16 19:03:32 -0500'
categories:
- iPhone
- Git
- Ruby
tags: []
comments:
- id: 5436
  author: Erpheus
  author_email: erpheus@gmail.com
  author_url: ''
  date: '2012-10-11 14:38:31 -0500'
  date_gmt: '2012-10-11 18:38:31 -0500'
  content: "Thanks a lot.\r\nWorks like a charm."
- id: 5757
  author: Vlady
  author_email: kosh.vlad@gmail.com
  author_url: ''
  date: '2013-03-15 14:18:59 -0500'
  date_gmt: '2013-03-15 18:18:59 -0500'
  content: "I've faced a problem.\r\nMessage looks like\r\nremote: &#47;usr&#47;local&#47;rvm&#47;rubies&#47;ruby-1.9.3-p392&#47;lib&#47;ruby&#47;gems&#47;1.9.1&#47;gems&#47;grit-2.5.0&#47;lib&#47;grit&#47;repo.rb:51:in
    `initialize': &#47;home&#47;git&#47;bens (Grit::InvalidGitRepositoryError)\r\nbut
    my repository is\r\n&#47;home&#47;git&#47;bens&#47;bens-repo.git\r\nCould you
    help me to resolve the issue please?\r\nSeems like it is something tiny thing
    that I missed :("
---
<p>Happy Wednesday, everyone! I don't have very much time this week, so I'll keep this short and sweet: While we've historically used <a href="http:&#47;&#47;subversion.apache.org&#47;">Subversion<&#47;a> at PRX, we have recently been migrating to <a href="http:&#47;&#47;git-scm.org">Git<&#47;a> to take advantage of some <a href="http:&#47;&#47;github.com">awesome tool<&#47;a>s and to better <a href="http:&#47;&#47;github.com&#47;PRX">interact with the community<&#47;a>.</p>
<p>We're also most comfortable with <a href="http:&#47;&#47;ruby-lang.org">Ruby<&#47;a>, so when I was asked to look into setting up a build server for our iOS apps, there wasn't much question as to how I would do it.</p>
<p>I set up a bare git repository running on a spare MacBook Pro with XCode and found the commands that were necessary to run when a new build was ready to be deployed. The next step was to set up the appropriate hook for that Git repository so that the builds could be triggered by a push.</p>
<p>In the SVN world, this would be a <code>post-commit<&#47;code> hook, but because Git works differently (one push can contain many commits), the hook we are interested in is the <code>post-receive<&#47;code> hook. You can take a look in your <code>.git&#47;hooks<&#47;code> directory for some samples, most of which are written in <code>sh<&#47;code>. We wanted something in ruby, and here's what we came up with:</p>
<p>[ruby]<br />
#!&#47;usr&#47;bin&#47;env ruby</p>
<p>require 'rubygems'<br />
require 'grit'</p>
<p>repo = Grit::Repo.new(File.join(File.dirname(__FILE__), '..','..'))<br />
while msg = gets<br />
  old_sha, new_sha, ref = msg.split(' ', 3)</p>
<p>  commit = repo.commit(new_sha)</p>
<p>  case ref<br />
  when %r{^refs&#47;heads&#47;(.*)$}<br />
    branch = $~[1]<br />
    if old_sha.to_i(16) == 0</p>
<p>      # A new branch was pushed</p>
<p>    else</p>
<p>      # A branch was updated</p>
<p>    end</p>
<p>  when %r{^refs&#47;tags&#47;}<br />
    tag_object = Grit::GitRuby::Repository.new(repo.path).get_object_by_sha1(new_sha)<br />
    tag = tag_object.tag<br />
    tag_message = tag_object.message<br />
    if old_sha.to_i(16) == 0</p>
<p>      # A tag was created</p>
<p>    else</p>
<p>      # A tag was moved</p>
<p>    end<br />
  end<br />
end<br />
[&#47;ruby]</p>
<p>Simply save this in your <code>.git&#47;hooks&#47;post-receive<&#47;code> file and make it executable. Then, every time you push to this remote, the script will execute. You can make whatever modifications are necessary for your specific application.</p>
<p>I hope this helps everyone working with Git hooks and Ruby!</p>
