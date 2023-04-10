---
layout: archive
title: "Abbreviated CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% if site.google_analytics and jekyll.environment == 'production' %}
{% include analytics.html %}
{% endif %}

Download full CV [here](https://jmcregg.github.io/files/Cregg_JM_CV_Long.pdf){:target="_blank"}{:style="text-decoration: none"} (_last updated April 2023_)

<div style="background-color: #f2f3f3" markdown=1> 
<div style="padding-top: 0.1pt; padding-bottom: 1%; margin-left: 5%; margin-right: 5%;" markdown=1>
Education
---
{% for post in site.cv reversed %}
  {% if post.pubtype == 'education' %}
     {% include archive-single-cv.html %} 
  {% endif %}
{% endfor %}
</div>
</div>

<div style="background-color: #FFFFFF" markdown=1> 
<div style="padding-top: 0.1pt; padding-bottom: 1%; margin-left: 5%; margin-right: 5%;" markdown=1>
Research Positions
---
{% for post in site.cv reversed %}
  {% if post.pubtype == 'position' %}
     {% include archive-single-position-cv.html %}
  {% endif %}
{% endfor %}
</div>
</div>

<div style="background-color: #f2f3f3" markdown=1> 
<div style="padding-top: 0.1px; padding-bottom: 1%; margin-left: 5%; margin-right: 5%;" markdown=1>
Selected Publications
---
  <ol>{% for post in site.publications reversed %}
      {% if post.special2 %}
     <li> {% include archive-single.html %} </li>
  {% endif %}
  {% endfor %}</ol>
  
Full list of [Publications](https://jmcregg.github.io/publications/){:style="text-decoration: none"}

_Bibliometric Summary_<br>
Web of Science: >1600 citations, h-index 11 ([link](https://www.webofscience.com/wos/author/record/3938830){:target="_blank"}{:style="text-decoration: none"})<br>
Google Scholar: >2500 citations, h-index 15 ([link](https://scholar.google.com/citations?user=1h7u8K8AAAAJ&hl=en){:target="_blank"}{:style="text-decoration: none"})
</div>
</div>

<div style="background-color: #FFFFFF" markdown=1> 
<div style="padding-top: 0.1pt; padding-bottom: 1%; margin-left: 5%; margin-right: 5%;" markdown=1>
Funding
---
{% for post in site.cv reversed %}
  {% if post.pubtype == 'funding' %}
     {% include archive-single-position-cv.html %}
  {% endif %}
{% endfor %}
</div>
</div>

<div style="background-color: #f2f3f3" markdown=1> 
<div style="padding-top: 0.1px; padding-bottom: 4%; margin-left: 5%; margin-right: 5%;" markdown=1>
Mentoring
---
{% for post in site.cv reversed %}
  {% if post.pubtype == 'mentor' %}
     {% include archive-single-mentor-cv.html %}
  {% endif %}
{% endfor %}
</div>
</div>

<div style="background-color: #FFFFFF" markdown=1> 
<div style="padding-top: 0.1pt; padding-bottom: 4%; margin-left: 5%; margin-right: 5%;" markdown=1>
Awards
---
{% for post in site.cv reversed %}
  {% if post.pubtype == 'award' %}
     {% include archive-single-talk-cv.html %}
  {% endif %}
{% endfor %}
</div>
</div>

<div style="background-color: #f2f3f3" markdown=1> 
<div style="padding-top: 0.1pt; padding-bottom: 4%; margin-left: 5%; margin-right: 5%;" markdown=1>
Talks
---
{% for post in site.cv reversed %}
  {% if post.pubtype == 'talk' %}
     {% include archive-single-talk-cv.html %}
  {% endif %}
{% endfor %}
</div>
</div>
