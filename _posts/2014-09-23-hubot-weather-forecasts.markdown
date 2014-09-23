---
layout: post
title:  "Hubot weather forecasts"
date:   2014-09-23 08:46:18
categories: utility
author: farski
---
Github's [Hubot](https://hubot.github.com/) makes it very easy to automate many
parts of our team's workflow. One area we thought it could also help with was
making sure no one gets caught out in bad weather.

<!--more-->

Like many organizations, we have made [group chat](https://www.hipchat.com/) a big part of how things get done at PRX. The ability to quickly build custom Hubot scripts to meet our specific needs has been great.

Even though there are countless ways to check the weather now, between apps and widgets and Siris, we still noticed a problem. At the end of the day, after people had been focused on something for the last several hours, checking the weather only to see that it will start pouring in 10 minutes wasn't actually the useful.

Nearly everyone at PRX commutes on foot or has to wait for public transportation, so bad weather can be a real downer. Occasionally someone would notice an impending storm and send an alert over HipChat. This obviously wasn't a reliable system, but it did spark the notion that if a robot were continually checking the weather alerts could be much more reliable and accurate. That would ensure people see the alerts without having to do any work and could easily schedule around any problematic weather.

It was a simple premise and Hubot made it easy to get off the ground, but getting to behave the way you would actually expect was a bit more challenging.

### The basics

[Forecast](http://forecast.io), though not without its quirks, had become a de facto standard around the office for checking the weather. They offer a very nice [API](https://developer.forecast.io/) that you can hit 1,000 times a day for free. That's plenty considering we only need to check every few minutes during the workday.

Their API offers several levels of forecast data: daily, hourly, minute-by-minute, etc. The purpose of this robot is short-term notifications, so I'm really just using the minutely data, which, at best, provides a weather prediction for each of the next 60 minutes.

Pulling down the data from the API and parsing it was easy. It became obvious, though, that using the data to reliably and meaningfully communicate the weather to group chat was not so simple.

### The not basics

To avoid boring you with the many iterations of decision trees that were tried, here's a quick rundown of how things shook out. Keep in mind the goal here was to create meaningful notifications that were somewhat pessimistic, and included as little noise as possible.

One of the keys to producing meaningful notifications was creating some persistence between weather checks. Obviously on days where it rains for 10 hours straight, it would not be ideal to send a message that says "it's raining" every five minutes. So every time the robot actually sends a message to chat, the data point associated with that alert is stored in Hubot's brain.

##### All clear

The most straightforward data to handle coming out of the API is a data set of entirely precipitation-free data points. The first thing I do with the data is add up the forecasted intensity of precipitation for every minute. If that total is 0 we can be reasonably sure that it won't be raining for at least an hour.

If the weather looks clear, I look at the data point stored in the brain; if that data point was *not* clear weather, it means the last message sent to chat was about rain, so it would be nice to alert everyone that the weather has cleared up. If the data point in the brain was clear weather, since everyone already knows it's nice out.

##### Red skies in the morning

If the aggregate precipitation value for any given API result is greater than zero, it means Forecast thinks at some point in the next hour there could be rain. There are a few more decisions we have to make when looking at bad weather data to decide if the robot should send a message.

Similar to the **all clear**, we look back to see what the last message was about. If it was clear weather (i.e. the weather is transitioning from *clear* to *not clear*), we should probably tell people that the nice weather is ending within the hour. Unlike the all clear situation, our confidence that the message would be accurate based solely on that aggregate value is pretty low. There are situations where a single bogus data point ends up in the API result, and other situations where there may be many *rainy* data points, but their probabilities or intensities are so low they aren't actually very meaningful.

So before the robot posts a notification about any new bad weather conditions, it scrubs the data a bit. Basically there are some simple thresholds that need to be met per-data point and for the whole data set before it will be considered noteworthy.

If those thresholds are met, the robot sends a notification to chat, which includes: how much of the next hour is expected to be bad, how bad it will be and when it will be worst, and a link back to Forecast.io for a more detailed forecast.

The most complicated data to handle is when the previous message was for bad weather and the forecast is for weather that needs to really need to be alerted anyway. Consider a scenario where it has been on-and-off light rain all day (which the robot likely would have messaged about once in the morning) and then around 4 PM the forecast includes torrential rain. Not alerting everyone to that would be a mistake.

Determining how much worse the weather needs to get before re-alerting is a bit of a balancing act. The tradeoff is between more alerts that are designed to interrupt people and more accurate data for everyone to use to make their commuting decisions. This is the part of the robot that continues to be tweaked with. Currently, if the robot hasn't sent a message in over three hours, it will always send a notification about bad weather, even if it isn't necessarily an major intensification. If it's been less than three hours and any data point has an intensity twice that of the data point in Hubot's brain, that's considered a significant increase and a message will be sent.

Additionally the robot will look for continuous blocks of clear weather (30 minutes or more) at the end of data sets that include some bad weather. These nearly always indicate prolonged breaks in the weather, and are basically as reliable as an all-clear block of data. Checking for them allows the robot to give more advanced notification about good times to hit the road.

The code for our existing weather robot can be found in [this gist](https://gist.github.com/farski/7d4049ac401c16c3adc6). It's still in beta, so it's not particularly portable; if you want to use it you will need to plug in your coordinates, and the way it's posting messages to a specific room may not be suitable for everyone. You'll also need to add a Forecast.io API key to your environment.
