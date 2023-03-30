---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---
<html> 
<head>
   {% if site.google_analytics and jekyll.environment == 'production' %}
   {% include analytics.html %}
   {% endif %}
 </head>
</html> 

{% include base_path %}
{% if author.googlescholar %}
You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

<div style="background-color: #f2f3f3" markdown=1> 
<div style="padding-top: 0.1px; padding-bottom: 3%; margin-left: 5%; margin-right: 5%;" markdown=1>
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

<div style="background-color: #ffffff" markdown=1> 
<div style="padding-top: 0.1px; padding-bottom: 3%; margin-left: 5%; margin-right: 5%;" markdown=1>
Graduate
---
<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'graduate' %} 
  <li>    {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>
</div>
</div>

<div style="background-color: #f2f3f3" markdown=1> 
<div style="padding-top: 0.1px; padding-bottom: 3%; margin-left: 5%; margin-right: 5%;" markdown=1>
Undergraduate
---
<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'undergraduate' %} 
  <li>    {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>
</div>
</div>

<div style="background-color: #ffffff" markdown=1> 
<div style="padding-top: 0.1px; padding-bottom: 3%; margin-left: 5%; margin-right: 5%;" markdown=1>
Patents
---
<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'patent' %}
   <li>   {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>
</div>
</div>
