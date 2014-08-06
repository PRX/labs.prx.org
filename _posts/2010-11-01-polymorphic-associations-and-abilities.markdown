---
layout: post
status: publish
published: true
title: Polymorphic Associations and Abilities
author:
  display_name: Chris Rhoden
  login: chris
  email: chris@prx.org
  url: http://prx.org/
author_login: chris
author_email: chris@prx.org
author_url: http://prx.org/
wordpress_id: 103
wordpress_url: http://labs.prx.org/?p=103
date: '2010-11-01 15:18:45 -0500'
date_gmt: '2010-11-01 15:18:45 -0500'
categories:
- Ruby
- Rails
tags: []
comments:
- id: 4
  author: michael kirk
  author_email: michael.john.kirk@gmail.com
  author_url: ''
  date: '2010-11-03 04:54:25 -0500'
  date_gmt: '2010-11-03 04:54:25 -0500'
  content: "Hi Chris, I've been snooping around prx.org a good bit lately, after finding
    your apn_on_rails plugin on github.\r\n\r\nI was happy to find this tutorial which
    did a lot to get me to use Ruby's meta-programming faculties as a solution to
    a current problem.\r\n\r\nI did have one problem with this though, the \"post\"
    method defined in your Postable module was not being called. Instead the \"post\"
    method added to the Quote class was being called. \r\n\r\nThis didn't make sense
    to me, until banisterfield on #ruby explained to me:\r\n\r\n21:33  \r\nWhen you
    \"include ModuleName\", the module is put in the class's inheritance chain, so
    methods on the module are resolved after methods on the class. If you remove the
    method on the class, then the method on the module will be exposed.\r\n\r\nSo,
    though \"define post\" in your example defines a method in the module, the \"has_one
    :post\" adds a method to the Quote class, which is further along the inheritance
    chain. By removing the method from the Quote class, we are able to see the method
    in the Postable module.\r\n\r\n<code>\r\n# lib&#47;postable.rb\r\nmodule Postable\r\n
    \ def self.included(klass)\r\n    klass.instance_eval do\r\n      has_one :post,
    :as => :postable\r\n\r\n      remove_method :post #makes modules definition visible
    to class\r\n\r\n      [:title, :user, :created_at, :updated_at].each do |method|\r\n
    \       delegate method, \"#{method}=\", :to => :post\r\n      end\r\n    end\r\n
    \ end\r\n \r\n  def post\r\n    super || build_post\r\n  end\r\nend\r\n<&#47;code>\r\n\r\nAlso,
    consider this a request to allow comment previews on your blog. :)"
- id: 5
  author: michael kirk
  author_email: michael.john.kirk@gmail.com
  author_url: ''
  date: '2010-11-03 19:49:35 -0500'
  date_gmt: '2010-11-03 19:49:35 -0500'
  content: "Another update: My suggestion above isn't working either... \r\n\r\nIt
    seems post.postable is continuously reassigned. I think that means that super.post
    (in lib&#47;postable.rb#post) is always returning nil.\r\n\r\nI don't have time
    right now, but I'll update when I figure it out. \r\n\r\nFYI, I'm using Rails
    2.1"
- id: 6
  author: chris
  author_email: chris@prx.org
  author_url: http://prx.org/
  date: '2010-11-03 19:59:53 -0500'
  date_gmt: '2010-11-03 19:59:53 -0500'
  content: "@michael - I'm a bit embarrassed - this code was executed, but not all
    at the same time. I'll be updating the code from a real rails 2 and rails 3 project
    this evening.\r\n\r\nI see where I went wrong, though, and I feel like a complete
    doofus. In a nutshell, you should hold off on including the module with the post
    method until *after* you have defined the association, and the self.included callback
    is called too late in the chain.\r\n\r\nAs I said, I'll be updating the post to
    reflect reality here soon - and if you're interested in more rails stuff, I'll
    make sure to keep it coming - and I'll keep the silly mistakes to a minimum from
    now on.\r\n\r\n;-)"
- id: 7
  author: chris
  author_email: chris@prx.org
  author_url: http://prx.org/
  date: '2010-11-03 20:21:18 -0500'
  date_gmt: '2010-11-03 20:21:18 -0500'
  content: Okay, the code as updated above works in both rails 2 and rails 3, though
    it may not be the most optimal way to do it. I find that I always fall back to
    alias_method_chain when the ruby object model gets too complicated.
