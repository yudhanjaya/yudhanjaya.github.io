---
layout: default
title: "Can You Vibe-Code a Novel?"
parent: Posts
nav_order: 1
date: 2025-03-01
excerpt: "A 33,000-word experiment: using Claude 3.7 Sonnet and Gemini to generate a novel premise, setting, characters, and plot outline — and asking whether AI's real limitation is capability or artistic motivation."
permalink: /posts/can-you-vibe-code-a-novel/
---

# Can You Vibe-Code a Novel?
{: .no_toc }

*March 2025*

{% include image.html image="/assets/images/posts/vibe/vibe.png" %}

"I don't speak", Bijaz said. "I operate a machine called language."

--Frank Herbet, Dune Messiah

# A question, my dear Watson

Can an AI write a novel?

I usually say no, or laugh. This time, I have a 33,000-word exploration (and its 50,000-something-word output) backing up a meandering *yes.* This is why. The Dune quote is very appropriate, given the Butlerian Jihadness you may feel reading this.

# Introduction

In the past, when people have asked me about this, my response has been no. I can specifically point to why I say *no.* I have specific experiences in that strange traffic pile-up where AI meets novels:

1) [OSUN and the Salvage Crew](https://yudhanjaya.com/project/2019-04-osun) (I wanted not-great inhuman poetry. I got not-great inhuman poetry, albeit after reading thousands of really bad poems and stitching them together)

2) [The time I and a bunch of other writers tested Google's Lambda model for storytelling ability](https://arxiv.org/pdf/2211.05030) (We didn't talk to each other, but if you read the paper, our general agreement seems to be that it's kind of crap, like a very tropey, amateur writer who goes off the rails once the context window is full - and that only was as much as a short, short story)

3) Doing the same with GPT-J and a custom notepad implementation I wrote in Python (it was jank, but would try to read and suggest variations on the next paragraph)

4) The Stranger in Pilgrim Machines (I wanted something that didn't properly understand how to communicate with a human in English, and I got what I wanted. Which reminds me to upload the page for Pilgrim Machines. How did I forget?)

5) As a translator of (private) fantasy languages. I'll share Lusitan and Samarskand at some other point, but basically I wanted some classical-sounding languages that had a customized SOV order and tenses, and was simpler for to work with for spellcasting purposes. It was pretty straightforward to write a very basic translation guide and tell a local model to act as a translator. My only problem is that I keep changing the language spec, so I keep breaking this thing.

In none of this did I see the kind of ability you need to pull off an actual novel.

You see, a writer works on multiple levels. When I write, I'm operating at many different layers of abstraction. I'm thinking about overall plot and progress and higher tier concepts in the story. I'm thinking of what's happening in that chapter. I'm thinking of what's happening at a sentence-by-sentence level. I'm thinking of who this character is and what their motivations are and what they probably had for breakfast this morning, and why they seem to be a little bit off or why they are sneezing. I'm thinking of the larger context of the world, politics, its economics, and how those things are going to constrain the choices that my characters can feasibly make (or even want to make given whatever I'm dishing out at them).

My specific poison, in the field of AI, are LLMs (or Large Language Models). At the time that I was doing these things, LLMs were nowhere close. At best it was kind of a really shitty odd autocomplete. This wasn't really surprising after all. That was the nature of the transformer architecture at its heart. LLMs did not have the context window - the "attention span", if you will, necessary to write anything meaningful, even within the boundary of a short story, without significant massaging.

In fact, I had a general sense that they were interesting things when they were small and easily buildable by one person, and weren't necessarily trying to replicate the experience of conversing with a human being, but were essentially very bizarre little next word next token predictors.

You could have fun with these things. Robin Sloan, for example, did some very early and very cool experiments with RNNs. Given enough prep work - for example, a whole program that templates common plot structures, or retraining a model to do Tang Dynasty poetry, or intentionally creating a bad quant -you could have an interesting experience on a *very narrow domain*.

But this prep work required going far and above the publicly available tooling, and honestly was a stupid amount of work. They did harm anyone, and certainly weren't going to take any livelihoods away, so experimenting was fun.

And so this is what I say whenever this question comes up at the lit fests that I speak at. "Can an AI write a novel? No."

***

Let us talk about the useful, or the *bias*. I have a distinct bias towards the cyborg. I've referenced this many times: particularly Gary Kasparov's thesis that the future will not be human versus machine, but [human + machine] versus [human + machine]. I think that's not just a logical framing, I think it's a completely normal one, given how smoothly and easily we have integrated so many initially alien technologies into our lives. We will shake our fists at the clouds every time a new technology is introduced and our children will grow up so used to it that it just becomes part of the background hum of the universe.

More on bias. Beyond just the philosophical: in my quote-unquote day jobs - both present and past - I functioned largely as a odd combination of a journalist and data scientist. When I entered the field this meant things like using call detail records from millions of citizens to figure out where they lived and where they worked. Somewhere in the middle it was building corpora of languages like Sinhala so that we could build the next generation of natural language processing technology for under-resourced languages; then it was dealing with misinformation and doing OSINT work, like tracking hundreds of protests or mapping mass graves. Now it's a lot to do with AI.

What we do now involves building systems that can pore over large volumes of information, searching for people of interest, particularly people who have allegations of fraud, corruption, possible links to government. This whole thing was born out of our years of journalism and fact-checking work. Given notoriously underfunded, understaffed and corrupt parts of government, media and private industry - especially the bits that are meant to keep people honest - can AI meaningfully improve our ability to prevent money laundering and other fraud?

My co-founder and I have ended up on the Lama Hall of Fame at the Singapore at META's Singapore office last year. I have also ended up on Sri Lanka's National AI Council, thinking about how to use AI to help government deliver better services faster to citizens. My role today is understanding the various problem field, prototyping solutions, understanding AI models and how they fit into our actual solutions.

From these perspectives, large language models went from being toys to being incredibly useful, incredibly fast. I'm very used to the painful journey that is natural language processing: building corpora, tokenizers, lemmatizers, stemmers - and then hoping to God that you could actually make meaningful information retrieval happen.

And large language models have been an absolute game changer for these challenges. Retrieval augmented generation, you know, the thing that everyone and their dog is doing? Well, that used to be the domain of "give me five years and a bunch of people from MIT and millions of dollars in funding. And maybe I can build you something that can talk to this database".

It is genuinely shocking how much AI models have enabled us, a very small team of ex-journalists, to actually pull off.

I say this to point out my own biases. I understand this technology. And not only that, I actually use it. I don't work at a sophisticated lab like OpenAI or Google DeepMind, I don't have access to those resources and I don't really have a handle on what's already in production at these labs, but I have enough knowledge to make reasonable inferences and assumptions.

Here's what's pertinent to the story.

1) AI models are getting increasingly human-like in their writing. If your idea of AI writing is ChatGPT when it came out, or some kind of stupid university plagiarism detector, abandon all hope, ye that enter here. Even the vanilla, freely available stuff can now be prompted with as little as a sentence to sound so much more human than you could ever possibly imagine.

   Last year, you could expect AI models to sound like bad fan fiction writers. Now you can expect bad fan fiction writers to sound like last year's AI.

2) Those context windows are growing. And I mean growing by absurd amounts. Models that operated on 4096 tokens was last year's opening gambit. That is to say, the AI model had a "memory" of less than 4000 words. This year we are seeing the likes of Google Gemini coming out boasting of a million words of context.

   To put this in writing terms, the Lord of the Rings is a little over 550,000 words.

3) Things that were in the domain of laughable, or trivial, or "oh we should never let the language shoggoth near this", now are at a stage where an undergraduate with a weekend of free time can conceivably put together a useful product.

   Ignore the hype beasts of Twitter. Serious, cautious people whose job it is to meaningfully think about significant numbers of other people are approaching AI with cautious optimism as an umbrella of useful technologies.

