---
layout: default
title: Posts
nav_order: 6
has_children: true
permalink: /posts/
---

# Posts
{: .no_toc }

Nonfiction, speeches, and long-form thinking — on AI, publishing, aesthetics, and the futures we're building.

---

{% assign posts = site.pages | where_exp: "p", "p.path contains 'docs/posts/'" | where_exp: "p", "p.name != 'index.md'" | where_exp: "p", "p.date" | sort: "date" | reverse %}

| Post | Date |
|------|------|
{% for p in posts -%}
| [{{ p.title }}]({{ p.url | relative_url }}) | {{ p.date | date: "%B %Y" }} |
{% endfor %}
