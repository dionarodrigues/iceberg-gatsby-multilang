# Gatsby Project with Multiple Languages

This project demonstrates how to create a multi-language Gatsby website (Internationalization / i18n) without third party plugins or packages and also focused on SEO. 

Important notes:

- General information are defined in `config/i18n.js`.
- The translations are located in `config/translations` and the `useTranslations` custom hook pulls these translations (via GraphQL query) and inserts them into the pages.
- Due to the use of a global layout / context API and the language code passed to all pages (see `gatsby-node.js`), you know on all pages which language is currently displayed.
- Blogposts are defined in `blog`. The folder names are the `slug` of the page. Inside these folders there has to be an `index.md` file (for the default language). Any other language needs to be defined in the format `name-with-dashes.lang.md`
- A custom component for the <a> tag is implemented - this way links can stay the same for every language, without the need to manually write path prefixes.

--- 

This project started based on [this solution](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n), but I started creating a lots of other needs and decided share this repository. Feel free to use this solution.