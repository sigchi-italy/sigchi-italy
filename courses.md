---
layout: page
title: Courses
permalink: /courses/
---

## Corsi su HCI in Italy

<ul>
{% for course in site.courses %}
  <li><a href="{{site.baseurl}}{{ course.url }}">{{ course.course-name }} presso {{ course.institution }}</a></li>
{% endfor %}
</ul>
