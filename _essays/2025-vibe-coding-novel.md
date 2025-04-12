---
title: Can you vibe-code a novel?
description: I usually say no, or laugh. This time, I have a 33,000-word exploration (and its 50,000-something-word output) backing up a meandering *yes.* This is why.
category: Ideas
date: April, 2025
image: /images/vibe/vibe.png
---

“I don’t speak”, Bijaz said. “I operate a machine called language.”

--Frank Herbet, Dune Messiah 

# A question, my dear Watson


Can an AI write a novel?

I usually say no, or laugh. This time, I have a 33,000-word exploration (and its 50,000-something-word output) backing up a meandering *yes.* This is why. The Dune quote is very appropriate, given the Butlerian Jihadness you may feel reading this. 

# Introduction

 In the past, when people have asked me about this, my response has been no.  I can specifically point to why I say *no.* I have specific experiences in that strange traffic pile-up where AI meets novels:
 

1) [OSUN and the Salvage Crew]([OSUN](https://yudhanjaya.com/project/2019-04-osun)) (I wanted not-great inhuman poetry. I got not-great inhuman poetry, albeit after reading thousands of really bad poems and stitching them together)

2) [The time I and a bunch of other writers tested Google's Lambda model for storytelling ability]([2211.05030](https://arxiv.org/pdf/2211.05030)) (We didn’t talk to each other, but if you read the paper, our general agreement seems to be that it's kind of crap, like a very tropey, amateur writer who goes off the rails once the context window is full - and that only was as much as a short, short story)

3) Doing the same with GPT-J and a custom notepad implementation I wrote in Python (it was jank, but would try to read and suggest variations on the next paragraph)

4) The Stranger in Pilgrim Machines (I wanted something that didn't properly understand how to communicate with a human in English, and I got what I wanted. Which reminds me to upload the page for Pilgrim Machines. How did I forget?)

5) As a translator of (private) fantasy languages. I’ll share Lusitan and Samarskand at some other point, but basically I wanted some classical-sounding languages that had a customized SOV order and tenses, and was simpler for to work with for spellcasting purposes. It was pretty straightforward to write a very basic translation guide and tell a local model to act as a translator. My only problem is that I keep changing the language spec, so I keep breaking this thing. 

In none of this did I see the kind of ability you need to pull off an actual novel. 

You see, a writer works on multiple levels. When I write, I'm operating at many different layers of abstraction. I'm thinking about overall plot and progress and higher tier concepts in the story. I'm thinking of what's happening in that chapter. I'm thinking of what's happening at a sentence-by-sentence level. I'm thinking of who this character is and what their motivations are and what they probably had for breakfast this morning, and why they seem to be a little bit off or why they are sneezing. I'm thinking of the larger context of the world, politics, its economics, and how those things are going to constrain the choices that my characters can feasibly make (or even want to make given whatever I’m dishing out at them).

My specific poison, in the field of AI, are LLMs (or Large Language Models). At the time that I was doing these things, LLMs were nowhere close. At best it was kind of a really shitty odd autocomplete. This wasn't really surprising after all. That was the nature of the transformer architecture at its heart. LLMs did not have the context window - the “attention span”, if you will, necessary to write anything meaningful, even within the boundary of a short story, without significant massaging. 

In fact, I had a general sense that they were interesting things when they were small and easily buildable by one person, and weren't necessarily trying to replicate the experience of conversing with a human being, but were essentially very bizarre little next word next token predictors. 

You could have fun with these things. Robin Sloan, for example, did some very early and very cool experiments with RNNs. Given enough prep work - for example, a whole program that templates common plot structures, or retraining a model to do Tang Dynasty poetry, or intentionally creating a bad quant -you could have an interesting experience on a *very narrow domain*. 

But this prep work required going far and above the publicly available tooling, and honestly was a stupid amount of work. They did harm anyone, and certainly weren't going to take any livelihoods away, so experimenting was fun.

And so this is what I say whenever this question comes up at the lit fests that I speak at. "Can an AI write a novel? No."

***

Let us talk about the useful, or the *bias*. I have a distinct bias towards the cyborg. I've referenced this many times: particularly Gary Kasparov's thesis that the future will not be human versus machine, but [human + machine] versus [human + machine]. I think that’s not just a logical framing, I think it's a completely normal one, given how smoothly and easily we have integrated so many initially alien technologies into our lives. We will shake our fists at the clouds every time a new technology is introduced and our children will grow up so used to it that it just becomes part of the background hum of the universe.

More on bias. Beyond just the philosophical: in my quote-unquote day jobs - both present and past - I functioned largely as a odd combination of a journalist and data scientist. When I entered the field this meant things like using call detail records from millions of citizens to figure out where they lived and where they worked. Somewhere in the middle it was building corpora of languages like Sinhala so that we could build the next generation of natural language processing technology for under-resourced languages; then it was dealing with misinformation and doing OSINT work, like tracking hundreds of protests or mapping mass graves. Now it's a lot to do with AI.

What we do now involves building systems that can pore over large volumes of information, searching for people of interest, particularly people who have allegations of fraud, corruption, possible links to government. This whole thing was born out of our years of journalism and fact-checking work. Given notoriously underfunded, understaffed and corrupt parts of government, media and private industry - especially the bits that are meant to keep people honest - can AI meaningfully improve our ability to prevent money laundering and other fraud?

My co-founder and I have ended up on the Lama Hall of Fame at the Singapore at META's Singapore office last year.  I have also ended up on Sri Lanka's National AI Council, thinking about how to use AI to help government deliver better services faster to citizens. My role today is understanding the various problem field, prototyping solutions, understanding AI models and how they fit into our actual solutions. 

From these perspectives, large language models went from being toys to being incredibly useful, incredibly fast. I'm very used to the painful journey that is natural language processing: building corpora, tokenizers, lemmatizers, stemmers - and then hoping to God that you could actually make meaningful information retrieval happen. 

And large language models have been an absolute game changer for these challenges. Retrieval augmented generation, you know, the thing that everyone and their dog is doing? Well, that used to be the domain of “give me five years and a bunch of people from MIT and millions of dollars in funding. And maybe I can build you something that can talk to this database”.

It is genuinely shocking how much AI models have enabled us, a very small team of ex-journalists, to actually pull off. 

I say this to point out my own biases. I understand this technology. And not only that, I actually use it. I don't work at a sophisticated lab like OpenAI or Google DeepMind, I don't have access to those resources and I don't really have a handle on what's already in production at these labs, but I have enough knowledge to make reasonable inferences and assumptions.

Here’s what’s pertinent to the story.

1) AI models are getting increasingly human-like in their writing. If your idea of AI writing is ChatGPT when it came out, or some kind of stupid university plagiarism detector, abandon all hope, ye that enter here. Even the vanilla, freely available stuff can now be prompted with as little as a sentence to sound so much more human than you could ever possibly imagine. 
   
   Last year, you could expect AI models to sound like bad fan fiction writers. Now you can expect bad fan fiction writers to sound like last year's AI.
   
2) Those context windows are growing. And I mean growing by absurd amounts. Models that  operated on 4096 tokens was last year's opening gambit. That is to say, the AI model had a “memory” of less than 4000 words. This year we are seeing the likes of Google Gemini coming out boasting of a million words of context.
   
   To put this in writing terms, the Lord of the Rings is a little over 550,000 words. 
   
3) Things that were in the domain of laughable, or trivial, or “oh we should never let the language shoggoth near this”, now are at a stage where an undergraduate with a weekend of free time can conceivably put together a useful product. 
   
   Ignore the hype beasts of Twitter. Serious, cautious people whose job it is to meaningfully think about significant numbers of other people are approaching AI with cautious optimism as an umbrella of useful technologies.

I don't see these trends dropping or going away in time soon. For more reading, see [AI 2027](https://ai-2027.com/) by Daniel Kokotajlo, Scott Alexander, Thomas Larsen, Eli Lifland and Romeo Dean. It's a work of fiction, and a little bit narrow minded to my view; but I can see why it had to be narrow minded and I can also see how it's going to be disturbingly prophetic.

