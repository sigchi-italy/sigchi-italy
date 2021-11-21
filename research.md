---
layout: page
title: Research
permalink: /research/
---

## Gruppi affiliati a SIGCHI Italy

<ul>
{% for group in site.research_groups %}
  <li>{{ group.name }} presso {{ group.institution }}</li>
{% endfor %}
</ul>
