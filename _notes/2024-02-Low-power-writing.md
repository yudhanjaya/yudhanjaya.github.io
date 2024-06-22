---
title: My Low Power Writing Setup
description: A brief guide to low-cost, low-energy writing setups
category: Contraptions
date: February, 2024
image: /images/low-power.png
image_caption: My AYN Odin, hooked up to a keyboard and a monitor.
---

The image you see is my writing setup. 
It consumes very little power. Measured at the mains, it takes up 24 watts at full usage, including the monitor. Without the monitor, it runs as low as 4 watts, or at most at 10 watts. It has a 6,600 mAh battery, so it can run itself for a long time when the power goes out, and it has a 128 GB on onboard storage. 

I built this for multiple intersecting reasons:

- I wanted to write without distractions. 
- I wanted a low-power writing setup that could run on a battery for a long time; running my Ryzen 5800 X3D + RTX 3090 setup to mess around on a document seems incredibly wasteful. At the same time, I've learned the hard way not to rely on Sri Lanka's power supply
- I wanted a good keyboard and to not ruin my posture. 
- I wanted the whole thing to be fixed, but easily removable if necessary
- I wanted it to be cheap to run on solar, which I'm transitioning to for the [earthbag homestead](/wip/2020-05-Earthbag-Homestead) 
- I wanted to use some of the stuff I already had lying around

There is an obvious solution - a laptop [1]. 

This is my solution:

- A 24-inch, 1080p monitor
- An AYN Odin Pro: a roughly $250 Android-based handheld gaming console
- A Womier SK-71 keyboard; wireless, with stock switches (Outemu Whites, pre-lubed)
- An $40 Ugreen dock/adapter, a charger, and some USB-C and HDMI cables.

Putting it all together requires plugging in some wires. Odin to dock via USB-C. Monitor to dock via HDMI. A charger providing USB power to the dock. That's about it. 

### A gaming console for writing

Over the last few years there's been an explosion of small-form factor handheld gaming machines. The most famous, of course, is the Steam Deck, and indeed the Steam Deck is a fantastic PC. There're even more expensive machines (the ROG Ally, the AYA Neo 2S, the One XFly, the GPD Win 4) that use much faster processors to play modern games, and even ship with Windows.

But below these are a different breed: much cheaper handhelds that use much slower but more power efficient processors (usually Snapdragons 6XX and 8XX, with some Unisoc TXXs) to emulate retro games (Game boys, N64s, PS1, PSPS and the like). They're in the $150-$300 range, and are made by small companies in Shenzen. Well-known names in the space are AYN, Anbernic, and Retroid.  

Most of their offerings have a few things in common:

- They're battery-powered devices
- They have a touchscreen
- They have USB-C ports that can output HDMI to monitors and connect to other devices, such as keyboards and mice
- They have Bluetooth and WiFi
- They offer some degree of TDP control - ie: you get to select power consumption: you can rack it up for more demanding games or lower it for simpler apps
- They run Android

