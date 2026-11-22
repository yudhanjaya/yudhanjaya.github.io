---
title: "Honey, We Have Claude at Home"
parent: Experiments
nav_order: 5
tags: [experiments]
date: 2026-11-22
image: "/assets/images/experiments/local-llms-experiments/featured.png"
excerpt: "Running large open-weights language models on my own hardware, off-grid in Sri Lanka: the models that work, the engines that run them, and how to set it up yourself."
---

# Honey, We Have Claude at Home
{: .no_toc }

*or running local llms on your own hardware*

Listen. There are broadly three positions around AI today:

1. Large, venture-capital funded AI corporations (led by some bizarre Silicon Valley combination of mathematicians, philisophers, engineers and prostitutes) should be allowed to reshape the world and make humans obsolete. Oh, and they should make a lot of money in the process by selling you intelligence as a subscription service.
2. AI drains water, steals intellectual property, makes artists and polar bears unhappy, will make humans obsolete, doesn't have a soul, and should be destroyed
3. And the third: if AI has been built out of the sum total of human achievement - especially language - then it should be available to all, free and open source, a tool that levels the playing field. We should have world-class AI running on our own hardware, not siphoning our data off somewhere.

I am of the third opinion. I am not here to convince you of my opinion: I am here to show you how to do it. 

Thanks to the open source movement, we are at a state of affairs where very competent AI can be run on my own machine. 

