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

Research Articles
---
<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'research' %}
     <li> {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>

Reviews
---
<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'review' %} 
  <li>    {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>

Commentaries/Editorials
---
<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'commentary' %} 
  <li>    {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>

Preprints / Under Review
---
<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'preprint' %}
      <li> {% include archive-single.html %} </li>
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

Monographs
---
<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'thesis' %}
   <li>   {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>