I don't see these trends dropping or going away in time soon. For more reading, see [AI 2027](https://ai-2027.com/) by Daniel Kokotajlo, Scott Alexander, Thomas Larsen, Eli Lifland and Romeo Dean. It's a work of fiction, and a little bit narrow minded to my view; but I can see why it had to be narrow minded and I can also see how it's going to be disturbingly prophetic.

In the writing sphere, we come to a company called Sudowrite. Sudowrite went viral for their founder's "soup to nuts" claim of generating a story with AI. [Pseudowrite, a tool I wrote as a parody/demo for an Augsberg MFA panel](https://github.com/yudhanjaya/pseudowrite), didn't do as much as Sudowrite, but it could take your idea and turn it into increasingly fleshed out, highly templated act structure using what OpenAI GPT 3.5 and GPT 4. My program certainly could not write your chapters for you, but it could take a vague idea and turn it into the Hero's Journey pattern that some people love so much.

Looking at what it produced, it was very clear that stuff was still very tropey, very bog-standard, very predictable. Paint-by-the-numbers thinking. My inference from this was that there would come a point very soon where large language models could feasibly act in a support role for a lot of new or inexperienced writers - or replace a part of the workflow of the creation highly templated, very predictable, conventionally structured fiction. In other words, if your stuff was bog-standard, if it was at the middle of that proverbial bell curve, then large language models would catch up.

But the "Midjourney moment" of large language models, with respect to novels, was still some way off.

***

Fast forward to this year. More improvements have happened. The march of progress continues relentlessly ever onward. And sometimes we are the boot, sometimes we are the roadkill squashed underneath.

At Galle Lit Fest, held earlier this year, we had a fantastic panel on AI. That was myself, Adam Rutherford, and moderated by Mangala Karunaratne. On that panel, I asked why anyone would want to read something that nobody wanted to write. We will return to this question at the end of this article.

But my opinion of *capability* needs some updating. Today's AI models largely are still behind the chat interfaces that debuted in the last two years. These are very unimaginative ways of interacting, and I remain eternally disturbed by how everything from interface design to underlying instruction tuning seems to be done with the purpose of creating a human-like assistant; it is a veneer on top of a very inhuman thing. Nevertheless, the underlying models and the actual technology that connects these models to these interfaces have vastly improved over time in a way that's also hidden by these chat interfaces.

So. How far away are we from a person using AI to write a novel, using publicly available tooling? Let's do an experiment, in public.

Let's prompt the first draft of a novel.

***

# The Tools of This Trade

Right. To start with, we're going to need our tools.

First up, Anthropic's Claude 3.7 Sonnet model.

I like Anthropic. I like the gentle cream of their web site. I like the fonts, the quirky yet consistent abstraction of their design choices, their relentlessly low-key aesthetics. Trust us, it says. We are boring. We are bland. We may build the shoggoth that displaces you and drives your generations into starvation and exile, but we'll be really polite about it. We may even have a minute of silence. And unlike OpenAI, you don't have to hear about our C-level antics every other day. The nail that sticks out gets hammered. Anthropic is nothing without its people. People. People. Sorry, did we say people? We meant AI.

In other words, Anthropic is exactly what I want in an ideal overlord; faceless, but with excellent iconography. But more to the point, I like Claude 3.7 Sonnet. Mostly because it does what I want it to.

Second, Google Gemini. I'm much less experienced with Gemini, but I'm intrigued by the enormous context window on their Gemini 2.5 model. I also want to see what the thought process is; I'm still not entirely convinced that a thought process on a transformer model is still anything more than next token generation with extra steps, but I do want to see what it tells me.

And conveniently enough, Google has suckered me into paying for this whether I like it or not. My Google Drive purchase plan has become something called "Google One", and I can neither disentangle myself from this annoying digital octopus, nor ignore its wallop on my card. I might as well make use of this thing.

# The Preparations for this Ritual

I'm the type of writer that obsessively collects and curates my own ideas about what to write next. As a consequence, my Obsidian is full of ideas, and thus premises. We are not going to use these ideas because I feel some attachment to them. Even if they are trash, they feel mine, because they came out of my own imagination; and therefore they feel like things that I should work on.

This is yet another declaration of bias. Even though I'm here to demonstrate some aspect of this technology, when push comes to shove I find myself reluctant to sacrifice my child, like a really low budget Abraham.

We'll instead generate a premise based on whatever's floating around the top of my mind. What have I read recently?

- I re-read the Eisenhorn and Ravenor omnibuses; I'm still waiting for Dan Abnett to finish the Bequin trilogy.
- The high mountains of Portugal by Yann Martel, from which I learned it is inadvisable to walk backwards, have an ape as a housemate, or drive an early internal combustion engine vehicle.
- A needless amount of documentation from the Sri Lankan Water Board and the Ceylon Electricity Board, because we need to get water and electricity to our house; the rainwater catchment and the well is simply not going to be enough on their own.
- Rodale's Ultimate Encyclopedia of Organic Gardening: The Indispensable Green Resource for Every Gardener (because I can't figure out why my flower plants are thriving, but my winged beans have died)
- The World According to Garp by John Winslow Irving. Sometimes profound, sometimes horny, sometimes filled with a vague sense of cruelty and unease.
- Unsong by Scott Alexander, which was fucking fabulous. I'm very late to the party, but I want to write a review.

Okay. Let my brain be a blender. Let my rainwater catchment system work, dammit.

# The Outline

```
[!YUDHA]
Hey Claude, write me an appropriate premise for a novel based on these ingredients. Give me two separate documents - one on the setting and characters, the other on the events of the novel:

- One, a novelist who has recently moved into his new homestead in a high mountain in a difficult climate. He is attempting to live out his dreams of homesteading and gardening, but is forced to confront the practical reality of building infrastructure, including roads, electricity supply, water. His plants are dying.
- To a local government employee who suspects that this novelist is actually starting weed cultivation. He escalates by getting the police involved and then becoming slowly increasingly more paranoid about it until he takes on almost an inquisitorial nature.
- In the background, various neighbors have clashes over land ownership rights, water and differences in religion and belief systems, some of which are very ridiculous.
```

{% include image.html image="/assets/images/posts/vibe/1.png" %}

Here's the setting it picked.

```
[!CLAUDE]
# HIGH COUNTRY SUSPICIONS

## Setting

**Blackstone Ridge** is a remote community nestled high in the Rocky Mountains of Colorado at an elevation of 9,500 feet. The area is known for:

- Stunning natural beauty with dense pine forests, craggy peaks, and pristine alpine meadows
- Extreme and unpredictable climate with brutal winters, short growing seasons, and summer drought conditions
- Limited infrastructure: spotty electricity, mostly well water, rough dirt roads that become impassable in winter
- A mix of longtime residents (multi-generation ranchers, retirees, off-grid enthusiasts) and newer transplants (remote workers, vacation home owners, artists seeking isolation)
- A history of both marijuana cultivation (now legal in Colorado) and illegal growing operations that have damaged the local ecosystem

The community falls under the jurisdiction of **Pinecrest County**, a rural county with limited resources, where local government affairs are heavily influenced by a small network of established families. Most residents live at least 20-30 minutes from the nearest town, **Pinecrest**, which has a population of only 1,200.

## Main Characters

**Elliott Thorne (42)** – A modestly successful author of literary fiction who has grown disillusioned with urban life. After inheriting a small sum from his uncle, he purchased 15 acres of land on Blackstone Ridge, determined to build a self-sufficient homestead while working on his magnum opus. Elliott has romanticized notions of living off the land but severely underestimated the challenges of high-altitude agriculture and infrastructure development. His earnest but fumbling attempts at homesteading are complicated by his intellectual approach to practical problems.

**Vernon Packer (53)** – A mid-level bureaucrat in the Pinecrest County Land Management Office. Vernon has worked for the county for 28 years and takes immense pride in his position. Deeply religious and conservative, he's increasingly concerned about "outsiders" changing the character of the county. After a previous incident where an innocuous-looking homestead turned out to be a major drug operation, Vernon has become hyper-vigilant about unusual building projects. He's a meticulous record-keeper with an encyclopedic knowledge of local regulations that he wields like a weapon.

## Supporting Characters

**Sheriff Donna McCreary (48)** – A pragmatic, no-nonsense law enforcement officer who knows everyone in the county. Initially skeptical of Vernon's suspicions but obligated to investigate. As pressure builds from Vernon and certain community members, she finds herself caught between following protocol and her own instincts about Elliott.

**Maya Ortiz (39)** – Elliott's nearest neighbor (half a mile away), a former environmental scientist who has successfully established a small-scale sustainable farm. She offers Elliott practical advice he often ignores in favor of methods he's read about in books. Her Mexican heritage and scientific approach to farming have made her an occasional target of suspicion in the community.

**The Caldwell Family** – Old-money ranchers who believe they have historical rights to water sources that cross multiple properties, including Elliott's. Patriarch Randall Caldwell (72) sits on the county commission and has significant influence over local politics.

**The New Light Fellowship** – A small religious community led by Pastor Jim Halsted (60) who believes the end times are approaching and has established a compound to prepare. They clash with their neighbors over land use, noise ordinances, and their aggressive recruiting tactics.

**Lyle Brubaker (68)** – A retired engineer and conspiracy theorist who has lived off-grid for decades. Constantly at odds with the county over building codes and property taxes. Becomes an unlikely ally to Elliott despite their different worldviews.

**Councilwoman Evelyn Porter (55)** – An ambitious local politician who sees the growing tensions as an opportunity to position herself for higher office by taking a hard stance on "maintaining community values."

```