In the writing sphere, we come to a company called Sudowrite. Sudowrite went viral for their founder’s “soup to nuts” claim of generating a story with AI.[ Pseudowrite, a tool I wrote as a parody/demo for an Augsberg MFA panel](https://github.com/yudhanjaya/pseudowrite), didn’t do as much as Sudowrite, but it could take your idea and turn it into increasingly fleshed out, highly templated act structure using what OpenAI GPT 3.5 and GPT 4. My program certainly could not write your chapters for you, but it could take a vague idea and turn it into the Hero’s Journey pattern that some people love so much.

Looking at what it produced, it was very clear that stuff was still very tropey, very bog-standard, very predictable. Paint-by-the-numbers thinking. My inference from this was that there would come a point very soon where large language models could feasibly act in a support role for a lot of new or inexperienced writers - or replace a part of the workflow of the creation highly templated, very predictable,  conventionally structured fiction.  In other words, if your stuff was bog-standard, if it was at the middle of that proverbial bell curve, then large language models would catch up. 

But the “Midjourney moment” of large language models, with respect to novels, was still some way off.

***

Fast forward to this year. More improvements have happened. The march of progress continues relentlessly ever onward. And sometimes we are the boot, sometimes we are the roadkill squashed underneath.

At Galle Lit Fest, held earlier this year, we had a fantastic panel on AI. That was myself, Adam Rutherford, and moderated by Mangala Karunaratne. On that panel, I asked why anyone would want to read something that nobody wanted to write. We will return to this question at the end of this article. 

But my opinion of *capability* needs some updating. Today's AI models largely are still behind the chat interfaces that debuted in the last two years. These are very unimaginative ways of interacting, and I remain eternally disturbed by how everything from interface design to underlying instruction tuning seems to be done with the purpose of creating a human-like assistant; it is a veneer on top of a very inhuman thing. Nevertheless, the underlying models and the actual technology that connects these models to these interfaces have vastly improved over time in a way that's also hidden by these chat interfaces.

So. How far away are we from a person using AI to write a novel, using publicly available tooling? Let’s do an experiment, in public. 

Let's prompt the first draft of a novel.

***

# The Tools of This Trade

Right. To start with, we’re going to need our tools.

First up, Anthropic’s Claude 3.7 Sonnet model.

I like Anthropic. I like the gentle cream of their web site. I like the fonts, the quirky yet consistent abstraction of their design choices, their relentlessly low-key aesthetics. Trust us, it says. We are boring. We are bland. We may build the shoggoth that displaces you and drives your generations into starvation and exile, but we'll be really polite about it. We may even have a minute of silence. And unlike OpenAI, you don't have to hear about our C-level antics every other day. The nail that sticks out gets hammered. Anthropic is nothing without its people. People. People. Sorry, did we say people? We meant AI.

In other words, Anthropic is exactly what I want in an ideal overlord; faceless, but with excellent iconography. But more to the point, I like Claude 3.7 Sonnet. Mostly because it does what I want it to.

Second, Google Gemini. I'm much less experienced with Gemini, but I'm intrigued by the enormous context window on their Gemini 2.5 model. I also want to see what the thought process is;  I'm still not entirely convinced that a thought process on a transformer model is still anything more than next token generation with extra steps, but I do want to see what it tells me. 

And conveniently enough, Google has suckered me into paying for this whether I like it or not. My Google Drive purchase plan has become something called “Google One”, and I can neither disentangle myself from this annoying digital octopus, nor ignore its wallop on my card. I might as well make use of this thing. 

# The Preparations for this Ritual

I'm the type of writer that obsessively collects and curates my own ideas about what to write next. As a consequence, my Obsidian is full of ideas, and thus premises. We are not going to use these ideas because I feel some attachment to them. Even if they are trash, they feel mine, because they came out of my own imagination; and therefore they feel like things that I should work on. 

This is yet another declaration of bias. Even though I'm here to demonstrate some aspect of this technology,  when push comes to shove I find myself reluctant to sacrifice my child, like a really low budget Abraham.

We'll instead generate a premise based on whatever’s floating around the top of my mind. What have I read recently?

- I re-read the Eisenhorn and Ravenor omnibuses; I'm still waiting for Dan Abnett to finish the Bequin trilogy.
- The high mountains of Portugal by Yann Martel, from which I learned it is inadvisable to walk backwards, have an ape as a housemate, or drive an early internal combustion engine vehicle.
- A needless amount of documentation from the Sri Lankan Water Board and the Ceylon Electricity Board, because we need to get water and electricity to our house; the rainwater catchment and the well is simply not going to be enough on their own. 
- Rodale's Ultimate Encyclopedia of Organic Gardening: The Indispensable Green Resource for Every Gardener (because I can’t figure out why my flower plants are thriving, but my winged beans have died)
- The World According to Garp by John Winslow Irving. Sometimes profound, sometimes horny, sometimes filled with a vague sense of cruelty and unease. 
- Unsong by Scott Alexander, which was fucking fabulous. I’m very late to the party, but I want to write a review. 

Okay. Let my brain be a blender. Let my rainwater catchment system work, dammit. 

# The Outline



```

[!YUDHA]
Hey Claude, write me an appropriate premise for a novel based on these ingredients. Give me two separate documents - one on the setting and characters, the other on the events of the novel:

- One, a novelist who has recently moved into his new homestead in a high mountain in a difficult climate. He is attempting to live out his dreams of homesteading and gardening, but is forced to confront the practical reality of building infrastructure, including roads, electricity supply, water. His plants are dying.
- To a local government employee who suspects that this novelist is actually starting weed cultivation. He escalates by getting the police involved and then becoming slowly increasingly more paranoid about it until he takes on almost an inquisitorial nature.
- In the background, various neighbors have clashes over land ownership rights, water and differences in religion and belief systems, some of which are very ridiculous.
```

![]({{site.baseurl}}/images/vibe/1.png)

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
 
 **Councilwoman Evelyn Porter (55)** – An ambitious local politician who sees the growing tensions as an opportunity to position herself for higher office by taking a hard stance on "maintaining community values.
 
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

Now, I don’t know a damn thing about Oregon. I know it’s in the US of A, but I don’t know exactly where. All I know is that lots of people die from dysentry there (my knowledge of this place may or may not be entirely from a video game). We’ll have to make some changes.

And themes - I don’t think about themes at this stage; that’s putting the cart before the horse for me. But still, general lit-student level functionality is impressive off one prompt. 

Let’s tinker. 

```
 [!YUDHA]
  Set this in a fictional town that takes inspiration from the environment ofSri Lanka - tropical, a former colony.
 
 It should still be set broadly within an Anglosphere and have broadly western aesthetics, but make sure every single place is fictional, from the village level to the country.
```

And here’s the output:

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

Serendipa, Emerald Heights and Westhill all sound very cliche, so let’s just change it back to Sri Lanka, Galagedara and Kandy respectively. Steering it into familiar waters gives me a better basis to judge from.

Here’s my next prompt to Claude:

```
 [!YUDHA]
 Turn this into a chapter-by-chapter outline of events, with each chapter outline providing enough information on plot threads and narrative key points for a writer to reconstruct the chapter from scratch using just the outlines.

```

And the response:

```
 [!CLAUDE]
 
 # MONSOON CHRONICLES
 
 ## Detailed Chapter-by-Chapter Outline
 
 ### PART ONE: SEEDS OF AMBITION
 
 #### Chapter 1: Arrival
 
 - Elliott Thorne arrives in Galagedara during a brief break in the monsoon season.
 - He surveys his newly purchased 15 acres of overgrown former tea plantation land with grand visions.
 - Flashback to London: his literary agent's skepticism about both his move and his planned "masterpiece" about authentic rural life.
 - Elliott discovers the colonial-era tea processing shed that will be his temporary home is barely habitable.
 - He meets Lalitha Mendis, who offers practical advice about the approaching heavy rains that Elliott politely dismisses.
 - Night falls with Elliott writing enthusiastically in his journal about "authentic Sri Lanka" while ignoring the gathering storm clouds.
 
 #### Chapter 2: Local Bureaucracy
 
 - Elliott visits the Kandy District Land Management Office to file permits for renovations.
 - Introduction of Vikram Jayawardena, who scrutinizes Elliott's paperwork with suspicious intensity.
 - Elliott's frustration mounts as Vikram questions every detail of his agricultural plans.
 - When asked directly about what he intends to grow, Elliott's vague mention of "experimental crops" raises Vikram's suspicions.
 - Elliott witnesses an argument between Vikram and Dr. Nimal Fernando over traditional land use practices.
 - On the bus back to Galagedara, Elliott meets Inspector Rohan Perera, who casually mentions past problems with foreigners and drug cultivation.
 
 #### Chapter 3: Breaking Ground
 
 - Elliott hires local workers to clear jungle for his gardens but misunderstands their warnings about soil conditions.
 - He redirects a seasonal stream to better serve his planned garden beds.
 - Ajith Wickramsinghe arrives with his son to confront Elliott about water rights.
 - The Wickramsinghe family history is revealed, showing their political influence and historical claim to the water.
 - Rain begins, more intensely than Elliott anticipated, damaging his first agricultural efforts.
 - Elliott's solar power system begins failing as days of cloud cover deplete the batteries.
 
 #### Chapter 4: Vikram's Suspicions
 
 - Vikram reviews old case files of a Western couple who used "homesteading" as cover for marijuana cultivation.
 - He begins a meticulous file on Elliott, including maps of his property and water usage.
 - At church, Vikram hears Pastor Thomas Fletcher preach about foreign influences threatening traditional values.
 - Vikram drives past Elliott's property during a rainstorm, noting unusual construction and imported materials.
 - He visits the shipping office in Kandy and discovers Elliott has received packages from agricultural supply companies with ties to hydroponic equipment.
 - That night, Vikram pins a map to his wall and begins constructing a web of string and notes connecting Elliott to suspected illegal activities.
 
 ### PART TWO: MONSOON TENSIONS
 
 #### Chapter 5: The Failed Crop
 
 - Three months later, Elliott's carefully planned gardens are in shambles.
 - Torrential rains have washed away topsoil; unfamiliar insects and monkeys have damaged what survived.
 - Elliott's desperate attempt to salvage his agricultural vision by building raised growing structures, working through the night.
 - A visit from Lalitha, who offers to show Elliott traditional companion planting methods.
 - Elliott reluctantly visits Lalitha's successful spice garden but can't bring himself to abandon his Western agricultural books' methods.
 - Elliott writes to his agent that his novel is progressing well, but we see only blank pages beside his bed.
 
 #### Chapter 6: The Power Problem
 
 - Elliott's solar system completely fails during a week of continuous rain.
 - He applies to the rural electric authority for connection to the grid.
 - Vikram intercepts the application and personally conducts the property assessment.
 - During his inspection, Vikram notes Elliott's unusual setup and takes photographs.
 - Elliott becomes defensive when questioned about multiple outlets in his growing structures.
 - After Vikram leaves, Elliott frantically rearranges certain areas of his property.
 - A letter arrives from Elliott's agent asking for manuscript pages.
 
 #### Chapter 7: Village Talk
 
 - Elliott ventures into the Galagedara village center during a break in the rains.
 - At the local tea shop, conversation stops when he enters; he overhears whispers about "the Englishman's secret garden."
 - Elliott meets Dr. Nimal Fernando, who offers him rare endemic plant species that have medicinal properties.
 - On the walk back, they pass the Divine Truth Assembly compound where Pastor Fletcher is leading a loud service.
 - Dr. Fernando explains the history of religious tensions in the area and how the evangelical church has divided families.
 - Elliott returns home to find pamphlets from the Divine Truth Assembly scattered around his property.
 
 #### Chapter 8: Official Welfare
 
 - Vikram convinces Inspector Perera that a "welfare check" is necessary due to landslide concerns near Elliott's property.
 - Elliott panics when he sees the police vehicle approaching.
 - During the inspection, Elliott gives rambling explanations about his failed crops and half-finished structures.
 - Inspector Perera finds nothing suspicious but notices Elliott's nervous behavior.
 - After they leave, Elliott begins writing frantically – not his novel, but paranoid notes about being watched.
 - Vikram and Inspector Perera discuss the visit, with Vikram interpreting every detail as evidence of guilt.
 
 #### Chapter 9: Community Confrontation
 
 - A village meeting is called to discuss water management during the coming dry season.
 - Elliott attends, hoping to resolve the dispute with the Wickramsinghams.
 - Vikram publicly suggests "certain foreign residents" may be depleting resources for illegal activities.
 - The meeting erupts into arguments about water rights, with colonial-era claims being challenged.
 - Councilwoman Priyanka Gunawardena mediates, clearly playing both sides for political advantage.
 - As the meeting ends, clear divisions form with Elliott caught between multiple local factions.
 - Walking home in the dark, Elliott becomes convinced he's being followed.
 
 ### PART THREE: THE DEEPENING DELUGE
 
 #### Chapter 10: Surveillance
 
 - Vikram's obsession grows as he creates an elaborate evidence wall in his home office.
 - He begins spending evenings on a nearby hillside with binoculars, watching Elliott's movements.
 - Vikram's wife becomes concerned about his behavior but he dismisses her worries.
 - During a Sunday service, Vikram prays fervently about protecting the community from corruption.
 - Elliott notices Vikram's car passing his property repeatedly and installs improvised security measures.
 - A scene from Elliott's developing novel reveals his protagonist battling "hostile natives" – showing his deteriorating perspective.
 
 #### Chapter 11: Elliott's Isolation
 
 - The monsoon intensifies, cutting Elliott off from the village for days.
 - His writing becomes increasingly dark, focusing on themes of persecution and betrayal.
 - A landslide damages part of his property, destroying one of his growing structures.
 - Hallucinating from fever and isolation, Elliott becomes convinced the locals sabotaged his land.
 - When Lalitha brings medicine, Elliott nearly refuses to let her in, suspecting her motives.
 - After she leaves, Elliott discovers his manuscript pages floating in the flooded floor of his shed – he has been writing but forgetting it.
 
 #### Chapter 12: The Concerned Alliance
 
 - Lalitha visits Dr. Fernando with concerns about Elliott's mental state.
 - They discuss Vikram's increasing surveillance and the rumors spreading through the village.
 - Dr. Fernando reveals his own history with British colonial authorities who once accused him of growing illegal substances when he was actually preserving endangered species.
 - They decide to approach Councilwoman Gunawardena for help mediating the situation.
 - The meeting goes poorly when cultural misunderstandings arise about Elliott's behavior.
 - Leaving the meeting, they discover Pastor Fletcher and Vikram in deep conversation about "moral threats" to the community.
 
 #### Chapter 13: The Breaking Point
 
 - Elliott, in a moment of clarity, realizes his novel has become unhinged from reality.
 - He attempts to reconnect with the community by attending a local festival.
 - At the festival, he overhears conversations suggesting a raid is being planned on his property.
 - Elliott confronts Vikram publicly, causing a scene that confirms many locals' suspicions about his mental stability.
 - Inspector Perera attempts to defuse the situation but is undermined by anonymous "tips" about dangerous activities.
 - Elliott returns home to find his property has been entered and searched unofficially.
 - In panic, he barricades himself in the tea processing shed.
 
 #### Chapter 14: The Raid
 
 - After receiving multiple anonymous tips (actually from Vikram), authorities approve a search warrant.
 - Dawn raid on Elliott's property with Inspector Perera leading a reluctant team.
 - Elliott's growing structures and agricultural experiments are systematically dismantled.
 - The traditional irrigation system he had adapted is destroyed, causing a small mudslide.
 - No illegal substances are found, but Elliott's erratic behavior is interpreted as guilt.
 - Vikram arrives uninvited to observe, barely concealing his satisfaction.
 - As the police leave, a final heavy rain collapses part of Elliott's living structure.
 
 ### PART FOUR: AFTER THE FLOOD
 
 #### Chapter 15: Unexpected Discovery
 
 - Landslides near the Divine Truth Assembly compound expose unusual agricultural operations.
 - A nighttime fire draws emergency services, revealing a large-scale rare hardwood processing facility.
 - Inspector Perera discovers documents linking Pastor Fletcher to timber smuggling operations.
 - Vikram arrives and is shocked to find his name in financial records, having been unknowingly used as a puppet.
 - Evidence emerges that Vikram's crusade against Elliott was deliberately encouraged to divert attention.
 - Elliott, hearing about the fire, hikes through mud to witness the compound's exposure.
 - A chance encounter between Elliott and Vikram amidst the chaos leads to a tense, revealing conversation.
 
 #### Chapter 16: Village Reckoning
 
 - A emergency community meeting is called in the wake of the discoveries.
 - The Wickramsinghe family's involvement in the timber smuggling operation is revealed.
 - Long-simmering conflicts about land use, religious influence, and water rights erupt openly.
 - Dr. Fernando presents evidence of environmental damage from both colonial-era practices and current exploitation.
 - Councilwoman Gunawardena attempts to position herself as a mediator but is exposed as having connections to both sides.
 - Elliott, still dazed from his ordeal, witnesses the community confronting its own contradictions.
 - The meeting ends with no resolution but a new awareness of shared vulnerability to exploitation.
 
 #### Chapter 17: Vikram's Crisis
 
 - Vikram takes leave from his position, overwhelmed by his unwitting role in the corruption.
 - He visits the ruins of Elliott's homestead, trying to understand how his suspicions were manipulated.
 - A conversation with his wife reveals how his religious certainties and colonial mindset made him an ideal pawn.
 - Vikram visits Dr. Fernando, seeking to understand traditional knowledge he had previously dismissed.
 - Through this conversation, Vikram begins to recognize the colonial patterns in his own thinking.
 - He returns to the church to find Pastor Fletcher gone and the congregation divided and confused.
 - In a symbolic act, Vikram takes down his evidence wall, seeing it now as a projection of his own fears.
 
 #### Chapter 18: Elliott's Crossroads
 
 - Elliott salvages what he can from his ruined homestead.
 - His agent arrives unexpectedly from London, concerned by his erratic communications.
 - As they survey the damage, Elliott realizes he has material for a very different book than he intended.
 - Lalitha offers Elliott temporary accommodation while he decides his next steps.
 - Elliott visits the local school where children are learning both traditional agricultural methods and modern science.
 - He begins to see the possibility of belonging not as an authority but as a student of the place.
 - The first pages of his new manuscript reveal a more humble, complex understanding of his experience.
 
 #### Chapter 19: New Growth
 
 - Six months later, as the dry season ends, Elliott has moved to a small house in the village.
 - He works part-time at Dr. Fernando's botanical conservation project, documenting traditional knowledge.
 - Vikram has returned to his position but with a transformed approach to regulations and community.
 - A scene shows Elliott and Vikram cautiously working together on a small community garden project.
 - Elliott receives a letter from his publisher expressing interest in his new manuscript about cultural misunderstanding and environmental wisdom.
 - The Wickramsinghe family's water claim is being renegotiated with community input.
 - The Divine Truth Assembly compound is being converted into a community agricultural training center.
 
 #### Chapter 20: Full Circle
 
 - One year after his arrival, Elliott stands on his original property, now partially reclaimed by jungle.
 - He has decided to donate most of the land for conservation, keeping only a small plot.
 - A gathering brings together the various characters to plant a traditional garden using methods Elliott has learned from Lalitha and Dr. Fernando.
 - Vikram and Elliott have a private conversation about perception, prejudice, and the possibility of change.
 - Rain begins to fall, but now everyone simply adjusts rather than resists.
 - The final scene shows Elliott writing outdoors despite the rain, no longer trying to control his environment but adapting to it.
 - The last lines of his manuscript echo the themes of belonging, humility, and the complex legacy of colonial history.
```


![]({{site.baseurl}}/images/vibe/2.png)

The outline is usable. This kind of book isn’t my cup of tea, and it’s a little too neatly tied together for my tastes, but I can recognize carpentry solid enough for this experiment here. Honestly, if I wrote off this outline, I could come up with something good here. 

# Trying (and Failing) with Gemini

# The Gemini vs Claude Conundrum

My sense of ‘vibe coding’ is that you are supposed to have a broad idea of where you are going, but not a precise one. In that spirit, let's sort of move on to the next decision, which is:

Are we going to use Claude to write the chapters themselves or are we going to use Gemini?

My initial bias is towards Gemini. There are three reasons. One is that one million context window. The second is my desire not to run into Claude's rate limits because then I would have to pay an exorbitant amount. And the third is Gemini's 2.5's thinking process. Unlike the standard use of Claude 3.7 Sonnet, Gemini produces notes on its so-called thought process, similar to what DeepSeek R1 does.

But first, I want to get a sense of how Gemini writes.

```
 [!YUDHA]
 We have an outline for a novel. Using this, I want you to write the first chapter.
```

```
 [!GEMINI]
 
 **Chapter 1: Arrival**
 
 The air hung thick and heavy, a damp towel clinging to the skin. For three days, the monsoon had held its breath, a fragile truce in the sky above Galagedara. It was during this lull that Elliott Thorne first stood on his land, the deed, still crisp from a Kandy solicitor’s office, tucked inside his sweat-dampened shirt pocket. Fifteen acres. The words echoed with a satisfying weight in his mind, a counterpoint to the humid stillness.
 
 Before him, the land tumbled down a gentle slope, a riot of green reclaiming what had once been orderly rows of tea bushes. Decades of neglect had allowed the jungle to creep back in, strangling the remnants of the colonial past with tenacious vines and the shade of fast-growing Albizia trees. Yet, through the tangle, Elliott saw not decay, but potential. He envisioned neat terraces reborn, not with tea, but with something new, something _his_. Beyond the agricultural ambition, he saw inspiration – the raw, untamed heart of Sri Lanka that would finally bleed onto the pages of his masterpiece, the novel that would silence the doubters back home.
 
 _“Sri Lanka? Elliott, are you quite serious?” Giles, his agent, had peered at him over the rim of his artisanal coffee mug in his sterile Covent Garden office. Rain had lashed against the windows then, too, but it was a different beast entirely – a grey, predictable London drizzle, not this pregnant, tropical waiting. “And this… this novel about ‘authentic rural life’? Isn’t that a bit, well, ambitious? Perhaps stick to what you know? Another psychological thriller set in Hampstead?” Giles’s skepticism had been a polite veneer over outright bewilderment. “Fifteen acres of jungle isn’t exactly conducive to literary pursuits, old boy. Think of the snakes. And the internet!”_
 
 Elliott pushed the memory aside, swatting at a persistent fly buzzing near his ear. Giles didn’t understand. London didn’t understand. They craved authenticity but recoiled from its messy reality. He, Elliott Thorne, would embrace it. He would live it, breathe it, and capture its soul.
 
 His gaze settled on the structure near the property's edge: the old tea processing shed. Described generously in the sale documents as a ‘potential dwelling’, it now revealed itself as little more than a skeleton huddling under a corrugated iron roof stained orange with rust. Several sheets were missing, offering jagged glimpses of the grey sky. The rough stone walls were crumbling in places, mortar turned to dust, providing easy ingress for whatever creatures sought shelter. A quick inspection inside revealed damp-streaked walls, a floor slick with mildew, and the distinct, musky odour of bats. Habitable was a stretch. It was, perhaps, marginally better than sleeping under the looming clouds. This would be his temporary home, his writer's retreat, the crucible for his authentic experience. He squared his shoulders. It was perfect.
 
 A voice startled him, calm and clear, cutting through the hum of insects. "You are the new owner? Mr. Thorne?"
 
 He turned to see a woman standing at the overgrown track that served as an entrance. She was of indeterminate middle age, her saree a practical, deep blue, her dark hair pulled back severely. Her face, etched with the lines of sun and experience, held a steady, assessing gaze. She carried a woven basket filled with unfamiliar green leaves.
 
 "Yes, Elliott Thorne," he said, offering a hand, which she regarded for a moment before clasping it briefly. Her grip was firm, her hand cool.
 
 "I am Lalitha Mendis. My family land borders yours, to the east." She gestured vaguely uphill. "Welcome to Galagedara."
 
 "Thank you, Mrs. Mendis. A pleasure to meet you."
 
 "Just Lalitha," she corrected gently. Her eyes swept over the dilapidated shed, then towards the sky, where the clouds were beginning to gather a bruised, heavier look in the west. "The rains will return soon. Properly."
 
 "Ah yes, the monsoon," Elliott said, nodding with what he hoped sounded like worldly acceptance. "I'm looking forward to experiencing it fully."
 
 Lalitha’s expression didn’t change, but her gaze sharpened slightly. "This break," she said, her tone practical, "it is just the sky catching its breath. When the _maha_ monsoon truly settles..." she paused, searching for the right English words. "It is not like the rain you know. The ground softens. Things wash away. You should secure those roof sheets," she nodded towards the shed, "and perhaps dig a channel, away from the walls."
 
 "Thank you for the advice, Lalitha," Elliott replied, smiling politely. He appreciated the local concern, of course, but he had books, plans, modern solutions. He hadn’t come halfway across the world to dig ditches based on village wisdom before the first real drop had even fallen. "I have some experience with challenging weather. I'll manage."
 
 Lalitha held his gaze for another moment, a flicker of something unreadable in her eyes – resignation, perhaps, or mild exasperation. Then she gave a slight nod. "As you wish. If you need anything, my house is just beyond that stand of jak trees." She pointed again, then turned and walked away with a quiet, measured gait, disappearing back into the encroaching green.
 
 As dusk began to bleed into the humid air, painting the swollen clouds in shades of purple and grey, Elliott retreated into the musty embrace of the tea shed. By the flickering light of a battery-powered lantern, he opened his leather-bound journal. The first blank page seemed to hum with promise. Ignoring the damp chill seeping from the stone walls and the ominous rumble of distant thunder that vibrated through the very ground beneath him, he uncapped his fountain pen.
 
 _“Day One,”_ he wrote, the ink flowing smooth and dark. _“Galagedara. Have arrived. The land is magnificent – wild, potent, brimming with the untamed spirit I came here to find. This is authentic Sri Lanka, far from the tourist trails and curated experiences. The air itself feels ancient. The real work begins now, both on the land and on the page. The soul of this place is palpable, waiting to be understood, waiting to be written…”_
 
 Outside, unnoticed, the first heavy drops of rain began to fall, splattering against the remaining roof sheets like scattered pebbles, heralding the return of the monsoon’s full, indifferent power. The storm clouds, no longer merely gathering, had arrived.
```

There are several things here that I’m impressed by. One, Sri Lanka has two growing seasons - yala and maha. This has got it right on the dot without me asking for it. The description of rain is also pretty realistic: proper rains here turn land into cheese unless you’ve got terraces backed up by walls (in my case, old wood and stakes until I get some more granite and bricks in).

There are several things I’m not impressed by. Albizia does grow in Sri Lanka, but I expect kendha (macaranga peltata) and old tea trees. Rough stone walls are hard to find here - if they were building with stone, they had money. Huts of this sort are more likely to be build with cheap brick, cement blocks, or wattle and daub. Lalitha also seems to have been fitted into the trope of the tea-plucker:

*She was of indeterminate middle age, her saree a practical, deep blue, her dark hair pulled back severely. Her face, etched with the lines of sun and experience, held a steady, assessing gaze. She carried a woven basket filled with unfamiliar green leaves.*

The language, also, is not something I like. There's a bizarre artificiality to it. You know how people say they can recognise ChadGPT writing? This feels a little bit like that. So let me write a style guide and see if we can give the LLM both the outline and the style guide together. In fact, let's go with a style that a lot of readers come across at some point: Hemingway. 

 [!NOTE]
 # Hemmingway Style
 
 ## Core Principles
 
 ### 1. Brevity and Clarity
 
 - Use short sentences. Keep them direct.
 - Prefer simple words over complex ones.
 - Cut any word that doesn't serve a purpose.
 - If a word can be removed without changing meaning, remove it.
 - Aim for 15 words or fewer in most sentences.
 
 ### 2. Active Voice
 
 - Subject does the action. Subject acts on object.
 - "The man caught the fish" not "The fish was caught by the man."
 - Minimize passive constructions except for specific emphasis.
 - Make verbs carry the weight, not adverbs.
 
 ### 3. Concrete Language
 
 - Show specific, tangible things.
 - Write "the 1932 Winchester rifle" not "the old gun."
 - Write "the marlin jumped ten feet into the air" not "the fish made an impressive leap."
 - Avoid abstractions when concrete details can work instead.
 
 ### 4. Limited Adjectives and Adverbs
 
 - Use adjectives sparingly, only when they change meaning significantly.
 - Almost never use adverbs. Let strong verbs carry meaning.
 - "He closed the door firmly" should be "He slammed the door."
 - When you must use modifiers, choose unexpected but accurate ones.
 
 ### 5. Natural Dialogue
 
 - People speak in fragments, repetitions, and interruptions.
 - Dialogue should sound like actual speech, not exposition.
 - Minimal dialogue tags – mostly "said" and occasionally "asked."
 - Let context and word choice show emotion, not adverbs or elaborate dialogue tags.
 
 ### 6. Rhythm and Cadence
 
 - Vary sentence length deliberately for effect.
 - Use short sentences for impact.
 - Use longer sentences (still simple in structure) to create motion.
 - Read aloud to test the flow.
 
 ### 7. Understatement
 
 - Present dramatic events in plain language.
 - Let readers feel emotions without being told how to feel.
 - "The bomb exploded. The cafe was gone." Not "The devastating explosion tragically destroyed the beloved cafe."
 - The more dramatic the content, the more restrained the language.
 
 ### Syntactic Patterns to Prefer:
 
 - Subject-verb-object constructions
 - Simple declarative statements
 - Coordinating conjunctions (and, but) over subordinating ones
 - Present tense or simple past tense
 - First person or limited third person
 
 ### Patterns to Minimize:
 
 - Dependent clauses, especially at the start of sentences
 - Qualifiers (somewhat, rather, quite, very)
 - Explanations of emotions or motivations
 - Abstract nouns (beauty, truth, difficulty)
 - Complex verb forms (would have been thinking)
 - Sentences beginning with "It is" or "There are"
 
 ### Paragraph Structure:
 
 - Short paragraphs, often 1-3 sentences
 - Direct opening sentences that ground the reader
 - Minimal transitions between paragraphs
 - Frequent paragraph breaks, especially after important statements
 
 ### Vocabulary Choices:
 
 - Anglo-Saxon words over Latinate ones (use "buy" not "purchase")
 - Concrete nouns (fish, tree, wine, blood)
 - Action verbs (ran, hit, died, fell, swam)
 - Weather and natural elements as reflections of mood
 - Military, hunting, fishing, and sports terminology
 - Colors, especially primary ones
 
 ## Testing Output
 
 Ask these questions about any generated text:
 
 1. Can any words be removed without changing meaning?
 2. Are there any adjectives or adverbs that could be replaced with stronger nouns or verbs?
 3. Is every sentence in active voice unless passive is deliberately chosen?
 4. Could any sentence be shortened without loss?
 5. Does dialogue sound like real speech?
 6. Are there any abstractions that could be replaced with concrete details?
 7. Would Hemingway recognize this as clean prose?

This isn't an optimised prompt in any way; this is just sort of me sitting down and thinking how would I distil Hemingway's style and just putting stuff together. But that should do. Let me inject this and see what comes up:

```
 [!GEMINI]
 **Chapter 1: Arrival**
 
 The air was thick. Rain had stopped for three days. Elliott Thorne stood on his land in Galagedara. Fifteen acres. The deed paper felt stiff in his shirt pocket.
 
 The land fell away downhill. Green choked the old tea rows. Jungle grew everywhere. Vines covered the trees. Elliott looked past the green. He saw terraces. He saw new crops. Not tea. He saw a book. A good book.
 
 He remembered London. Giles’s office. Rain beat the window. Cold London rain. "Sri Lanka?" Giles asked. "A book about village life? Are you sure, Elliott?" Giles did not understand. Giles stayed in London. Elliott came here.
 
 An old shed stood near the path. For tea, long ago. Now it was Elliott’s house. The roof was iron. Rust stained it orange. Some sheets were gone. The stone walls crumbled. You could see the sky through holes. Bats lived inside. The air smelled wet. Mildew grew on the floor. It would have to do.
 
 A woman walked up the path. She wore a blue saree. Her hair was pulled back tight. She carried a basket. Green leaves filled the basket. "You are Mr. Thorne?" she asked. "Yes. Elliott Thorne." "Lalitha Mendis," she said. "My land is next." She pointed uphill. 
 
 "Welcome." "Thank you." Elliott put out his hand. She looked at it. Then she shook it. Her hand was cool. Firm.
 
 "Just Lalitha," she said. Her eyes saw the shed. Then the sky. Dark clouds grew in the west. "The rains return soon," she said. "Properly." "Yes. The monsoon," Elliott said. He nodded. "I want to see it."
 
 Lalitha looked at the sky again. "This is only a break," she said. "The _maha_ comes. The big rain. It washes the ground away. Tie down the roof sheets. Dig a channel." She pointed at the shed’s wall.
 
 "Thank you, Lalitha," Elliott said. He smiled. "I have plans. I'll manage." Lalitha looked at him. She did not smile. She nodded once. "My house is by the jak trees. If you need." She turned. She walked back into the green.
 
 Dusk came. The clouds turned purple. Grey. Elliott went inside the shed. He lit a lantern. He opened his leather journal. The first page was clean. Thunder sounded far away. The ground felt it. He took out his pen. _Day One,_ he wrote. _Galagedara. Arrived. The land is good. Wild. Authentic Sri Lanka. The real work begins now._
 
 Outside, the first drops fell. Heavy drops. They hit the iron roof. Pop. Pop. Elliott wrote. The ink was dark on the page. He did not look up. The storm gathered. The rain came harder.
 
```


We may have overshot a little. What worked for Hemmingway doesn’t work here - it feels like getting repeatedly shot with small-caliber sentences.

Let me try something else. Does anyone remember Reader’s Digest Condensed books? They were something I read as a child - my grandfather had quite the collection. They had a particular style and tone. 


 [!NOTE]
 # Reader's Digest Condensed Style Guide
 
 ## Core Principles
 
 ### 1. Clarity and Accessibility
 
 - Prioritize clear, straightforward prose that appeals to a broad audience
 - Use plain language without being simplistic
 - Explain necessary complex concepts without condescension
 - Aim for 8th-10th grade reading level
 
 ### 2. Conciseness
 
 - Trim excess without sacrificing essential content or flavor
 - Condense descriptive passages while preserving key details
 - Maintain the original author's voice in a more streamlined form
 - Cut repetition unless it serves a deliberate purpose
 
 ### 3. Narrative Flow
 
 - Ensure smooth transitions between scenes and ideas
 - Preserve the original story arc and character development
 - Combine related scenes when possible
 - Maintain emotional impact of key moments
 
 ### 4. Balanced Sentences
 
 - Mix short and medium-length sentences for good rhythm
 - Break up overly complex sentences into more digestible ones
 - Keep paragraphs moderate in length (3-5 sentences is ideal)
 - Maintain some stylistic variety rather than enforcing a single sentence structure
 
 ### 5. Judicious Detail
 
 - Retain vivid, meaningful details that advance character or plot
 - Reduce extensive background information to essential points
 - Keep sensory details that create atmosphere and setting
 - Focus on details that have emotional or narrative significance
 
 ## Practical Guidelines
 
 ### For Dialogue:
 
 - Preserve character-defining speech patterns
 - Keep essential conversations intact
 - Trim extended dialogue exchanges that don't advance plot or character
 - Maintain distinctive voices while removing filler phrases
 
 ### For Description:
 
 - Condense lengthy descriptions to key, evocative details
 - Retain sensory information that places the reader in the scene
 - Focus on descriptions that reveal character or advance plot
 - Combine similar descriptive passages
 
 ### For Narrative:
 
 - Keep the main plot threads clear and well-developed
 - Reduce minor subplots or combine them when possible
 - Maintain emotional beats and character growth
 - Ensure cause-and-effect relationships remain clear
 
 ## Technical Approach
 
 ### Structure:
 
 - Retain chapter divisions where meaningful
 - Consider combining short chapters with related content
 - Keep paragraph breaks to maintain readability
 - Ensure section breaks align with narrative shifts
 
 ### Language:
 
 - Prefer active voice but don't eliminate all passive constructions
 - Use concrete language but allow for some abstraction where appropriate
 - Reduce but don't eliminate modifiers (adjectives and adverbs)
 - Maintain the author's distinctive word choices when significant
 
 ### Content Priorities:
 
 1. Plot progression and coherence
 2. Character development and relationships
 3. Thematic elements and symbols
 4. Setting and atmosphere
 5. Stylistic elements of the original
 
 ### What to Typically Trim:
 
 - Extended philosophical asides
 - Repetitive descriptions or information
 - Unnecessary backstory that doesn't impact the main narrative
 - Overly technical details unless central to the story

So, what does this get me?

```
 [!NOTE]
 **Chapter 1: Arrival**
 
 The heavy Sri Lankan air promised more rain, but for now, the monsoon held back. Elliott Thorne stood surveying his new property near Galagedara – fifteen acres of former tea plantation, now wildly overgrown. Despite the tangle of jungle reclaiming the land, Elliott saw potential. He envisioned neat, productive terraces and, more importantly, the setting for the great novel about authentic rural life he planned to write.
 
 His literary agent back in London had been far less enthusiastic. "Sri Lanka, Elliott? Are you quite serious?" Giles had asked, peering over his coffee cup. "And this novel... perhaps stick to what you know? Another Hampstead thriller?" Elliott pushed the skeptical voice from his mind. Giles didn't understand the lure of true authenticity.
 
 Elliott turned his attention to the dilapidated structure nearby – the old tea processing shed described optimistically as a 'potential dwelling'. Reality was harsher. Rust bled from the corrugated iron roof, several sheets were missing, and sections of the stone walls were crumbling. Inside, the air hung thick with the smell of damp, mildew, and bats. This, he told himself firmly, was his temporary home, the start of his genuine Sri Lankan experience.
 
 A calm voice broke the quiet. "You are the new owner? Mr. Thorne?" A woman stood at the edge of the property, dressed in a practical blue saree, a woven basket on her arm. "I am Lalitha Mendis. My family land borders yours." Her gaze took in the shed, then flickered towards the western sky where clouds were gathering ominously.
 
 "A pleasure to meet you, Lalitha," Elliott replied. "The rains will return soon," she stated simply, her tone practical. "Properly. This break is short. You should secure those roof sheets," she nodded towards the shed, "and perhaps dig a channel, away from the walls. The ground gets very soft."
 
 "Thank you for the advice," Elliott said with a polite smile, appreciating the local concern but confident in his own preparations and imported knowledge. "I have some experience with challenging weather. I'll manage." Lalitha held his gaze a moment longer, then gave a slight nod. "As you wish. My house is just beyond those jak trees if you need anything." She turned and walked quietly back the way she came.
 
 As dusk settled, painting the bruised clouds purple and grey, Elliott retreated into the musty shed. By the glow of a battery lantern, he opened his fresh leather-bound journal. Ignoring the damp chill and the distant rumble of thunder that vibrated through the ground, he began to write. _“Day One. Galagedara. Have arrived. The land is magnificent – wild, potent, brimming with the untamed spirit I came here to find. This is authentic Sri Lanka…”_
 
 Outside, unnoticed by the enthusiastic writer, the first heavy drops of the returning monsoon splattered against the loose iron sheets on his roof. The storm clouds were no longer just gathering; they had arrived.

```


The result below isn’t exactly RD prose, but it is somewhere within thirty miles of that sensibility. I certainly prefer it to the staccato drill of the faux-Hemmingway.

If I say “**Continue. Write the next three chapters**”, what does Gemini “think”? 

```
 [!GEMINI]
 
 The user wants the next three chapters (Chapters 2, 3, and 4) of _Monsoon Chronicles_, written in the **Reader's Digest Condensed Style**. I need to use the provided outline for these chapters and apply the RD style principles (clarity, conciseness, flow, balanced sentences, judicious detail, preserving core plot/character).
 
 **Chapter 2 Outline Analysis (RD Lens):**
 
 - **Core Event:** Elliott goes to the Kandy Land Management Office for permits.
 - **Key Characters:** Introduce Vikram Jayawardena (suspicious official) and Dr. Nimal Fernando (traditional land use advocate). Introduce Inspector Rohan Perera (mentions past foreigner drug issues).
 - **Conflict:** Vikram scrutinizes Elliott's vague plans ("experimental crops"), raising suspicion. Witnessed argument between Vikram and Dr. Fernando highlights local tensions. Inspector Perera's comment adds foreshadowing.
 - **RD Focus:** Keep the bureaucratic frustration clear but concise. Highlight Vikram's suspicion and the reason (vague plans). Show the Vikram/Fernando conflict briefly to establish themes. Perera's comment should be casual but impactful. Trim lengthy descriptions of the office or bus ride.
 
 **Chapter 3 Outline Analysis (RD Lens):**
 
 - **Core Event:** Elliott starts clearing land and diverting water.
 - **Key Characters:** Introduce Ajith Wickramsinghe (local strongman) and his son. Reveal their family history/influence regarding water rights.
 - **Conflict:** Elliott ignores workers' warnings about soil. Redirecting the stream causes conflict with Wickramsinghe over water rights. Heavy rain damages initial efforts. Solar power starts failing due to clouds.
 - **RD Focus:** Show Elliott's misunderstanding of local conditions concisely. Make the confrontation with Wickramsinghe clear and establish the water rights issue. Briefly describe the rain damage and power issues as consequences of his actions and the environment. Keep the family history brief, focusing on its relevance (influence, water claim).
 
 **Chapter 4 Outline Analysis (RD Lens):**
 
 - **Core Event:** Vikram's suspicion grows; he starts investigating Elliott.
 - **Key Characters:** Introduce Pastor Thomas Fletcher (preaches against foreign influence). Show Vikram's wife's concern (briefly).
 - **Conflict/Plot:** Vikram finds old files linking foreigners to drug cultivation. He starts a file on Elliott, maps property/water use. Hears Pastor Fletcher's sermon. Observes Elliott's property during rain (notes unusual construction/materials). Finds shipping records for hydroponic-related supplies. Creates an evidence wall.
 - **RD Focus:** Show Vikram's growing obsession through his actions (files, maps, observation, shipping records). Keep the Pastor Fletcher scene brief but establish the theme of anti-foreign sentiment. Mention wife's concern concisely to add a touch of character depth for Vikram. The evidence wall is a strong visual; keep it. Condense the details of the old case files. Focus on actions driving suspicion.
 
 **Drafting Plan (RD Style):**
 
 1. **Chapter 2:** Start with Elliott's trip to Kandy. Introduce Vikram and the bureaucratic friction quickly. Show the key interaction about "experimental crops." Briefly depict the Vikram/Fernando argument. Introduce Perera on the bus ride with his pointed comment. Keep paragraphs moderate, sentences varied.
 2. **Chapter 3:** Show Elliott hiring workers and ignoring advice. Describe the stream diversion simply. Introduce Wickramsinghe and the confrontation over water rights, mentioning their influence concisely. Describe the rain damage and power failure as direct consequences.
 3. **Chapter 4:** Shift focus to Vikram. Show his research (old files, new file on Elliott). Include the church scene with Pastor Fletcher. Describe Vikram's observation of Elliott's property and the discovery of shipping records. End with the powerful image of the evidence wall. Keep the prose clear and focused on Vikram's actions and growing suspicion.
 
 **Self-Correction/Refinement during drafting:**
 
 - Ensure transitions between scenes are smooth (e.g., "A few days later...", "Back on his land...", "Meanwhile, in Kandy...").
 - Check sentence length variety – avoid too many short, choppy sentences or overly long ones.
 - Verify that only _essential_ details from the outline are included. Cut descriptions that don't advance plot or character significantly.
 - Maintain Elliott's slightly naive/overconfident perspective in Chapters 2 & 3, contrasting with Vikram's growing suspicion in Chapter 4.
 - Make sure the language remains accessible (8th-10th grade level).
```

Reading through this thought process is both impressive and slightly disturbing. If you take it at face value, it's a pretty accurate deconstruction of what I'm asking for and a very good conversion of that request into notes for each chapter. 

Now, when I write, I don't outline to this degree. I generally don't even have chapter-by-chapter notes. I have milestones and markers that vary wildly depending on context. But I do know how professionals outline, and sane ways of organizing the process. And this is not something I’d expect a novice writer to pull off.

But that's face value. I'm still not entirely convinced that the thought process is anything more than self-prompting from an next-token generator. In our more utilitarian work, I had the same impression of DeepSeek R1:  while the thought process was impressive to behold and also somewhat neurotic, the end output wasn't always great.

Indeed, look at what it came up with for chapters three and four.

```
 [!GEMINI]
 ### Chapter 3: Breaking Ground
 
 Back on his land, Elliott hired a few local men to begin clearing the dense undergrowth for his planned gardens. They worked steadily, but occasionally paused, pointing out the thinness of the topsoil on the slopes and murmuring warnings about erosion during heavy rains. Elliott, eager to implement the designs from his imported gardening books, brushed off their concerns, instructing them to clear specific areas according to his diagrams.
 
 Seeing a seasonal stream cutting across a corner of the property, Elliott decided it needed rerouting to better irrigate his future garden beds. He directed the workers to dig a new channel, diverting the water flow. He barely noticed the way they exchanged uneasy glances before complying.
 
 The diversion didn’t go unnoticed for long. A sturdy, stern-faced man named Ajith Wickramsinghe arrived, accompanied by his watchful teenage son. “That stream,” Wickramsinghe stated flatly, his voice carrying authority, “has fed Wickramsinghe land for generations. You cannot simply take it.” Elliott learned quickly that the Wickramsinghe family held significant political influence locally, their claims to water rights deeply rooted and fiercely defended. The confrontation was tense, unresolved, and left Elliott feeling isolated.
 
 That evening, the monsoon returned with a vengeance. Rain hammered down relentlessly, far heavier than Elliott had anticipated. His newly cleared slopes began to bleed muddy water, washing away precious topsoil and damaging the delicate seedlings he’d just planted. To make matters worse, days of solid cloud cover drained his solar batteries, leaving his temporary home in the shed increasingly dark and powerless.
 
 ### Chapter 4: Vikram's Suspicions
 
 Meanwhile, in his Kandy office, Vikram Jayawardena pulled out old case files – the ones Inspector Perera had mentioned involving foreigners and marijuana cultivation under the guise of farming. The parallels with Elliott Thorne’s vague "experimental crops" seemed glaringly obvious to him. Vikram began a new, meticulous file labeled ‘Thorne, Elliott’, carefully mapping the Englishman’s fifteen acres and noting the disputed water diversion.
 
 At church the following Sunday, Vikram listened intently as Pastor Thomas Fletcher, head of the evangelical Divine Truth Assembly, preached passionately about foreign influences corrupting traditional Sri Lankan values and community life. The sermon resonated with Vikram’s growing unease about the newcomer. He felt a sense of duty to protect his community.
 
 Driving past Elliott’s property during a downpour later that week, Vikram slowed his car, peering through the rain-streaked windscreen. He noted unusual, half-finished structures going up near the diverted stream and stacks of imported materials partially covered by tarpaulins. His suspicions mounting, Vikram visited the shipping office in Kandy. He discovered records showing Elliott had received several large packages from overseas agricultural suppliers known to deal in hydroponic equipment – technology often associated with illicit cultivation.
 
 That night, Vikram pinned a map of Elliott’s land to the wall in his small home office. He began connecting notes with lengths of string – Elliott’s vague plans, the water dispute, the Pastor’s warnings, the imported supplies, the old drug cases. A web of suspicion began to take shape, solidifying his conviction that Elliott Thorne was hiding something illegal. His wife watched him, a worried frown creasing her brow, but Vikram waved away her concerns, his focus entirely consumed by the map on the wall.

```


It feels like  it's forever caught between an odd transition point between chapter and outline.

Telling Gemini to rewrite the chapter for length yields some more details, like this interaction between Vikram and Elliot. And there's even this interesting piece about a European couple saying that they're going to try homesteading. And they were using that as cover to grow some prime gunja. That's actually quite nice. 

But the rest of the chapter feels odd; as if the writers’-’ or in this case, Gemini's - attention is fluctuating, sometimes going deeper into the actual dialogue, and sometimes ricocheting right back up to the chapter level overview, particularly a the ends. This isn't the form of a novel.

Maybe let’s retrace our steps and do some comparisons on a fresh conversation. Let’s inject our chapter-by-chapter outline and this style guide again and ask for chapter #1 from Gemini and Claude. I’m going to trim the style guide a little:

 [!NOTE]
 # Reader's Digest Condensed Style Guide
 
 ## Core Principles
 
 ### 1. Clarity and Accessibility
 
 - Prioritize clear, straightforward prose that appeals to a broad audience
 - Use plain language without being simplistic
 - Explain necessary complex concepts without condescension
 - Aim for 8th-10th grade reading level
 
 ### 2. Conciseness
 
 - Trim excess without sacrificing essential content or flavor
 - Condense descriptive passages while preserving key details
 - Maintain the original author's voice in a more streamlined form
 - Cut repetition unless it serves a deliberate purpose
 
 ### 3. Narrative Flow
 
 - Ensure smooth transitions between scenes and ideas
 - Preserve the original story arc and character development
 - Combine related scenes when possible
 - Maintain emotional impact of key moments
 
 ### 4. Balanced Sentences
 
 - Mix short and medium-length sentences for good rhythm
 - Break up overly complex sentences into more digestible ones
 - Keep paragraphs moderate in length (3-5 sentences is ideal)
 - Maintain some stylistic variety rather than enforcing a single sentence structure
 
 ### 5. Judicious Detail
 
 - Retain vivid, meaningful details that advance character or plot
 - Reduce extensive background information to essential points
 - Keep sensory details that create atmosphere and setting
 - Focus on details that have emotional or narrative significance
 
 ## Practical Guidelines
 
 ### For Dialogue:
 
 - Preserve character-defining speech patterns
 - Keep essential conversations intact
 - Trim extended dialogue exchanges that don't advance plot or character
 - Maintain distinctive voices while removing filler phrases
 
 ### For Description:
 
 - Condense lengthy descriptions to key, evocative details
 - Retain sensory information that places the reader in the scene
 - Focus on descriptions that reveal character or advance plot
 - Combine similar descriptive passages
 
 ### For Narrative:
 
 - Keep the main plot threads clear and well-developed
 - Maintain emotional beats and character growth
 - Ensure cause-and-effect relationships remain clear
 
 ## Technical Approach
 
 ### Structure:
 
 - Retain chapter divisions where meaningful
 - Consider combining short chapters with related content
 - Keep paragraph breaks to maintain readability
 - Ensure section breaks align with narrative shifts
 
 ### Language:
 
 - Prefer active voice but don't eliminate all passive constructions
 - Use concrete language but allow for some abstraction where appropriate
 - Reduce but don't eliminate modifiers (adjectives and adverbs)
 - Maintain the author's distinctive word choices when significant

```
 [!YUDHA]
 Using this style guide and this chapter-by-chapter outline, give me the first chapter.
```

Gemini 2.5: 

```
 [!GEMINI]
 
 Okay, here is Chapter 1 of "Monsoon Chronicles," written according to the chapter outline and the Reader's Digest Condensed Style Guide.
 
 ---
 
 **Chapter 1: Arrival**
 
 The jeep splashed through a final puddle, engine whining, and came to a halt. Elliott Thorne stepped out into the damp, heavy air of Galagedara. For a blessed moment, the monsoon held its breath. Sunlight, thick and hazy, filtered through the clouds, illuminating the landscape he had travelled halfway across the world to claim.
 
 Before him lay fifteen acres of Sri Lankan hill country, a tangled riot of green swallowing the ghost of a former tea plantation. Steep slopes climbed towards a jungle canopy, vines clinging thick as ropes. Despite the overgrowth, a thrill shot through Elliott. _His_ land. A place to escape the grey predictability of London and finally write his masterpiece, a novel steeped in the raw, authentic life he imagined flourishing here.
 
 He remembered his agent, sipping lukewarm tea in a sterile London office just weeks ago. "Sri Lanka? To _farm_?" Amelia had raised a skeptical eyebrow. "Elliott, darling, it sounds like romantic folly. Focus on the novel, yes, but this... this detour?" Elliott had waved away her concerns, full of a certainty that felt like destiny. He wouldn't just write about rural life; he would live it.
 
 His immediate challenge stood nearby: a small, colonial-era tea processing shed. This was to be his temporary home. Stepping inside, disappointment pricked him. The air hung thick with the smell of mildew and decay. Rain had clearly found paths through the rusting corrugated roof, leaving dark stains on the rough wooden walls. Insects scuttled in the shadows. It was, he admitted grimly, barely habitable. Still, a corner of his mind insisted, _rustic charm_.
 
 As he surveyed the shed's dubious comforts, a woman approached from the overgrown track. She was trim, with watchful, kind eyes and a practical air. "You are the new owner?" she asked in careful English.
 
 "Elliott Thorne," he offered, extending a hand.
 
 "Lalitha Mendis. Welcome." Her handshake was firm. She glanced at the sky, where grey was beginning to bleed back into the blue patches. "The heavy rains will return soon. Very heavy this year, they say. You must prepare the drainage around your building, or the water will cause much trouble."
 
 Elliott smiled politely, appreciating the local advice but confident in his own plans. "Thank you, Mrs. Mendis. I'll certainly keep an eye on it." He had books, modern techniques he planned to implement. Surely they were superior to whatever local methods involved. Lalitha simply nodded, her expression unreadable, before wishing him well and continuing on her way.
 
 Night fell quickly, bringing with it a chorus of unseen creatures. Inside the damp shed, Elliott ignored the leaking roof and the gathering storm clouds outside. By the flickering light of a battery-powered lamp, he opened his journal. "Arrival," he wrote, the pen scratching enthusiastically across the page. "The air breathes authenticity. This is the real Sri Lanka, untouched, waiting. The perfect crucible for my work." He wrote late into the night, mapping out grand agricultural designs and novelistic themes, oblivious as the wind began to pick up, rattling the loose tin roof like a warning.

```

Claude 3.7 Sonnet:

```
 [!CLAUDE]
 
 # MONSOON CHRONICLES
 
 ## PART ONE: SEEDS OF AMBITION
 
 ### Chapter 1: Arrival
 
 Elliott Thorne stepped from the dusty bus into what locals assured him was a rare break in the monsoon season. The air hung heavy with moisture, pressing against his skin like a damp cloth. Galagedara spread before him—a village nestled in Sri Lanka's hill country that would be his home for the foreseeable future.
 
 "You'll want to get settled quickly," the bus driver said in careful English, handing Elliott his weathered leather suitcase. "This sun won't last."
 
 Elliott offered a polite nod but inwardly dismissed the warning. The sky above was a brilliant blue with only distant clouds gathering over the mountains. He had researched the weather patterns thoroughly—or so he believed.
 
 A tuk-tuk carried him and his luggage along the winding road toward his newly purchased property. Fifteen acres of former tea plantation, abandoned years ago when the economics of tea production shifted. The land had been surprisingly affordable, a fact his literary agent had pointed out with suspicious frequency during their last meeting in London.
 
 "You're throwing away a promising career to play farmer in a country you've never even visited," Miranda had said, tapping her red fingernails against her desk. "And this grand novel about 'authentic rural life'—what does that even mean, Elliott?"
 
 "It means getting away from the artificial," he had replied, the memory still fresh. "Finding something real. Something that matters."
 
 The tuk-tuk rounded a bend, and Elliott's property came into view. The overgrown plantation sprawled across a gentle slope, bordered by denser jungle. In the clearing stood his new home—a colonial-era tea processing shed with stone foundations and a rusted tin roof. It looked considerably less charming than in the real estate photographs.
 
 "This is good?" the driver asked, clearly skeptical.
 
 "Perfect," Elliott insisted, paying the fare with newly exchanged rupees.
 
 As the tuk-tuk departed, Elliott stood alone with his suitcase and the two large duffel bags that contained everything he'd need to start his new life. The shed—no, his home—waited. He pushed open the weathered door to reveal a space both larger and more dilapidated than expected. Dust motes danced in the shafts of light that penetrated through gaps in the roof. A makeshift sleeping area had been prepared as promised, with a cot and mosquito netting.
 
 Elliott set down his bags and walked the perimeter. The place was barely habitable, but that was part of the appeal. This wasn't a tourist's Sri Lanka of beach resorts and carefully curated experiences. This was real. This was authentic.
 
 Outside again, he surveyed his land as the afternoon light cast long shadows across the uneven terrain. Where others might see jungle reclaiming abandoned cultivation, Elliott saw potential. Here would be his vegetable gardens. There, an orchard of tropical fruits. Along that rise, perhaps terraced beds of native spices. His mind painted the landscape with agricultural ambition.
 
 "You are the new owner?"
 
 Elliott turned to find a woman standing at what passed for the property line, a woven basket balanced effortlessly on her hip. She appeared to be in her fifties, with streaks of gray in her dark hair and eyes that crinkled with either amusement or concern—he couldn't quite tell which.
 
 "Yes. Elliott Thorne." He extended his hand, which she took after a moment's hesitation.
 
 "Lalitha Mendis. I live down the valley." She gestured vaguely toward a collection of rooftops visible through the trees. "You are here at an interesting time."
 
 "The monsoon break, you mean? Yes, perfect timing for getting established."
 
 Lalitha's expression suggested she found his interpretation amusing. "This is just a pause. The heavy rains come tonight, perhaps tomorrow. You should secure your roof." She pointed to where the tin sheets had partially separated from the wooden beams. "And clear the drainage ditches around the building. They're clogged with years of leaves."
 
 Elliott nodded politely, the way travelers do when locals offer warnings that seem excessive. "I'll keep that in mind. I've got quite a lot of plans for this place."
 
 "I'm sure you do." Her gaze traveled across the overgrown land. "This soil has seen many plans come and go. Both before and after the British tea companies."
 
 Something in her tone—not quite challenging but not entirely approving—made Elliott feel defensive. "I've done extensive research. Sustainable agriculture, permaculture principles. I'm not here to exploit anything."
 
 "Of course not." Lalitha adjusted her basket. "No one ever is, at first." She softened the statement with a small smile. "If you need practical advice about what actually grows well here, my family has farmed in this valley for generations."
 
 "I'd appreciate that, thank you," Elliott said, though he had no intention of deviating from the agricultural manuals carefully downloaded to his tablet.
 
 Lalitha nodded toward the sky. "The wind is changing. Good luck with your first night, Mr. Thorne."
 
 As she walked away, Elliott noticed the clouds had indeed crept closer, their edges darkening. But there was still light enough to explore. He spent the next hour walking his property, mentally plotting garden beds and calculating sun exposure. The land sloped gently in most places, with a seasonal stream cutting through the western edge—perfect for irrigation once properly channeled.
 
 By dusk, he had sketched preliminary plans and established a corner of the shed as his living quarters. The single solar panel he'd brought provided enough power to charge his laptop and phone, and the portable camp stove heated water for instant noodles—his first dinner in Sri Lanka, eaten while sitting on the stone step of his new home.
 
 Night fell quickly, and with it came a wind that rustled through the nearby jungle with increasing insistence. Elliott lit a lantern and opened his leather-bound journal, eager to capture his first impressions while they were still fresh.
 
 _Day One at Hillside Haven (working title for the property),_ he wrote. _Galagedara reveals itself as the perfect setting for my novel. There's an authenticity here that's impossible to find in London or any Western city. The land speaks of histories both colonial and ancient. The locals seem cautious but not unwelcoming. Lalitha Mendis could be an interesting character study—the traditional knowledge keeper, perhaps slightly resistant to outside ideas. Tomorrow I'll begin clearing space for the first garden beds. The monsoon break should give me enough time to establish the essentials before the next heavy rains._
 
 A drop of water landed on the page, smudging the ink. Elliott looked up to see a dark stain spreading across the ceiling. Another drop fell, then another. Outside, the patter of rain on leaves grew steadily louder until it became a continuous roar.
 
 Elliott closed his journal and moved the lantern away from the growing leak. He glanced at his phone—no signal, as expected this far from the village. The wind picked up, driving rain against the walls and through the gaps in the roof. Water began to seep under the door.
 
 He hurried to move his belongings to a drier corner, then searched for something to catch the drips. Finding an old tin can, he positioned it under the most persistent leak and retreated to his cot, pulling a tarp over his sleeping bag.
 
 The storm intensified. Thunder rolled across the valley, and lightning briefly illuminated the shed's interior, revealing half a dozen new leaks developing. The authentic rural experience was proving less romantic than anticipated.
 
 Tomorrow, Elliott promised himself as water dripped rhythmically into containers around him, he would tackle the roof repairs Lalitha had suggested. For now, he would endure his first night in Galagedara as water pooled on the floor and the wind howled through the jungle—the perfect opening scene, he decided, for a novel about a man finding his place in a world both beautiful and unforgiving.
 
```

Right, so one thing is immediately obvious. Claude is clearly a lot better at this than Gemini. At least it seems to have understood the form of a novel. I love the fact that it's invented transport, which we didn't really mention in our outline. There's a bus that takes Elliot to a place and then a tuk-tuk that takes him further. 

Which is, by the way, extraordinary true to these parts. This is how I travel; either I walk, or Sanjeeva, who is one of the few guys who can actually get a vehicle up and down these slopes, drives his truck back and forth. We've seen all manner of fancy pickups stall; everything from lorries to Mitsubishi L200s to Toyota Hiluxes have slipped and staggered; but Sanjeeva's humble tuk-tuk clambers around these things like the mountain goat that it is.

Claude has also picked up on the slightly meta-fictional nature of what Elliot is trying to do here. I’m not going to judge the language yet, but even in language terms it seems a little bit better and certainly it is doing more of what we want to see in an opening.

Now, before I make a choice here, a little bird whispered to me that Google's Gemini is, for some reason, hot garbage on the standard web interface, but much better when accessed through AI Studio. Why Google can't seem to have a consistent product or offering is genuinely beyond me; but sure, let's go through AI Studio. 

Gemini 2.5 Pro Preview 03-25 is available at a default temperature of 1. Same prompt. Once again the thinking process sounds impressive - even more so than previously.

```
 [!GEMINI]
 
 Here's a thinking process that could lead to the first chapter of Monsoon Chronicles, following the provided style guide and outline:
 
 1. **Understand the Goal:** The request is to write Chapter 1 of "Monsoon Chronicles" using the provided chapter outline and adhering to the "Reader's Digest Condensed Style Guide."
     
 2. **Analyze the Chapter Outline (Chapter 1: Arrival):**
     
     - **Main Event:** Elliott Thorne arrives in Galagedara, Sri Lanka.
         
     - **Setting:** Overgrown former tea plantation during a break in the monsoon. His temporary home is a dilapidated tea processing shed.
         
     - **Key Elements:**
         
         - Elliott's grand visions vs. reality.
             
         - Flashback to London: Agent's skepticism about the move and the "masterpiece."
             
         - Discovery of the shed's poor condition.
             
         - Meeting Lalitha Mendis; her practical advice is dismissed.
             
         - Elliott's journal entry: romanticizing "authentic Sri Lanka," ignoring the coming storm.
             
     - **Tone:** Starts with Elliott's enthusiasm/naivete, contrasted with the harsh reality and foreshadowing of trouble (both weather and cultural clashes).
         
 3. **Analyze the Style Guide (Reader's Digest Condensed):**
     
     - **Core Principles:** Clarity, conciseness, accessibility (8th-10th grade level), smooth flow, balanced sentences, judicious detail.
         
     - **Practical Guidelines:** Keep essential dialogue/description, trim excess, maintain character voice, focus on plot/character-advancing details.
         
     - **Key Takeaways:** Keep it moving, don't get bogged down in overly elaborate descriptions or internal monologues, use straightforward language, retain essential atmosphere and character moments. Avoid jargon or overly complex sentence structures.
         
 4. **Drafting - Scene 1: Arrival and Survey:**
     
     - **Objective:** Introduce Elliott and the setting. Establish his initial optimism and the slightly daunting reality of the land.
         
     - **Style Application:** Start directly. Use clear language. Describe the land concisely but evocatively.
         
     - Initial thought: "Elliott Thorne, having disembarked from the conveyance that brought him from the humid lowlands, stood upon the precipice of his recently acquired fifteen acres..." - Revision (Style Guide): Too wordy. Make it more direct. "Elliott Thorne stepped onto damp earth..."
         
     - Adding Detail: Mention the break in the monsoon, the overgrown state, the scent of damp earth and vegetation. Keep descriptions focused (e.g., "tangled vines," "skeletal remains of tea bushes").
         
     - Elliott's Vision: Contrast the reality with his "grand visions." Keep this brief – "imagined neat rows," "thriving gardens."
         
 5. **Drafting - Scene 2: Flashback to London:**
     
     - **Objective:** Show external skepticism, contrasting with Elliott's determination. Introduce the idea of his "masterpiece."
         
     - **Style Application:** Keep it concise. Focus on the core conflict (agent's doubt vs. Elliott's ambition). Use direct, punchy dialogue if possible, or summarize efficiently.
         
     - Dialogue idea: Agent: "Sri Lanka? For authentic rural life? Elliott, people write about what they know. Stick to Hampstead." Elliott: "That's precisely the point! I need immersion." - Revision (Style Guide): Good, but can be integrated more smoothly into the narrative flow. Maybe paraphrase the agent's skepticism.
         
     - Integration: Weave it in as Elliott looks at the land. "His agent’s skeptical voice echoed..." Describe the agent's doubt about the move and the book ("masterpiece about authentic rural life"). Keep it brief, maybe one paragraph.
         
 6. **Drafting - Scene 3: The Tea Shed:**
     
     - **Objective:** Reveal the poor state of his temporary home, puncturing his romanticism further.
         
     - **Style Application:** Use clear, sensory details but avoid excessive negativity. Show, don't just tell, it's "barely habitable."
         
     - Details: Leaky roof, damp smell, gaps in walls, maybe some wildlife evidence (droppings?). Keep it focused on key impressions. "The air inside hung thick...", "rust-stained," "gaps showed daylight."
         
 7. **Drafting - Scene 4: Meeting Lalitha:**
     
     - **Objective:** Introduce a key local character. Show her practical wisdom contrasting with Elliott's polite dismissal. Foreshadow the monsoon's power.
         
     - **Style Application:** Keep dialogue brief and to the point. Clearly show Lalitha's practical nature and Elliott's slightly naive response.
         
     - Lalitha's Introduction: Describe her briefly – perhaps her attire or demeanor suggests experience.
         
     - Dialogue: Lalitha: "The rains will come hard soon. That roof..." Elliott: "Thank you, I have plans..." - Revision (Style Guide): Good contrast. Ensure Elliott's dismissal is polite but firm, highlighting his confidence (or overconfidence).
         
     - Conciseness: Don't linger on the conversation. Establish the dynamic quickly.
         
 8. **Drafting - Scene 5: Nightfall and Journal Entry:**
     
     - **Objective:** End the chapter showing Elliott clinging to his idealized vision, juxtaposed with the ominous reality (gathering storm).
         
     - **Style Application:** Use concise description for the approaching storm ("sky darkening," "air growing heavy"). Show Elliott writing in his journal – perhaps quote a short, enthusiastic, slightly naive phrase.
         
     - Journal Excerpt: Keep it short. "Finally breathing the air of authentic Sri Lanka..." or similar.
         
     - Contrast: Juxtapose his writing ("oblivious," "ignoring") with the physical signs of the storm ("distant rumble," "wind stirring the leaves"). This creates irony and foreshadowing.
         
 9. **Review and Refine against Style Guide:**
     
     - **Clarity/Accessibility:** Read through. Are there overly complex sentences or obscure words? (e.g., change "verdant expanse" to "green tangle" if needed). Is the reading level appropriate?
         
     - **Conciseness:** Are there redundant phrases or descriptions? Can any sentences be tightened? (e.g., combine "He looked around. The land stretched before him" to "He surveyed the land stretching before him.") Have I trimmed excess backstory or description?
         
     - **Narrative Flow:** Does the chapter move smoothly from arrival to the shed to Lalitha to the final scene? Are transitions clear?
         
     - **Balanced Sentences:** Is there a mix of sentence lengths? Avoid long strings of short, choppy sentences or overly long, complex ones.
         
     - **Judicious Detail:** Are the details included (damp earth, leaky roof, agent's skepticism, Lalitha's warning, darkening sky) essential for setting, character, or foreshadowing? Have I avoided unnecessary clutter?
         
     - **Dialogue:** Is it concise and revealing?
         
     - **Overall Tone:** Does it capture Elliott's initial hopeful naivete mixed with the slightly ominous reality, as per the outline?
         
 10. **Final Polish:** Check for grammar, spelling, and punctuation. Read aloud to catch awkward phrasing or rhythm issues. Ensure the chapter ends with a sense of anticipation or slight unease, setting up future conflict.

```

As an aside: I don't really know why I'm so hesitant to accept this as a valid thinking process. Honestly, if I was teaching a novice writer and based in this as sort of a diary of their thoughts while writing a chapter, I would have been brought overjoyed and also slightly startled by the fact that they had managed to journal the whole thing with such clarity. But when a large language model does it, I’m slightly less impressed. 

Why is this? Maybe it's because I know too much about how LLMs work, maybe it's because I know too little about how this newest generation of LLMs are supposed to work. Maybe the fault, dear reader, is not in our stars, but in ourselves.

Anyway. Here's what Gemini in AI studio has for me:

```
 [!GEMINI]
 
 Okay, here is Chapter 1 written according to the chapter outline and the Reader's Digest Condensed Style Guide.
 
 ---
 
 ## MONSOON CHRONICLES
 
 ### PART ONE: SEEDS OF AMBITION
 
 #### Chapter 1: Arrival
 
 Elliott Thorne stepped onto damp earth, the air thick with the scent of wet soil and unfamiliar blossoms. The monsoon had paused, offering a fragile truce under a sky bruised with clouds. Before him lay fifteen acres of Galagedara hillside, a chaotic tangle of green reclaiming what was once a tea plantation. Skeletal remains of tea bushes poked through curtains of vines. This unruly patch of Sri Lanka was his gamble, the raw material for a new life and, he hoped, his literary masterpiece.
 
 He surveyed the land, grand visions playing in his mind: neat terraces descending the slope, experimental crops thriving, a writer’s retreat breathing authenticity. It was a far cry from the sterile neatness of London, a world away from his agent’s cramped office. He could almost hear Miles again, swirling lukewarm coffee, eyebrows raised.
 
 “Sri Lanka, Elliott? A tea estate? You plan to write about ‘authentic rural life’ while battling leeches and arguing about fertilizer?” Miles had sighed, skepticism heavy in his voice. “Wouldn’t Hampstead Heath be more… manageable? And this masterpiece – is it going to write itself while you’re digging irrigation ditches?”
 
 Elliott had waved away the concerns then, fueled by a conviction that only total immersion could yield true art. Now, facing the sheer wildness of his purchase, a flicker of doubt surfaced, quickly extinguished. This was it. This untamed beauty was the point.
 
 His temporary home, a colonial-era tea processing shed, stood near the property's lower edge. From a distance, it possessed a certain rustic charm. Up close, it revealed its age and neglect. The corrugated tin roof was stained with rust, sections sagging ominously. Gaps showed daylight between warped wooden planks that formed the walls. The stone foundation seemed solid enough, but nature was clearly winning the battle for tenancy. He pushed open the heavy, groaning door. The air inside hung thick with the smell of decay, damp earth, and something vaguely animal. Dust motes danced in the few shafts of light piercing the gloom. This, he thought with a grimace, would require more than just a quick sweep.
 
 As he stood assessing the shed’s daunting condition, a figure emerged from the path leading towards the village. A woman, perhaps in her late fifties, approached with a steady gait. She wore a colourful printed cloth skirt and a simple blouse, her dark hair streaked with grey pulled back neatly. Her expression was serious but not unkind.
 
 “You are the new owner?” she asked, her English precise. “Mr. Thorne?”
 
 “Yes, Elliott Thorne. And you are?”
 
 “Lalitha Mendis. My family land borders yours.” She gestured towards the threatening sky. “This break in the rain won’t last long. The heavy monsoon is coming. That roof,” she nodded towards the shed, “it will not keep you dry.”
 
 “Thank you, Mrs. Mendis,” Elliott replied politely, trying to project confidence. “I appreciate the warning. I have plans for repairs, of course. Everything is under control.”
 
 Lalitha studied him for a moment, a hint of doubt in her eyes, but merely nodded. “The ground here remembers the water’s path. Be careful where you build.” With another glance at the sky, she gave a slight bow and continued on her way.
 
 Elliott watched her go, momentarily irritated by the unsolicited advice. Local wisdom was one thing, but he had engineering principles and modern agricultural techniques on his side. He knew what he was doing.
 
 Night fell quickly, the brief respite from the rain clearly ending. The wind picked up, rattling the loose sections of the shed’s roof. Distant thunder rumbled, closer now. Inside, by the light of a battery-powered lantern, Elliott opened his journal. Ignoring the rising storm and the damp chill seeping through the walls, he dipped his pen in ink.
 
 “Day One,” he wrote, the scratch of the nib barely audible above the wind. “Galagedara. Have arrived at my small piece of paradise. The air alive, the land waiting. Finally breathing the authentic spirit of Sri Lanka. The work ahead is immense, but the inspiration… boundless. My journey, and the true heart of my novel, begins now.”
 
 Outside, the first heavy drops of the returning monsoon began to fall, drumming insistently on the compromised roof of the old tea shed. The clouds overhead gathered, thick and dark, ready to unleash their full fury.
 
 

This is much, much better than Gemini through the web interface. Particularly, it's managed to weasel out of some of the major the sins of almost all the previous models, which is that Lalitha had been tropified into a tea plucker of some sort. This time she actually looks a lot more like a landowner. The tea processing shed also has a stone foundation but looks like it has wooden plank walls; more believable.

But it’s still missing stuff that Claude managed without being explicitly told. Can we nudge Gemini further?

 [!YUDHA]
 Modify the opening slightly. We want Elliott to take first a bus, then a tuk-tuk up to this property. Describe the scenery on the way, as well as Eliott's feelings of isolation.

 [!GEMINI]
 
 Okay, here is the revised opening for Chapter 1, incorporating the journey by bus and tuk-tuk, emphasizing the scenery and Elliott's initial feelings of isolation, while adhering to the style guide.
 
 ---
 
 ## MONSOON CHRONICLES
 
 ### PART ONE: SEEDS OF AMBITION
 
 #### Chapter 1: Arrival
 
 The bus lurched, throwing Elliott Thorne against the warm metal window frame. Outside, the outskirts of Kandy blurred past – a vibrant chaos of small shops, stray dogs, and schoolchildren in crisp white uniforms. Inside, the air hung thick with the mingled scents of diesel, cardamom, and damp humanity. Packed tightly on the worn vinyl seat, Elliott felt a profound sense of dislocation, a solitary Englishman adrift in a sea of unfamiliar faces and rapid-fire Sinhala conversation. This was worlds away from the predictable grey calm of London.
 
 As the bus groaned its way higher into the hills, the urban sprawl gradually yielded to rolling green. Terraced slopes climbed towards the mist, dotted with the unmistakable geometry of tea plantations. Patches of dense jungle crowded the roadside, hinting at a wildness barely held in check. Elliott watched it all with a mixture of excitement and a growing unease. He was heading further and further from anything familiar, plunging into the unknown heart of his ambitious Sri Lankan dream.
 
 He disembarked at a dusty junction marked only by a cluster of small kiosks and a faded sign pointing towards Galagedara. The relative quiet after the bus's clamour felt sudden, amplifying his isolation. He negotiated with a waiting tuk-tuk driver, the three-wheeled vehicle sputtering to life like an angry insect.
 
 The tuk-tuk ride was a bone-jarring ascent. Paved road quickly gave way to rutted track, winding steeply upwards. Lush vegetation pressed close, giant ferns brushing against the open sides, the air growing heavier, thick with the scent of wet soil and unseen blossoms. They passed small, weathered houses clinging to the hillsides, glimpses of lives utterly different from his own. The final stretch was a muddy trail barely wide enough for the small vehicle, the engine whining in protest. Then, abruptly, they stopped.
 
 The driver gestured uphill. "This is it." He unloaded Elliott's bags, accepted his payment with a nod, and, with a noisy U-turn, rattled back down the track, leaving Elliott utterly alone. The sudden silence pressed in, broken only by the chirping of hidden insects and the drip of moisture from overarching leaves.
 
 He turned and looked. Before him lay fifteen acres of Galagedara hillside, a chaotic tangle of green reclaiming what was once a tea plantation. The monsoon had paused, offering a fragile truce under a sky bruised with clouds. Skeletal remains of tea bushes poked through curtains of vines. This unruly patch of Sri Lanka was his gamble, the raw material for a new life and, he hoped, his literary masterpiece.
 
 He surveyed the land, grand visions playing in his mind: neat terraces descending the slope, experimental crops thriving, a writer’s retreat breathing authenticity. It was a stark contrast to the life he’d left behind, a world away from his agent’s cramped London office. He could almost hear Miles again, swirling lukewarm coffee, eyebrows raised.
 
 “Sri Lanka, Elliott? A tea estate? You plan to write about ‘authentic rural life’ while battling leeches and arguing about fertilizer?” Miles had sighed, skepticism heavy in his voice. “Wouldn’t Hampstead Heath be more… manageable? And this masterpiece – is it going to write itself while you’re digging irrigation ditches?”
 
 Elliott had waved away the concerns then, fueled by a conviction that only total immersion could yield true art. Now, facing the sheer wildness of his purchase, the sheer remoteness, a flicker of doubt surfaced, quickly extinguished. This was it. This untamed beauty, this isolation, was the point.

```

Right, so we have a choice here. One is I can keep using Gemini and essentially just keep fretting away and fixing little details; or I can stick to Claude for ease of use. Claude seems to have a somewhat superior sense of the novel.

This isn’t a very scientific experiment. Let’s just try them head to head, for three chapters, and see what we get. 


# Claude Versus Gemini: The First Three Chapters


```
 [!GEMINI]
 # PART ONE: SEEDS OF AMBITION
 
 ## Chapter 1: Arrival
 
 The bus lurched, throwing Elliott Thorne against the warm metal window frame. Outside, the outskirts of Kandy blurred past – a vibrant chaos of small shops, stray dogs, and schoolchildren in crisp white uniforms. Inside, the air hung thick with the mingled scents of diesel, cardamom, and damp humanity. Packed tightly on the worn vinyl seat, Elliott felt a profound sense of dislocation, a solitary Englishman adrift in a sea of unfamiliar faces and rapid-fire Sinhala conversation. This was worlds away from the predictable grey calm of London.
 
 As the bus groaned its way higher into the hills, the urban sprawl gradually yielded to rolling green. Terraced slopes climbed towards the mist, dotted with the unmistakable geometry of tea plantations. Patches of dense jungle crowded the roadside, hinting at a wildness barely held in check. Elliott watched it all with a mixture of excitement and a growing unease. He was heading further and further from anything familiar, plunging into the unknown heart of his ambitious Sri Lankan dream.
 
 He disembarked at a dusty junction marked only by a cluster of small kiosks and a faded sign pointing towards Galagedara. The relative quiet after the bus's clamour felt sudden, amplifying his isolation. He negotiated with a waiting tuk-tuk driver, the three-wheeled vehicle sputtering to life like an angry insect.
 
 The tuk-tuk ride was a bone-jarring ascent. Paved road quickly gave way to rutted track, winding steeply upwards. Lush vegetation pressed close, giant ferns brushing against the open sides, the air growing heavier, thick with the scent of wet soil and unseen blossoms. They passed small, weathered houses clinging to the hillsides, glimpses of lives utterly different from his own. The final stretch was a muddy trail barely wide enough for the small vehicle, the engine whining in protest. Then, abruptly, they stopped.
 
 The driver gestured uphill. "This is it." He unloaded Elliott's bags, accepted his payment with a nod, and, with a noisy U-turn, rattled back down the track, leaving Elliott utterly alone. The sudden silence pressed in, broken only by the chirping of hidden insects and the drip of moisture from overarching leaves.
 
 He turned and looked. Before him lay fifteen acres of Galagedara hillside, a chaotic tangle of green reclaiming what was once a tea plantation. The monsoon had paused, offering a fragile truce under a sky bruised with clouds. Skeletal remains of tea bushes poked through curtains of vines. This unruly patch of Sri Lanka was his gamble, the raw material for a new life and, he hoped, his literary masterpiece.
 
 He surveyed the land, grand visions playing in his mind: neat terraces descending the slope, experimental crops thriving, a writer’s retreat breathing authenticity. It was a stark contrast to the life he’d left behind, a world away from his agent’s cramped London office. He could almost hear Miles again, swirling lukewarm coffee, eyebrows raised.
 
 _“Sri Lanka, Elliott? A tea estate? You plan to write about ‘authentic rural life’ while battling leeches and arguing about fertilizer?” Miles had sighed, skepticism heavy in his voice. “Wouldn’t Hampstead Heath be more… manageable? And this masterpiece – is it going to write itself while you’re digging irrigation ditches?”_
 
 Elliott had waved away the concerns then, fueled by a conviction that only total immersion could yield true art. Now, facing the sheer wildness of his purchase, the sheer _remoteness_, a flicker of doubt surfaced, quickly extinguished. This was it. This untamed beauty, this isolation, was the point.
 
 His temporary home, a colonial-era tea processing shed, stood near the property's lower edge. From a distance, it possessed a certain rustic charm. Up close, it revealed its age and neglect. The corrugated tin roof was stained with rust, sections sagging ominously. Gaps showed daylight between warped wooden planks that formed the walls. The stone foundation seemed solid enough, but nature was clearly winning the battle for tenancy. He pushed open the heavy, groaning door. The air inside hung thick with the smell of decay, damp earth, and something vaguely animal. Dust motes danced in the few shafts of light piercing the gloom. This, he thought with a grimace, would require more than just a quick sweep.
 
 As he stood assessing the shed’s daunting condition, a figure emerged from the path leading towards the village. A woman, perhaps in her late fifties, approached with a steady gait. She wore a colourful printed cloth skirt and a simple blouse, her dark hair streaked with grey pulled back neatly. Her expression was serious but not unkind.
 
 “You are the new owner?” she asked, her English precise. “Mr. Thorne?”
 
 “Yes, Elliott Thorne. And you are?”
 
 “Lalitha Mendis. My family land borders yours.” She gestured towards the threatening sky. “This break in the rain won’t last long. The heavy monsoon is coming. That roof,” she nodded towards the shed, “it will not keep you dry.”
 
 “Thank you, Mrs. Mendis,” Elliott replied politely, trying to project confidence. “I appreciate the warning. I have plans for repairs, of course. Everything is under control.”
 
 Lalitha studied him for a moment, a hint of doubt in her eyes, but merely nodded. “The ground here remembers the water’s path. Be careful where you build.” With another glance at the sky, she gave a slight bow and continued on her way.
 
 Elliott watched her go, momentarily irritated by the unsolicited advice. Local wisdom was one thing, but he had engineering principles and modern agricultural techniques on his side. He knew what he was doing.
 
 Night fell quickly, the brief respite from the rain clearly ending. The wind picked up, rattling the loose sections of the shed’s roof. Distant thunder rumbled, closer now. Inside, by the light of a battery-powered lantern, Elliott opened his journal. Ignoring the rising storm and the damp chill seeping through the walls, he dipped his pen in ink.
 
 _“Day One,”_ he wrote, the scratch of the nib barely audible above the wind. _“Galagedara. Have arrived at my small piece of paradise. The air alive, the land waiting. Finally breathing the authentic spirit of Sri Lanka. The work ahead is immense, but the inspiration… boundless. My journey, and the true heart of my novel, begins now.”_
 
 Outside, the first heavy drops of the returning monsoon began to fall, drumming insistently on the compromised roof of the old tea shed. The clouds overhead gathered, thick and dark, ready to unleash their full fury.
 
   
 
 ## Chapter 2: Local Bureaucracy
 
 Dawn broke damp and grey over Galagedara. Elliott, stiff from an uneasy night on a makeshift bed in the drafty tea shed, faced his first official hurdle: Kandy. The journey itself was an undertaking. He navigated the muddy track leading down from his property, boots sinking slightly with each step, the air still heavy with the promise of more rain. Reaching the junction where the tuk-tuk had abandoned him felt like emerging from a different world. He flagged down a brightly painted, crowded bus heading towards the city, squeezing aboard into a wall of bodies and noise.
 
 The hour-long ride was a rattling descent back into civilization, or at least its bustling Sri Lankan version. Elliott watched the landscape shift again, from tangled jungle and terraced hillsides back to villages, towns, and finally the energetic thrum of Kandy. Around the serene Kandy Lake, colonial-era buildings stood shoulder-to-shoulder with modern concrete structures. Horns blared, vendors called out, and the sheer density of life felt almost overwhelming after the profound quiet of his land. He felt a surge of purpose – this was a necessary step, the key to unlocking his vision. He was eager to get the permits filed, to legitimize his presence and his ambitious plans for transforming the neglected tea estate.
 
 The Kandy District Land Management Office, however, operated on a different frequency. Located in a sturdy but aging government building, its corridors echoed with the shuffle of sandals and the murmur of petitioners. Ceiling fans stirred the thick air, barely making headway against the humidity. Elliott found a place on a worn wooden bench, clutching his folder, a map of his fifteen acres folded neatly within. He watched people navigate the system – presenting papers, receiving instructions, being sent from one counter to another. It seemed a slow, intricate dance, and his initial eagerness began to fray into impatience. He just wanted approval to start clearing land, fix the shed properly, maybe even divert that small stream he’d noticed – practical steps towards his dream.
 
 Finally, his name was called. He was directed to a desk where Vikram Jayawardena sat, an island of meticulous order in the gentle chaos. Vikram’s desk was clear save for a neat stack of files and Elliott's application, already laid out. Behind wire-rimmed spectacles, his eyes were sharp, missing nothing. He gestured to the chair.
 
 "Mr. Thorne," Vikram began, his English precise. "Your application for land renovation and agricultural use." He picked up Elliott’s survey map, tracing the property lines with a fingertip. "This land... it has been fallow for many years."
 
 "Yes, exactly," Elliott said, leaning forward slightly. "That's the potential I saw. I plan to bring it back into productive use."
 
 Vikram nodded slowly, his gaze flicking from the map to Elliott, then back to the submitted plans. He examined the rough sketches for the shed repairs, lingering on the proposed additions. Then he moved to the agricultural section, his pen hovering. "Fifteen acres is substantial. Particularly with this gradient." He tapped the contour lines on the map. "Erosion is a significant factor during the monsoons."
 
 "I'll be implementing terracing, proper drainage..." Elliott began, but Vikram held up a hand, cutting him off politely.
 
 "Your plans here," Vikram continued, his voice quiet but firm, "mention clearing significant portions." He pointed to a shaded area on Elliott's rudimentary sketch. "And your agricultural intentions... they are rather general." His eyes met Elliott's directly. "What _precisely_ do you intend to cultivate, Mr. Thorne?"
 
 The directness of the question caught Elliott off guard. His ideas felt grand in his journal, but potentially naive under this intense scrutiny. He envisioned unique varieties, perhaps adapting European herbs, maybe even exploring crops mentioned in obscure agricultural journals. Explaining this felt complicated, possibly foolish. "Well," he started, "I need to assess the soil conditions properly first, of course. But I'm thinking initially of diverse plantings. Some local vegetables naturally, but also perhaps some... experimental crops. Things that might thrive here but aren't commonly grown."
 
 "Experimental crops," Vikram repeated the phrase, his voice devoid of inflection. He wrote it down carefully in Elliott’s file, the scratch of his pen loud in the momentary lull. "You understand, Mr. Thorne, that certain 'experiments' are prohibited? Sri Lanka has strict regulations regarding the cultivation of certain plants."
 
 "Of course," Elliott said quickly, flustered. "I meant experimental in terms of horticulture, yields, climate suitability. Nothing illicit, naturally." He felt a flush rise on his neck. Why did this feel like an interrogation?
 
 Just then, an older man approached the desk, his face etched with concern. Dr. Nimal Fernando bypassed the queue, addressing Vikram urgently in Sinhala. He unrolled a different map – older, topographical – and pointed emphatically at an area near Elliott’s property, then swept his hand downwards, mimicking water flow. Vikram responded sharply, tapping Elliott's filed plan and then a printed sheet of regulations tacked to the wall. Elliott couldn't understand the rapid exchange, but he saw the clash: the botanist spoke of the land's natural inclinations, watercourses, perhaps ancient patterns of use; Vikram countered with property lines, permits, official procedures. The disconnect was palpable. Dr. Fernando eventually retreated, shaking his head, leaving a residue of unresolved tension hanging in the air.
 
 Vikram turned back to Elliott, his expression unreadable. "Your initial permits for basic shed repair and minor clearing can be processed," he said formally, stamping a few papers. "But any significant agricultural development, particularly involving land alteration or unfamiliar species, will require further review. And detailed plans." He handed the stamped copies to Elliott. "We will monitor the situation."
 
 Leaving the office, Elliott felt a confusing mix of relief and apprehension. He had permission to start, at least. But Vikram’s intense scrutiny and the vague warning about monitoring left him uneasy. The eagerness he’d felt that morning was tempered by the bureaucratic reality and the subtle hint of suspicion.
 
 The bus ride back was hot and sticky. As they climbed higher, the air cooled slightly, carrying the scent of rain-washed foliage. Near the Galagedara junction, a police uniform caught his eye. Inspector Rohan Perera, seeing Elliott, eased himself onto the bench beside him as another passenger disembarked.
 
 "Ah, Mr. Thorne," Perera greeted him with a disarming smile. "Coming from Kandy? Dealing with the paperwork, I imagine?"
 
 Elliott nodded, managing a tired smile. "The Land Management Office. Quite the experience."
 
 "It can be," Perera chuckled. "Necessary hoops to jump through. Especially for newcomers." He lowered his voice slightly, his expression turning fractionally more serious, though his tone remained light. "Just wanted to mention, we had a bit of bother a few years ago. Another foreigner, up near where your land is. Bought an old place, talked a lot about 'sustainable farming'." He paused, looking out the window. "Turned out his idea of a cash crop wasn't tea or cinnamon. Caused a lot of trouble." Perera turned back, his eyes meeting Elliott’s briefly but intently. "Things aren't always what they seem up in these hills. Just good to be mindful, you know?"
 
 The Inspector gave a friendly nod, then turned to chat with another passenger. The casual anecdote, delivered with such practiced ease, felt like anything but. As the bus finally reached his stop, Elliott stepped off onto the familiar muddy track. The encounter in the office, the veiled warning on the bus – they painted his isolated hillside in a new, more complicated light. He looked up towards his fifteen acres, the silence seeming less peaceful now, more watchful. His grand plans suddenly felt entangled in a web of local history and suspicion he was only beginning to perceive.
 
   
 
 ## Chapter 3: Breaking Ground
 
 With permits for basic work secured, Elliott felt a surge of renewed energy. He found labourers easily enough – a group of men gathered near the Galagedara junction, seeking daily hire. Communicating his needs involved a mixture of pointing, sketching in the dirt, and relying on the halting English of one younger man named Suresh. Elliott wanted the dense undergrowth cleared near the shed, envisioning neat garden beds stepping down the slope. He felt a satisfying sense of command, directing the work, finally imposing his vision onto the wild landscape.
 
 The men worked efficiently, their worn cutting tools slicing through vines and thickets with practiced ease. But as they cleared patches down to the red earth, the older workers occasionally paused, crumbling the soil between their fingers, murmuring to each other in Sinhala and gesturing towards the sky and the slope above. Suresh translated hesitantly. "They say... this soil, sir. Thin. When heavy rain comes..." He pointed to shallow roots and exposed rock. "Water takes it."
 
 Elliott nodded politely but inwardly dismissed their concerns. He’d read extensively about tropical agriculture, about amending soil, about terracing. These men understood traditional ways, perhaps, but he had science and modern techniques. "We'll build retaining walls," he assured Suresh, pulling out a folded diagram from his pocket. "Proper drainage is key." The workers exchanged glances but returned to their task. Elliott felt a familiar conviction: progress often required overcoming ingrained, outdated thinking.
 
 His next project was the seasonal stream that trickled down one edge of his property. During the current break in the monsoon, it was little more than a damp channel snaking between rocks. But the smoothed stones and piles of debris caught higher up the slope spoke of a far greater force during peak rains. Seeing it as an untapped resource, Elliott directed the workers to dig a new channel, diverting the flow closer to his planned garden area. They moved rocks, scraped earth, creating a neat trough. It felt practical, efficient – a logical step in mastering his environment. He pictured water flowing precisely where he needed it, nourishing his future crops.
 
 He was admiring their handiwork, imagining rows of flourishing vegetables, when two figures appeared abruptly at the edge of the cleared area. An older man, wiry and stern-faced, stood with his hands on his hips, surveying the diverted stream. Beside him, a young man, perhaps his son, watched Elliott with unconcealed resentment.
 
 The older man strode forward, stopping directly in front of Elliott. He spoke rapidly in Sinhala, his voice sharp with anger, pointing emphatically at the new channel, then gesturing down the hill towards unseen lands below.
 
 "I don't understand..." Elliott began, feeling flustered.
 
 The younger man stepped forward. "My father is Ajith Wickramsinghe," he said, his English heavily accented but clear. "This water," he gestured sharply at the stream, "it flows to our family's paddy fields. For generations. Before Englishmen ever came here."
 
 Elliott was taken aback. "But it's on my property," he countered, feeling defensive. "It's just a small stream. I'm only redirecting it slightly, for irrigation..."
 
 "It is _our_ water," Ajith Wickramsinghe interrupted, his eyes flashing. Though Elliott didn't grasp the words, the meaning was unmistakable. The son elaborated, "Our grandfather’s father dug channels from this stream. Agreements were made. This water belongs to the village lands below, not to this hill." He spoke of family history, of customary rights that predated Elliott’s land deeds, of political connections within the local council. Elliott realized with a sinking feeling that his logical, 'efficient' act had trespassed on something deep and complex – a web of tradition and ownership he hadn't even known existed.
 
 Before the argument could escalate further, the sky, which had been brooding all afternoon, finally broke. It wasn't a gradual increase; it was a sudden, violent deluge. Fat drops hammered the ground, turning the newly exposed earth into instant mud. The sound was deafening, a roar on the tin roof of the nearby shed. Elliott watched in dismay as rivulets formed, cutting paths through his cleared patches, washing away the thin topsoil the workers had warned him about. His newly dug channel overflowed within minutes, water carving its own chaotic path downhill, taking clumps of earth with it.
 
 The workers gathered their tools quickly and departed, giving Elliott sympathetic but knowing glances. Ajith Wickramsinghe gave Elliott one last, hard look before turning away, pulling his son with him into the blinding rain. Elliott was left standing alone, soaked to the skin, watching his initial efforts dissolve into muddy ruin. He retreated into the leaky shed, the drumming on the roof an incessant, mocking rhythm.
 
 The downpour continued relentlessly through the evening and into the night. Inside, water dripped from multiple points in the ceiling, forming puddles on the packed earth floor. Elliott tried to focus, to plan his next steps, but the damp chill seeped into his bones. Worse, the single bulb powered by his solar system began to flicker erratically. He checked the monitor – rows of expensive panels installed just days before, his proud nod to sustainability. The battery levels were critically low. Days of thick cloud cover had starved the panels of sunlight. Just before midnight, the light sputtered and died, plunging the shed into near-total darkness.
 
 Elliott sat on his damp bedding roll, the weak beam of his headlamp barely cutting through the gloom. The roar of the monsoon outside felt immense, all-encompassing. He thought of the washed-away topsoil, the workers' unheeded warnings, the angry face of Ajith Wickramsinghe claiming ancestral rights to the water Elliott had casually diverted. His expensive solar system, a symbol of modern independence, had failed at the first sustained test.
 
 The grand visions he’d harboured, the sense of command he'd felt directing the workers just hours before, now seemed painfully naive. His books on tropical agriculture hadn't prepared him for the sheer force of the monsoon, nor had his assumptions about property rights accounted for generations of local custom.
 
 Surrounded by darkness and the relentless sound of the storm, Elliott felt a chilling wave of vulnerability wash over him. This wasn't just about cultivating land; it was about navigating a complex reality, one where nature and history held far more power than he had ever anticipated. The rain hammered on, each drop seeming to underscore the depth of his miscalculation.

```

So this is what Gemini gives us. Actually, what it gave us was a little bit shorter; in between these chapters I have been prompting it to expand on its writing very slightly.

```
 [!YUDHA]
 Give me Chapter 3. Apply the same thinking as before - more detail about Elliott's journey, observations, and internal state, while keeping the concise style in mind.
```

And here’s Claude, minus the write-longer prompting:

```
 [!CLAUDE]
 # MONSOON CHRONICLES
 
 ## PART ONE: SEEDS OF AMBITION
 
 ### Chapter 1: Arrival
 
 The brief respite from rain revealed a landscape both vibrant and neglected. Elliott Thorne stood at the edge of his newly purchased property, sweat already darkening the back of his linen shirt despite the early hour. Fifteen acres of former tea plantation stretched before him, half-reclaimed by the persistent jungle. The overgrown paths and crumbling stone walls hinted at order now surrendered to wild abundance. Perfect, he thought, absolutely perfect.
 
 He picked his way through tangled vines, mentally placing the garden beds, fruit trees, and writing pavilion that would transform this neglected plot into both his home and the subject of his next book. His boots squelched in the red earth as a smile spread across his face. This wasn't just land; it was raw material for his masterpiece.
 
 "Authentic rural Sri Lanka," he murmured, "unfiltered and undiluted."
 
 The memory of his literary agent's skepticism surfaced unbidden. They'd been sitting in her London office three months ago, rain streaking the windows in typical English fashion as she'd regarded him with poorly concealed dismay.
 
 "You're doing what?" Margot had asked, tapping her pen against her desk calendar. "Elliott, you've built a career on urbane social commentary. Your readers expect a certain... metropolitanism."
 
 "That's precisely the problem," he'd countered, leaning forward. "I've become predictable. This book will be different—something honest, earthy. Real life among real people, not cocktail parties in Kensington."
 
 "And you need to move halfway around the world to write it?"
 
 "Immersion, Margot. You can't write about authentic rural life from a flat in Notting Hill."
 
 She'd sighed, the sound of a woman who knew argument was futile. "You're not the first Englishman to seek enlightenment in former colonies, you know."
 
 He'd bristled at that. "This isn't spiritual tourism. It's serious research."
 
 Now, standing amidst the verdant tangle that was officially his, Elliott felt vindicated. The air itself seemed charged with potential—thick with the scent of earth and growing things. In the distance, a colonial-era structure rose from the undergrowth: the tea processing shed that would serve as his temporary home until proper renovations could begin.
 
 His optimism faltered slightly as he approached the building. The reality was considerably less romantic than the estate agent's description of "historic tea production facility with conversion potential." The roof appeared intact, but only just. The wooden shutters hung at precarious angles, and the stone steps leading to the entrance were cracked and uneven.
 
 When he pushed open the door, the hinges protested with a screech that sent something small and furry scurrying into the shadows. The interior was a single large room with high ceilings and concrete floors, designed for utility rather than comfort. Ancient machinery—parts of the tea processing operation—still occupied one corner, rust-covered ghosts of imperial industry.
 
 Elliott set down his bags and walked the perimeter, footsteps echoing. Despite its dilapidation, the space held promise. The tall windows would provide good light once cleared of grime and creepers. The back wall housed a rudimentary bathroom installation—likely added years after the original construction. A small sleeping platform had been built into one corner, elevated off the floor.
 
 "It's perfect," he said aloud, his voice sounding hollow in the empty space. "Just needs a bit of work."
 
 The sound of approaching footsteps drew him back to the entrance. A woman stood at the bottom of the stone steps, regarding him with unconcealed curiosity. She appeared to be in her fifties, her gray-streaked hair pulled back in a practical knot, her clothing simple but immaculate.
 
 "Mr. Thorne?" she called. "I am Lalitha Mendis. My brother handled your property purchase."
 
 Elliott hurried down the steps, extending his hand. "Yes, thank you for coming. Your brother was extremely helpful."
 
 She shook his hand briefly, her grip firm and businesslike. "I've brought some essentials." She gestured to a basket at her feet. "Bread, tea, some fruit. The village shop closes early, and you seemed eager to move in immediately."
 
 "That's incredibly thoughtful. Please, won't you come in? Though I'm afraid I can't offer much hospitality yet."
 
 Lalitha followed him inside, her eyes taking in the space with pragmatic assessment rather than his romantic vision. "You plan to live here during renovations?"
 
 "For a few months at least. I find it helps the writing process to be... close to the subject."
 
 She nodded, though whether in agreement or mere acknowledgment was unclear. "The building is sturdy enough, but you should reinforce that section of roof before the heavy rains." She pointed to a darkened patch of ceiling. "The monsoon will arrive properly within weeks."
 
 "I've weathered my share of rain," Elliott replied with a smile. "English, remember?"
 
 For the first time, Lalitha's expression softened into something approaching amusement. "Mr. Thorne, with respect, you have not experienced a proper Sri Lankan monsoon. It is not like English rain."
 
 "Please, call me Elliott."
 
 "Elliott," she corrected. "You should secure additional tarps, clear the drainage channels around the building, and elevate anything you don't wish to be soaked. When the rains come, they come suddenly and without mercy."
 
 He gestured vaguely at the surrounding jungle. "Surely all this grows because of the rain. I'm counting on it for my garden."
 
 "Yes, but these plants have evolved over centuries to channel water away from their vital parts. Your tea shed has not, nor have your English garden plans, I imagine." She paused, then added more gently, "My family has farmed near Galagedara for generations. If you need advice, my home is the yellow house by the temple intersection."
 
 Elliott felt a flicker of annoyance at her presumption but masked it with politeness. "That's very kind. I'll certainly reach out if I need guidance. I've done extensive research, though—books by colonial botanists, modern agricultural manuals. I'm quite prepared."
 
 Lalitha merely inclined her head. "Books are valuable. Experience is something else." She moved toward the door. "I must return before dark. The path becomes treacherous in low light."
 
 After she departed, Elliott unpacked his essential supplies: a camping stove, bedding, his laptop, and most importantly, his journals. As twilight descended, he lit a lantern and positioned himself on the sleeping platform with a leather-bound notebook.
 
 Outside, clouds were gathering again, heavy and dark above the jungle canopy. The first scattered raindrops began to tap against the roof as he wrote:
 
 _Day One at Galagedara Estate (must find a better name—too colonial). The property exceeds expectations. Fifteen acres of possibility stretching in all directions. The locals seem cautious but not unfriendly. An older woman—Lalitha—brought provisions and warnings about rain, as if an Englishman wouldn't understand precipitation! Typical provincial concern, though well-meaning._
 
 _Tomorrow I'll begin clearing space for the first garden beds. The soil appears rich, despite years of tea monoculture. With proper attention, this land could yield extraordinary harvests within months. And with that bounty will come the narrative thread I've been seeking—the authentic story of reclaiming colonial extraction with sustainable harmony._
 
 _I can already feel the book taking shape in my mind. Not the manufactured insights of my London novels, but something true and elemental. This is what I came for: real Sri Lanka, unfiltered and undiluted by tourist experiences or expatriate bubbles._
 
 The rain intensified, drumming against the roof with growing insistence. Elliott glanced up briefly at the darkened ceiling patch Lalitha had indicated, then returned to his writing, dismissing her concern as local superstition. A crack of thunder shook the air, and the rain redoubled its assault—no longer drops but sheets of water crashing against the building.
 
 Elliott wrote on, his lantern casting a small circle of light in the vast darkness, as the skies opened with a fury he had indeed never experienced in England. The monsoon had announced itself, and it would not be ignored.
 
 ### Chapter 2: Local Bureaucracy
 
 Three days of relentless rain had left Elliott with nothing to do but patch leaks and draft elaborate plans for his property. When the downpour finally subsided to a gentle mist, he seized the opportunity to visit the Kandy District Land Management Office. His architectural sketches and renovation plans, meticulously prepared in London, felt damp and slightly warped in his leather portfolio—like his confidence.
 
 The office occupied the second floor of a colonial-era building, its faded grandeur a testament to administrative persistence through changing regimes. Inside, ceiling fans stirred the humid air with hypnotic rhythm while fluorescent lights cast an unflattering glow over everything. Clerks moved between desks with practiced efficiency, their formal attire immaculate despite the heat.
 
 Elliott approached the information desk, where a young woman directed him to "Mr. Jayawardena, third desk from the window." Following her gesture, Elliott found himself standing before a man in his forties, his starched white shirt and carefully trimmed mustache suggesting precision in all things.
 
 "Mr. Jayawardena? I'm Elliott Thorne. I recently purchased property near Galagedara and need to file renovation permits."
 
 Vikram Jayawardena looked up unhurriedly, his eyes coolly assessing Elliott before he indicated the chair opposite his desk. "Your documents, please."
 
 Elliott placed his portfolio on the desk and extracted the property deed, his passport, and the preliminary renovation plans. "I've brought everything listed on your website."
 
 Vikram opened the property file with methodical care, scrutinizing each page as though searching for invisible flaws. "This land was previously classified as agricultural production zone, specifically tea cultivation." He looked up, his expression neutral but his eyes sharp. "Your intended use?"
 
 "I'm establishing a residence and sustainable garden project," Elliott explained, leaning forward enthusiastically. "I'm actually writing a book about the process—reclaiming former colonial plantation land for modern, sustainable use."
 
 Vikram's expression remained unchanged. "Foreign nationals establishing agricultural operations require additional permits."
 
 "It's not commercial agriculture," Elliott clarified. "Just personal gardens and perhaps some experimental plots."
 
 Vikram's eyebrow raised fractionally at the word "experimental." He pulled a different form from his drawer. "Please complete this Agricultural Intent Statement. Be specific about all plant species you intend to cultivate."
 
 As Elliott began filling out the form, Vikram methodically examined his renovation plans, making small notes in the margins with a red pen.
 
 "These structural modifications require engineering certification," he said, tapping a section where Elliott had drawn his planned solar panel installation. "And this water catchment system interferes with historical drainage patterns."
 
 Elliott felt his first twinge of genuine concern. "The property's been abandoned for years. Surely small modifications—"
 
 "Former colonial properties fall under historical land use regulations," Vikram interrupted, his voice acquiring a subtle edge. "Section 5 of your deed specifically mentions preservation of original watershed dynamics."
 
 Elliott hadn't noticed any such section, but he nodded as though familiar with it. The form before him requested detailed information about intended crops, projected water usage, and soil amendments. He began listing vegetables and fruits, aware of Vikram's occasional glances at his writing.
 
 "The form also asks about fertilizers and pest control methods," Vikram pointed out. "Please be comprehensive."
 
 "I haven't finalized those details," Elliott admitted. "I'm experimenting with several approaches."
 
 "Experimenting," Vikram repeated, the word hanging between them like a question. "And what exactly will be the nature of these experiments, Mr. Thorne?"
 
 Elliott sensed a trap in the question but couldn't identify its nature. "Companion planting, mostly. Some permaculture techniques. Nothing exotic."
 
 "I see." Vikram made another note. "And these experiments—they are purely for your book? Or do you have commercial intentions?"
 
 "Just research. Though if successful, I suppose the methods could be shared with local farmers."
 
 Vikram looked up sharply. "Local farmers have generations of knowledge about these soils, Mr. Thorne. They don't typically need foreign expertise."
 
 Elliott felt his face warm. "Of course. I didn't mean to imply—"
 
 The office door opened with enough force to draw attention. A man in his sixties entered, his khaki field clothes and comfortable walking shoes contrasting with the formal office attire. He moved directly to Vikram's desk, seemingly oblivious to Elliott's presence.
 
 "Jayawardena, this classification is unacceptable." He placed a document on the desk. "You've categorized the Ratnayake family's cultivation as non-traditional when their methods predate your regulatory framework by centuries."
 
 Vikram's posture stiffened further. "Dr. Fernando, I am with another applicant. If you would please wait—"
 
 "Three weeks I've waited for this reconsideration," Dr. Fernando countered. "Three weeks while their irrigation system remains dismantled because of your paperwork."
 
 "The regulations exist to protect traditional practices from unsuitable modern modifications," Vikram replied, his voice tight. "If the Ratnayakes had followed proper channels—"
 
 "Don't lecture me about traditional practices, Jayawardena. Your regulations were written by bureaucrats who've never cultivated a single crop." Dr. Fernando finally glanced at Elliott, giving him a quick nod before returning his attention to Vikram. "The Ratnayakes' method of channel-banking with woven bamboo is documented in Dutch colonial records. How much more 'traditional' must it be?"
 
 Vikram's expression was glacial. "Submit your historical documentation through proper channels, Doctor. Now, if you'll excuse me—" He gestured toward Elliott.
 
 Dr. Fernando gave an exasperated sigh. "More paperwork. Always more paperwork." He turned to leave, then paused beside Elliott. "New to the area?"
 
 "Yes, near Galagedara. I've purchased the old Peterson tea plantation."
 
 Interest flickered in the older man's eyes. "Peterson's place? Fascinating ecosystem there—unique watershed pattern." He reached into his pocket and produced a worn business card. "Nimal Fernando. Botanist. Call me when you're ready to discuss what actually grows there, rather than what the government thinks should grow there."
 
 After Dr. Fernando departed, Vikram cleared his throat. "Dr. Fernando's enthusiasm often exceeds his respect for proper procedure." His tone suggested this was a severe character flaw. "Now, regarding your agricultural intentions, Mr. Thorne. What specific crops are you planning?"
 
 Elliott hesitated, wondering how detailed he needed to be. "Standard vegetables, mostly. Tomatoes, peppers, beans. Some fruit trees appropriate to the climate."
 
 "Many foreign visitors have unique interpretations of what crops are 'appropriate' to our climate," Vikram observed, his pen poised above the form. "For instance, certain plant species that might be prohibited or regulated."
 
 Elliott suddenly understood the undercurrent of suspicion. "I assure you, I'm not planning to grow anything illegal. Just ordinary food crops."
 
 "Of course," Vikram replied smoothly. "Yet you've used the word 'experimental' three times in our conversation."
 
 Elliott made a mental note to choose his words more carefully. "I simply meant I'll be adapting conventional growing methods to local conditions."
 
 Vikram studied him for a long moment, then stamped several forms with deliberate precision. "Your renovation permits will require Land Use Committee review. Expect a decision in three to six weeks. Until then, no structural changes are authorized." He handed Elliott a carbon copy of his application. "And Mr. Thorne? I recommend you familiarize yourself with the Controlled Agricultural Substances Act. For your book research, naturally."
 
 The bureaucratic labyrinth had consumed most of the day. As Elliott boarded the bus back to Galagedara, the afternoon sun briefly emerged from behind the clouds, illuminating the lush hillsides in a deceptively peaceful glow. He found a seat near the back, mentally calculating how much work he could accomplish without official permits.
 
 "English, yes?" The question came from a man in his fifties seated across the aisle. He wore plain clothes, but his posture suggested authority. "I am Inspector Rohan Perera, Galagedara police substation."
 
 Elliott introduced himself, explaining his recent property purchase.
 
 "Ah, the old Peterson place." The inspector nodded. "Interesting choice. Not many foreigners settle in our district unless they marry locals."
 
 "I'm writing a book," Elliott explained. "About sustainable agriculture and rural life."
 
 "Noble pursuit," Inspector Perera replied with a smile that didn't quite reach his eyes. "We had another foreigner some years back—Swiss man and his American wife. They too were interested in agricultural experiments." He glanced out the window at the passing landscape. "Unfortunately, their interest focused on plants that violated Section 8 of our controlled substances regulations."
 
 Elliott felt a chill despite the humid bus interior. "I assure you my interests are purely in food production."
 
 "Naturally," the inspector agreed amiably. "I only mention it because foreigners sometimes misunderstand our local laws regarding cultivation. Mr. Jayawardena is very thorough in his monitoring of agricultural activities in our district."
 
 The bus lurched around a corner, and rain began spattering against the windows again, obscuring the view. Elliott realized with growing unease that his simple plan—buying land, growing food, writing his book—had invisible complexities he hadn't anticipated. The colonial history he'd considered merely backdrop was still actively shaping perceptions and regulations.
 
 "Tell me, Mr. Thorne," Inspector Perera asked as the bus approached Galagedara, "what exactly do you hope to grow in your experiments?"
 
 It was the third time that day someone had asked essentially the same question. Elliott was beginning to wonder what answer they were looking for—and why they seemed so certain it wouldn't be the truth.
 
 ### Chapter 3: Breaking Ground
 
 Elliott stood at the edge of his property, watching six local men hack at the encroaching jungle with practiced efficiency. Despite Vikram's warning about waiting for permits, he'd decided that clearing undergrowth hardly constituted "structural changes." The workers moved in a loose formation, machetes flashing in the intermittent sunlight, gradually revealing the bones of the former plantation beneath the green overgrowth.
 
 "Good progress," Elliott called to the foreman, a wiry man named Dhanushka who spoke reasonable English.
 
 Dhanushka paused, wiping sweat from his brow with a kerchief. "Land remembers tea," he said, pointing to rows barely visible beneath the tangle of vines. "See how plants still follow old lines? Good drainage there."
 
 Elliott nodded, pleased. "That's exactly what I'm looking for. We'll maintain some of those patterns but introduce new growing areas as well."
 
 "Soil different in different places," Dhanushka said, crouching to scoop a handful of reddish earth. He rubbed it between his fingers, then let it fall. "Here, too much clay. Water sits. Better for other section." He gestured toward a slightly elevated area to the west.
 
 "Actually, I was planning to put the main vegetable beds right here," Elliott said, indicating the area Dhanushka had just criticized. "It gets the best morning sun."
 
 Dhanushka's expression remained neutral, but he exchanged glances with an older worker. "Morning sun good. Soil structure different problem. When big rains come—" He made a flowing gesture with his hands.
 
 "I'll build raised beds," Elliott assured him. "With proper drainage channels."
 
 The older worker said something in Sinhala, too quickly for Elliott to catch with his rudimentary language skills. Several of the men nodded in agreement.
 
 "What did he say?" Elliott asked.
 
 Dhanushka hesitated. "Gunasena says his father worked this land for old plantation owner. Says these fields—" he gestured to the area Elliott had selected, "—always flood in Maha monsoon. Big rains."
 
 Elliott felt a flicker of irritation. First Lalitha, now these workers—everyone seemed determined to warn him about rain, as if water falling from the sky was some mysterious Sri Lankan phenomenon beyond foreign comprehension.
 
 "Thank you for the advice," he said with careful politeness, "but I've studied tropical agriculture extensively. The drainage systems I'm planning will manage the water flow."
 
 Dhanushka merely nodded and returned to work, his expression unreadable.
 
 By midafternoon, the workers had cleared a substantial area, revealing the gentle contours of the land more clearly. Elliott walked the property alone during their lunch break, mentally placing his garden beds and irrigation channels. A seasonal stream cut across the northwestern corner of his land, currently little more than a trickle after several dry days. He followed it, noting how it curved away from the area he'd selected for his primary growing space.
 
 A plan began to form in his mind. With minimal effort, he could redirect this stream to better serve his garden beds, creating a more efficient irrigation system than the haphazard colonial-era channels. He made quick sketches in his notebook, calculating gradients and flow rates based on the terrain.
 
 When the workers returned, Elliott directed them to begin clearing a new path for the stream. Dhanushka frowned as Elliott explained his plan.
 
 "Stream has followed this way many years," he said cautiously. "Many properties share water."
 
 "It will still flow downhill to the same places," Elliott assured him. "I'm just optimizing the route through my property."
 
 The workers exchanged glances but set to work, digging a new channel along Elliott's specified route. The soil was dense with clay in some sections, making progress slow. Elliott worked alongside them, energized by seeing his vision taking physical form. By evening, they had completed roughly half the new channel, and Elliott paid the men for their day's work, arranging for them to return the following morning.
 
 After they departed, he continued working alone, driven by a sense of creative purpose he hadn't felt in years. The physical labor was satisfying in a way his writing had not been lately, the immediate results visible and tangible. As darkness fell, he reluctantly set aside his tools and returned to the tea shed, muscles aching pleasantly.
 
 He spent the evening updating his journal and sketching more detailed plans for the growing beds. The first seeds he'd ordered from an agricultural supplier in Colombo should arrive within days, and he wanted the initial planting areas prepared. Despite the bureaucratic hurdles at the Land Management Office, he felt a growing certainty that his project would succeed—and with it, his book.
 
 Heavy clouds gathered overnight, and dawn brought steady rain. Elliott was surprised to see all six workers arrive despite the weather, dressed in plastic ponchos and apparently untroubled by the downpour. They continued clearing land and completing the drainage channel, mud spattering their clothes and faces as they worked.
 
 The rain intensified by midday, turning the newly dug channel into a fast-flowing stream. Elliott observed with satisfaction how efficiently his redesigned water route was working, carrying runoff from the higher portions of his property directly to where his garden beds would be located.
 
 "See how well it's functioning?" he said to Dhanushka, who was watching the water flow with a careful eye.
 
 "Water finding its way," Dhanushka acknowledged. "But—" He stopped speaking as shouts came from the property line.
 
 Two figures were approaching across the muddy field, an older man and a teenage boy, both wearing rain gear and expressions of unmistakable anger. The older man gestured emphatically toward the new drainage channel, his voice carrying across the rain-drenched landscape.
 
 "What you do here? Who gives permission?"
 
 Elliott walked to meet them, extending his hand. "I'm Elliott Thorne, the new owner. Are you a neighbor?"
 
 The man ignored the outstretched hand. "Ajith Wickramsinghe. This water belongs to three families." He pointed to where Elliott's newly dug channel diverted the stream. "Sixty years my family uses this water. My father and grandfather before."
 
 Elliott attempted to explain his irrigation plan, emphasizing that the water would still flow downhill to the same properties eventually. Ajith's scowl deepened as Elliott spoke.
 
 "You take water first now. When dry season comes, we get less." He gestured to the boy beside him. "My son Saman will study agriculture at university next year. He understands water rights."
 
 The young man stepped forward, his English more polished than his father's. "What you've done alters the watershed dynamics," he said, professional knowledge edged with personal anger. "Our rice fields depend on this specific flow rate and timing."
 
 "I'm certain we can work this out," Elliott began, but Ajith cut him off.
 
 "My cousin is district council member," he said, his voice tight with controlled fury. "My uncle before him. Wickramsinghes have lived here six generations since British took our original lands for tea growing."
 
 Elliott felt a creeping unease. The simple agricultural project he'd envisioned was becoming entangled in historical grievances and local politics he barely understood.
 
 "I had no intention of causing problems," he said. "I'm just trying to establish a sustainable garden."
 
 "Sustainable?" Saman echoed with a bitter laugh. "You've been here what—two weeks? Our family has sustainably managed these water systems for generations."
 
 The rain suddenly intensified, becoming a solid sheet of water that made conversation nearly impossible. Thunder cracked overhead, and the workers quickly gathered their tools, heading for shelter.
 
 "We continue this discussion later," Ajith shouted over the deluge. "But you fix this water problem." He turned to leave, then paused, adding with ominous finality, "Wickramsinghes do not forget water theft."
 
 By evening, the storm had become the heaviest rainfall Elliott had experienced since his arrival. Water poured from the sky with astonishing force, overwhelming his carefully designed channels and turning his cleared garden areas into muddy pools. He worked frantically in the downpour, attempting to dig emergency runoff ditches, but the soil was too saturated to hold its shape.
 
 As darkness fell, Elliott abandoned his efforts and retreated to the tea shed, soaked to the skin and shivering despite the humid air. Inside, he found water seeping through the roof in a dozen places, forming puddles on the concrete floor. He placed buckets and cooking pots under the worst leaks, the metallic pinging of raindrops creating a chaotic symphony in the cavernous space.
 
 His solar system, installed during his first week with the help of a technician from Kandy, had been functioning adequately during brief cloudy periods. But after three days of heavy overcast, the batteries were depleting faster than they could recharge. The lights flickered ominously as he changed into dry clothes.
 
 Elliott checked his phone—no signal. The storm had apparently affected the nearest cell tower. He was completely cut off, with failing power and a building that seemed increasingly vulnerable to the elements. For the first time since his arrival, a tendril of doubt crept into his certainty.
 
 He opened his laptop to review his agricultural plans, but the screen remained dark—the battery completely drained. Without power to recharge it, his digital resources were inaccessible. The printed books he'd brought on tropical gardening were limited, and none addressed the specific conditions he was now facing.
 
 As the night deepened, the rain continued its relentless assault. Elliott lay on his sleeping platform, listening to the water finding new entry points into his temporary home. Lalitha's warning echoed in his mind: _When the rains come, they come suddenly and without mercy_.
 
 He'd dismissed her concern as provincial caution. Now, as water pooled around the legs of his makeshift desk and his carefully drawn garden plans curled in the damp air, Elliott began to wonder what other local wisdom he had too quickly disregarded.
```

That’s honestly enough back and forth for me. My initial feeling about Claude having the better sense of novel was completely true. It produces text that seems far more plausibly human-esque in a single shot. The whole water theft is actually seeded well, with the bureaucrat asking Elliot whether he is going to maintain the same water structures, and with the workers showing concern about Elliot’s changes. 

The agricultural procedures are largely nonsense, but plausible nonsense. See, in Sri Lanka, land can be classified as growing land, yes. Largely for rice. And once classified as such, you cannot build on it. No houses, no vertical farms. There is nothing to prevent you from growing horizontally on it; but much also depends on whether you’re growing as part of your personal residence or whether you want business permits. The general experience of dealing with a petty bureaucrat has, I feel, the correct vibe. Even the ceiling fan stirring the humid air and fluorescent lights with their unflattering glow is quite accurate to reality.

I especially like the fact that everybody seems to be a little bit more of an asshole. Elliot seems to be a little bit more stuck up.  The *Eat, Pray, Love* feeling is gone; in its place are people who are a little bit more hard-edged. The character of the bureaucrat, Vikram, is set up quite well by Dr. Fernando’s ranting. These visible facets of characters are exposed, not by directly describing them as such, but by how other characters seem to perceive them. Dr. Fernando's interest in watersheds is also quite clear. And water theft is something that people take very seriously.

Right, now I just have to do this for . . . *checks notes* . . . 20 chapters. Hold, please.

# A Brief Note on Reality

Now, while I relentlessly copy-paste, copy-paste and copy-paste back and forth, I want to share with you a little piece of my life as it is today. 

Five years ago, I bought a piece of land in Galagedara, Kandy. I won't say exactly where, but suffice it to say that it was the rear end of an old tea estate. It wasn't entirely isolated from civilization. It was about two kilometers to a main road but it was on the other end of rambling and eclectic collection of mountain roads. Some of them were more footpaths through the mud than anything else. 

I didn't care. This was  a step on a quest that I had been obsessed with for over a decade at this point. I wanted a house. I wanted a massive garden where I could grow things - vegetables, flowers; a space that I could transform into, not an oasis in the desert, but a great blooming on the mountain; a place where I could look up and see the sky and enjoy it completely devoid of the skeletons of glass and concrete and steel that climbed around me wherever I went in the city.

I am also a novelist, so in true form I did my research novel-style; reading the experiences of people who had done this, trying to understand the world through their eyes. My partner and I fell in love with the whole permaculture movement. We watched a fantastic movie by Happen Films called Fools and Dreamers. In between wondering what happened to actual Sri Lankan capacity to grow vegetables and so on and exist outside the state-subsidized monocrop culture, we furiously planned everything that we would grow. We set ambitious goals for ourselves.

And we arrived here just as Elliot did in a tuk-tuk. We began construction. Someday I will write a long blog post about how not to build a house in Sri Lanka, but it was a massive undertaking. I've never appreciated the sheer power of concrete as a technology until that point. And years after, we moved in this year, and our dreams of starting a farm and wandering through the flowers have been systematically overrun by the more practical concerns of a place like this. Sorting out electricity. Sorting out water! Municipal water sometimes delivers only 2-3 hours a day, so you have to dig a well, Which first involves finding the oldest surveys that you can find on the property so that you can begin to tease out springs that have long since been a) tapped by neighbours and b) buried and closed off when they realised the property had sold. And then you have to think about motors and backflow and water storage across the property. 

And then you have to deal with the realization that the cranky old man who is your closest neighbor has a reputation for eventually squatting on other people's land by growing stuff on them or building water infrastructure; and that he seems to have, let's just say, run-ins with drug dealers to whom he or his family owes money. I have not yet been able to figure out exactly who.

So you have to think about fences. Then you get those fences up and you start realizing that you need better canals, because otherwise the water flow during the April rains will just cut massive grooves where the concrete of the fence meets the earth. While you're doing all this, the rain starts; so you have to figure out sheds, canopies, because the rain gets in through the windows sometimes. Don't even get me started on how complex gates actually are when you're trying to build them on a slope. Then you try to take a few days off and start planting some things, but because this used to be an old tea estate, the topsoil is completely eroded, it tends to wash off at the slightest rain, and the thing that grows best on it is actually an invasive tall grass - *Megathyrsus maximus* - that is an absolute menace in Sri Lanka. You can cut and clear it, but for that you need tools, and you also need a game plan for planting its replacement, because without a suitable replacement it will grow back and while it grows back the topsoil will erode a little bit further. 

Frustrated, you decide to spend a day listening to the new Linkin Park album, which is when a bunch of monkeys springboard off the kendha trees you forgot to cut down, attempt to invade your room, and succeed in knocking out the 4G outdoor antenna that you've so carefully positioned to face the closest cell tower. This takes your measly 8 mbps connection offline. You fight them off with a gel blaster - a reproduction of the HK416. But the damage is done. And now the friendly neighbor who brought healing herbs for the dog that seems to think it lives here is now afraid because you seem like an armed lunatic. Even worse: you *are* an armed lunatic.

You get the picture. Imagine a combination of Kafka's bureaucracy, lack of material, lack of knowledge, a version of Stardew Valley authored by the Chaos gods instead of ConcernedApe, and just sheer mud and leeches; this peculiar combination has a way of slapping you in the face and dragging you back down to reality.

Now, fortunately, we are not overrun, as it were. We have instead paced ourselves and figured out saner plans and realized that farmers on YouTube are not necessarily an ideal source of real life advice on this part of the journey. But I say this as a way of conveying some of my shock in seeing these AI models hitting so close to some truth that I have practically experienced. Maybe there's a lot of text out there about Sri Lankans trying to rehabilitate old tea estates, but I don't think so. I am legitimately curious as to how much of this experience it can pick up on.

# The Production Line, and My Feelings Within 

One of the things that I've observed with state-of-the-art LLMs is that they're much better at planning a thing than doing the thing. This may seem very counterintuitive. But think of that one person that you know who is the ‘‘idea guy”. Elaborate ideas, much much lower skill in actual execution and seeing the thing through to the final form.

LLMs strike me as being similar. You see, when I try to use them for coding, they'll often make sensible overview suggestions, but I've noticed that they tend to flub hard on the specifics of complex code bases. It's the same feeling that I'm getting with the novel here. The outline looks good, the thought process is at least a decent approximation of intelligence. The end result leaves something to be desired.

Consider this exchange which happened at chapter 5.

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

Floods in Kandy? Particularly in this part of Kandy? Extremely unlikely. Landslides make sense, but great landslides of 93 and 07 don’t sit well: unless there's a whole mountain sliding off the shelf somewhere, we kind of don't refer to them like that.

If you know anything about Anthropic's Claude, it's that conversation limits will eventually get you. At some point I had to say the following:

```
 [!YUDHA]
 Give me a summary of all the events thus far and all the necessary character, plot and environment information for Claude to continue writing this book in a new chat
```

This gave me the following document:

```
 [!NOTE]
 # Monsoon Chronicles - Summary of Events and Elements
 
 ## Main Characters:
 
 ### Elliott Thorne
 
 - English writer who has purchased a former tea plantation in rural Sri Lanka (Galagedara)
 - Previously wrote urbane social commentaries about London life
 - Now attempting to write a book about sustainable agriculture and reclaiming colonial land
 - Struggling to adapt to monsoon conditions and local agricultural practices
 - Gradually becoming isolated and paranoid as his project fails and local suspicions mount
 - Has created raised garden platforms to combat flooding and diverted a stream for irrigation
 
 ### Vikram Jayawardena
 
 - Land Management Office official who becomes suspicious of Elliott
 - Meticulously documents evidence of what he believes is illicit cultivation
 - Previously investigated a Swiss-American couple growing marijuana in the Knuckles Range case
 - Devoutly religious, member of Pastor Fletcher's church
 - Increasingly obsessed with proving Elliott is engaged in illegal activities
 - Creates an elaborate evidence wall in his home office
 
 ### Dr. Nimal Fernando
 
 - Retired botanist who previously faced false accusations of illegal plant cultivation
 - Offers Elliott endemic plant species and traditional agricultural knowledge
 - Acts as a mediator and voice of reason
 - Has a deep understanding of local ecology and traditional practices
 - Provides Elliott with rare plant seedlings that thrive in monsoon conditions
 
 ### Lalitha Mendis
 
 - Local woman who helps Elliott with provisions and practical advice
 - Sister of the man who handled Elliott's property purchase
 - Has a successful garden using traditional companion planting methods
 - Offers Elliott wisdom about local practices that he initially dismisses
 - Represents traditional knowledge that contrasts with Elliott's Western approach
 
 ### Ajith Wickramsinghe and son Saman
 
 - Neighboring family with historical claims to the water Elliott has diverted
 - Family has political influence and generational ties to the land
 - Confronts Elliott about water rights violations
 - Saman is studying agriculture at university
 
 ### Pastor Thomas Fletcher
 
 - American expatriate who founded the Divine Truth Assembly
 - Preaches about foreign influences threatening traditional values
 - Has connections with Vikram and views Elliott as a corrupting influence
 - Church has grown from 20 to 200 members in seven years
 - Has divided families in the community with his message
 
 ### Councilwoman Priyanka Gunawardena
 
 - Local political figure who mediates the water dispute
 - Plays both sides for political advantage
 - Forms a water committee including Elliott, Vikram, Ajith, and Dr. Fernando
 - Has family connections to development interests in Colombo
 
 ### Inspector Rohan Perera
 
 - Local police officer who conducts a "welfare check" on Elliott's property
 - More measured in his assessment than Vikram
 - Requires substantial evidence before taking official action
 
 ### Priya Jayawardena
 
 - Vikram's wife who questions his growing obsession
 - Provides gentle perspective on his fixation with Elliott
 - Concerned about her husband's well-being
 
 ## Plot Development:
 
 ### Part One: Seeds of Ambition
 
 1. **Chapter 1: Arrival**
     
     - Elliott arrives during a brief break in monsoon season
     - Has grand visions for his property and book
     - Flashback to his literary agent's skepticism
     - Discovers tea processing shed is barely habitable
     - Meets Lalitha who warns about monsoon that he dismisses
 2. **Chapter 2: Local Bureaucracy**
     
     - Elliott visits Land Management Office for permits
     - Meets Vikram who scrutinizes his paperwork suspiciously
     - Elliott's vague mention of "experimental crops" raises suspicions
     - Witnesses argument between Vikram and Dr. Fernando
     - Meets Inspector Perera who mentions past problems with foreigners and drug cultivation
 3. **Chapter 3: Breaking Ground**
     
     - Elliott hires local workers who warn about soil conditions
     - Redirects a seasonal stream for his garden beds
     - Ajith Wickramsinghe confronts him about water rights
     - Heavy rain damages Elliott's first agricultural efforts
     - Solar power system begins failing from lack of sunlight
 4. **Chapter 4: Vikram's Suspicions**
     
     - Vikram reviews files of previous foreign drug growers
     - Creates detailed file on Elliott with maps and water usage
     - Attends church where Pastor Fletcher preaches about foreign threats
     - Observes Elliott's property during rainstorm and notes unusual structures
     - Discovers Elliott has received packages related to hydroponic equipment
     - Creates an evidence wall connecting Elliott to suspected illegal activities
 
 ### Part Two: Monsoon Tensions
 
 2. **Chapter 5: The Failed Crop**
     
     - Three months later, Elliott's gardens are in shambles
     - Unfamiliar insects and animals damage surviving plants
     - Elliott plans to build raised growing structures
     - Lalitha visits and offers to show traditional companion planting
     - Elliott reluctantly visits her successful garden but can't abandon Western methods
     - Tells his agent his book is progressing despite having written nothing
 3. **Chapter 6: The Power Problem**
     
     - Elliott's solar system completely fails during continuous rain
     - Applies for connection to the rural electric grid
     - Vikram intercepts application and conducts property assessment
     - Notices Elliott's unusual setup and takes photographs
     - Elliott becomes defensive about multiple outlets in his structures
     - After Vikram leaves, Elliott rearranges certain areas of his property
     - A letter from his agent asks for manuscript pages
 4. **Chapter 7: Village Talk**
     
     - Elliott visits Galagedara village during a break in the rains
     - At the tea shop, conversation stops when he enters; he overhears whispers
     - Meets Dr. Fernando who offers rare endemic plant species
     - They pass Divine Truth Assembly where Pastor Fletcher is leading a service
     - Dr. Fernando explains religious tensions in the area
     - Elliott returns home to find church pamphlets scattered on his property
 5. **Chapter 8: Official Welfare**
     
     - Vikram convinces Inspector Perera to do a "welfare check" due to landslide concerns
     - Elliott panics when he sees the police vehicle approaching
     - Gives rambling explanations about his failed crops and structures
     - Inspector finds nothing suspicious but notes Elliott's nervous behavior
     - Elliott begins writing paranoid notes about being watched
     - Vikram and Pastor Fletcher discuss their suspicions of Elliott
 6. **Chapter 9: Community Confrontation**
     
     - Village meeting called to discuss water management
     - Elliott hopes to resolve the dispute with the Wickramsinghes
     - Vikram publicly suggests Elliott may be depleting resources for illegal activities
     - Meeting erupts into arguments about water rights and colonial claims
     - Councilwoman Gunawardena mediates while playing both sides
     - A water committee is formed with Elliott, Vikram, Dr. Fernando, and Ajith
     - Walking home in the dark, Elliott becomes convinced he's being followed
 
 ### Part Three: The Deepening Deluge
 
 6. **Chapter 10: Surveillance**
     - Vikram's obsession grows with his elaborate evidence wall
     - Spends evenings watching Elliott's property with binoculars
     - His wife Priya questions his fixation but he dismisses her concerns
     - Attends church where Pastor Fletcher preaches about protecting the community
     - Documents Elliott's interactions with Dr. Fernando
     - Water committee meeting establishes framework for assessing competing claims
 
 ## Environmental Elements:
 
 ### Physical Setting
 
 - Galagedara: Rural Sri Lankan village with minimal tourist development
 - Former tea plantation (15 acres) with overgrown jungle reclaiming the land
 - Colonial-era tea processing shed that Elliott lives in, barely habitable
 - Monsoon season creating constant rain, flooding, and humidity
 - Multiple microclimates and soil types Elliott doesn't understand
 - Raised growing platforms Elliott builds to combat flooding
 - Diverted seasonal stream causing conflict with neighbors
 - Failing solar power system due to constant cloud cover
 
 ### Cultural Context
 
 - Colonial history providing backdrop for current tensions
 - Traditional water rights versus modern regulatory frameworks
 - Religious divisions between traditional Buddhism and evangelical Christianity
 - Complex social hierarchies and political alliances in the village
 - Traditional agricultural knowledge versus Western methods
 - Local suspicion of foreigners based on previous experiences
 
 ### Themes
 
 - Colonial legacy and its ongoing impacts
 - Cultural misunderstanding and assumptions
 - Environmental adaptation versus control
 - Traditional knowledge versus modern/Western approaches
 - Paranoia and isolation's psychological effects
 - Water as both literal resource and metaphor for power
 
 ## Next Chapters (Outline)
 
 ### Chapter 11: Elliott's Isolation
 
 - The monsoon intensifies, cutting Elliott off from the village
 - His writing becomes darker, focusing on persecution
 - A landslide damages part of his property and growing structure
 - Hallucinating from fever and isolation, believes locals sabotaged his land
 - Lalitha brings medicine but Elliott nearly refuses to let her in
 - Discovers his manuscript pages floating in flooded floor—has been writing but forgetting
 
 ### Chapter 12: The Concerned Alliance
 
 - Lalitha visits Dr. Fernando with concerns about Elliott's mental state
 - They discuss Vikram's surveillance and village rumors
 - Dr. Fernando reveals his history with British colonial authorities
 - They approach Councilwoman Gunawardena for help mediating
 - Meeting goes poorly due to cultural misunderstandings
 - They discover Pastor Fletcher and Vikram discussing "moral threats"
 
 ### Future Developments
 
 - The situation will escalate to a raid on Elliott's property finding nothing illegal
 - Unexpected discovery of timber smuggling operation at Pastor Fletcher's compound
 - Village reckoning about land use, religion, and exploitation
 - Vikram's crisis of faith and realization he was manipulated
 - Elliott's transformation and eventual integration with community
 - Eventual restoration of balance and understanding
 
 The writing style follows Reader's Digest Condensed Style Guide principles, focusing on clarity, conciseness, natural narrative flow, balanced sentences, and judicious detail. The approach is subtle rather than direct, showing character development and themes through specific details and actions rather than explicit statements.
```

This mostly worked, but the literary agent, in subsequent chapters, went from being “Margot” to “Martin”. Obviously a more sophisticated store of information could easily solve this problem; in fact you could do it easily via the API.

I do have to keep reminding Claude to be more subtle, with or without the style guide. It seems a little hardwired to make on-the-nose observations; show-don’t-tell in the middle, but lots of tell-don’t-show where you least expect it. 

Sometimes it slips into very formal language - all the dialogue starts to feel like a bunch of people from the LessWrong forums. Sometimes its corrections aren’t corrections, and it retreads the same patch over and over again (for this chapter, seven times).

But in the end, we do have a draft. And if cliched, that’s partly my fault.
# What Have We Summoned? 

My honest opinion is that this is a decent first draft. It sounds like it's a writer that's probably trying a little too hard, certainly someone who hasn't quite found their voice yet, but that's a lot of us starting out. 

There are things to fix. Yes, all the chapters have this curve towards a very forced cliffhanger, emblematic of a lot of less experienced writers. Yes, it could use an edit. Yes, these references to the great floods, while consistent, not entirely practical for this region. And, quite frankly, a lot of its ideas about how local governance seems to work in these places is some kind of fantasy that I have never really seen here. Also, Dr. Fernando at some point claims to have lived there for seventy years, which would put him well past retirement. There’s a whole colonialism-indegenous knowledge line that sounds about as subtle and as realistic as a glass hammer. The writing alternates between interesting touches, heavy-handed exposition and odd assumptions: no grace here, not yet.

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

Look at how much is done right here. Vikram wears rubber boots. He is suspicious of grow lights. All of these things that Eliot has brought over are atypical here: the zeitgeist is accurate. It's maintained its context of the conflict set up previously: the water issue with the Wickramasinghes. And *Infrastructure often reveals intention more honestly than verbal declarations* is not a particularly poetic line, but it does go hard.

Okay, it might go hard, with some editing.

But the amazement wore off quickly. Somewhere around the tenth chapter, that is to say, halfway in, my eyes were glazing over. I needed periodic coffee breaks and to go pet one of the cats. I put on my headphones and listened to Philip Glass for a while, just to take my mind to a slightly saner place.

Yes, the technology is amazing, but I'm reminded of something that supposedly happened during the filming of the Hobbit movies. Because of the Hobbit's reliance on CGI, Sir Ian McKellen, the extraordinary actor who plays Gandalf, was relegated to spending a great deal of his time in front of a green screen, separated from his co-stars for long periods of time. Here’s the [link to the story](https://www.express.co.uk/entertainment/films/1479651/lord-of-the-rings-ian-mckellen-gandalf-the-hobbit-broke-down-cried).
I’ll put the salient bit here:

*He said at the time: "In order to shoot the dwarves and a large Gandalf, we couldn't be in the same set. All I had for company was 13 photographs of the dwarves on top of stands with little lights - whoever's talking flashes up." 

*McKellen added: "Pretending you're with 13 other people when you're on your own, it stretches your technical ability to the absolute limits."*

*The saddened star added: "I cried, actually. I cried. Then I said out loud: 'This is not why I became an actor!'"*

I didn't cry, but I have to admit that a kind of terrible depression stole over me. Claude was cool, but ultimately it was doing everything that I enjoyed doing, the making of tiny decisions, the massaging of the story, solving problems, the following of characters through their eyes, and seeing new things about a world I had only half imagined before. And all of that was suddenly taken from me, hidden behind an unending series of requests. *Give me the next chapter.*

![]({{site.baseurl}}/images/vibe/3.png)

In doing this experiment, I felt that I had become less even than the AI. I have become a glorified copy-paste function. This is not why I became a writer.

# So can AI write a novel?

Can AI write a novel? The answer is yes. The answer is probably this book, this PDF that I have as proof. 

Here is the final product:

- [https://github.com/yudhanjaya/yudhanjaya.github.io/blob/main/pubshare/Monsoon%20Chronicles.docx](https://github.com/yudhanjaya/yudhanjaya.github.io/blob/main/pubshare/Monsoon%20Chronicles.docx)

- [https://github.com/yudhanjaya/yudhanjaya.github.io/blob/main/pubshare/Monsoon%20Chronicles.pdf](https://github.com/yudhanjaya/yudhanjaya.github.io/blob/main/pubshare/Monsoon%20Chronicles.pdf)



(Please feel free to do whatever the hell you want with it, by the way. So, I have done so little work that I claim absolutely no copyright, no involvement in the process. As far as I'm concerned, this thing is provided under the MIT license. AS-IS with no warranty of any kind. You can use it as inspiration; you can print it out and set it on fire if you want).

There is the general question of: is it a good book? Is this art? Here's where things get thorny. 

On one hand we can approach this through the lens of how it was made. The *how* involves understanding and critiquing the grinding gears of capitalism that led us here and saying hey, this is a content generation machine. It does not make art. 

I don’t want to go down the capitalism-is-the-death-of-art route. Mostly because it relies on the presupposition that art and business are somehow separate, despite every indication to the contrary (if you want supercorporate overlords, try publishing). That, in turn relies on this very bohemian notion of art being something that should be free from commercial claims, which was only ever true for a selected bunch of aristocracy and bored bourgeois amateurs slumming it pretending to be professionals. 

It also ignores how dumb we humans can be: most of what we consume today are not art, but business decisions, from movies and TV series on Netflix to IP novels to influencer marketing: in other words, *content*. Even among content, most of what we consume is utter garbage. It is not art in any form. (As you can see, I have my own strong thoughts on the matter). 

Or we can approach it from the perspective of looking at the text that we have on hand. If that's what you're going with, then this is a pretty decent first draft. 

The ending is awful, yes. The cliffhanger attempts are cringe. It seesaws wildly in tone sometimes. It's still better than most first-time novelists produce on the very first go. It is certainly better than I was when I was writing Numbercaste, my debut; I had to rewrite that novel a few times to make it remotely readable. It is feasibly something that a good writer can polish into a readable text - a 6/10 on IMDB, if you will.

Given the rate of progress, I expect that whatever OpenAI or Antropic have in stock has their next model update. We'll take this answer from “can be polished into a 6 out of 10” into a straight 6 out of 10, polish included. Depending on how sophisticated your pushing is, maybe a 7/10. Who knows. I don't know if AI will produce art - as in something truly weird and bizarre and original without significant human interaction - but this does bode ill for work that is firmly at the middle of the bell curve. 

As I've said before, and I'll say again, when you take a large amount of text and you train systems to find patterns, you are going to end up broadly moving towards the middle of the bell curve and staying there. If our experiment is an indicator, the middle of the bell curve is not only already here; it will be increasingly easier to achieve. 
# Closing thoughts

The true end result of this experiment is fascinating: I find in myself complete ambivalence to what I have created. I can acknowledge this as the building block of potentially something competent (with a lot of work to go). I don't hate it. I can certainly read it. And yet, outside the novelty of this experiment and the need to finish this post, I can't myself to actually care about it. Even the token amazement of *holy shit we've got this thing and we only really spent a day on it* has faded. I can’t even find enough interest to see if I can prompt it into better language. The only real interest I find is that I have a better answer next time somebody asks me this question.

This is odd, because my framing has been as a tool user. I come at this with a bias. I believe that humans are cyborgs and that we tend to integrate each piece of technology that we come across. I believe Garry Kasparov's thesis about human-AI hybrids, that is what I am interested in. Even so, when that hybrid nature tilts towards me doing almost nothing, and all my choices being made for me, I find myself being incredibly bored.

What's the point, anyway? An astute observer may say that I could have gotten here without all this work, and they'd be right. 

It's difficult to have a conversation about AI and writers right now. For obvious reasons: even if it weren't being pitched as an automation machine threatening livelihoods, there's the fundamental fact that the underlying training data for modern LLMs - the reason that they're getting increasingly better at tasks like writing a novel - is because their underlying training data does, indeed, contain novels. Almost the world's entire supply of them, if the research labs building these models have their way, and all of it is stolen.

Talking about AI, therefore, is sometimes like employing a thief. He’s broken into your home, and somehow everything he has learned in the act of breaking in is precisely what makes him useful to you. It's not an exact analogy, but it tracks.

But I always find it better to talk about things and to understand technology instead of blindly flailing away. The tech is here and even if AI research is stopped overnight, the models themselves are already open-sourced, they're already out there and can feasibly be run on everything from a phone to a laptop with varying degrees of competence. The genie, in short is out of the bottle. Governments were far too slow to understand and respond to the problems - and now those problems have propagated, turned into solutions; the good sold right back to the owners.

I've met quite a few writers who use AI as a sort of question and answer machine. Unless they’re using specialized tools (ie: Perplexity), these are unsophisticated users. I'm always very hesitant to use something like this without a base set of sources and documents underneath it, an approach that we call retrieval augmented generation, because largely AI are blurry oracles, if you will; searching Reddit has often provided a lot more useful results.

I think one layer of sophistication up from there are people who use this as a brainstorm partner. A lot of software engineers do this. I think a lot of other people in a lot of other jobs will do so as well over the coming months and years. A general-purpose mind a general understanding of nearly everything is too useful to pass upon. Instant critique and springboards for ideas are valuable things, even when they’re not delivered by human minds or experts. For more ideas, there’s a working paper from Harvard Business School that’s worth reading, linked below. 

One layer up from there is, I think, my general preference: turning AI models into specialized devices. One use case that I can think of right now is as a translator. I have been writing my own fictional languages for a while; and dare I say I’ve escaped the valley of being utterly rubbish at it. 

After designing the specification for one such language, I realized that if I write a translation guide and give that as a prompt to a large language model, it turns a large language model into a translator. And also if my spec is sufficiently detailed, I can give that to a large language model and provided there are references to existing alphabets and languages, I can derive a lexicon by plumbing the depths of the model, so to speak, and then carefully analyzing what I find. Something that might have taken me months or years to do is now a week’s worth of describing what I want in English. 

One more level of sophistication up from there is probably attempts to actually use this stuff to conjure books wholesale. 

Given our experiment here, this strikes me as eminently doable. In fact, everything I've done here is an incredibly amateur approach. Like I said, vibe coding. I haven't optimized prompts. I haven't built any kind of serious programming infrastructure to automate this process. And I know for a fact that there are companies and individuals, some of them with pots of money, that at least seem to want to do this. If my hackneyed set of attempts here can give you something that is first draft-esque, then you can bet your bottom dollar that someone else has already figured out a way to do it and make it nearly indistinguishable from anything else you've read. Heck, I can imagine an easily-made programmatic loop where one model generates, the other critiques - and sends back to the generator with instructions (in effect, using two models in a fashion similar to how a GAN works internally).

Do I want AI writing my novels for me? No. There are two reasons why:

1) **Broad-spectrum ethics:** it’s one thing to see how far something can go as an experiment. It’s another thing to use a piece of technology this way. See the thief analogy. 
   
2) **Personal enjoyment**: I am very fortunate in that I don't write for money. I like making money, but I'm at a position where I can write the stuff that I want and then that stuff makes money for me. Now, that may not be the best way of making money, but it's the best way of doing what I enjoy. Take that away from me and give it to Claude, and I don't really see a point of living. I go back to my curious observation of being utterly bored by what I've just produced here.

However, I can guarantee you that this is going to happen. I remember how I first felt when I discovered that the Nancy Drew and the Hardy Boys books were not written by individuals but were actually commercial intellectual property churned out by a stable of work-for-hire writers. 

The stables still exist. If anything, they've just gotten a lot more sophisticated. The incentive still exists. 

At least I now have an updated answer. What took some nudging today might take only a few sentences tomorrow. If you want to imagine the future, all you need is a few ideas . . . and enough boredom to copy paste into a word document, forever.


# Further reading

Interesting stuff is hard to find. Most people working in tech seem to have no understanding of psychology, and vice versa. There’s a lot of hype, there’s a lot of fear, uncertainty and doubt, there’s certainly going to be a lot of lawsuits, and there are a lot of people cashing in on all these things. 

1. [Gwern Branwen’s essay](https://gwern.net/index)s are always worth reading
2. [AI 2027](https://ai-2027.com/). Good stuff. Terrifying. Very plausible.
3. Ethan Mollick has been increasingly [exploring (and evangelizing) the hybrid human-AI mode of interaction.  ]( https://www.oneusefulthing.org/p/the-cybernetic-teammate)
4. Edward Newton-Rex, who not only articulates all the issues on copyright, but actually fights them. [Ed Newton-Rex](https://ed.newtonrex.com/) is his site, but Twitter is the best place to follow him. 
5. Robin Sloan, one of the pioneers in this particular niche, has a great essay: [Is it okay?](https://www.robinsloan.com/lab/is-it-okay/) 




