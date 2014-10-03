---
layout: post
title:  "JWT This Down"
date:   2014-10-03
categories: utility
author: eveadele
---

I’ve been working as a developer at PRX for about a month now, and for most of that time, I’ve been learning about JWTs. “What is a JWT and why should I even remotely care?” you may be wondering. Well, JWT stands for JSON Web Token, and it’s pronounced “jot” (hence the world’s lamest pun). It’s basically a way of encoding and signing JSON data. They’re cool because when you decode them you get plain old JSON, which is easy for web apps to understand. You should care if you happen to be setting up an authentication scheme for your web app and you need an easy way to create access tokens.

<!--more-->

So, let’s talk a little bit about authentication in PRX.org v4. Authentication happens in a tiny little app that takes the user’s credentials, makes sure they’re correct, and then issues a JWT. Then the PRX.org backend reads the JWT using a [gem]("https://github.com/PRX/rack-prx_auth") we built that makes sure the token came from us and that it’s got all the necessary information in it. If everything’s the way it should be, the user gets to access the site. (My next project is regulating what users are allowed to do once they get there.)

When a user enters their username and password, the authentication app creates an access token out of a JSON object. The JSON object contains the user ID, the time the token was issued, and when it will expire, plus some other stuff required by the [OpenID]("http://openid.net/specs/openid-connect-implicit-1_0.html") specification. (I won’t get into OpenID because it’s incredibly complicated and boring, but basically it’s a set of rules for requesting and granting access to apps.)

The thing about this JSON object is that there’s nothing secret in it. JWTs are not about protecting sensitive information. Anybody can decode a JWT and see the original JSON. We used a gem called [JSON::JWT]("https://github.com/nov/json-jwt") (Good name, right?) in which all you have to do to decode a JWT is pass the decode method the symbol :skip_verification. This is nice because when we read the JWT later, we can decode it first to see whether we should even bother verifying it. If it says right there in the JSON that the token was issued by someone else, we know not to grant access.

But if anyone can decode a JWT, why is it at all useful for security? Because it lets you know for certain who issued the token, so when PRX.org receives a token, we know it was issued by our authentication app. When the authentication app creates a token, it encodes the JSON data and then signs it with our private key. Our gem decodes with the :skip_verification option, but then it verifies the token with our public key, and if that doesn’t work (or the token is expired), it doesn’t grant access to the site. If you know what private keys and public keys are, skip this next paragraph.

If you are asking yourself, “What’s a public key? What’s a private key? What’s signing?”, allow me to explain using a little technique I picked up as an English major: metaphor. Let’s say you wanted to send gifts to all your friends, but you wanted them to be certain that the gifts came from you and not from a nefarious imposter. So, you invent a special lock that uses two keys. One key is for locking, and one is for unlocking. You give the unlocking key out to all your friends and keep the locking one for yourself. That way, when you send your friends gifts in a locked box, they can open the lock with their unlocking, or public, keys. They know that if their key successfully opens the lock, the gift is definitely from you, because you’re the only one who could have closed the lock. Now imagine the keys are super long strings of characters, the box is a JWT, and the gift is a JSON object. When you sign something with your private key, you are locking it up with your special lock. The thing is, the lock doesn’t actually hold the box shut. It’s just kinda there on the outside so that if you have the public key, you can test to see if the corresponding private key was used to lock it. This way nobody can go around sending your friends crappy gifts and pretending the’re from you. When we verify a JWT, we’re checking to see if our public key fits the lock.

So that’s the deal with JWTs as we use them. You can poke around [our source code]("https://github.com/prx/prx.org-backend") or the [source code for JSON::JWT]("https://github.com/nov/json-jwt/") to learn more.
