---
title: "Yudha's Starmap"
parent: Software
nav_order: 3
tags: [software]
date: 2025-04-24
image: "/assets/images/software/starmap/screenshot-stars.png"
excerpt: "An interactive procedural galaxy generator — stars, planets, and civilizations in an explorable 3D universe, built for a keynote and useful for fiction."
---

# Yudha's Starmap

[GitHub →](https://github.com/yudhanjaya/Starmap)

An interactive procedural galaxy generator built in JavaScript. It creates explorable 3D universes filled with stars, planets, and fledgling civilizations, running entirely in your browser.

{% include image.html image="/assets/images/software/starmap/screenshot-stars.png" caption="Stars and planetary systems" %}

I originally wrote the base logic in R back in 2020, then made several attempts to migrate it to JavaScript. The project was intended for use in *The Salvage Crew* and *Pilgrim Machines* — I wanted a galaxy generator that felt plausible rather than arbitrary. I ended up not using it directly in the books; at the end of the day, the real galaxy is more interesting than anything I could generate. The current version was rebuilt for a 2025 University of Bergen keynote presentation, and now features stars, planets, and civilizations.

{% include image.html image="/assets/images/software/starmap/screenshot-civs.png" caption="Civilization management view" %}

## How it works

The core idea: define rules for star formation, planetary orbits, and habitability, and let procedural generation fill in the specifics through rulesets and constrained randomness. Design inspiration comes from *Stellaris*, *Endless Space II*, and *Sins of a Solar Empire*, plus various astronomical references for the underlying distributions.

**Stars** — mass determines temperature, luminosity, spectral type, size, and evolutionary stage.

**Planets** — type is determined by orbital distance and star properties; additional attributes include size, mass, gravity, composition, atmosphere, temperature, water presence, moons, rings, and habitability.

**Civilizations** — traits, government types, and tech levels assigned probabilistically on habitable worlds. The interesting part is what emerges from the interactions: populated clusters, isolated systems, hostile neighbours, chains of habitable worlds that no one has reached yet.

## Features

- **Parameterized generation** — control galaxy shape (Spiral, Elliptical, Irregular), star count, and civilization emergence probability via UI
- **3D interactive visualization** — powered by 3d-force-graph and Three.js; click, drag, explore
- **Layered dependencies** — each generation step builds on the last, so complexity accumulates naturally
- **Export** — generated universes can be saved; import planned for a future version

## Running it

1. Clone or download the repository
2. Place all files in the same directory
3. Open `index.html` in a modern browser (Chrome, Firefox, or Edge)
4. Use the bottom-right panel to generate and explore

An internet connection is needed for the external libraries.

## Code structure

- `galaxy-core.js` — base constants and utility functions
- `galaxy-classes.js` — core generation logic for Star, Planet, and Civilization classes
- `galaxy-generator.js` — orchestration of the generation process
- `galaxy-visualization.js` — data-to-visual mapping and rendering
- `galaxy-ui.js` — user input handling and panel updates
