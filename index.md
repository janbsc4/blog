---
layout: layout.liquid
pageTitle: Welcome to my blog
---
{% for post in collections.post %}
<p>{{ post.date | date: "%d.%m.%Y" }}</p>
<p>{{ post.templateContent }}</p>
<p>--------</p>
{% endfor %}