---
layout: post
title:  "angular uri templates"
date:   2014-09-15 09:13:03
categories: open-source
author: chrisrhoden
---

Today, I'm happy to announce the **first package extracted from our v4 initiative**
as a standalone open-source project by releasing
[angular-uri-templates](https://github.com/PRX/angular-uri-templates) via Bower
and Github.

<!--more-->

At PRX, we have a number of **open-source libraries** and projects which interested
readers can peruse on [our organization's github page](https://github.com/PRX),
but `angular-uri-templates` represents the first project that has been spun out of
our v4 projects, which are themselves open source. If you're wondering, based on
this fact, what the point of spinning out the library is, I'll do my best to
justify it later in this post. No promises.

### uri templates

[HAL]({% post_url 2014-09-08-why-hal %}) (and many other hypermedia API
standards) rely on a standard layed out in
[RFC 6570](http://tools.ietf.org/html/rfc6570) called *URI Templates*. Basically,
the idea is that you can define a way to interpolate required and optional
components of a URI. This allows hypermedia APIs to, for instance, indicate how
to include a search query when following a hypermedia link.

In its absolute simplest form, a URI Template is a literal URI with no
interpolation – "http://hal.prx.org/api/v1" is a valid template which always
*compiles* to `http://hal.prx.org/api/v1`.

Slightly more complex are URIs that include *required interpolated parameters*,
like "/api/v{version}/resource", which, when compiled with `{version: 3}`
outputs `/api/v3/resource`.

There are several other patterns that allow for more complex compilation, and
the RFC is full of tables that make it pretty easy to read. Check it out if
you're wondering if it's possible to do something particularly weird (**spoiler
alert**: probably).

### angular-uri-templates

At the time that I started writing our AngularJS HAL client, there were a few
existing options for working with URI Templates in javascript, but I opted to
write my own for a few reasons.

First, I didn't want any external dependencies we weren't already using.
AngularJS comes with a few helpers (like `bind` and `forEach`) that some other
packages rely on Underscore or jQuery for. As a rule, *we don't add jQuery to our
AngularJS apps*, and it's worked out well for us.

Second, I wanted to ensure that the package used Angular's module encapsulation,
meaning that at no point is anything leaked to the global scope. This is
something we were able to do very easily because we knew we could depend on
Angular being there.

Third, I needed some capacity for choosing between a few potentially valid URIs
based on "scoring" them for a given set of parameters. For instance, assuming
that we have the URIs `/stories` and `/search?type=stories{&query}`, I wanted a
way to programatically select the former when compiling without the `query`
parameter and the latter when compiling with it.

Finally, because of the way that the spec is written and [a very nice project](
https://github.com/uri-templates/uritemplate-test) which provides everything
needed to write an exhaustive-to-the-rfc test suite, it was relatively easy.

### use it

If you're working in an AngularJS package and need to support URI Templates,
here's a little primer on installing and using the module.

#### installing

We use [Bower](http://bower.io) to manage our frontend dependencies (the ones
that are shipped to the browser) because that's what the rest of the Angular
community uses. So, my recommendation is:

{% highlight sh %}
bower install angular-uri-templates --save-dev # just --save if you don't concat
{% endhighlight %}

Alternatively, you can just download the file from github and drop it into your
project.

#### code

Because it's such a trivial interface, using the library is very easy. In your
application, depend on the `uri-template` module. There is one injectable,
`UriTemplate`. Basic use is as follows:

{% highlight javascript %}
var template = UriTemplate.parse("example.com/{template}{?query*}");
var string = template.expand({template: "foo", query: ["bar", "baz"]});
// string === "example.com/foo?query=bar&query=baz"
{% endhighlight %}

If you're interested in the scoring functionality mentioned above, you just use
the `score` method on your parsed templates, like so:

{% highlight javascript %}
var template = UriTemplate.parse("...");
var template2 = UriTemplate.parse("...");

if (template.score({a:1}) >= template2.score({a:1})) {
  return template.expand({a:1});
} else {
  return template2.expand({a:1});
}
{% endhighlight %}

### extracting the library

There were several ways we could have approached the structure of this library
relative to the rest of the application, and several different ways we have
approached it in the past for our other open source libraries.

1. Start as a separate library, depend on it in the main application.
2. Keep this unit of code as a part of the main application, which is open-source.
3. Start with the library internal to the application but with an eye to extraction.

Obviously, we went with #3 in this case, and it seems to have worked well.

\#1 has also worked well for us in the past, as with projects like
[PlayerHater](https://github.com/PRX/PlayerHater), but in situations where
linking to a local version of the library (as opposed to having to publish
constant revisions while the API stabilizes) isn't a common part of the workflow
that the toolchain encourages, this definitely leads to problems.
[ngPlayerHater](https://github.com/PRX/ngPlayherHater) suffers from this issue –
because it was spun into a separate project before the API was stable, we were
forced into a weird parallel development cycle which is clunky and doesn't make
for a good library. (A new version of ngPlayerHater is being developed as part
of the v4 tree now, following the cycle used for angular-uri-templates).

So that leaves #2. Why not? Well, anecdotally, we know that open source
libraries see more adoption than open source applications in the developer
community. And since v4 requires at least a passing resemblance to a developer
to get set up with, this is the best way to get people to actually use the code
we've written to share (why we think this is important is beyond the scope
of this post). Additionally, the v4 application is available under a more
restrictive *free software* license (by design), while our individual libraries
are typically licensed very *liberally* (dictated by the standards of the
community).

So why did we spin this out *now*? Because we haven't touched it in a long time.
I figured it probably wouldn't need to be touched for a while still, and if it
did, it wouldn't be anything that required me to work in two projects at once.

In other words, we spun it out when I was pretty sure the **API was stable**.

### help us out

So there it is. I invite you to kick the tires on our first of many (fingers
crossed) v4 spinoff. As always, let me know if you run into any issues on the
[github project page](https://github.com/PRX/angular-uri-templates), and thanks!
