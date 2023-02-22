---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

Long version CV. _last updated Feb. 2023_ ([download](https://jmcregg.github.io/files/Cregg_JM_CV_Long.pdf){:target="_blank"})

<div style="background-color: #f5f4f4" markdown=1> 
<div style="padding-top: 0.1pt; padding-bottom: 0.1pt; margin-left: 5%; margin-right: 5%;" markdown=1>
Education
---
<ol>
{% for post in site.cv reversed %}
  {% if post.pubtype == 'education' %}
     {% include archive-single-cv.html %} <br>
  {% endif %}
{% endfor %}
</ol>
</div>
</div>

<div style="background-color: #FFFFFF" markdown=1> 
<div style="padding-top: 0.1pt; padding-bottom: 1%; margin-left: 5%; margin-right: 5%;" markdown=1>
Research Positions
---
<ol>
{% for post in site.cv reversed %}
  {% if post.pubtype == 'position' %}
     {% include archive-single-position-cv.html %} <br>
  {% endif %}
{% endfor %}
</ol>
</div>
</div>

<div style="background-color: #f5f4f4" markdown=1> 
<div style="padding-top: 0.1px; padding-bottom: 1%; margin-left: 5%; margin-right: 5%;" markdown=1>
Selected Publications
---
  <ol>{% for post in site.publications reversed %}
      {% if post.special2 %}
     <li> {% include archive-single.html %} </li>
  {% endif %}
  {% endfor %}</ol>
  
Full list of [Publications](https://jmcregg.github.io/publications/)

_Bibliometric Summary_<br>
Web of Science: >1600 citations, h-index 11 ([link](https://www.webofscience.com/wos/author/record/3938830){:target="_blank"})<br>
Google scholar: >2400 citations, h-index 14 ([link](https://scholar.google.com/citations?user=1h7u8K8AAAAJ&hl=en){:target="_blank"})
</div>
</div>

<div style="background-color: #FFFFFF" markdown=1> 
<div style="padding-top: 0.1pt; padding-bottom: 1%; margin-left: 5%; margin-right: 5%;" markdown=1>
Funding
---
<ol>
{% for post in site.cv reversed %}
  {% if post.pubtype == 'funding' %}
     {% include archive-single-position-cv.html %} <br>
  {% endif %}
{% endfor %}
</ol>
</div>
</div>

<div style="background-color: #f5f4f4" markdown=1> 
<div style="padding-top: 0.1pt; padding-bottom: 0.1pt; margin-left: 5%; margin-right: 5%;" markdown=1>
Awards
---
<ol>

</ol>
</div>
</div>

<div style="background-color: #FFFFFF" markdown=1> 
<div style="padding-top: 0.1pt; padding-bottom: 3%; margin-left: 5%; margin-right: 5%;" markdown=1>
Talks
---
<ol>
{% for post in site.cv reversed %}
  {% if post.pubtype == 'talk' %}
     {% include archive-single-talk-cv.html %}
  {% endif %}
{% endfor %}
</ol>
</div>
</div>

<div style="background-color: #f5f4f4" markdown=1> 
<div style="padding-top: 0.1px; padding-bottom: 3%; margin-left: 5%; margin-right: 5%;" markdown=1>
Teaching
---
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
</div>
</div>
  
<div style="background-color: #FFFFFF" markdown=1> 
<div style="padding-top: 0.1px; padding-bottom: 1%; margin-left: 5%; margin-right: 5%;" markdown=1>
Service and leadership
---
</div>
</div>