And here's the plot it came up with:

```
 [!CLAUDE]
 # HIGH COUNTRY SUSPICIONS

 ## Plot Overview

 The novel follows the increasingly tense dynamic between Elliott Thorne, an idealistic novelist-turned-homesteader, and Vernon Packer, a suspicious county official, against the backdrop of a mountain community riddled with its own conflicts and contradictions.

 ## Key Events

 ### Act One: Ambitious Beginnings

 1. **Elliott's Arrival** – Elliott moves to his property with grand visions and inadequate preparation. He begins clearing land for extensive gardens and orders exotic seedlings unsuited to the altitude, while living in a temporary yurt as he designs an eco-friendly home.

 2. **First Encounters** – During a routine inspection, Vernon meets Elliott and becomes immediately suspicious of his vague explanations about "experimental agriculture" and the unusual layout of his property. Elliott dismisses Vernon as a small-minded bureaucrat.

 3. **Infrastructure Struggles** – Elliott's solar system proves inadequate for his needs, forcing him to apply for a connection to the rural electric grid, which requires clearing more trees and installing poles across sensitive terrain. This brings more scrutiny from Vernon's office.

 4. **Water Conflict Emergence** – The Caldwell family challenges Elliott's use of a spring-fed creek that crosses his property, claiming historical water rights. Vernon uses this dispute to monitor Elliott's activities more closely.


 ### Act Two: Mounting Suspicions

 5. **Failed Growing Season** – Elliott's carefully planned gardens fail spectacularly due to frost, poor soil preparation, and wildlife damage. Desperate to show progress, he builds several greenhouse structures without proper permits.

 6. **Vernon's Investigation Escalates** – Vernon notices Elliott's unusual power consumption patterns and multiple deliveries of "agricultural supplies." He begins documenting everything in a detailed file and starts driving by the property during off-hours.

 7. **Sheriff Involvement** – Vernon convinces Sheriff McCreary to conduct a "welfare check" at Elliott's property. Though she finds nothing suspicious, Vernon interprets Elliott's nervous behavior and rambling explanations as signs of guilt.

 8. **Community Divisions** – A town meeting about water rights becomes heated when Vernon publicly insinuates that "certain new residents" may be engaged in illegal activities. The community begins taking sides, with underlying tensions about growth, religion, and "outsiders" surfacing.


 ### Act Three: Paranoia and Persecution

 9. **Vernon's Obsession** – Vernon creates an elaborate wall of evidence in his home office, connecting Elliott to imagined criminal conspiracies. He begins surveilling Elliott's property with binoculars and tracking his movements around town.

 10. **Elliott's Isolation** – As his homesteading dreams crumble, Elliott becomes increasingly reclusive and paranoid himself, believing the entire community is against him. His writing becomes dark and disconnected from reality.

 11. **Unexpected Alliance** – Maya and Lyle, despite their own differences, become concerned about both Elliott's mental state and Vernon's crusade. They attempt to mediate but inadvertently escalate the situation.

 12. **The Raid** – Vernon finally convinces authorities to execute a search warrant on Elliott's property based on circumstantial evidence and anonymous "tips" he himself called in. The raid finds nothing illegal but destroys much of Elliott's failing garden and unfinished infrastructure.


 ### Act Four: Revelation and Resolution

 13. **The Real Operation** – A genuine illegal operation is discovered on land owned by the New Light Fellowship, revealing complex connections between certain county officials and the religious group. Vernon's fixation on Elliott had been partly encouraged to divert attention.

 14. **Community Reckoning** – At a contentious town hall meeting, long-simmering disputes over land use, religious influence in government, and water rights explode into the open, forcing the community to confront its divisions.

 15. **Elliott's Choice** – Faced with the destruction of his homesteading dream, Elliott must decide whether to abandon his property and return to city life or find a more realistic way to belong in this complicated community.

 16. **Vernon's Breakdown and Recovery** – Vernon experiences a crisis of faith in both his religious certainties and his role as a community guardian. His journey toward recognition of his own biases parallels the community's larger struggle to balance tradition and change.


 ## Thematic Arcs

 - **Dreams vs. Reality**: Elliott's idealized vision of rural life collides with the harsh realities of mountain homesteading
 - **Suspicion and Evidence**: How confirmation bias leads Vernon to see "proof" where none exists
 - **Insider vs. Outsider**: The complex dynamics of belonging in a close-knit but divided community
 - **Man vs. Nature**: The hubris of attempting to impose human will on an unforgiving natural environment
 - **Property and Belonging**: Exploring what it truly means to "own" land and be steward of a place

```

Huh.

I expected to have to do a lot more work to get to this stage, but this is actually going a lot better than I expected of a single prompt. We've got both a setting and its thinking in terms of plot outlines and act structures.

Now, I don't know a damn thing about Oregon. I know it's in the US of A, but I don't know exactly where. All I know is that lots of people die from dysentry there (my knowledge of this place may or may not be entirely from a video game). We'll have to make some changes.

And themes - I don't think about themes at this stage; that's putting the cart before the horse for me. But still, general lit-student level functionality is impressive off one prompt.

Let's tinker.

```
 [!YUDHA]
  Set this in a fictional town that takes inspiration from the environment of Sri Lanka - tropical, a former colony.

 It should still be set broadly within an Anglosphere and have broadly western aesthetics, but make sure every single place is fictional, from the village level to the country.
```

And here's the output:

