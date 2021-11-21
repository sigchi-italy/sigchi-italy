---
layout: page
title: Research
permalink: /research/
---

## Gruppi affiliati a SIGCHI Italy

<ul>
{% for group in site.research_groups %}
  <li><a href="{{ group.url }}">{{ group.name }} presso {{ group.institution }}</a></li>
{% endfor %}
</ul>
