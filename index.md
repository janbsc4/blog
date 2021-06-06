---
layout: layout.liquid
pageTitle: Welcome to my blog
---
{% for post in collections.post %}
<p>{{ post.templateContent }}</p>
<a href="{{ post.url | url]}}">{{ post.date | date: "%d.%m.%Y" }}</a>
<p>--------</p>
{% endfor %}