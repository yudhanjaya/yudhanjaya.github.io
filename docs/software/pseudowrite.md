---
title: Pseudowrite
parent: Software
nav_order: 8
tags: [software]
date: 2023-08-21
image: "/assets/images/software/pseudowrite/pseudowrite.jpg"
excerpt: "A story outlining tool that converts rough ideas into structured act outlines and chapter notes using iterative AI refinement."
---

# Pseudowrite

[GitHub →](https://github.com/yudhanjaya/pseudowrite)

A demonstration tool built for an Augsburg MFA panel on AI and writing. It takes rough story ideas and works them through a three-stage pipeline into structured act outlines and chapter-level notes, using iterative AI refinement loops.

## How it works

**Stage 1 — Idea to acts:** Your rough premise gets expanded into a three-act structure.

**Stage 2 — Acts to chapters:** Each act gets broken down into chapter-level beats.

**Stage 3 — Refinement:** The system loops back through what it's produced, checking and tightening the logic.

The approach uses Chain-of-Thought prompting to work within LLM constraints and get coherent, structured output rather than sprawling prose. There's also a Playground mode for direct model interaction.

Powered by GPT-3.5 and GPT-4.

## What this is and isn't

Pseudowrite generates *structure* - act breakdowns, chapter notes, beat sheets. It's most useful for formulaic genres where structure is well-defined. It won't write your novel for you, and it'll produce garbage often.

**Not for commercial use.** The README is explicit about this, and the ethical concerns around AI training data are real.

## How to use

1. Download `Pseudowrite_public.ipynb`
2. Add your OpenAI API key
3. Run via Jupyter Notebook or Google Colab
