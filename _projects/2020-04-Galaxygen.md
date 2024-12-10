---
title: Galaxy Generator
description: A toybox attempt at generating a universe
category: Software
date: April, 2020

image: '/images/software/galaxygen.jpg'
image_caption: 'Galaxygen'
---

[GalaxyGen](https://github.com/yudhanjaya/GalaxyGen) generates stars, populates them with planets, and even introduces civilizations that can span multiple worlds. The result is visualized in an interface that kind of mimics low-key terminal vibes but also does contain a proper 3D visualization that you can click, drag, and interact with.

![]({{site.baseurl}}/images/software/galaxygen.jpg)

Features

    Procedural generation of stars, planets, and civilizations
    3D visualization of the universe using Three.js and 3D Force-Directed Graph
    Interactive exploration: click on objects to view their properties
    Distinct visual representation for stars, planets, and civilizations
    Overview of universe statistics
    Export universe data to CSV


I wrote the base logic for this in 2020 in R, my preferred language at the time. Turns out it's fairly easy to make "a galaxy" at a very broad level - all you need to know is the distributions of various types of stars and planets, and you can generate the data according to that schema, and them it's a matter of linking the planets to stars and occasionally spawning a civilization here and there. I finished it thinking that I would use it for my novel Pilgrim Machines (a follow-up to the Salvage Crew), but I ended up not using it; at the end of the day, the fictional galaxy was less interesting than our real one. 

This current version is essentially v2, re-written in Javascript. I've made some changes to the names, the rules on how civilizations interacty with planets, and used Anthropic's Claude 3.5 Sonnet to generate code to visualize it better.

