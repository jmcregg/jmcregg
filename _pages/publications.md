---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}
{% if author.googlescholar %}
You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

<div style="background-color: #edebeb" markdown=1> 
<div style="padding-top: 10px; padding-bottom: 1%; margin-left: 3%; margin-right: 3%;" markdown=1>
Postdoc
---
<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'postdoc' %}
     <li> {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>
</div>
</div>

Graduate
---
<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'graduate' %} 
  <li>    {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>

Undergraduate
---
<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'undergraduate' %} 
  <li>    {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>

Patents
---
<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'patent' %}
   <li>   {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>
