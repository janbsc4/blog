---
layout: layout.liquid
pageTitle: Welcome to my blog
---
{% for post in collections.post reversed -%}
<p><i>{{ post.date | date: "%d.%m.%Y" }}</i></p>
<p>{{ post.templateContent }}</p>
<p>--------</p>
{% endfor %}