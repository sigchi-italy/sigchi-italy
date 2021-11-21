---
layout: page
title: Research
permalink: /research/
---

## Gruppi affiliati a SIGCHI Italy

{% for group in site.research_groups %}
  <h2>{{ group.name }} @ {{ group.institution }}</h2>
  <p>{{ group.content | markdownify }}</p>
{% endfor %}
