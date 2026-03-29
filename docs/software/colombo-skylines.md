---
title: Colombo Skylines
parent: Software
nav_order: 5
tags: [software]
date: 2024-09-06
image: "/assets/images/software/colombo-skylines/cities-banner.jpg"
excerpt: "A nearly 1:1 replica of the city of Colombo in Cities: Skylines, built for transport policy visualization."
---

# Colombo Skylines

[GitHub →](https://github.com/team-watchdog/colombo-skylines)

In 2024, Watchdog attempted the most insane build ever made in Cities: Skylines: an accurate topographical representation of Colombo, built with detailed land use and zoning based on official city development plans and data centred around 2020; over a million virtual citizens, simulating population dynamics that reflect large-scale, real-world demographics and human movement; public transport based on actual route data. Essentially, the city in a nutshell.

{% include image.html image="/assets/images/software/colombo-skylines/colombo.png" %}

{% include image.html image="/assets/images/software/colombo-skylines/cities-overview.png" %}
{% include image.html image="/assets/images/software/colombo-skylines/cities-transport.png" %}
{% include image.html image="/assets/images/software/colombo-skylines/cities-kuluna.png" %}

How close did we get?

- 7728m long from the tip of Dehiwala to a measuring point near the Presidential Secretariat (real city: 7780m)
- 4585.6m at its widest (reality: 4611.2m)
- Over 99% match in road layout, parks, and water bodies
- 1,044,500 virtual citizens (estimated 2020 CMC population: ~1,048,000)
- Functional public transport: three railway lines and six major bus routes matching real-world routes

And as with reality, roughly half these citizens live in the city and half commute in. We've got everything from tuk-tuks to citizens who park on roadsides to better lifecycle simulation — people age, attend schools, work, and die in ways closer to real-world analogues than Skylines' defaults.

Data sources included the Colombo Municipal Council, Sri Lanka's Road Development Authority, and Meta's population mapping data. Traffic behaviour was modified to simulate Sri Lankan driving patterns; vehicle ratios were calibrated against the real city's ~206 vehicles per 1,000 people.

Why? The idea was to use this as a tool for public communication — particularly to visualise contentious and confusing transport and urban policy proposals, which have been a massive driver of both foreign debt and political misinformation in Sri Lanka. It got picked up widely, from the Cities: Skylines subreddits to Hacker News, which I'm glad about. It's satisfying to channel a lifelong obsession with city-building games into something genuinely useful.

The map is released under the MIT License. Cities: Skylines and its mods retain their respective copyrights.
