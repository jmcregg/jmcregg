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

Postdoc
---
<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'research' %}
     <li> {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>

Graduate
---
<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'review' %} 
  <li>    {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>

Undergraduate
---
<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'commentary' %} 
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
