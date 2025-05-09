---
title: Mokuton
description: A simple html word processor and markdown editor.
category: Software
date: June, 2024
image: /images/projects/mokuton-banner.jpg
image_caption: Mokuton
---

[Mokuton](https://github.com/yudhanjaya/Mokuton) is a simple text editor that I wrote for myself. 

It's a single html file that creates a modern, one-file word processor with word count tracking and a modern interface. Runs entirely in your browser and uses browser cache to save anything you write, making it very handy for portability and powercuts.

It combines modern aesthetics (a Medium-like interface, a block-style editor) with broad compatibility. It's a single html file that runs on damn near anything, and gives you exactly what you need to write your story - and nothing else. No fonts to worry over. No lengthy packages or libraries to install and download. Just keep it in your browser and write.


![]({{site.baseurl}}/images/projects/mokuton.jpg)


## Rationale


Modern word processors are fantastic, but they try to do too much for my liking. There's usually immense feature creep in most commercial software; and when it comes to open-source editors, often a stunningly stupid number of libraries and configurations that have to be done.

After several novels and many papers under my belt, I've moved on from using every feature under the sun to being a much more simple man:

    I want an interface that looks friendly (and doesn't look like an IDE), tracks my daily word progress, and in case of a power cut, preserves my data without needing an Internet connection.
    I want to write, not spend the rest of my lifetime configuring environment variables or figuring out a user interface designed to appease every possible slice of the market.
    I want to be able to set the thing up on a new device, especially the low power writing devices that I use, without hassle.

Mokuton does exactly that. You open it in your browser and start writing: that's it. It uses browser cache to store what you write, so even in case of power cuts you don't lose data. It exports to Markdown, so any data generated by this program can be read and modified by any text editor. It tracks word counts so you can set daily writing goals for yourself and watch as the progress bar fills up (top to bottom, because that's how we write in English). It is a single html file and extremely lightweight that can be opened on pretty much any modern browser. It is as simple as I can make it.

Usage

    Download and open mokuton.html.
    Use the left sidebar to navigate your directories and open files. Set your daily word count goal in the right sidebar.
    Click in the main editor area to start writing.
    Use the top toolbar for formatting; if you need to figure out keyboard shortcuts, click the help icon.

mokuton_dark.html is a variant. Use it if you want to feel like hackerman (if you don't know what that is, it's a weird in-joke involving Mr. Robot and Kung Fury). Rest assured that no Java was involved. 

![]({{site.baseurl}}/images/projects/mokuton-dark.png)

This dark variant is less of a "dark mode" and more my take on a terminal-style experience. As you can see, elements have been moved around to make it so. It has a "change theme" functionality that toggles between three colors for the text - green, amber, white(ish). This may not be everyone's cup of tea.

### Acknowledgements

Mokuton is built using Editor.js, Font Awesome for icons and Google Fonts for the fonts used. If you want to put together your own writing interface, I highly recommend Editor.js.

### License
Mokuton Editor is open-source software licensed under the MIT license. Please enjoy it. I am not responsible for what you do with it, but I hope it's useful.