**On this page:**
- [Quantization](#quantization)
- [The engines](#the-engines)
- [Models](#models)
  - [Expensive but not worth it](#expensive-but-not-worth-it)
  - [Runs if you have 16 GB VRAM and over 60 GB RAM: worth trying](#runs-if-you-have-16-gb-vram-and-over-60-gb-ram-worth-trying)
  - [The Goldilocks zone](#the-goldilocks-zone)
  - [Runs fast](#runs-fast)
  - [Runs on a laptop with a GPU or old desktop](#runs-on-a-laptop-with-a-gpu-or-old-desktop)
  - [Runs on a potato](#runs-on-a-potato)
- [How do I set this shit up?](#how-do-i-set-this-shit-up)

***

This is Leviathan. 

{% include image.html image="/assets/images/experiments/local-llms-experiments/leviathan-specs.png" caption="Leviathan, neofetch." %}

Leviathan is my PC for work, gaming, etc. It started out as a Ryzen 5800 X3D with a Radeon 5700 XT. Over the years, I've added bits and pieces. 

{% include image.html image="/assets/images/experiments/local-llms-experiments/leviathan-desk.png" caption="Leviathan, on the desk." %}

As it is, some things are 'old': my RAM is DDR4, at 3200 Mhz. My 3080 (bought secondhand) is on the x4 slot. I have one 512 GB NVME, also bought secondhand. My GPUs are power-limited to 220w, because that 3080 can really spike and cause headaches for my 1000-watt Corsair power supply.

It is, as far as these things go, a good machine - but nowhere near the top of the line, and a generation or two of hardware behind. 

But after some tinkering, and after many sleepless nights benchmarking, here are the local AI models I have on disk and their speeds, at a context window of 128,000. 

| Model                                                        | Params (total / active)              | Engine                | GPU         | Decode (tok/s)          | Prefill / decode on long prompt (88K) |
| ------------------------------------------------------------ | ------------------------------------ | --------------------- | ----------- | ----------------------- | ------------------------------------- |
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) [Maya-XS](https://github.com/mw00/project-maya)                                        | 321B / 18B                           | [Maya](https://github.com/mw00/project-maya) 1.1.73           | 4080 + 3080 | 20.7 code / 23.6 prose  | 729 / 9.7                             |
| [Hy4-Flash](https://huggingface.co/tencent/Hy4-flash) [Maya-XS](https://github.com/mw00/project-maya)                                            | 220B / 12B                           | [Maya](https://github.com/mw00/project-maya) 1.1.73           | 4080 + 3080 | 33.3 code / 26.2 prose  | 100 / 21.6                            |
| [Qwen3.8 Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) IQ3_S                                     | 125B  / 6B                           | [PolyStrata](https://github.com/VecSzn/PolyStrata)            | 4080        | 70.4                    | 1,644 / 45.1                          |
| [Swift 1.5](https://huggingface.co/ukisai/Swift-1.5-Qwen3.8-Flash-Next-GSQ-RCO-GGUF) IQ2_XS ([Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next))                        | 125B / 6B                            | [PolyStrata](https://github.com/VecSzn/PolyStrata)            | 4080        | **141.9**               | 3,098 / 67.3                          |
| [Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) Q4_K_M                                        | 124B / 5.1B                          | [PolyStrata](https://github.com/VecSzn/PolyStrata) fork       | 4080 + 3080 | 47.3 code / 53.5 prose  | 733 / 20.0                            |
| [Flint 40B-A2.5B](https://huggingface.co/RecursiveSI/flint) UD-Q4_K_XL                                   | 40B / 2.5B                           | [PolyStrata](https://github.com/VecSzn/PolyStrata)            | 4080        | 111.6 (cold 72.8)       | 3,214 / 62.7                          |
| [MiniCPM-V 4.7](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B) Q4_K_M                                         | 35B / 3B                             | [PolyStrata](https://github.com/VecSzn/PolyStrata)            | 4080        | **172.1** (cold 103.1)  | 3,175 / 86.9                          |
| [Muse Glimmer](https://huggingface.co/meta-models/Muse-Glimmer-30B) UD-Q4_K_XL + DFlash draft                       | 29.6B dense                          | [llama.cpp](https://github.com/ggml-org/llama.cpp) (Hy4 build) | 4080 + 3080 | **135.3**               | 2,040 / 83.1                          |
| [Swift 1.5](https://huggingface.co/ukisai/Swift-1.5-Qwen3.8-Flash-Next-GSQ-RCO-GGUF) [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) Uncensored (2.09 bpw), `--preset 10dense` | 27B dense                            | [llamAmpere](https://github.com/JakeATX/llamAmpere) 0.7.2      | 3080        | 82.3                    | 348 / 34.4                            |
| [Inkling 2 Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini) UD-Q4_K_XL                                    | 26.2B / 3.4B                         | [maya-ik2](https://github.com/alesha-pro/maya-inkling-mini)              | 4080        | 42 code / 69 prose      | ~2,900 / n/m                          |
| [DeepSeek-V4-Pro-Qwen3.5-9B](https://huggingface.co/Jackrong/DeepSeek-V4-Pro-Qwen3.5-9B) Q5_K_M                            | 9B                                   | [llama-serve](https://github.com/ggml-org/llama.cpp/tree/master/tools/server)           | 3080        | **163.8**               | 2,167 / 60                            |
| [SenseNova-Loop-9B](https://huggingface.co/sensenova/SenseNova-Loop-9B) Q5_K_M                                     | 9B                                   | [llama-serve](https://github.com/ggml-org/llama.cpp/tree/master/tools/server)           | 3080        | 44.4                    | 536 / 24.0                            |
| Lev Q8_0 (decision model)                                    | ~4B (est. from the 4.5 GB Q8_0 file) | [llama-serve](https://github.com/ggml-org/llama.cpp/tree/master/tools/server)           | 3080        | n/a (86 ms per request) | n/a                                   |
| [LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B) Q8_0                                            | 2.17B dense                          | [llama-serve](https://github.com/ggml-org/llama.cpp/tree/master/tools/server)           | 3080        | **215.5**               | 11,980 / 183.0 (29K)\*\*                |

1] This config trades speed for RAM: I stream a compiled experts.bin table on disk
\*\*[LFM3-Omni](https://huggingface.co/LiquidAI/LFM3-Omni-2B)'s prefill was measured at about 29k tokens, near its 32K maximum.

And if you look at the RAM they're taking up (private means the model absolutely holds it, mapped means it's streamed from disk and held, but can be booted off if the OS needs some memory), we are being *remarkably efficient*. I've tweaked things so I can run Chrome, Obsidian, and - in some cases - even game on my primary GPU while the model does some work in the background. 

| Model                             | RAM GB (private + mapped: ) |
| --------------------------------- | --------------------------- |
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) [Maya-XS](https://github.com/mw00/project-maya)             | 53.0 pinned + 5.1           |
| [Hy4-Flash](https://huggingface.co/tencent/Hy4-flash) [Maya-XS](https://github.com/mw00/project-maya)                 | 2.6 + 48.4                  |
| [Qwen3.8 Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) IQ3_S          | 2.3 + 43.8                  |
| [Swift 1.5](https://huggingface.co/ukisai/Swift-1.5-Qwen3.8-Flash-Next-GSQ-RCO-GGUF) IQ2_XS                  | 35.3 + 0.2                  |
| [Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) Q4_K_M             | 2.3 + 57.8                  |
| [Flint 40B-A2.5B](https://huggingface.co/RecursiveSI/flint) UD-Q4_K_XL        | 0.6 + 18.1                  |
| [MiniCPM-V 4.7](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B) Q4_K_M              | 0.8 + 13.8                  |
| [Muse Glimmer](https://huggingface.co/meta-models/Muse-Glimmer-30B) UD-Q4_K_XL + DFlash  | 2.2 + 0                     |
| [Swift 1.5](https://huggingface.co/ukisai/Swift-1.5-Qwen3.8-Flash-Next-GSQ-RCO-GGUF) [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) (10dense)   | 2.4 + 0.2                   |
| [Inkling 2 Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini) UD-Q4_K_XL         | 7.6 + 10.4                  |
| [DeepSeek-V4-Pro-Qwen3.5-9B](https://huggingface.co/Jackrong/DeepSeek-V4-Pro-Qwen3.5-9B) Q5_K_M | 0.5 + 0.8                   |
| [SenseNova-Loop-9B](https://huggingface.co/sensenova/SenseNova-Loop-9B) Q5_K_M          | 0.7 + 0.8                   |
| Lev Q8_0                          | 0.3 + 0.8                   |
| [LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B) Q8_0                 | 0.5 + 2.0                   |

***

In other words: holy shit! 

Claude, via the desktop app, usually doles out its tokens at somewhere between 60-80 tokens per second. Thanks to the open source movement, open weights releases, a lot of clever people and some monkeypatching on my end, I have a few *really large* AI models running *locally* at speeds that range from respectable for the size to blistering fast. 

All of these models are smarter than ChatGPT when it released. Ignoring the two 9B models, which I keep out of novelty, all of these are "smarter" than GPT-4 (2023). The biggest on the list are somewhere around Claude Opus 4.5 (November 24, 2025) for smarts, possibly tying with today's Claude Haiku models. 

Now, there are different types of intelligence - with AI models and with people - and I'm not going to claim that I've got a drop-in replacement for Claude Opus 5.5 here. I'm using heavily quantized versions of the models and I've set things up for my own use cases, hardware, preferences and standards. 

But - ahem - we are running models that would give 2025's paid Claude and GPT a good run for their money. I'm doing this on a computer that is, admittedly, impressive, but not earth-shakingly expensive the way top-end GPUs and those Ryzen AI miniPCs are. And of course, because I'm on offgrid solar, my energy is practically free. 

Can they solve the Reimann hypothesis? Probably not, and neither can I. Can (and have) they diagnosed systems, power issues, drivers, written GNOME shell extensions? Can they take this post, written in my Markdown editor, and update my website for me? Can they pilot hundreds of automated tests against code I cook up, to make sure I haven't broken anything? Can I get them to where I need to be, with the application of agent harnesses and steering and skills? 

Absolutely. 

Can I now provide some reasonably informed opinions on what's good and what's not, and how to set this stuff up for yourself? 

Yes. Let's begin. First, a brief bit of backstory:

## Quantization

I first came across the idea when Tim Dettmers was working on the [bitsandbytes](https://github.com/bitsandbytes-foundation/bitsandbytes) library. The idea was that an AI model's weights - ie: its neurons - were represented in 32 or 16 bits, but they didn't need to be.

As far back as 2015, Dettmers was working on this stuff: there's a paper called "8-Bit Approximations for Parallelism in Deep Learning," where he shows that you could compress 32 bits into 8 without meaningfully degrading the performance of a model. BY 2021, he was taking the idea one step further, showing off 8-bit versions of stuff usually thought to need a full 32-bits; less memory, same performance. 

Eventually he made these ideas accessible to people like yours truly by building, a [PyTorch](https://github.com/pytorch/pytorch) library for *quantizing* models. The basic idea is packing model weights into smaller capacities, thus making local AI . . . possible. It's like folding your laundry to pack it in a smaller bag. 

This idea, obviously, has been embraced by those of us who want to run and tune models locally. People started pushing the quantization further. Contributors like TheDude and Bartowski and Unsloth started quantizing and releasing anything and everything they could get their hands on. 

Today, specialist outfits like the [IST Austria Distributed Algorithms and Systems Lab](https://huggingface.co/ISTA-DASLab) have come up with ingenous methods of quantizing immense models - hundreds of billions of parameters large - into filesizes that can actually fit on a hard drive in ways that can be actually loaded into RAM.

This is relevant because everything we're going to run is locally is quantized. Quantized models, or quants, come in various flavors. By far the most commonly recommended are IQ4 and Q4 quants - 4-bit models that don't deviate much from original behaviour - but very large models often can get away with, and indeed *require* 2-bit, 3-bit, and sometimes even 1-bit quantizations on certain weights. 

These models are large files that are then loaded onto your GPU, RAM and CPU by . . . 

## The engines

In there beginning there was Georgi Gerganov. Gerganov looked out at the world, and said, *let there be [llama.cpp](https://github.com/ggml-org/llama.cpp)*.

Well, perhaps it didn't quite happen that way.

An inference engine is what runs AI models on your hardware. There are quite a few of these buggers out there, but three show up consistently in the run-your-own world of consumer hardware:

- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [VLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)

These three approach the problem (get AI running on your hardware) in different ways. 

[llama.cpp](https://github.com/ggml-org/llama.cpp) wants to work on as many different types of hardware as possible: your Intel CPU, your NVIDIA GPU, you Macbook, and so on. It has its own file format, .gguf, designed for quantized models. And because it set out to make things accessible, ggufs have become an incredibly popular way of storing and running models.

[VLLM](https://github.com/vllm-project/vllm) is built for high-throughput production settings. That is to say: if you have lots of NVIDIA GPUs, and lots of different users hitting them consistently, [VLLM](https://github.com/vllm-project/vllm) was built for that.

[SGLang](https://github.com/sgl-project/sglang), is, as far as I can figure out, built for NVIDIA GPUs and TPUs but for long context and agentic work: that is, stuff where the same prompt (*you are a good assistant. you will do your best for the user. here's 60,000 words of guardrails*) come in quite often.

And then there are the offspring of [llama.cpp](https://github.com/ggml-org/llama.cpp):

- [Koboldcpp](https://github.com/LostRuins/koboldcpp)
- [Strata](https://github.com/Niko1221/Strata)
- [Pulsar](https://codeberg.org/PrivateLocalAI/pulsar)
- [Dwarfstar](https://github.com/antirez/ds4), aka [ds4](https://github.com/antirez/ds4)
- [Radiance](https://codeberg.org/StillDeadcode/radiance), for AMD GPUs
- [Ninfer](https://github.com/Neroued/ninfer)

And the children of [Strata](https://github.com/Niko1221/Strata): 

- [Basalt](https://github.com/jesdga95/basalt)
- [PolyStrata](https://github.com/VecSzn/PolyStrata)
- [Maya](https://github.com/mw00/project-maya)
- [Xolotl](https://github.com/Indras-Mirror/Xolotl)
- [Avalon](https://github.com/freriadoc/Avalon)
- [Yasakani](https://github.com/yasakani-dev/yasakani)

And things that use llama underneath, sort of wrapping away the complexity:

- [LMStudio](https://lmstudio.ai)
- [Ollama](https://github.com/ollama/ollama)
- [Unsloth Desktop](https://github.com/unslothai/unsloth)
- [Lemonade](https://github.com/lemonade-sdk/lemonade)
- and a million others.

I'm sure I've missed several here. In fact, shout out: my own [Shoggoth](https://github.com/yudhanjaya/Shoggoth) builds on [llama.cpp](https://github.com/ggml-org/llama.cpp). We live in a world where I check Twitter and there's a new engine. I myself have contributed in some minor ways to some projects.

In the interests of sanity, I'm going to put a pin in it. I am not going to make an empirical list of all engines.

I'm going to lean towards whatever runs at a decent quality *the fastest and with the least amount of fuss* at this time on the hardware I have access to. I'm also going to bias towards [llama.cpp](https://github.com/ggml-org/llama.cpp) derivatives, because my purpose here is to show you how to run local models on your own computer for yourself, not to set up a datacenter.

Last, I'm going to gravitate towards engines that have active development and users and a community. 

I expect this post to be 'outdated' tomorrow when the next Claude-powered savant releases the next engine that runs something 10 tps faster, but I'm reasonably confident that the engines I've listed here will find updates percolating towards them . . . 

at least for the next six months. It's possible to work yourself into a kind of mad ADHD flow state if you try to keep track of all of this stuff all the time. After all, given how cheap inference has become, we've got engineers all over the world hacking away on these problems. Instead, after months of testing, I'm choosing to end my explorations for the moment.

## Models

So. That's the backstory covered. Currently, we have several big models at our disposal. 

### *Expensive but not worth it*

- [Kimi K3.1 Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)
- [Mistral Large 4](https://huggingface.co/unsloth/Mistral-Large-4-1T-A52B-GGUF)
- [Inkling 2 Small](https://huggingface.co/thinkingmachines/Inkling-2-Small)
- [Mimo Flash](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)

There's not a lot of effort being put in to make these usable on ordinary hardware. There's a good reason for that. I always test models via subscription, and at current subscription rates, these models simply aren't competitive. They're neither small enough to run locally, nor fast enough, nor cheap enough, nor powerful enough to have any kind of decisive advantage over the current reigning subscription kings - Anthropic's Claude, OpenAI's GPT, and Google's Gemini models. 

I have to single out [Mimo](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) here. It's a model that's been showing up well on benchmarks, but use it and you'll realize it's benchmaxxed. It's the equivalent of a student who can ace an exam but is totally mid outside it. 

### *Runs if you have 16 GB VRAM and over 60 GB RAM: worth trying*

- [Deepseek 4](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) and [4.1](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
- [GLM 5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)
- [Hy-4](https://huggingface.co/tencent/Hy4-flash)
- [Minimax M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)
- [Ling 3.0 Flash](https://huggingface.co/inclusionAI/Ling-3.0-flash)

Now we get to the interesting stuff.

All of these model are, I would say, slightly better than Claude Opus 4.5 (November 24, 2025). They are not as good as Claude Opus 5.5, Gemini Neon, or the GPT Astra-Luna-Sol combo. In fact, I dare say that the two most popular models on this list [Deepseek 4.1](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) and [GLM 5.3 Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) - almost tie with Claude Sonnet 5.5, but the keyword is *almost*. 

My test for their competence is a harness / engine that takes a [NetLogo](https://github.com/NetLogo/NetLogo) economic simulation, converts it to Typescript, checks for 1:1 parity between outputs, works with the user to download real geographical data from OSM, visualizes it as a simulation of the economic model - think SimCity style - and produces an interactive HTML economic sim complete with places, people, dashboards, and adjustable policy levers. This is a fairly challenging task, and Sonnet, Deepseek and GLM all manage very similar outputs.

They're really quite good. Many of them are made to work in engines like [Maya](https://github.com/mw00/project-maya) by storing an engram table separately and/or streaming weights between the drive your store them on, your RAM and your GPU. This is the Claude at home tier. They are efficient, which is why you find them cheap and fast on, say, OpenRouter, OpenCode GO, or Command Code. It's clever optimization on the parts of both the labs and engineers producing the models *and* the engineers building inference engines.

They are not going to be very fast unless you've got some serious hardware, like RTX 6000s (plural) and great servings of DDR5 RAM. 

I've got 64 gigs of RAM and am barely past that 24 GB VRAM limit - albeit with a bottleneck; two cards, one much slower than the other.  On my hardware, I'm happy to get 30 tps. This is just under half the speed of a subscription; this to me is acceptable. 

Not all models are made alike. [Deepseek 4.1](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) gave me a whopping 10.3 tps, 12 if I prayed. [MiniMax M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3) [Maya-XS](https://github.com/mw00/project-maya) IQ1_S (93 GB) gave me 2.9 tok/s at 128K and sent my system thrashing between swap and RAM. I couldn't even finish benchmarking it.

[Hy4](https://huggingface.co/tencent/Hy4-flash) runs, but at abysmal prefill speeds - so it takes a long time to read anything. These are models that benefit from beefier GPUs and more RAM, so if you have a 4090 or a 5090 and 128 GB of RAM - go for it!

GLM and Ling, with some patches and custom code (which I contributed upstream to [PolyStrata](https://github.com/VecSzn/PolyStrata)) do much better for my hardware. 

What can you do with these models?  Here are my observations:

- At these speeds, these are not the kind of models I would personally use for chat or data extraction tasks. These are the kind of models that are best used for code, where I write a detailed markdown file explaining what I want done and *how*, point them at it, and let them grind overnight. For example, [GLM 5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) built the utility I use to serve, store and configure models - a front-end for multiple engines, if you will. 

- They make for good orchestrators of smaller models. This is where a big, intelligent model holds the spec and directs smaller, faster models to do the token-burning work of getting shit done. Unfortunately, there's a problem: they do require pretty much my entire system's resources, so there's no space for a smaller, faster model, save for the speech-to-text model that I use when my hands hurt (multiple injuries, long story).

  Thus, given the system I'm running, it often makes more sense to have a $10 subscription that gives me access to these models and to let them shepherd smaller models to do complex tasks.

- The quantization doesn't matter much. There is a sort of general belief in the local LLM community, particularly on Reddit, that 2-bit and 3-bit quants are worthless. These observations are born out of the early days of model quantization, when quantization was not as developed an art as it is today. At present, what most benchmarks will tell you is that an IQ2 quant deviates by this many points from the full model, and that IQ3 holds at 100%, and IQ4 is the place where you don't really have any meaningful deviation. 

  But this does not, in my experience, translate well into everyday use, because modern quantization methods don't uniformly downgrade all model weights equally. Today's quants are non-uniform: some weights are smaller than others. In my experience, the choice of agent and harness - ie: the software you slap on top of a model - matters more for these large models than the gap between quants. 

### *The Goldilocks zone*

Now here we come to [Qwen 3.8 Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next). 3.8 Flash-Next was released as a preview of the Qwen 4 architecture, which as of this moment we are still waiting for. The [IST Austria Distributed Algorithms and Systems Lab](https://huggingface.co/ISTA-DASLab) figured out how to quantize this model in such a way that it could be efficiently fitted in under 150 gigabytes without completely lobotomizing it.

A Slovenian engineer called Niko Veit figured out how to get this running on consumer hardware: that is GPUs like a 3060 with 12 gigs of VRAM. By heavily modifying [llama.cpp](https://github.com/ggml-org/llama.cpp), he created a project called [Strata](https://github.com/Niko1221/Strata). 

And thus was born [Strata](https://github.com/Niko1221/Strata) and its many children, as others began to extend the work.

I have two [Qwen 3.8 Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) models running. The Swift IQ2 version is extremely fast. The IQ3 version is under the 100 tokens per second line, but is a) competent and b) a great benchmark to measure other models against. My particular IQ3 version is slower because I've made the choice to compile its experts into a separate 50 GB file and stream them from the NVMe. 

This means it only takes up something like two gigabytes of my RAM, leaving my computer responsive when I'm running it. Needless to say, this is a fantastic boon: now I can have at least a dozen Chrome tabs open and a Gamer's Nexus video running while [Qwen 3.8 Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) works in the background.

[Qwen 3.8 Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) can be run on as a 12 GB 3060 with as little as 16 gigs of VRAM if you have an NVME drive. A great person to follow for this kind of stuff is an Indian guy called Codacus on YouTube.

There is another model in this space, called [Edge-0](https://huggingface.co/Edge0/Edge0-145B-q3k). I haven't tried it. If you have, let me know.

### *Runs fast:*

Here we get into interesting turf. I have, on the menu:

- [MiniCPM-V 4.7](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B)
- [Muse Glimmer](https://huggingface.co/meta-models/Muse-Glimmer-30B) + DFlash draft
- [Swift 1.5](https://huggingface.co/ukisai/Swift-1.5-Qwen3.8-Flash-Next-GSQ-RCO-GGUF) [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)
- [Inkling 2 Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini)
- [Flint](https://huggingface.co/RecursiveSI/flint)

Let's talk over these choices. [Mini-CPM](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B) is my preferred pick over [Qwen3.6 35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B), a darling of the local LLM community. That's because mini CPM is slightly better at Quen 3.6 at many tasks; it is fast; and it is an excellent vision-understanding model for its size. 

If you've used, say, the Google Gemini app, which comes on most Android smartphones now, [Mini-CPM](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B) is essentially a faster, better at-home replacement. If you want an agent on your computer that does stuff like handle a journal, organize files for you, summarize documents, diagnose issues with your computer . . . [Mini-CPM](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B) is my pick. 

Then there's [Swift 1.5](https://huggingface.co/ukisai/Swift-1.5-Qwen3.8-Flash-Next-GSQ-RCO-GGUF) [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) . [Qwen3.8 27B](https://huggingface.co/Qwen/Qwen3.8-27B) is a dense model that, ever since its release, has been acknowledged as neurotic but superb programmer for its size, occasionally more reliable than the bigger [Qwen 3.8 Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next).

Unfortunately, for the longest time, it was slow. It is still slow - on large prompts, it does *worse* than models many times its size - but that's because I've been able to offload it to my 3080. If you want an excellent coding support in your IDE, this is what I'd look at. In fact, that's what I use it for. 

[Muse Glimmer](https://huggingface.co/meta-models/Muse-Glimmer-30B) was my alternate pick. It is a dense model, designed to compete with [Qwen 3.6 35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) and the newer [Qwen 3.8 27B](https://huggingface.co/Qwen/Qwen3.8-27B). It's better at agentic tasks - for example, it can go out and fetch you 4K wallpapers for your desktop, handle your calendar, and use tools for you. And, best of all, it is relatively fast *if you have GPU space for it*. 

Notice how I use the past tense: and that's because Thinking Machines recently dropped [Inkling 2 Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini), a looped transformer model. In the morning, when I first started writing this article, I was patching [llama.cpp](https://github.com/ggml-org/llama.cpp) to make it run above 20 tokens per second. By the evening, someone had released a modification of the [Maya](https://github.com/mw00/project-maya) engine that gave it insane pre-fill, making it a viable replacement for [Qwen 3.8 27B](https://huggingface.co/Qwen/Qwen3.8-27B).

Looped transformers are interesting. The classic way of making a model smarter has been to stack more layers. This is a A 26B multimodal model looping shared layers to pack more effective "smarts" in a very small data footprint: it's a neat and efficient trick. And the more I use Inkling, the more I like it. 

And then there's [Flint](https://huggingface.co/RecursiveSI/flint). [Flint](https://huggingface.co/RecursiveSI/flint) from Recursive Machines had quite a bit of hype around it, as it was meant to be a local coding model. I'd rate it above MiniCPM for coding, but honestly, I keep it here as a benchmark. There are other choices.

Generally, this is where you have to consider use case carefully. Do you want coding? If so, [Qwen 3.8 27B](https://huggingface.co/Qwen/Qwen3.8-27B) and some derivative thereof. Do you want something that can understand images? For example, using a webcam or doing OCR or identifying photos? If so, [Mini-CPM](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B). Do you want a general agent that will handle calendar, calendar, emails and so on? If so, [Muse Glimmer](https://huggingface.co/meta-models/Muse-Glimmer-30B) is actually very good.

If you there are other synergies to consider if you're an advanced user. For example, all of these are models that can run locally if they are being orchestrated well by a larger model. If you're pairing, say, a DeepSeek subscription, you might get mileage out of any of these depending on what you're trying to do, so it might be worth having them around.

Why bother with models with this degree of overlap? Well, the simple reason is that writing style matters to me.

Qwen, as I have said many times, is extraordinary competent, but I am deeply, deeply annoyed by how it explains things. It is very clearly distilled from Claude, but combined with that distinct Qwen neurosis, where it thinks, second-guesses itself, third-guesses itself and then somehow arrives at the correct answer . . . look, there's only so much testing I can do before it drives me up the wall. 

Inkling, on the other hand, has a far more natural style. And so I when doing something like examining the [PolyStrata](https://github.com/VecSzn/PolyStrata) codebase, it is easier for me to follow the technical explanation, and to contribute, and not be misunderstood. I value this kind of stuff over pure code benchmarks, because if I understand something well enough, I can always go in and tinker with it and fix it myself. I can't if I am forced to read several thousand words of irrelevant slop before I get to the meat of the matter.

And again, some general observations:

- Unlike the larger models, quantization does matter here. There's only so much trim, after all.
- Intelligence among these models tend to be spiky. Unlike the larger tier where almost anything can be worked around with an agent and skills and just enough of the model bashing its head against the wall . . . these are more specialist, if you will.
- I expect to see interesting developments in this space, especially from the Chinese labs. The race to the top is dominated by labs with access to serious compute. The race to *efficiency,* however, makes enormous strides in this section.

### *Runs on a laptop with a GPU or old desktop:*

Let's say you have an old-but-respectable machine, like my Xeon with the 1080s, or a laptop with 16 GB of RAM and not much else. My default answers are:

- [Qwen 3.6 35 A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B). 
- [Gemma 4 26B A4B QAT](https://huggingface.co/google/gemma-4-26B-A4B-it-qat-q4_0-unquantized). 
- [LFM 2.5](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B) if those are too slow for you. 

Qwen is an absolute all-round champion for the size.

Remarkably good, as it turns out, at steering Linux: on a friend's computer, after I gave it three pages of "try this, then this, and if this fail, try this instead" instructions, it managed to set up and configure two Radeon VII cards, compile [Strata](https://github.com/Niko1221/Strata) for these Radeons (no easy task if you're familiar with them), download [Qwen 3.8 Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next), and essentially bootstrap that machine into a higher tier of intelligence. 

As for [Gemma](https://huggingface.co/google/gemma-4-26B-A4B-it-qat-q4_0-unquantized), think of this as Gemini Flash - you know, the free version - running on your computer. It is a good programmer? No. But it is, coupled with web search, a great little assistance, and I always found that the [Gemma](https://huggingface.co/google/gemma-4-26B-A4B-it-qat-q4_0-unquantized)'s writing annoys me less than the Qwen series. 

LFM is blazing fast, and does well at little agentic tasks. For example, it can totally find wallpapers for you. However, a caveat. LFM, in my testing, has not been good past the 32k context window. 

There's a whole slew of benchmarks I haven't posted here (I will, as an addendum) but it's not too impressive in the needle test.

The needle test is where you hide a piece of information - the proverbial needle in a haystack 0 and ask the model to retrieve it. LFM was able to find the needle at 11,000 tokens. It was able to find the needle at 32k, but at 88k, it simply couldn't. So, as fast as it is, don't expect to be able to digest an entire physics textbook and recall perfectly the answer to a specific problem. 

I personally find [SenseNOVA Loop 9B](https://huggingface.co/sensenova/SenseNova-Loop-9B) is another interesting model. Like Inkling, it is a looped transformer; but practically, it's a little too slow, and more a proof on concept of what this space could be.

As for stuff like [DeepSeek V4 Pro Qwen 3.5 9B](https://huggingface.co/Jackrong/DeepSeek-V4-Pro-Qwen3.5-9B) . . . don't bother. I keep it around as a benchmark, because this really is what small models used to be.

Remember when people over Twitter were cheering because they got "[DeepSeek R1](https://huggingface.co/deepseek-ai/DeepSeek-R1) running on a laptop"? What they were actually running was a small Qwen model with [Deepseek R1](https://huggingface.co/deepseek-ai/DeepSeek-R1)'s model traces used to train it further. This particular Qwen tune continues in that tradition. 

These kinds of models are roughly as good as early ChatGPT - which is to say, probably impressive if you're the sort that needs little nonsense affirmations on a daily basis, but a waste of compute to anyone who actually has work to get done.

### *Runs on a potato*

And now we come to arguably my favorite category of all. [LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B) is a jack of all trades that can run on a phone. It's tiny, taking up less than 3GB of RAM: it can do text; it can read images; it can handle audio. It can also reply in text, audio and imagery. Granted, it can only handle up to 32K of text, but on my 3080 it reads at a whopping 11,980 tok/s and writes at 216 tok/s. People have got it running on iPhones and iPads. 

What the hell do you do with a model like this? Well, in my case, I have it running alongside my speech-to-text model, correcting spelling and grammar before the input is pasted. I've been building a robotic butler, Jeeves, for a long time, and the existence of [LFM3 Omni](https://huggingface.co/LiquidAI/LFM3-Omni-2B) means Jeeves can now run on a phone and do all the things I'd otherwise need two or three different models for. 

This, incidentally, makes my plans of world domination much easier.

## How do I set this shit up?

### If you want a one-and-done simple setup, a sort of replacement for Claude Desktop that runs locally: 

- Download [Strata](https://github.com/Niko1221/Strata). It now comes with a nice desktop app. Said desktop app will set up everything you need. 

  [Strata](https://github.com/Niko1221/Strata) changes fast and occasionally serves other models, but its primary purpose has been to supply [Qwen Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next), our Goldilocks model pick. In [Strata](https://github.com/Niko1221/Strata), download the Qwen IQ3_S variant if you have a good computer and like 16 GB of VRAM. If not, go for the IQ2_XS Swift variant. It's much faster.

- The alternative: [Linger](https://github.com/simplexai-labs/linger). Uses [PolyStrata](https://github.com/VecSzn/PolyStrata) underneath.

### If you want to try the all the models you possibly can in one interface, at the cost of specific per-model optimization, I have exactly one recommendation: 

- [Unsloth Desktop](https://github.com/unslothai/unsloth). It's a lovely interface, comes with computer use, and it uses [llama.cpp](https://github.com/ggml-org/llama.cpp) underneath. It also lets you download and try every type of model, from text to voice to image, and to even retrain them if you have the resources for it. They also produce the largest, consistently high quality collection of quantized models.

  In fact, this was how Unsloth started - I first started using them because their library made fine-tuning models so much easier for Python users. Now they have a superb experience.

- Honorary mention: [Jan](https://github.com/janhq/jan). I've installed [Jan](https://github.com/janhq/jan) many times for friends who weren't very technical, but wanted to try this stuff out for themselves. It's very simple, which is not a bad thing at all, and is a lighter experience than Unsloth.

- Honorary mention if you're on a Macbook: [Atomic Chat](https://github.com/AtomicBot-ai/Atomic-Chat). They're trying to do what Unsloth does, and in the last six months alone they've come quite a long way. <https://atomic.chat/> 

Things to avoid: [LMStudio](https://lmstudio.ai). Used to be good, doesn't serve a purpose anymore. Same for [Ollama](https://github.com/ollama/ollama). You may see a lot of search results defaulting to these because of the sheer volume of conversation around them a couple of years ago, but they offer far too little.

### If you want to try the big models at maximum efficiency, test them all, and pick:

- Download [PolyStrata](https://github.com/VecSzn/PolyStrata) and [Maya](https://github.com/mw00/project-maya).  These will let you download, tune, and spin up most of the current crop of heavyweights that people actually like. They provide models and tunings specialized on a per-model basis. If you want to try  GLM-5.2 and Kimi K2.7, try [Pulsar](https://codeberg.org/PrivateLocalAI/pulsar), but I haven't. 
- I'm going to assume you already have an agent harness or user interface that you prefer. If not, I highly recommend [OpenChamber](https://github.com/openchamber/openchamber) (built on [OpenCode](https://github.com/anomalyco/opencode)), [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness), [Unsloth Desktop](https://github.com/unslothai/unsloth), or [Pi-Gui](https://github.com/minghinmatthewlam/pi-gui) (<https://www.pi-gui.com/#install>). These are polished and relatively superlative experiences. If you want something simpler, I recommend [Goose](https://github.com/block/goose) (<https://goose-docs.ai/>).
- If you want to try more models, download [llama.cpp](https://github.com/ggml-org/llama.cpp) as well. 
- You may want to cook up some way of keeping track of all of this stuff. For example, I have ModelServe, a personal TUI that has all my configurations and a few safeguards baked in and handles the starting and routing thereof. However, by the time you get around to having to worry about this problem, you'll probably have at least *one* model that can help you figure it out. 

Good luck.

{% include image.html image="/assets/images/experiments/local-llms-experiments/modelserve.png" caption="ModelServe, my TUI for starting and routing local models." %}