```
 [!CLAUDE]

 # MONSOON CHRONICLES

 ## Setting

 **Emerald Heights** is a remote hillside community nestled in the lush mountains of **Serendipa**, a fictional tropical island nation in the Indian Ocean that gained independence from British colonial rule in the 1960s. The area is known for:

 - Breathtaking natural beauty with dense rainforests, terraced hillsides, misty peaks, and hidden waterfalls
 - Tropical monsoon climate with distinct wet and dry seasons, unpredictable downpours, landslides, and periods of drought
 - Limited infrastructure: unreliable electricity, seasonal water shortages despite the rain, narrow winding roads that flood regularly
 - A mix of longtime residents (multi-generation tea plantation workers, local merchants, indigenous tribes) and newer transplants (Western expatriates, eco-resort developers, artists and writers seeking inspiration)
 - A complex history of tea and spice cultivation, with both legal plantations and illicit growing operations that have contributed to deforestation

 The community falls under the jurisdiction of **Westhill Province**, a rural province with limited resources, where local government affairs are heavily influenced by a small network of established families (both native Serendipan and descendants of colonial settlers). Most residents live at least an hour's journey from the nearest town, **Port Wellington**, which has a population of only 5,000.

 ## Main Characters

 **Elliott Thorne (42)** – A modestly successful British-educated author of literary fiction who has grown disillusioned with London life. After inheriting a small sum from his uncle, he purchased 15 acres of overgrown former tea plantation land in Emerald Heights, determined to build a self-sufficient tropical homestead while working on his magnum opus. Elliott has romanticized notions of living among the "authentic culture" of Serendipa but severely underestimated the challenges of tropical agriculture, monsoon seasons, and the complex colonial history embedded in the land. His earnest but fumbling attempts at homesteading are complicated by his intellectual, Western approach to practical problems that locals have solved for generations.

 **Vikram Jayawardena (53)** – A mid-level bureaucrat in the Westhill Provincial Land Management Office. Vikram has worked for the province for 28 years, starting just after independence, and takes immense pride in his position. Deeply religious (a devout follower of the dominant Western-influenced church introduced during colonial times) and conservative, he's increasingly concerned about Western "outsiders" buying up land and potentially engaging in illegal activities. After a previous incident where an innocuous-looking expat homestead turned out to be a major drug operation, Vikram has become hyper-vigilant about unusual building projects. He's a meticulous record-keeper with an encyclopedic knowledge of local regulations that he wields like a weapon.

 ## Supporting Characters

 **Inspector Rohan Perera (48)** – A pragmatic, no-nonsense police officer who knows everyone in the province. Initially skeptical of Vikram's suspicions but obligated to investigate. As pressure builds from Vikram and certain community members, he finds himself caught between following protocol and his own instincts about Elliott.

 **Lalitha Mendis (39)** – Elliott's nearest neighbor (half a kilometer away), a former environmental scientist who returned to Serendipa after education abroad and has successfully established a small-scale sustainable spice garden. She offers Elliott practical advice he often ignores in favor of methods he's read about in books. Her mixed heritage (part indigenous Serendipan, part Portuguese descent) and scientific approach to farming have made her an occasional target of suspicion in the community.

 **The Wickramsinghe Family** – Wealthy tea plantation owners who believe they have historical rights to water sources that cross multiple properties, including Elliott's. Patriarch Ajith Wickramsinghe (72) sits on the provincial council and has significant influence over local politics. The family maintained their status through both colonial and post-colonial periods by adapting to changing power structures.

 **The Divine Truth Assembly** – A Western-influenced evangelical church led by Pastor Thomas Fletcher (60), an American expatriate who believes the end times are approaching and has established a compound to prepare. They clash with their neighbors over land use, cultural traditions, and their aggressive recruiting tactics that target indigenous spiritual practices.

 **Dr. Nimal Fernando (68)** – A retired botanist and local eccentric who has lived in a traditional jungle homestead for decades. Constantly at odds with the province over land conservation, property rights, and what he sees as the erosion of traditional agricultural knowledge. Becomes an unlikely ally to Elliott despite their different worldviews.

 **Councilwoman Priyanka Gunawardena (55)** – An ambitious local politician educated in London who sees the growing tensions as an opportunity to position herself for higher office by taking a hard stance on "protecting Serendipan cultural values" while simultaneously courting Western investment.

 # Plot Overview

 The novel follows the increasingly tense dynamic between Elliott Thorne, an idealistic British novelist-turned-tropical homesteader, and Vikram Jayawardena, a suspicious provincial official, against the backdrop of a post-colonial hillside community in Serendipa riddled with its own conflicts and contradictions.

 ## Key Events

 ### Act One: Ambitious Beginnings

 1. **Elliott's Arrival** – Elliott moves to his property with grand visions and inadequate preparation. He begins clearing jungle for extensive gardens and orders exotic seedlings unsuited to the tropical climate and soil, while living in a converted colonial-era tea processing shed as he designs an "authentic" but modernized tropical home.

 2. **First Encounters** – During a routine inspection, Vikram meets Elliott and becomes immediately suspicious of his vague explanations about "experimental tropical agriculture" and the unusual layout of his property. Elliott dismisses Vikram as a small-minded bureaucrat stuck in colonial-era thinking, despite his own clear colonial attitudes.

 3. **Infrastructure Struggles** – Elliott's solar system fails during the torrential monsoon season, forcing him to apply for a connection to the rural electric grid, which requires clearing more protected forest and installing poles across ancient terraced fields. This brings more scrutiny from Vikram's office.

 4. **Water Conflict Emergence** – The Wickramsinghe family challenges Elliott's redirection of a seasonal stream that crosses his property, claiming historical water rights that predate British rule. Vikram uses this dispute to monitor Elliott's activities more closely.


 ### Act Two: Mounting Suspicions

 5. **Failed Growing Season** – Elliott's carefully planned gardens fail spectacularly due to torrential rains, poor understanding of tropical soil, and damage from unfamiliar insects and monkeys. Desperate to show progress, he builds several raised growing structures without proper permits and ignores local advice about traditional companion planting.

 6. **Vikram's Investigation Escalates** – Vikram notices Elliott's unusual power consumption patterns and multiple deliveries of "agricultural supplies" from international sources. He begins documenting everything in a detailed file and starts appearing unexpectedly on the property during monsoon downpours.

 7. **Police Involvement** – Vikram convinces Inspector Perera to conduct a "welfare check" at Elliott's property, citing concerns about landslide risk. Though Perera finds nothing suspicious, Vikram interprets Elliott's nervous behavior and rambling explanations as signs of guilt.

 8. **Community Divisions** – A village meeting about water management during drought becomes heated when Vikram publicly insinuates that "certain foreign residents" may be engaged in illegal activities. The community begins taking sides, with underlying tensions about neo-colonialism, Western influence on local religion, and land ownership by "outsiders" surfacing.


 ### Act Three: Paranoia and Persecution

 9. **Vikram's Obsession** – Vikram creates an elaborate wall of evidence in his home office, connecting Elliott to imagined criminal conspiracies involving Western exploitation of Serendipan resources. He begins surveilling Elliott's property with binoculars and tracking his movements around the province.

 10. **Elliott's Isolation** – As his tropical homesteading dreams crumble amidst relentless rain and heat, Elliott becomes increasingly reclusive and paranoid himself, believing the entire community is against him because of his nationality. His writing becomes dark and disconnected from reality, focusing on perceived hostility from the "natives."

 11. **Unexpected Alliance** – Lalitha and Dr. Fernando, despite their own differences, become concerned about both Elliott's mental state and Vikram's crusade. They attempt to mediate but inadvertently escalate the situation when cultural misunderstandings arise.

 12. **The Raid** – Vikram finally convinces authorities to execute a search warrant on Elliott's property based on circumstantial evidence and anonymous "tips" he himself called in. The raid finds nothing illegal but destroys much of Elliott's failing garden and unfinished infrastructure, including traditional irrigation systems he had adapted without understanding their cultural significance.


 ### Act Four: Revelation and Resolution

 13. **The Real Operation** – A genuine illegal operation is discovered on land owned by the Divine Truth Assembly, revealing complex connections between certain provincial officials and the Western religious group. Vikram's fixation on Elliott had been partly encouraged to divert attention from rare hardwood smuggling operations.

 14. **Community Reckoning** – At a contentious village meeting during the height of monsoon season, long-simmering disputes over land use, Western religious influence in government, colonial-era water rights, and the impact of climate change explode into the open, forcing the community to confront its post-colonial divisions.

 15. **Elliott's Choice** – Faced with the destruction of his tropical homesteading dream, Elliott must decide whether to abandon his property and return to London or find a more humble and culturally sensitive way to belong in this complicated community by learning from local wisdom rather than imposing Western ideals.

 16. **Vikram's Breakdown and Recovery** – Vikram experiences a crisis of faith in both his religious certainties (influenced by colonial Christianity) and his role as a community guardian. His journey toward recognition of his own biases and lingering colonial mentality parallels the community's larger struggle to balance tradition, sovereignty, and inevitable change.


 ## Thematic Arcs

 - **Dreams vs. Reality**: Elliott's idealized vision of "authentic" tropical life collides with the harsh realities of post-colonial Serendipan society and monsoon-season agriculture
 - **Suspicion and Evidence**: How confirmation bias and cultural misunderstanding lead Vikram to see "proof" where none exists
 - **Insider vs. Outsider**: The complex dynamics of belonging in a community shaped by colonial history and struggling with Western influence
 - **Man vs. Nature**: The hubris of attempting to impose Western agricultural methods on a tropical environment without understanding local ecological wisdom
 - **Property and Belonging**: Exploring what it truly means to "own" land with a colonial history and be a responsible steward in a place where ownership has been repeatedly redefined by conquest and liberation

```

