---
layout: layout.liquid
pageTitle: Welcome to my blog
---
# Jan's Blog
{% for post in collections.post %}
<p>{{ post.templateContent }}</p>
<a href="{{ post.url | url]}}">link</a>
<em>{{ post.date | date: "%Y-%m-%d" }}</em>
{% endfor %}