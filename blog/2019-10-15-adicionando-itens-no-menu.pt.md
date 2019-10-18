---
title: 'Adicionando itens no menu'
date: '2019-10-15 15:41:34'
description: Adicione itens no GraphQL para criar um menu dinâmico
category: Gatsby
background: '#7d4cdb'
image: '/assets/img/07.jpg'
---

As traduções dos itens do menu estão localizadas em `config/menu` e o hook personalizado `useMenu` pega essas traduções (via consulta GraphQL) e as insere nas páginas.

```JS
{
  "menuItems": [
    { "name": "Início", "link": "/" },
    { "name": "Sobre", "link": "/sobre-mim" },
    { "name": "Blog", "link": "/blog" },
    { "name": "Contato", "link": "/contato" }
  ]
}
```