Serendipa, Emerald Heights and Westhill all sound very cliche, so let's just change it back to Sri Lanka, Galagedara and Kandy respectively. Steering it into familiar waters gives me a better basis to judge from.

Here's my next prompt to Claude:

```
 [!YUDHA]
 Turn this into a chapter-by-chapter outline of events, with each chapter outline providing enough information on plot threads and narrative key points for a writer to reconstruct the chapter from scratch using just the outlines.

```

And the response was a detailed 20-chapter outline titled MONSOON CHRONICLES, covering arrival, local bureaucracy, breaking ground, Vikram's suspicions, the failed crop, power problems, village talk, an official welfare check, community confrontation, surveillance, Elliott's isolation, a concerned alliance, the breaking point, the raid, unexpected discovery, village reckoning, Vikram's crisis, Elliott's crossroads, new growth, and full circle.

{% include image.html image="/assets/images/posts/vibe/2.png" %}

The outline is usable. This kind of book isn't my cup of tea, and it's a little too neatly tied together for my tastes, but I can recognize carpentry solid enough for this experiment here. Honestly, if I wrote off this outline, I could come up with something good here.

# Trying (and Failing) with Gemini

# The Gemini vs Claude Conundrum

My sense of 'vibe coding' is that you are supposed to have a broad idea of where you are going, but not a precise one. In that spirit, let's sort of move on to the next decision, which is:

Are we going to use Claude to write the chapters themselves or are we going to use Gemini?

My initial bias is towards Gemini. There are three reasons. One is that one million context window. The second is my desire not to run into Claude's rate limits because then I would have to pay an exorbitant amount. And the third is Gemini's 2.5's thinking process. Unlike the standard use of Claude 3.7 Sonnet, Gemini produces notes on its so-called thought process, similar to what DeepSeek R1 does.

But first, I want to get a sense of how Gemini writes.

Testing Chapter 1 with Gemini: the result was competent but flawed. Gemini correctly invoked Sri Lanka's two growing seasons (yala and maha) without being asked — but then depicted Lalitha in the trope of a tea-plucker, described rough stone walls that are unlikely for the region, and produced language with a "bizarre artificiality" that seasoned readers will recognise as AI-ish.

Testing Hemingway style guide: dramatically overshoots. Every sentence becomes a short staccato burst. "The air was thick. Rain had stopped for three days. Elliott Thorne stood on his land in Galagedara. Fifteen acres." Like getting repeatedly shot with small-caliber sentences.

Testing Reader's Digest Condensed style: produces something within thirty miles of that sensibility — more readable, cleaner, but still missing things Claude managed without prompting.

# Claude Versus Gemini: The First Three Chapters

After multiple rounds of testing, Claude produces chapters that are more plausibly human-esque in a single shot. The whole water theft conflict is seeded well, with the bureaucrat asking Elliott whether he will maintain the same water structures, and workers showing concern about Elliott's changes. The agricultural procedures are largely plausible nonsense — accurate in vibe if not always in precise fact.

The character of Vikram is set up by Dr. Fernando's ranting; character facets are exposed not by description but by how other characters perceive them. Dr. Fernando's interest in watersheds is clear. Water theft is treated with appropriate gravity.

Claude also invented transport that wasn't in the outline: a bus to Galagedara junction, then a tuk-tuk up to the property. This is, as it happens, extraordinarily true to these parts.

Gemini AI Studio (Gemini 2.5 Pro) performs noticeably better than the web interface — Lalitha looks more like a landowner, the shed has a more believable construction — but still requires more prompting to reach the same depth.

# A Brief Note on Reality

Now, while I relentlessly copy-paste, copy-paste and copy-paste back and forth, I want to share with you a little piece of my life as it is today.

Five years ago, I bought a piece of land in Galagedara, Kandy. I won't say exactly where, but suffice it to say that it was the rear end of an old tea estate. It wasn't entirely isolated from civilization. It was about two kilometers to a main road but it was on the other end of rambling and eclectic collection of mountain roads. Some of them were more footpaths through the mud than anything else.

I didn't care. This was a step on a quest that I had been obsessed with for over a decade at this point. I wanted a house. I wanted a massive garden where I could grow things - vegetables, flowers; a space that I could transform into, not an oasis in the desert, but a great blooming on the mountain; a place where I could look up and see the sky and enjoy it completely devoid of the skeletons of glass and concrete and steel that climbed around me wherever I went in the city.

I am also a novelist, so in true form I did my research novel-style; reading the experiences of people who had done this, trying to understand the world through their eyes. My partner and I fell in love with the whole permaculture movement. We watched a fantastic movie by Happen Films called Fools and Dreamers. In between wondering what happened to actual Sri Lankan capacity to grow vegetables and so on and exist outside the state-subsidized monocrop culture, we furiously planned everything that we would grow. We set ambitious goals for ourselves.

And we arrived here just as Elliot did in a tuk-tuk. We began construction. Someday I will write a long blog post about how not to build a house in Sri Lanka, but it was a massive undertaking. I've never appreciated the sheer power of concrete as a technology until that point. And years after, we moved in this year, and our dreams of starting a farm and wandering through the flowers have been systematically overrun by the more practical concerns of a place like this. Sorting out electricity. Sorting out water! Municipal water sometimes delivers only 2-3 hours a day, so you have to dig a well, Which first involves finding the oldest surveys that you can find on the property so that you can begin to tease out springs that have long since been a) tapped by neighbours and b) buried and closed off when they realised the property had sold. And then you have to think about motors and backflow and water storage across the property.

And then you have to deal with the realization that the cranky old man who is your closest neighbor has a reputation for eventually squatting on other people's land by growing stuff on them or building water infrastructure; and that he seems to have, let's just say, run-ins with drug dealers to whom he or his family owes money. I have not yet been able to figure out exactly who.

So you have to think about fences. Then you get those fences up and you start realizing that you need better canals, because otherwise the water flow during the April rains will just cut massive grooves where the concrete of the fence meets the earth. While you're doing all this, the rain starts; so you have to figure out sheds, canopies, because the rain gets in through the windows sometimes. Don't even get me started on how complex gates actually are when you're trying to build them on a slope. Then you try to take a few days off and start planting some things, but because this used to be an old tea estate, the topsoil is completely eroded, it tends to wash off at the slightest rain, and the thing that grows best on it is actually an invasive tall grass - *Megathyrsus maximus* - that is an absolute menace in Sri Lanka. You can cut and clear it, but for that you need tools, and you also need a game plan for planting its replacement, because without a suitable replacement it will grow back and while it grows back the topsoil will erode a little bit further.

Frustrated, you decide to spend a day listening to the new Linkin Park album, which is when a bunch of monkeys springboard off the kendha trees you forgot to cut down, attempt to invade your room, and succeed in knocking out the 4G outdoor antenna that you've so carefully positioned to face the closest cell tower. This takes your measly 8 mbps connection offline. You fight them off with a gel blaster - a reproduction of the HK416. But the damage is done. And now the friendly neighbor who brought healing herbs for the dog that seems to think it lives here is now afraid because you seem like an armed lunatic. Even worse: you *are* an armed lunatic.