- id: 9
  author: michael kirk
  author_email: michael.john.kirk@gmail.com
  author_url: ''
  date: '2010-11-12 19:18:36 -0600'
  date_gmt: '2010-11-12 19:18:36 -0600'
  content: alias_method_chain is great! Thanks for showing me. Things now work as
    expected.
- id: 13
  author: michael kirk
  author_email: michael.john.kirk@gmail.com
  author_url: ''
  date: '2010-11-15 18:50:28 -0600'
  date_gmt: '2010-11-15 18:50:28 -0600'
  content: "Is there a way to push this abstraction further, so that joins are transparent?
    \r\n\r\nE.g. Quote.find_by_user_id(5) tells me that the quotes table doesn't have
    a column \"user_id\"\r\n\r\nAnd to further complicate things, I'm actually querying
    off of a user's email attribute.\r\n\r\ne.g. Quote.find_by_users_email(\"foo@example.net\")\r\n\r\nI'm
    looking for the AR equivalent to this SQL:\r\n\r\nselect quotes.* from quotes,
    posts, users \r\nwhere quotes.id = posts.postable_id \r\nand posts.postable_type
    = \"Quote\" \r\nand posts.user_id = users.id \r\nand users.email = \"foo@example.net\"\r\n\r\nI'll
    keep looking..."
