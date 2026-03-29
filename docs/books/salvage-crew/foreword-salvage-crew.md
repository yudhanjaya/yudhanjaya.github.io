---
title: "Foreword: The Salvage Crew"
parent: The Salvage Crew
grand_parent: The Salvage Crew Series
nav_order: 1
---

# Foreword to The Salvage Crew

Much of the poetry you see in this book is actually AI-generated. To wit, OpenAI GPT2-117M, trained on a selection of my favourite translated poetry - notably the ancient Chinese Tang Dynasty poets Du Fu and Li Bai. I've performed some minor editing - sometimes stitching poems together, sometimes editing a word or two in a poem - but let me assure you that I was more surprised than you were at gems like "maidenhood is done away with the midnight bell".

The planet of Urmagon Beta does not exist. It was created by my modified version of Zarkonnen's planet generator code. You can see a live demo on itch.io if you look for it: it's beautiful.

The weather, I suppose, could also be called "AI-generated", but let's shy away from that term for things that don't learn. The weather system is a simple Markov chain; a series of states and transitions encoded, with the equivalent of a die roll at each transition. Probability of rain, sir? *—rolls digital die—* none, but we're having snow. The characters' emotional states, too, were designed this way. I wrote the whole thing, but I didn't decide when Milo and Anna had those fights.

So this book represents something of a technical innovation to me, one step further along my adherence to chess grandmaster Garry Kasparov's Human + AI thesis. Kasparov, who got his ass kicked by IBM's Deep Blue, knows firsthand what it's like to be beaten by a machine; the arts, once considered immune, are now slowly waking up to the reality of neural nets and a weekend with Tensorflow and a good dataset.

Welcome to the future? No, welcome to the present.

***

This book, and the books that follow, are an homage to Richard Garriot, Will Wright, Tarn Adams, Tynan Sylvester, and all others who pursued the Simulation Dream.

Loosely, it is this: it should be possible to create a world, with enough systems - people, weather, objects - interacting with each other to generate complex stories, that most sacred lifeblood of the human race. Tynan Sylvester, writing on the subject, spoke of apophenia, the phenomenon where the fantastic pattern-recognition in our brains stitches together random incidents to create a meaningful narrative: which explains, if you stretch the idea a bit, how a lot of religions came to be. The same wetware phenomena that drove people to write Boatmurdered generates the gods, monsters and demons that we live amongst.

Of course, these worthies applied this thinking to games. You may have heard of them: Ultima Online, the Sims, Dwarf Fortress, Rimworld. There are others.

I started chasing this dream; for a few months I pursued the idea of creating an engine that could let me simulate characters, worlds, everything. But reader, I gave up. That way lied a substandard clone of Rimworld, and quite possibly five years of bashing my head into a wall.

However, a few months of research is a considerable time. I ended up with the ingredients I wanted: a planet generator (thanks, Zarkonnen!), and Markov chains for weather simulation and emotion; a poetry generator that I eventually gave an Instagram account to; and, from my childhood, *Ulysses*, by Alfred, Lord Tennyson, whose words I learned from the Golden Treasury of English Verse. That poem never really went away, but kept repeating itself in my dreams as a starship casting off into the depths of space.

By now my own sense of apophenia had kicked in like a mule - and we were off - I, the writer, and my assistants in the form of little pieces of Python code.

The rest of it arrived as it usually does: in fragments picked up from my other interests. I thought a little bit about how an alien AI would communicate, and how best to put that in a story in a way that didn't sound like endless tables of character vectors: I ended up taking the language games from Wittgenstein, arguably the most important philosopher of the 20th century, and the right person to read if you want to get right down into language. The opening sequence of the AMBER ROSE–Beacon conversation I took from mathematician Carl DeVito and linguist R.T. Oehrle, who took a crack at examining a language for communication between alien societies. While I didn't use their language, I used their base assumptions:

1. Both societies can count and do arithmetic.
2. Both societies recognize the chemical elements and the periodic table.
3. Both have made a quantitative study of the states of matter.
4. Both know enough chemistry to carry out chemical calculations.

And of course, my publishers, Steve and Rhett, my writing partners R.R. Virdi and Navin Weeraratne, and data scientist Yasiru Dhanike Ratnayake not only put up with me gabbing about all this stuff, but also understood what I was trying to do and helped keep the fire going.

Double, double, toil and trouble, fire, burn, and cauldron, bubble! And voila: the text you're reading now appeared.

***

But enough of all these explanations. At the end of the day, yes, I wanted to be smart and wild and bleeding edge about how I went about all this, but I also wanted to tell a story. About three humans and a less-than-Zen AI stuck on a backwater planet. Of the UN and the ORCA and all the other things that I couldn't code, except by wrapping them up in the symbols of English and throwing them out here for you to taste.

I hope you enjoyed it. The next book will come, you can bet anything you have that the games aren't stopping here.

***

## References

1. [OpenAI GPT-2](https://openai.com/blog/better-language-models/)
2. [Zarkonnen's GenGen planet generator](https://github.com/Zarkonnen/GenGen)
3. [Markov chains](https://brilliant.org/wiki/markov-chains/)
4. [Garry Kasparov on AI](http://www.kasparov.com/garry-kasparov-says-ai-can-make-us-more-human-pcmag-interview-march-20th-2019/)
5. [Tynan Sylvester, "The Simulation Dream"](https://www.gamasutra.com/blogs/TynanSylvester/20130602/193462/The_Simulation_Dream.php)
6. [OSUN / The Poetry Machine](https://github.com/yudhanjaya/OSUN)
7. [Wittgenstein's Language Games](http://people.loyno.edu/~folse/LanguageGames.html)
8. The Astrobiology Science Conference 2017 (AbSciCon 2017), April 24–28, 2017, Mesa, Arizona - Carl DeVito and R.T. Oehrle