You get the picture. Imagine a combination of Kafka's bureaucracy, lack of material, lack of knowledge, a version of Stardew Valley authored by the Chaos gods instead of ConcernedApe, and just sheer mud and leeches; this peculiar combination has a way of slapping you in the face and dragging you back down to reality.

Now, fortunately, we are not overrun, as it were. We have instead paced ourselves and figured out saner plans and realized that farmers on YouTube are not necessarily an ideal source of real life advice on this part of the journey. But I say this as a way of conveying some of my shock in seeing these AI models hitting so close to some truth that I have practically experienced. Maybe there's a lot of text out there about Sri Lankans trying to rehabilitate old tea estates, but I don't think so. I am legitimately curious as to how much of this experience it can pick up on.

# The Production Line, and My Feelings Within

One of the things that I've observed with state-of-the-art LLMs is that they're much better at planning a thing than doing the thing. This may seem very counterintuitive. But think of that one person that you know who is the "idea guy". Elaborate ideas, much much lower skill in actual execution and seeing the thing through to the final form.

LLMs strike me as being similar. You see, when I try to use them for coding, they'll often make sensible overview suggestions, but I've noticed that they tend to flub hard on the specifics of complex code bases. It's the same feeling that I'm getting with the novel here. The outline looks good, the thought process is at least a decent approximation of intelligence. The end result leaves something to be desired.

Consider this exchange which happened at chapter 5:

```
[!YUDHA]
This feels a little too on the nose. How do we make it subtler?

```

```
[!CLAUDE]
You're right that parts of Chapter 5 feel too direct or explanatory. Let me revise it to make the themes and character development more subtle and nuanced. The goal would be to show rather than tell Elliott's failures and his reluctance to adapt, letting readers draw their own conclusions.

Here's how I'd approach making Chapter 5 more subtle:

1. Replace direct statements about Elliott's feelings with physical descriptions and actions that imply his emotional state
2. Make Lalitha's wisdom less explicitly stated and more demonstrated through concrete details
3. Remove any "lesson-like" dialogue and replace with more natural conversation
4. Show the contrast between Elliott's Western methods and local approaches through specific details rather than general statements
5. Use the environment and weather as metaphors rather than directly stating their significance

```

The thought process and the approach - sure, seems good. Execution, not so much. As much as it fixes, it does damage as well. Consider this addition:

```
[!CLAUDE]
Lalitha studied the drawings, her face revealing nothing. "Interesting," she said finally. She passed the papers back to him. "You know, if you'd like to see something different..." She paused, watching his expression. "My family's garden survived the great flood of '93. And the one in '07."
```

Floods in Kandy? Particularly in this part of Kandy? Extremely unlikely. Landslides make sense, but great landslides of 93 and 07 don't sit well: unless there's a whole mountain sliding off the shelf somewhere, we kind of don't refer to them like that.

If you know anything about Anthropic's Claude, it's that conversation limits will eventually get you. At some point I had to say the following:

```
[!YUDHA]
Give me a summary of all the events thus far and all the necessary character, plot and environment information for Claude to continue writing this book in a new chat
```

This produced a comprehensive document covering all characters, their backstories and roles, all events chapter by chapter, the physical setting in Galagedara, the cultural context (colonial history, traditional water rights, religious divisions), and a guide to the next chapters.

This mostly worked, but the literary agent, in subsequent chapters, went from being "Margot" to "Martin". Obviously a more sophisticated store of information could easily solve this problem; in fact you could do it easily via the API.

I do have to keep reminding Claude to be more subtle, with or without the style guide. It seems a little hardwired to make on-the-nose observations; show-don't-tell in the middle, but lots of tell-don't-show where you least expect it.

Sometimes it slips into very formal language - all the dialogue starts to feel like a bunch of people from the LessWrong forums. Sometimes its corrections aren't corrections, and it retreads the same patch over and over again (for this chapter, seven times).

But in the end, we do have a draft. And if cliched, that's partly my fault.

# What Have We Summoned?

My honest opinion is that this is a decent first draft. It sounds like it's a writer that's probably trying a little too hard, certainly someone who hasn't quite found their voice yet, but that's a lot of us starting out.

There are things to fix. Yes, all the chapters have this curve towards a very forced cliffhanger, emblematic of a lot of less experienced writers. Yes, it could use an edit. Yes, these references to the great floods, while consistent, not entirely practical for this region. And, quite frankly, a lot of its ideas about how local governance seems to work in these places is some kind of fantasy that I have never really seen here. Also, Dr. Fernando at some point claims to have lived there for seventy years, which would put him well past retirement. There's a whole colonialism-indigenous knowledge line that sounds about as subtle and as realistic as a glass hammer. The writing alternates between interesting touches, heavy-handed exposition and odd assumptions: no grace here, not yet.

But it is decent. Or rather: it could be made decent. Not a 9/10, but with enough sawing and hammering, a 6/10 could emerge.

```
[!CLAUDE]
"I didn't intend to become a focal point for water disputes," Elliott said.

"Few of us intend the roles we ultimately play." She adjusted her bracelet, a subtle gesture that nonetheless drew attention to the gold at her wrist. "The Wickramsinghe family has significant historical influence, but times are changing. New perspectives can be valuable when properly aligned."

Something in her phrasing suggested layers of meaning beyond the obvious. "I'm not sure I understand the political dimensions at play here," Elliott admitted.

"Few outsiders do initially. But you'll learn." Her smile remained perfectly calibrated. "My office is always open if you need guidance navigating local complexities. Sometimes a neutral perspective can identify paths forward that traditional forces overlook."

Before Elliott could respond, she turned to greet another community member, the conversation clearly concluded on her terms.

Outside, the afternoon had brought a rare break in the rain. Elliott paused on the building's steps, observing the villagers dispersing in various directions. The meeting had transformed his understanding of his property—what he had seen as a blank canvas for his agricultural project was instead a nexus of historical claims, community expectations, and political maneuvering he had barely begun to comprehend.

Ajith Wickramsinghe passed by with his son, both men acknowledging Elliott with the barest nod. Their body language suggested the water dispute was merely paused, not resolved. Behind them walked Vikram, engaged in conversation with a group of older men, occasionally glancing in Elliott's direction as they spoke.

"Quite the introduction to local governance," Dr. Fernando commented, joining Elliott on the steps. "Water connects everything here—agriculture, religion, family histories, politics. It's never merely about irrigation."

"I'm beginning to understand that," Elliott replied. "Though I seem to have stepped into currents running deeper than I realized."

"Indeed. And now you're on a committee with Vikram Jayawardena, who clearly harbors suspicions about your activities."

"And with Ajith Wickramsinghe, whose water I apparently stole."

Dr. Fernando's expression softened slightly. "Consider it an opportunity to demonstrate your genuine intentions. Transparency dissolves suspicion more effectively than defense."

They walked together toward the village edge, the conversation shifting to less contentious topics. As they approached the fork where their paths would diverge, Dr. Fernando paused.

"A word of caution," he said quietly. "Councilwoman Gunawardena represents interests beyond merely community welfare. Her family has development connections in Colombo. Any guidance she offers comes with undeclared alignments."

"Is there anyone in this village without undeclared alignments?" Elliott asked with a weary smile.

"Perhaps not. We all contain multitudes." The botanist adjusted his satchel. "I'll bring those pepper seedlings tomorrow, if the rain holds. They'll thrive in your northwestern bed, regardless of politics."

```

Quite frankly I've seen a lot worse. In drafts and sometimes even in final published work. In fact, I would be completely amiss if I didn't mention just how advanced AI instruction following has gotten.

You see, when I was retraining GPT-2, there was no way that you could chat with it. You had to get the weights and use PyTorch and TensorFlow and all that bullshit and retrain the damn thing and hope that your laptop didn't melt in the process.

When ChatGPT came out, it was mind-blowing to a lot of people. But it was still, the writing was puerile; its abilities were widely mocked by anyone who was an expert in pretty much anything. That was November 2022. I remember Nassim Nicholas Taleb mocking ChatGPT's inability to handle math and thinking, why would you use a next token generator as a calculator? That doesn't even make sense. Go to Wolfram Alpha.

