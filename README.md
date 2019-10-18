# Gatsby Starter with multi-language and CMS

[Demo on Netlify](https://iceberg-gatsby-multilang.netlify.com/)

A starter Internationalization / i18n without third party plugins or packages for Posts and Pages. Different URLs dependending on the language. Focused on SEO, PWA, Image Optimization, Styled Components and more. This starter is also integrate with Netlify CMS to manage all pages, posts and images.

- Translations by using GraphQL, hooks and context API
- Content in markdown for pages and posts in different languages
- General translations for any content 
- Creation of menus by using, jSON, translations and GraphQL
- Netlify CMS to manage all pages, posts and images
- Styled Components to styles
- All important seetings for speedy and optimized images
- Blog Posts list with pagination
- Focus on SEO
- PWA

## About Netlify CMS

You must change the Netlify data "repo" and "site_domain" according your Github repository in `static/admin/config.yml`.

## Important notes:

- General information for languages are defined in `config/i18n.js`.
- The general content translations are located in `config/translations` and the `useTranslations` custom hook pulls these translations (via GraphQL query) and inserts them into the pages. 
- The menu items translations are located in `config/menu` and the `useMenu` custom hook pulls these translations (via GraphQL query) and inserts them into the pages.  
- Due to the use of a global layout / context API and the language code passed to all pages (see `gatsby-node.js`), you know on all pages which language is currently displayed.
- Blogposts are defined in `blog` directory and pages are defined in `pages` directory. The file names are the `slug` of the posts and pages.
- A custom component for the <a> tag is implemented - this way links can stay the same for every language, without the need to manually write path prefixes.

--- 

This project started based on [this solution](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n) to create a manner to provide translations, but I added a lots of other solutions based on my projects needs (like menu from GraphQL, markdown for pages, pagination, image optmization, styled components, PWA, CMS and more). Feel free to use this solution if you want. :)