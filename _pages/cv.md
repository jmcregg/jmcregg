---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<div style="background-color: #f5f4f4" markdown=1> 
<div style="padding-top: 0.1px; margin-left: 5%; margin-right: 5%;" markdown=1>
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
<div style="padding-top: 2%; padding-bottom: 1%; margin-left: 3%; margin-right: 3%;" markdown=1>
Research Positions
---
* Summer 2015: Research Assistant
  * Github University
  * Duties included: Tagging issues
  * Supervisor: Professor Git

* Fall 2015: Research Assistant
  * Github University
  * Duties included: Merging pull requests
  * Supervisor: Professor Hub
</div>
</div>

<div style="background-color: #edebeb" markdown=1> 
<div style="padding-top: 2%; padding-bottom: 1%; margin-left: 3%; margin-right: 3%;" markdown=1>
Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3
</div>
</div>

<div style="background-color: #FFFFFF" markdown=1> 
<div style="padding-top: 2%; padding-bottom: 1%; margin-left: 3%; margin-right: 3%;" markdown=1>
Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
</div>
</div>

<div style="background-color: #edebeb" markdown=1> 
<div style="padding-top: 2%; padding-bottom: 1%; margin-left: 3%; margin-right: 3%;" markdown=1>
Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
</div>
</div>

<div style="background-color: #FFFFFF" markdown=1> 
<div style="padding-top: 2%; padding-bottom: 1%; margin-left: 3%; margin-right: 3%;" markdown=1>
Teaching
======
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
</div>
</div>
  
<div style="background-color: #edebeb" markdown=1> 
<div style="padding-top: 2%; padding-bottom: 1%; margin-left: 3%; margin-right: 3%;" markdown=1>
Service and leadership
======
* Currently signed in to 43 different slack teams
</div>
</div>