But here's the rub. These things are getting progressively more competent; and it's not even midway through 2025. What we are seeing here with these chapters being generated is stuff that I honestly expected to happen somewhere around 2027 or 2028. And I thought it would take massively fine-tuned specialist models, maybe a lot of models working in concert, mixture-of-expert style, not an easy general model behind an easily available chat window.

The fact that we can go from the idea to outline to this in a few terse, one sentence requests is nothing short of mind blowing.

```
[!CLAUDE]
Vikram arrived precisely at nine, his official Land Management vehicle splashing through puddles on the access road. He emerged immaculately dressed despite the muddy surroundings, a clipboard tucked under his arm and a digital camera hanging from his neck. His shoes—practical rubber boots rather than his usual office footwear—were the only concession to the conditions.

"Mr. Thorne," he called, approaching the tea shed with measured steps. "Shall we begin with your current electrical setup? I'll need to note capacity and existing infrastructure."

Elliott led him around the property, showing the solar panel installation, battery bank, and the rudimentary wiring he'd run to power essential equipment. Vikram photographed each component, making notes on his clipboard without comment.

"And your planned usage?" Vikram asked as they approached the raised garden beds. "You mentioned only residential needs on your application."

"Yes, basic lighting and appliances. Perhaps a water pump." Elliott gestured toward the small pump he used for irrigation. "Nothing industrial."

Vikram's gaze lingered on the recently constructed growing platforms. "Interesting structures. Not typical for local agriculture." He took several photographs from different angles. "What are you growing here specifically?"

"Just vegetables," Elliott replied, sensing a familiar undercurrent of suspicion. "Tomatoes, peppers, some greens."

"All exposed to natural light? No supplemental lighting required?"

Elliott hesitated. The grow lights he'd ordered remained unused in their boxes, waiting for proper electrical supply. "I might use some starter lights for seedlings. Standard practice in damp conditions."

Vikram made another note. "And these platforms—multiple electrical outlets installed, I see." He pointed to the weatherproof boxes Elliott had mounted on each structure. "Rather extensive for 'standard practice.'"

"Future-proofing," Elliott explained. "It's easier to install during construction than to add later."

Vikram nodded without responding and continued his inspection. When they reached the rear of the property, he paused at the edge of the diverted stream, now flowing rapidly with recent rainwater.

"The Wickramasinghe complaint remains unresolved," he observed, photographing the watercourse. "And this diversion was implemented without proper permits."

"It's a temporary solution," Elliott said. "I'm still working on the final water management system."

"Indeed." Vikram's tone was neutral, but his eyes were sharp. "Mr. Thorne, would you mind if I examine the interior of your residence? Electrical safety assessment."

Inside the tea shed, Vikram moved with deliberate slowness, his camera capturing the sparse furnishings, the patches in the roof, the extension cords running to various appliances. He paused at Elliott's desk, eyes lingering on the blank manuscript pages weighted down with a stone.

"Your book project," he said. "It progresses well?"

"It's... evolving," Elliott replied. "The agricultural aspects have been more challenging than anticipated."

"Challenging," Vikram repeated, the word hanging between them. His gaze shifted to a stack of boxes in the corner—the unused grow lights and hydroponic equipment Elliott had ordered before understanding the true nature of monsoon season. "And these?"

"Agricultural supplies," Elliott said, aware of how the sealed boxes might appear. "Nothing particularly interesting."

Vikram approached the corner, examining the shipping labels without touching the boxes. "Hydro Solutions. EcoLight Systems. The same suppliers used in the Knuckles Range case, if I recall correctly."

"What case?" Elliott asked, genuinely confused.

Vikram didn't answer directly. "May I?" He gestured toward one of the boxes.

Elliott nodded, and Vikram carefully opened the top carton, revealing packaged LED grow lights designed for indoor plant cultivation. He photographed the contents without comment, then resealed the box with precise movements.

"Well, Mr. Thorne, I believe I have sufficient information for my assessment." Vikram moved toward the door, his expression unreadable. "Regarding your electrical connection application, you should receive official correspondence within two weeks."

"And the assessment?" Elliott prompted. "Is there anything I should address?"

Vikram paused in the doorway. "I note several code compliance issues that may affect approval. And the matter of usage classification may require revision. Your setup suggests agricultural-commercial rather than purely residential use."

"It's a small personal garden," Elliott protested. "Hardly commercial scale."

"Scale is relative, Mr. Thorne. And infrastructure often reveals intention more honestly than verbal declarations." Vikram tucked his clipboard under his arm. "Good day."

```

Look at how much is done right here. Vikram wears rubber boots. He is suspicious of grow lights. All of these things that Elliott has brought over are atypical here: the zeitgeist is accurate. It's maintained its context of the conflict set up previously: the water issue with the Wickramasinghes. And *Infrastructure often reveals intention more honestly than verbal declarations* is not a particularly poetic line, but it does go hard.

Okay, it might go hard, with some editing.

But the amazement wore off quickly. Somewhere around the tenth chapter, that is to say, halfway in, my eyes were glazing over. I needed periodic coffee breaks and to go pet one of the cats. I put on my headphones and listened to Philip Glass for a while, just to take my mind to a slightly saner place.

Yes, the technology is amazing, but I'm reminded of something that supposedly happened during the filming of the Hobbit movies. Because of the Hobbit's reliance on CGI, Sir Ian McKellen, the extraordinary actor who plays Gandalf, was relegated to spending a great deal of his time in front of a green screen, separated from his co-stars for long periods of time. Here's the [link to the story](https://www.express.co.uk/entertainment/films/1479651/lord-of-the-rings-ian-mckellen-gandalf-the-hobbit-broke-down-cried).
I'll put the salient bit here:

*He said at the time: "In order to shoot the dwarves and a large Gandalf, we couldn't be in the same set. All I had for company was 13 photographs of the dwarves on top of stands with little lights - whoever's talking flashes up."*

*McKellen added: "Pretending you're with 13 other people when you're on your own, it stretches your technical ability to the absolute limits."*

*The saddened star added: "I cried, actually. I cried. Then I said out loud: 'This is not why I became an actor!'"*

I didn't cry, but I have to admit that a kind of terrible depression stole over me. Claude was cool, but ultimately it was doing everything that I enjoyed doing, the making of tiny decisions, the massaging of the story, solving problems, the following of characters through their eyes, and seeing new things about a world I had only half imagined before. And all of that was suddenly taken from me, hidden behind an unending series of requests. *Give me the next chapter.*

{% include image.html image="/assets/images/posts/vibe/3.png" %}

In doing this experiment, I felt that I had become less even than the AI. I have become a glorified copy-paste function. This is not why I became a writer.

# So can AI write a novel?

Can AI write a novel? The answer is yes. The answer is probably this book, this PDF that I have as proof.

Here is the final product:

