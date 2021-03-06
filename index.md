---
layout: index
title: Multilingual Bible Reader
---

# Welcome to the [Institute for Biblical Content](https://ibc.oarc.science)'s Multilingual Bible Reader.

Persistent access point:

### <a class="read-on btn-large" style="color:white;" href="https://read.ibc.oarc.science">https://read.ibc.oarc.science</a>

This engine hosts Bible translations in the following languages:

### {% for language in site.data.meta %}[{{language.id | capitalize}}](/{{language.id}}){% if forloop.last == false %},{% else %}.{% endif %}  {% endfor %} 

This engine responds to the two of IBC's Open Access challenges:
 - **Propagate existing content**. We replicate and host several existing Open Access Bible translations.
 - **Produce new content**. We produce Bible translations and release these into the Public Domain. We engage professional linguists and translators specializing in Hebrew, Aramaic and Greek as well as scholars of religion specializing in Judaism and Christianity.

### Licencing and credits

If not stated otherwise, the content is in the Public Domain.

{% for language in site.data.meta %}[{{language.id | capitalize}}](/{{language.id}}): {{language.licence | strip_html }}{% if forloop.last == false %}<br>{% endif %}  {% endfor %}

<br><br><br>
