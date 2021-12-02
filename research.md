---
layout: page
title: Research
permalink: /research_groups/
---

## Gruppi affiliati a SIGCHI Italy

<ul>
{% for group in site.research_groups %}
  <li><a href="{{site.baseurl}}{{ group.url }}">{{ group.group-name }} presso {{ group.institution }}</a></li>
{% endfor %}
</ul>
