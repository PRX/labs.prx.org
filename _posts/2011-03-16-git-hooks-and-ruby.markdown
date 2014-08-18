---
layout: post
title: Git Hooks and Ruby
date: '2011-03-16 14:03:32 -0400'
categories:
- iPhone
- Git
- Ruby
author: chrisrhoden
permalink: /2011/03/16/git-hooks-and-ruby
---
<p>Happy Wednesday, everyone! I don't have very much time this week, so I'll keep this short and sweet: While we've historically used <a href="http://subversion.apache.org/">Subversion</a> at PRX, we have recently been migrating to <a href="http://git-scm.org">Git</a> to take advantage of some <a href="http://github.com">awesome tool</a>s and to better <a href="http://github.com/PRX">interact with the community</a>.</p>
<p>We're also most comfortable with <a href="http://ruby-lang.org">Ruby</a>, so when I was asked to look into setting up a build server for our iOS apps, there wasn't much question as to how I would do it.</p>
<p>I set up a bare git repository running on a spare MacBook Pro with XCode and found the commands that were necessary to run when a new build was ready to be deployed. The next step was to set up the appropriate hook for that Git repository so that the builds could be triggered by a push.</p>
<p>In the SVN world, this would be a <code>post-commit</code> hook, but because Git works differently (one push can contain many commits), the hook we are interested in is the <code>post-receive</code> hook. You can take a look in your <code>.git/hooks</code> directory for some samples, most of which are written in <code>sh</code>. We wanted something in ruby, and here's what we came up with:</p>
<p>[ruby]<br />
#!/usr/bin/env ruby</p>
<p>require 'rubygems'<br />
require 'grit'</p>
<p>repo = Grit::Repo.new(File.join(File.dirname(__FILE__), '..','..'))<br />
while msg = gets<br />
  old_sha, new_sha, ref = msg.split(' ', 3)</p>
<p>  commit = repo.commit(new_sha)</p>
<p>  case ref<br />
  when %r{^refs/heads/(.*)$}<br />
    branch = $~[1]<br />
    if old_sha.to_i(16) == 0</p>
<p>      # A new branch was pushed</p>
<p>    else</p>
<p>      # A branch was updated</p>
<p>    end</p>
<p>  when %r{^refs/tags/}<br />
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
[/ruby]</p>
<p>Simply save this in your <code>.git/hooks/post-receive</code> file and make it executable. Then, every time you push to this remote, the script will execute. You can make whatever modifications are necessary for your specific application.</p>
<p>I hope this helps everyone working with Git hooks and Ruby!</p>
