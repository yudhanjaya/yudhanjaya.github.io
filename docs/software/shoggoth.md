---
title: Shoggoth
parent: Software
nav_order: 1
tags: [software]
date: 2026-11-01
image: "/assets/images/software/shoggoth/chat.jpg"
excerpt: "One download that runs open-weights language models on your own Linux machine. Chat, draw diagrams, write documents, or let a model work on the files in a folder."
---

# Shoggoth

[GitHub →](https://github.com/yudhanjaya/Shoggoth)

Shoggoth is a single download that runs open-weights language models on your own hardware. You can chat with them, have them draw diagrams and write documents, or point one at a folder and watch it read, search and edit the files there. There is no cloud account, and nothing you type leaves your machine. The one exception is web search, and the model asks before every search.

{% include image.html image="/assets/images/software/shoggoth/chat.jpg" caption="Shoggoth working in a folder — the model found why two tests failed, fixed them and ran the tests again" %}

## Features

- **Works on your files** — choose a folder; the model reads, edits and runs things there, and asks before it changes anything
- **Background jobs** — describe the work and how to tell it is done (a passing test, say); changes are yours to review before they touch the folder
- **Skills** — short instruction sheets that make small models far more dependable; add more by pasting a GitHub link
- **Models that fit** — it tells you which models will run well on your hardware and downloads them for you
- **Small to enormous** — small and medium models run on Lemonade, very large ones on Strata
- **Models you can see** — every model is drawn as a many-eyed creature in a glass tube; the bigger the model, the more eyes and hands
- **Use your models elsewhere** — share them with opencode, Hermes or anything that speaks an OpenAI-style API

Linux x86_64 only, shipped as an AppImage. Download it from the [releases page](https://github.com/yudhanjaya/Shoggoth/releases/latest).
