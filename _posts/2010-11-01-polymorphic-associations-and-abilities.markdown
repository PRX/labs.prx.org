---
layout: post
title: Polymorphic Associations and Abilities
date: '2010-11-01 15:18:45 -0400'
categories:
- Ruby
- Rails
author: chrisrhoden
---
<p>I recently had a conversation with an old friend who is in the process of learning Ruby on Rails. He had run into a problem with polymorphic associations and I recommended he try something I had done for another project using polymorphic associations. It turns out that it was a good solution to the problem, and since I haven't seen the pattern talked about elsewhere, I thought I should get it down on paper.</p>
<p>For the sake of example, let's say we're building a Tumblr clone, where the polymorphic association lives inside of a Post model, and the different kinds of posts are all models unto themselves. We could use single table inheritance, but maybe the models vary enough or the storage method differs enough that that's a bad idea. For that matter, Single Table Inheritance often just feels wrong.</p>
<p>Simplicity will work best in this case, so let's say that every post has a title, timestamps, and belongs to a user.</p>
<p>[ruby]<br />
# db/migrate/001_create_posts.rb<br />
class CreatePosts &lt; ActiveRecord::Migration<br />
  def self.up<br />
    create_table :posts do |t|<br />
      t.string :title<br />
      t.references :user<br />
      t.integer :postable_id<br />
      t.string   :postable_type<br />
      t.timestamps<br />
    end<br />
  end</p>
<p>  def self.down<br />
    drop_table :posts<br />
  end<br />
end<br />
# app/models/post.rb<br />
class Post &lt; ActiveRecord::Base<br />
  belongs_to :user<br />
  belongs_to :postable, :polymorphic =&gt; true<br />
end<br />
[/ruby]</p>
<p>Before we even get into the different kinds of posts we might want to make, let's abstract this model so that we can tack it onto nearly any model in our application. How? A little bit of metaprogramming.</p>
<p>[ruby]<br />
# lib/postable.rb<br />
module Postable<br />
  def self.included(klass)<br />
    klass.instance_eval do<br />
      has_one :post, :as =&gt; :postable<br />
      alias_method_chain :post, :autocreate</p>
<p>      [:title, :user, :created_at, :updated_at].each do |method|<br />
        delegate method, &quot;#{method}=&quot;, :to =&gt; :post<br />
      end<br />
    end<br />
  end</p>
<p>  def post_with_autocreate<br />
    post_without_autocreate || build_post<br />
  end<br />
end<br />
[/ruby]</p>
<p>What does this get us? Well, in just a few lines of code, we have saved ourselves from really having to think about this problem very hard again. Consider creating two kinds of posts, something like a quote post and a freeform text post (called a blob, in this example):</p>
<p>[ruby]<br />
# db/migrate/002_create_quotes_and_blobs.rb<br />
class CreateQuotesAndBlobs &lt; ActiveRecord::Migration<br />
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
[/ruby]</p>
<p>I have deliberately chosen separate interfaces for these two kinds of model so I can show off some other stuff later. But to get them posting, all we need to do is include our "Postable" module and we are up and running:</p>
<p>[ruby]<br />
# app/models/quote.rb<br />
class Quote &lt; ActiveRecord::Base<br />
  include Postable<br />
end</p>
<p># app/models/blob.rb<br />
class Blob &lt; ActiveRecord::Base<br />
  include Postable<br />
end<br />
[/ruby]</p>
<p>That's it. We can get started immediately by creating our forms. Because of the Postable interface we have created, both models will automatically have the fields on Post (and, in fact, will work transparently thanks to delegation). The only other thing we need to think about is creating a common interface back to the individual post types from the Post model. We can do this with a helper, the model, or we can take advantage of Rails' partial rendering and just create a <code>views/quote/_quote.html.erb</code> and <code>views/blob/_blob.html.erb</code>. Those views might look something like:</p>
<p>[ruby]<br />
# app/views/blob/_blob.html.erb<br />
&lt;h2&gt;<br />
  &lt;%= blob.title %&gt;<br />
&lt;/h2&gt;<br />
&lt;div class='byline'&gt;<br />
  by &lt;%= link_to blob.user.name, blob.user %&gt; on &lt;%= blob.created_at %&gt;<br />
&lt;/div&gt;<br />
&lt;div class='blob-content'&gt;<br />
  &lt;%= blob.content %&gt;<br />
&lt;/div&gt;<br />
[/ruby]</p>
<p>I'll leave the quote partial as an exercise for the reader.</p>
<p>At this point, we can put all of our posts on a single page like this:</p>
<p>[ruby]<br />
# app/controllers/posts_controller.rb<br />
class PostsController &lt; ApplicationController<br />
  def index<br />
    @posts = Post.order_by('created_at DESC')<br />
  end<br />
end</p>
<p># app/views/posts/index.html.erb<br />
&lt;h1&gt;All Posts&lt;/h1&gt;<br />
&lt;%- @posts.each do |post| %&gt;<br />
  &lt;%= render post %&gt;<br />
&lt;% end -%&gt;<br />
[/ruby]</p>
<p>The same technique can be used in a number of situations, such as many kinds of authenticable users with one login screen or some other sort of shared attributes. What's nice is that it is trivially extensible. You create a model with any extra fields that you need, include your module, and you're up and running.</p>
