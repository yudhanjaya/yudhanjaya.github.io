---
title: Goverment Information Center Demo
parent: Software
nav_order: 7
tags: [software]
date: 2025-02-25
image: "/assets/images/software/gic-demo/screenshot-1.png"
excerpt: "A prototype government information portal with AI-assisted RAG search, built to show what a better public information system could look like."
---

# GIC Demo

[GitHub →](https://github.com/yudhanjaya/GICdemo)

A prototype showing what a better Government Information Centre (GIC) could look like — specifically, Sri Lanka's GIC, which is nominally meant to help citizens find government services and information but is, in practice, not great at it.

The demo is a single HTML file that loads a collection of markdown documents locally and uses Claude (Anthropic's API) to provide a RAG (Retrieval Augmented Generation) search interface on top of them. For comparison, it also includes a plain search variant that works without any LLM.

{% include image.html image="/assets/images/software/gic-demo/screenshot-1.png" caption="LLM-assisted search interface" %}
{% include image.html image="/assets/images/software/gic-demo/screenshot-2.png" caption="Plain search variant (no LLM)" %}
{% include image.html image="/assets/images/software/gic-demo/workflow.png" caption="System workflow" %}

## What's in it

- **623 refined documents** rewritten according to content guidelines for clarity, plain language, and information completeness
- **624 original documents** for comparison
- **3 content guidelines** covering writing standards, visual design, and information management
- **rewriter_lite.py** — Python script that transforms documents using the content guidelines
- **validator.py** — quality assurance processing

The rewriting was done with Claude, guided by content guidelines I wrote that push for plain language, clear structure, and actually useful information (as opposed to the bureaucratic boilerplate that government sites tend to accumulate).

## How to run it

1. Download the repository
2. Open `GIC - llm search.html`
3. Replace `API-key-here` with your Anthropic API key
4. Open in a browser

**This is a prototype for showcase purposes only.** The documents are not fully vetted for accuracy and this is not a production-ready system of any kind.

## Why this exists

Sri Lanka's public information infrastructure is genuinely difficult to navigate. This was built to demonstrate that a RAG-based approach on top of well-structured content can dramatically improve findability — and to make the case that the bottleneck is content quality as much as technology.
