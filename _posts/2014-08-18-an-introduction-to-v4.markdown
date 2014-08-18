---
layout: post
title:  "an introduction to v4"
date:   2014-08-18 11:09:03
categories: applications
author: chrisrhoden
---

As I mentioned briefly in our
[relaunch post]({{"update/2014/08/06/labs-two-point-oh/" | prepend: site.baseurl }}),
a fairly dramatic set of technical changes recently started taking place at PRX.
The biggest and most visible of these changes has been our primary marketplace
app, which is being rewritten as an
[open-source Ruby on Rails based API](https://github.com/PRX/PRX.org-Backend)
and an
[open-source Angular.js web application](https://github.com/PRX/PRX.org-Frontend).

In this post, I'll give a whirlwind tour of where we are with these projects,
where we're planning on going, and how we reached some of the fundamental
decisions about the structure we are pursuing. I'll plan on saving some of the
longer (and more interestng) stuff about the individual projects for future
posts.

### some (non-technical) background

If you've heard of PRX, more than likely it was in the context of an
episode of [The Moth podcast](http://themoth.org), or more recently the end of [This American Life](http://thislife.org),
which we distribute (over the internet, more on that in a future post) to public
radio stations around the country. We also have a history building [native mobile
apps](http://apps.prx.org) for national radio shows and public radio stations.
Along with
[other projects and initiatives that I don't have time to list](http://www.prx.org/projects),
as well as our whole set of content initiatives that don't involve any internal
engineering, it's easy to forget our oldest and most important project: the
open marketplace that lives right at [prx.org](http://www.prx.org).

The open marketplace is a website where radio producers can upload their stories
and sell them to public radio stations and interested third parties around the
country. It's a way for stations to share stories they produced for their local
audience with any of the *hundreds of other public and community radio stations*,
for free or for a licensing fee. It's a way for *independent producers* to sell
their stories to stations, and *anyone* can create a free account and upload
their stories. We think it's an important and special thing. That's why we say
we're **making public radio more public**.

### v3 (the technical stuff)

The original marketplace was written in Java (so I have been told, that's all
well before my time), twice. When it came time to do a major upgrade again, Java
was abandoned in favor of Ruby on Rails. This was **v3**.

It's a pretty standard Rails app – pages are rendered server side, there's a
test suite, and a Gemfile. Unfortunately, prx.org has always been one of the
easiest projects to ignore or push back, because the stakeholders are largely
internal. As a result, it started getting less of the good kind of attention and
more of the very quick fix for a devastating problem kind of attention.

(I should also note here that we've only got 3 full-time developers on staff.
PRX is a non-profit. Just sayin'.)

### v4 (what and why)

As we looked into shifting our focus for the marketplace from a purely B2B
application to one that helps producers reach *all kinds of audiences*, we
recognized that a fairly dramatic redesign was required. Partly as a
demonstration of our commitment to the marketplace, and partly to make sure we
repaired all of the broken windows that had accumulated over the past several
years, we decided to take the opportunity to modernize the entire stack.

To that end, we decided to develop a pair of applications – an
[API](https://hal.prx.org) and a [JavaScript application](https://m.prx.org/) as
its first and most complete reference client.

Why did we choose two separate projects? First, and most obvious, is that doing
so draws a bright and shining line between the concerns of business logic and
display logic. Additionally, the state of the art on the web has moved
dramatically, frankly *allowing* us to build this kind of application where it
might have been prohibitively complex in the past. But there are several other
lessons we've learned since we built v3 that we wanted to put into practice
during our buildout of v4.

**First**, building lots of mobile applications has made us appreciate even more
the importance of a *high quality API*.

We knew that, if we wanted to make a great API a priority, we needed to be the
first people to use new features. So, we're
[eating our own dogfood](http://en.wikipedia.org/wiki/Eating_your_own_dog_food),
so to speak.

**Second**, *designing for speed* has to happen from the start.

Caching is great, but if a given request can vary wildly, or a single change can
lead to a large number of cached records becoming invalid, you've made a ton of
work for yourself. If you approach the design of your API with this in mind,
you'll have a much better time.

We've also designed the frontend to be easily cachable. The web application
compiles to a single HTML file, a single Javascript file, and a single CSS file.
These same files are served for any request, and they can be easily cached in
memory on the server and in the browser on the client.

**Finally**, *bandwidth is the enemy* on mobile devices.

It is nearly always better to download something once than it is to download it
every time it is needed. The HTML5 application wave is essentially that –
download your logic and templates once, and only download the part that changes
(the data) on demand. I'd love to show you what a difference this has made on
mobile clients, but I'm pretty sure you'd be bored with how obvious this is.

Just to reiterate – the source code for both of these applications is fully
available on [our github page](https://github.com/PRX), and live versions are
available for poking at [hal.prx.org](https://hal.prx.org) and
[m.prx.org](https://m.prx.org), respectively. In fact, the current version is
serving live traffic for mobile visitors and has been for a few months now.

#### the backend

In many ways, the backend is unremarkable (which is how we like it). There's a
bunch of genuinely interesting stuff that my boss has worked on (and that I will
bug him to write about), but it's ultimately a Rails application serving JSON.

We decided to try out building a hypermedia API, so we looked around to see if
there were existing standards that made sense for our use. After considering
several options, we landed on
[the Hypertext Application Language (HAL)](http://stateless.co/hal_specification.html)
. It seemed like the lowest ceremony of the bunch we looked at, and the most
like what we would have built if we had just built whatever we wanted.

One of the things we're planning on doing going forward is architecting the API
as a constellation of small APIs that can interact with one-another. We're far
from the only people talking about
[microservices](https://www.google.com/search?q=microservices) these days, and
we're not even quite sure it's going to make sense for lots of what we do at
PRX, but we do know that using hypermedia APIs affords us a tremendous amount of
flexibility in how we structure our API. It even permits us to change that
structure in mid stream by changing links while the API clients continue to work
with no deployment necessary.

Another benefit of a hypermedia API (and of building to a standard) is that
we're able to drop in projects like the
[API Browser](https://hal.prx.org/browser/index.html#/) to allow anyone to
explore the API. Because we're trying to make sure the API remains self-
documenting, this should be a pleasant experience for the technically minded.

#### the frontend

The first client of the API is our new website, and what most people will
experience as prx.org v4. It's an Angular.js application, and it's compiled into
as few files as possible (this isn't strictly true, for reasons I will get into
in a later post).

When a browser makes a request for a page on m.prx.org, it
will always be served the same HTML file and which links to the Javascript and
CSS files necessary to render the application.

In many ways, we're pioneers in terms of the structure of such an application.
Lots has been said about a structure very similar to the one we are using, where
individual components of the website are broken into nested modules as much as
possible. This is working well for us, though we're still coming up with the
conventions that will dictate the way that the application is built out going
forward.

### wrapping up

That's a whirlwind overview of the structure of version 4 of the open
marketplace. While there is still a tremendous amount of work to be done, and
many new ideas and theories to be tested, I've never been more confident in the
approaches we are taking at PRX. Keep an eye out for future posts where we will
go into much greater detail about some more specific design decisions and how
they have paid off for us.

\- chrisrhoden
