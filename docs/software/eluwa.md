---
title: Eluwa
parent: Software
nav_order: 10
tags: [software]
date: 2023-04-01
image: "/assets/images/software/eluwa/logo.jpg"
excerpt: "A family of fine-tuned LoRA models on Facebook's OPT architecture — more conversational, more imaginative, trained on the Stanford Alpaca dataset."
---

# Eluwa

[GitHub →](https://github.com/yudhanjaya/Eluwa) · [arXiv →](https://arxiv.org/abs/2304.12370)

{% include image.html image="/assets/images/software/eluwa/logo.jpg" %}

Eluwa is a family of fine-tuned LoRA models built on Facebook's OPT architecture, trained using the Stanford Alpaca dataset. Built with Ishan Marikar.

The motivation: OPT was too curt — and frankly, a bit of an asshole — for a model of its size. We wanted something more conversational and imaginative. Available in three sizes: 1.3b, 2.7b, and 6.7b parameters. All support 8-bit loading, making them accessible on mid-range hardware. Performance runs between 1.14 and 3.77 tokens/second depending on size and machine.

## How to use

Grab the corresponding OPT base model from Hugging Face, then load the appropriate LoRA adapter. We recommend [oobabooga's text generation UI](https://github.com/oobabooga/text-generation-webui) for local deployment — it lets you regenerate outputs, modify conversation history, and adjust parameters easily.

## Training

8-bit loaded OPT 2.7b, Stanford Alpaca dataset. Evaluation followed Vicuna-style testing using 80 benchmark questions ranked by GPT-4. Full methodology and results in the [paper](https://arxiv.org/abs/2304.12370).

## Name

Named after Sri Lankan goats rather than the llamas and alpacas that populate most LoRA projects.

## License

CC BY NC 4.0 — research and non-commercial use only. Respect also the original OPT license and Alpaca's research-only constraints.

## Citation

```
@article{wijeratne2023better,
  title={Better Question-Answering Models on a Budget},
  author={Yudhanjaya Wijeratne and Ishan Marikar},
  year={2023},
  eprint={2304.12370},
  archivePrefix={arXiv},
  primaryClass={cs.CL}
}
```
