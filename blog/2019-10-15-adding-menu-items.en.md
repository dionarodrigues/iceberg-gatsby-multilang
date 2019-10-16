---
title: 'Adding menu items'
date: 2019-20-15 15:41:34
description: Add menu items in GraphQL to create a dynamic menu
category: Gatsby
background: '#7d4cdb'
---

The menu items translations are located in `config/menu` and the `useMenu` custom hook pulls these translations (via GraphQL query) and inserts them into the pages.  

```JS
{
  "menuItems": [
    { "name": "Home", "link": "/" },
    { "name": "About", "link": "/about-me" },
    { "name": "Blog", "link": "/blog" },
    { "name": "Contact", "link": "/contact" }
  ]
}
```