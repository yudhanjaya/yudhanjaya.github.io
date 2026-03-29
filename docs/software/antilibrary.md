---
title: Antilibrary
parent: Software
nav_order: 6
tags: [software]
date: 2023-05-01
image: "/assets/images/software/antilibrary/screenshot.png"
excerpt: "Ask questions of your PDFs, EPUBs, Word docs, and text files — a local RAG tool built on langchain and gradio."
---

# Antilibrary

[GitHub →](https://github.com/team-watchdog/antilibrary)

A tool that lets you ask questions of your PDFs, EPUBs, text files, and Word documents. Think ChatPDF or Box AI, but running as a notebook you control. Built on `langchain` and `gradio`.

{% include image.html image="/assets/images/software/antilibrary/borges.png" %}

The name comes from Umberto Eco's concept of the antilibrary — the books you haven't read yet, which are arguably more valuable than the ones you have.

## How it works

Antilibrary reads your documents, generates embeddings, and uses those embeddings to find text relevant to your question. That relevant text is then passed to OpenAI's API alongside your question to generate a response. It's a straightforward RAG (Retrieval Augmented Generation) pipeline.

{% include image.html image="/assets/images/software/antilibrary/screenshot.png" caption="The Antilibrary interface" %}

## How to use

1. Download `Antilibrary-OpenAI.ipynb`
2. Create a folder named `books` in the same directory — put your documents there
3. Add your OpenAI API key where indicated in the notebook
4. Run each section; the last section opens the UI

Supported formats: PDF, DOC, DOCX, TXT, MD, EPUB. If you add new documents while the program is running, hit "Scan the library again."

If you're running in Google Colab, you can point it at a Drive folder instead of a local `books` directory.

**Note:** Because of how the search works, specific and detailed questions get much better results than broad or generic ones. This isn't a chatbot — it's a document searcher with a language model on top.

## License

MIT.
