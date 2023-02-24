---
layout: archive
title: "Teaching"
permalink: /teaching/
author_profile: true
---

{% include base_path %}

<div style="background-color: #f5f4f4" markdown=1> 
<div style="padding-top: 0.1pt; padding-bottom: 0.1pt; margin-left: 5%; margin-right: 5%;" markdown=1>
University of Copenhagen
---
Copenhagen, Denmark
{% for post in site.teaching reversed %}
  {% if post.pubtype == 'ku' %}
     {% include archive-single-teaching.html %}
  {% endif %}
{% endfor %}
</div>
</div>

<div style="background-color: #FFFFFF" markdown=1> 
<div style="padding-top: 0.1pt; padding-bottom: 1%; margin-left: 5%; margin-right: 5%;" markdown=1>
Case Western Reserve University
---
Cleveland, OH
{% for post in site.teaching reversed %}
  {% if post.pubtype == 'cwru' %}
     {% include archive-single-teaching.html %}
  {% endif %}
{% endfor %}
</div>
</div>