- id: 14
  author: michael kirk
  author_email: michael.john.kirk@gmail.com
  author_url: ''
  date: '2010-11-15 19:03:05 -0600'
  date_gmt: '2010-11-15 19:03:05 -0600'
  content: "I guess what threw me off, is the Quote only has one user (via it's one
    post), but it seems like you cannot 'has_one' through an intermediate table.\r\n\r\nSo
    my solution, was to include this in lib&#47;postable.rb\r\n\r\nhas_many :users,
    :through => :post\r\n\r\nthen:\r\n\r\nQuote.find(:first, :joins => [:post, :users],
    :conditions => {'users.email' => \"foo@example.net\"})"
- id: 15
  author: chris
  author_email: chris@prx.org
  author_url: http://prx.org/
  date: '2010-11-15 21:15:51 -0600'
  date_gmt: '2010-11-15 21:15:51 -0600'
  content: "@michael Good point! If you are using a recent version of rails, you can
    also include a default scope that does the joins for you automatically by default,
    which I highly recommend."
- id: 5802
  author: Youtube.com
  author_email: isidro_downes@gmail.com
  author_url: http://Youtube.com/watch?v=SzcCHA0LAqk
  date: '2013-08-07 10:44:53 -0500'
  date_gmt: '2013-08-07 14:44:53 -0500'
  content: "My brother recommended I would possibly like this blog.\r\nHe was entirely
    right. This submit actually made \r\nmy day. You can not imagine simply how a
    lot time I had spent for this \r\ninfo! Thanks!"
- id: 5821
  author: abercrombie tシャツ
  author_email: tsmhch@gmail.com
  author_url: http://www.dmfbwr.com
  date: '2013-09-11 05:44:15 -0500'
  date_gmt: '2013-09-11 09:44:15 -0500'
  content: "アバクロンビー&amp;フィッチ"
---
<p>I recently had a conversation with an old friend who is in the process of learning Ruby on Rails. He had run into a problem with polymorphic associations and I recommended he try something I had done for another project using polymorphic associations. It turns out that it was a good solution to the problem, and since I haven't seen the pattern talked about elsewhere, I thought I should get it down on paper.</p>
<p>For the sake of example, let's say we're building a Tumblr clone, where the polymorphic association lives inside of a Post model, and the different kinds of posts are all models unto themselves. We could use single table inheritance, but maybe the models vary enough or the storage method differs enough that that's a bad idea. For that matter, Single Table Inheritance often just feels wrong.</p>
<p>Simplicity will work best in this case, so let's say that every post has a title, timestamps, and belongs to a user.</p>
<p>[ruby]<br />
# db&#47;migrate&#47;001_create_posts.rb<br />
class CreatePosts < ActiveRecord::Migration<br />
  def self.up<br />
    create_table :posts do |t|<br />
      t.string :title<br />
      t.references :user<br />
      t.integer :postable_id<br />
      t.string &nbsp; :postable_type<br />
      t.timestamps<br />
    end<br />
  end</p>
<p>  def self.down<br />
    drop_table :posts<br />
  end<br />
end<br />
# app&#47;models&#47;post.rb<br />
class Post < ActiveRecord::Base<br />
  belongs_to :user<br />
  belongs_to :postable, :polymorphic => true<br />
end<br />
[&#47;ruby]</p>
<p>Before we even get into the different kinds of posts we might want to make, let's abstract this model so that we can tack it onto nearly any model in our application. How? A little bit of metaprogramming.</p>
<p>[ruby]<br />
# lib&#47;postable.rb<br />
module Postable<br />
  def self.included(klass)<br />
    klass.instance_eval do<br />
      has_one :post, :as => :postable<br />
      alias_method_chain :post, :autocreate</p>
<p>      [:title, :user, :created_at, :updated_at].each do |method|<br />
        delegate method, "#{method}=", :to => :post<br />
      end<br />
    end<br />
  end</p>
<p>  def post_with_autocreate<br />
    post_without_autocreate || build_post<br />
  end<br />
end<br />
[&#47;ruby]</p>
<p>What does this get us? Well, in just a few lines of code, we have saved ourselves from really having to think about this problem very hard again. Consider creating two kinds of posts, something like a quote post and a freeform text post (called a blob, in this example):</p>
<p>[ruby]<br />
# db&#47;migrate&#47;002_create_quotes_and_blobs.rb<br />
class CreateQuotesAndBlobs < ActiveRecord::Migration<br />
  def self.up<br />
    create_table :quotes do |t|<br />
      t.string :quotee<br />
      t.text :quote<br />
    end<br />
    create_table :blobs do |t|<br />
      t.text :content<br />
    end<br />
  end</p>
<p>  def self.down<br />
    drop_table :quotes<br />
    drop_table :blobs<br />
  end<br />
end<br />
[&#47;ruby]</p>
<p>I have deliberately chosen separate interfaces for these two kinds of model so I can show off some other stuff later. But to get them posting, all we need to do is include our "Postable" module and we are up and running:</p>
<p>[ruby]<br />
# app&#47;models&#47;quote.rb<br />
class Quote < ActiveRecord::Base<br />
  include Postable<br />
end</p>
<p># app&#47;models&#47;blob.rb<br />
class Blob < ActiveRecord::Base<br />
  include Postable<br />
end<br />
[&#47;ruby]</p>
<p>That's it. We can get started immediately by creating our forms. Because of the Postable interface we have created, both models will automatically have the fields on Post (and, in fact, will work transparently thanks to delegation). The only other thing we need to think about is creating a common interface back to the individual post types from the Post model. We can do this with a helper, the model, or we can take advantage of Rails' partial rendering and just create a <code>views&#47;quote&#47;_quote.html.erb<&#47;code> and <code>views&#47;blob&#47;_blob.html.erb<&#47;code>. Those views might look something like:</p>
<p>[ruby]<br />
# app&#47;views&#47;blob&#47;_blob.html.erb</p>
<h2>
  <%= blob.title %><br />
<&#47;h2></p>
<div class='byline'>
  by <%= link_to blob.user.name, blob.user %> on <%= blob.created_at %><br />
<&#47;div></p>
<div class='blob-content'>
  <%= blob.content %><br />
<&#47;div><br />
[&#47;ruby]</p>
<p>I'll leave the quote partial as an exercise for the reader.</p>
<p>At this point, we can put all of our posts on a single page like this:</p>
<p>[ruby]<br />
# app&#47;controllers&#47;posts_controller.rb<br />
class PostsController < ApplicationController<br />
  def index<br />
    @posts = Post.order_by('created_at DESC')<br />
  end<br />
end</p>
<p># app&#47;views&#47;posts&#47;index.html.erb</p>
<h1>All Posts<&#47;h1><br />
<%- @posts.each do |post| %><br />
  <%= render post %><br />
<% end -%><br />
[&#47;ruby]</p>
<p>The same technique can be used in a number of situations, such as many kinds of authenticable users with one login screen or some other sort of shared attributes. What's nice is that it is trivially extensible. You create a model with any extra fields that you need, include your module, and you're up and running.</p>
