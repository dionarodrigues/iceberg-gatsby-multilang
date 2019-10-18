# Gatsby Project with Multiple Languages

[Demo on Netlify](https://iceberg-gatsby-multilang.netlify.com/)

A simple but feature rich starter boilerplate for creating a multi-language Gatsby website (Internationalization / i18n) without third party plugins or packages and also focused on SEO. This starter also contains other main Gatsby configurations you might need.

- Translations by using GraphQL, hooks and context API
- Content in markdown for pages and posts in different languages
- General translations for any content 
- Creation of menu by using translations and GraphQL
- Netlify CMS
- Styled Components to styles
- All important seetings for speedy and optimized images
- Blog Posts list with pagination
- Focus on SEO and PWA

## Important notes:

- General information are defined in `config/i18n.js`.
- The general content translations are located in `config/translations` and the `useTranslations` custom hook pulls these translations (via GraphQL query) and inserts them into the pages. 
- The menu items translations are located in `config/menu` and the `useMenu` custom hook pulls these translations (via GraphQL query) and inserts them into the pages.  
- Due to the use of a global layout / context API and the language code passed to all pages (see `gatsby-node.js`), you know on all pages which language is currently displayed.
- Blogposts are defined in `blog` directory and pages are defined in `page` directory. The file names are the `slug` of the posts and pages. Use `file-name.md` for the default language and any other language needs to be defined in the format `name-with-dashes.lang.md`.
- A custom component for the <a> tag is implemented - this way links can stay the same for every language, without the need to manually write path prefixes.

--- 

This project started based on [this solution](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n) to create a manner to provide translations, but I added a lots of other solutions based on my projects needs (like menu from GraphQL, markdown for pages, pagination, image optmization, styled components, PWA and more). Feel free to use this solution if you want. :)