The AYN Odin Pro is one of these - [see the Techradar review here](https://www.techradar.com/reviews/ayn-odin-review)). It has a Snapdragon SD845 CPU, a 6-inch screen, and 8GB of RAM. It's basically a mid-range phone with active cooling built in. 

Which, as it happens, is more than enough to write on. To use it this way, buy a USB-HDMI dock (I use these [Ugreen adapters from Aliexpress](https://www.aliexpress.com/item/32821301992.html)). Connect your keyboard via Bluetooth or USB. 

You don't need a mouse - the touchscreen serves as an input mechanism. It's easier this way, because while Android does detect mice, the gestures simply aren't designed with mice in mind. 

Now connect your monitor. On the Odin Pro, connecting this way involves switching display output mode - it usually works fine out of the box, but if it doesn't, find the settings icon (gear) and scroll around until you find something that lets you toggle between HDMI 1080P and 4k Displayport. Switch between the options until it starts sending stuff to your monitor.

Now to make it a bit more usable. Android launchers are interfaces, and the AYN Odin ships with an interface that I found quite ugly on the bigger screen. Get onto Google Play, log in, and find the launcher of your choice. I recommend Microsoft Launcher; skip all that stuff about logging in, remove the feed and you've got yourself a nice, barebones desktop. 

You can use the device itself as a large touchpad. To make it easier, navigate to the [Android Developer options and enable 'Show taps'](https://www.xda-developers.com/android-developer-options/). This will show you where you're tapping. 

You also don't need a mechanical keyboard. I use them because I like them and I like putting my keyboards together, and at 80,000 words a journey I want a smooth road and a red carpet instead of a series of potholes strung together.

But snobbery aside, use anything that works. The fastest I've ever typed was on a shit-tier A4Tech keyboard that cost about a dollar (Rs 320) in today's money. You can shave quite a bit off the cost of this build by opting for something lighter and cheaper. 

### Alternative hardware

The Odin isn't the only device that can do this. Let's forget the likes of the $1700 Ayaneo Kun for a moment. 

You can go lower and do just fine. The Anbernic RG556 (which has a Unisoc T820) and the Retroid Pocket 4 (MediaTek Dimensity 1100) both hover around the $150-$190 mark, depending on which stores you have access to. 

If you're into this kind of setup, my recommendation is to hop over to the [Retro Game Corps](https://www.youtube.com/@RetroGameCorps) channel on Youtube. Anything that Russ there deems capable of handling up to PSP games will generally be quite adequate. 

It used to be that retro handhelds like these were low-power, specialized devices. For example, my Powkiddy q90 was a $45 thing that looked like a tiny Gameboy Advance. And to the best of my memory it was powered by an Allwinner F1C100S chip - which is to say, a potato.

Now, however, we're in the realm of devices that run Android, including all the bells and whistles that come with it - from browsers to applications.

Lastly, there are two older Windows devices that merit a mention:

- The AYN Loki Zero is a dual-core AMD device, roughly on par with an Intel Celeron: it launched to 'meh, this is old hardware' reviews, and is now [selling at a discount](https://www.aliexpress.com/item/1005006349290971.html)

- The Anbernic Win600 is another dual-core AMD device that is [now quite discounted](https://www.aliexpress.com/item/1005004481055763.html)

These devices are now quite discounted. If you don't want to deal with Android, they run Windows, and they can handle writing just fine. 

Please note: the Aliexpress links I've put here are only to illustrate a point. I don't have any kind of affiliate scheme going on and am not responsible for any kind of transaction you make. 


### Software

When it comes to writing, there are plenty of ways you can go. Lately I've settled on Obsidian. [2] 

Obsidian is a note-taking, second-brain sort of software that can be customized to a near-infinite degree. My Obsidian setup exists across all my machines. I use it to take notes, write my books, and everything in between. Even this note is written in Obsidian. It writes to Markdown, which is essenitally just a text file. You can check it out at [Obsidian.md](https://obsidian.md). 

Mine is not only customized exactly how I want it - it also pushes everything to a private Github repository when done. Not just everything I write - even its own configuration files sit there, which means any time I open up any of my devices, they download the files and adjust to anything I've changed, right down to the look and feel.

With the Odin, this means I write on my low-power machine. Writing involves a fair bit of staring into the distance, pacing around, pottling about making cups of coffee, followed by frenzied bursts of action. 

I find that because of how Android scales text and handles apps, I lose the urge to tab out to Youtube or Reddit; switching is slightly less convenient than on a PC, and while multi-window is possible, it isn't pleasant. 

This has remarkable effects: I write more, and I write better. As someone who has ADHD, building environments where I can get away from the information firehose has become a critical part of functioning.

Once the writing is done, I push to Github. I start up my main PC, do the edits there, convert it to a Word file, and send it off. 

Of course, you don't have to do it this way. There are plenty of easier ways: 

- Google Docs: works fine
- Microsoft Word for Android: works fine
- iA Writer for Android: works fine

You can email yourself your files, stick them on Google Drive, OneDrive, or even save them to a USB stick. That's up to you.

### The skull?

Not really essential to any of this. As with retro emulators, I had a few skulls lying around. They have to go somewhere. If you like, consider it your least favourite 1-star reviewer on Goodreads. 


### Notes

[1] Yes, laptops have terrible keyboards (no, Macbook keyboards aren't good; they're like drumming on a billet of aluminium). Laptops also have me craning my neck down to peer into a small screen. But these can be fixed by docking them as I've done with the Odin Pro here. 

Why didn't I just use my laptop? Call it separation of duties. I have a fully functioning M1 Macbook Pro, but I find it too full of distrations, including the obligation to be online and connect with other humans that I work with. I cannot abandon these obligations, but I must firewall if I am to get anything done.

[2] I've used Scrivener. I like it, but I hate the fact that its file format is proprietary; I've nearly lost a novel when the stupid thing crashed. From then on I stuck to file formats that are readable by a large variety of software. DOCX is crap and needlessly bloated, but a lot of things read DOCX; Markdown is much simpler and cleaner, but I end up converting to DOCX anyway when it's time to send off the manuscript to the agent and the publisher. 