- [https://github.com/yudhanjaya/yudhanjaya.github.io/blob/main/pubshare/Monsoon%20Chronicles.docx](https://github.com/yudhanjaya/yudhanjaya.github.io/blob/main/pubshare/Monsoon%20Chronicles.docx)

- [https://github.com/yudhanjaya/yudhanjaya.github.io/blob/main/pubshare/Monsoon%20Chronicles.pdf](https://github.com/yudhanjaya/yudhanjaya.github.io/blob/main/pubshare/Monsoon%20Chronicles.pdf)

(Please feel free to do whatever the hell you want with it, by the way. So, I have done so little work that I claim absolutely no copyright, no involvement in the process. As far as I'm concerned, this thing is provided under the MIT license. AS-IS with no warranty of any kind. You can use it as inspiration; you can print it out and set it on fire if you want).

There is the general question of: is it a good book? Is this art? Here's where things get thorny.

On one hand we can approach this through the lens of how it was made. The *how* involves understanding and critiquing the grinding gears of capitalism that led us here and saying hey, this is a content generation machine. It does not make art.

I don't want to go down the capitalism-is-the-death-of-art route. Mostly because it relies on the presupposition that art and business are somehow separate, despite every indication to the contrary (if you want supercorporate overlords, try publishing). That, in turn relies on this very bohemian notion of art being something that should be free from commercial claims, which was only ever true for a selected bunch of aristocracy and bored bourgeois amateurs slumming it pretending to be professionals.

It also ignores how dumb we humans can be: most of what we consume today are not art, but business decisions, from movies and TV series on Netflix to IP novels to influencer marketing: in other words, *content*. Even among content, most of what we consume is utter garbage. It is not art in any form. (As you can see, I have my own strong thoughts on the matter).

Or we can approach it from the perspective of looking at the text that we have on hand. If that's what you're going with, then this is a pretty decent first draft.

The ending is awful, yes. The cliffhanger attempts are cringe. It seesaws wildly in tone sometimes. It's still better than most first-time novelists produce on the very first go. It is certainly better than I was when I was writing Numbercaste, my debut; I had to rewrite that novel a few times to make it remotely readable. It is feasibly something that a good writer can polish into a readable text - a 6/10 on IMDB, if you will.

Given the rate of progress, I expect that whatever OpenAI or Anthropic have in stock has their next model update. We'll take this answer from "can be polished into a 6 out of 10" into a straight 6 out of 10, polish included. Depending on how sophisticated your pushing is, maybe a 7/10. Who knows. I don't know if AI will produce art - as in something truly weird and bizarre and original without significant human interaction - but this does bode ill for work that is firmly at the middle of the bell curve.

As I've said before, and I'll say again, when you take a large amount of text and you train systems to find patterns, you are going to end up broadly moving towards the middle of the bell curve and staying there. If our experiment is an indicator, the middle of the bell curve is not only already here; it will be increasingly easier to achieve.

# Closing thoughts

The true end result of this experiment is fascinating: I find in myself complete ambivalence to what I have created. I can acknowledge this as the building block of potentially something competent (with a lot of work to go). I don't hate it. I can certainly read it. And yet, outside the novelty of this experiment and the need to finish this post, I can't myself to actually care about it. Even the token amazement of *holy shit we've got this thing and we only really spent a day on it* has faded. I can't even find enough interest to see if I can prompt it into better language. The only real interest I find is that I have a better answer next time somebody asks me this question.

This is odd, because my framing has been as a tool user. I come at this with a bias. I believe that humans are cyborgs and that we tend to integrate each piece of technology that we come across. I believe Garry Kasparov's thesis about human-AI hybrids, that is what I am interested in. Even so, when that hybrid nature tilts towards me doing almost nothing, and all my choices being made for me, I find myself being incredibly bored.

What's the point, anyway? An astute observer may say that I could have gotten here without all this work, and they'd be right.

It's difficult to have a conversation about AI and writers right now. For obvious reasons: even if it weren't being pitched as an automation machine threatening livelihoods, there's the fundamental fact that the underlying training data for modern LLMs - the reason that they're getting increasingly better at tasks like writing a novel - is because their underlying training data does, indeed, contain novels. Almost the world's entire supply of them, if the research labs building these models have their way, and all of it is stolen.

Talking about AI, therefore, is sometimes like employing a thief. He's broken into your home, and somehow everything he has learned in the act of breaking in is precisely what makes him useful to you. It's not an exact analogy, but it tracks.

But I always find it better to talk about things and to understand technology instead of blindly flailing away. The tech is here and even if AI research is stopped overnight, the models themselves are already open-sourced, they're already out there and can feasibly be run on everything from a phone to a laptop with varying degrees of competence. The genie, in short is out of the bottle. Governments were far too slow to understand and respond to the problems - and now those problems have propagated, turned into solutions; the good sold right back to the owners.

I've met quite a few writers who use AI as a sort of question and answer machine. Unless they're using specialized tools (ie: Perplexity), these are unsophisticated users. I'm always very hesitant to use something like this without a base set of sources and documents underneath it, an approach that we call retrieval augmented generation, because largely AI are blurry oracles, if you will; searching Reddit has often provided a lot more useful results.

I think one layer of sophistication up from there are people who use this as a brainstorm partner. A lot of software engineers do this. I think a lot of other people in a lot of other jobs will do so as well over the coming months and years. A general-purpose mind a general understanding of nearly everything is too useful to pass upon. Instant critique and springboards for ideas are valuable things, even when they're not delivered by human minds or experts. For more ideas, there's a working paper from Harvard Business School that's worth reading, linked below.

One layer up from there is, I think, my general preference: turning AI models into specialized devices. One use case that I can think of right now is as a translator. I have been writing my own fictional languages for a while; and dare I say I've escaped the valley of being utterly rubbish at it.

After designing the specification for one such language, I realized that if I write a translation guide and give that as a prompt to a large language model, it turns a large language model into a translator. And also if my spec is sufficiently detailed, I can give that to a large language model and provided there are references to existing alphabets and languages, I can derive a lexicon by plumbing the depths of the model, so to speak, and then carefully analyzing what I find. Something that might have taken me months or years to do is now a week's worth of describing what I want in English.

One more level of sophistication up from there is probably attempts to actually use this stuff to conjure books wholesale.

Given our experiment here, this strikes me as eminently doable. In fact, everything I've done here is an incredibly amateur approach. Like I said, vibe coding. I haven't optimized prompts. I haven't built any kind of serious programming infrastructure to automate this process. And I know for a fact that there are companies and individuals, some of them with pots of money, that at least seem to want to do this. If my hackneyed set of attempts here can give you something that is first draft-esque, then you can bet your bottom dollar that someone else has already figured out a way to do it and make it nearly indistinguishable from anything else you've read. Heck, I can imagine an easily-made programmatic loop where one model generates, the other critiques - and sends back to the generator with instructions (in effect, using two models in a fashion similar to how a GAN works internally).

Do I want AI writing my novels for me? No. There are two reasons why:

1) **Broad-spectrum ethics:** it's one thing to see how far something can go as an experiment. It's another thing to use a piece of technology this way. See the thief analogy.

2) **Personal enjoyment**: I am very fortunate in that I don't write for money. I like making money, but I'm at a position where I can write the stuff that I want and then that stuff makes money for me. Now, that may not be the best way of making money, but it's the best way of doing what I enjoy. Take that away from me and give it to Claude, and I don't really see a point of living. I go back to my curious observation of being utterly bored by what I've just produced here.

However, I can guarantee you that this is going to happen. I remember how I first felt when I discovered that the Nancy Drew and the Hardy Boys books were not written by individuals but were actually commercial intellectual property churned out by a stable of work-for-hire writers.

The stables still exist. If anything, they've just gotten a lot more sophisticated. The incentive still exists.

At least I now have an updated answer. What took some nudging today might take only a few sentences tomorrow. If you want to imagine the future, all you need is a few ideas . . . and enough boredom to copy paste into a word document, forever.


# Further reading

Interesting stuff is hard to find. Most people working in tech seem to have no understanding of psychology, and vice versa. There's a lot of hype, there's a lot of fear, uncertainty and doubt, there's certainly going to be a lot of lawsuits, and there are a lot of people cashing in on all these things.

1. [Gwern Branwen's essays](https://gwern.net/index) are always worth reading
2. [AI 2027](https://ai-2027.com/). Good stuff. Terrifying. Very plausible.
3. Ethan Mollick has been increasingly [exploring (and evangelizing) the hybrid human-AI mode of interaction.](https://www.oneusefulthing.org/p/the-cybernetic-teammate)
4. Edward Newton-Rex, who not only articulates all the issues on copyright, but actually fights them. [Ed Newton-Rex](https://ed.newtonrex.com/) is his site, but Twitter is the best place to follow him.
5. Robin Sloan, one of the pioneers in this particular niche, has a great essay: [Is it okay?](https://www.robinsloan.com/lab/is-it-okay/)
