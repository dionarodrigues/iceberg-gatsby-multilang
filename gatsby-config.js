module.exports = {
  siteMetadata: {
    title: `Gatsby multiple language`,
    description: ``,
    author: `@diogorodrigues`,
    siteUrl: `http://gatsby-multiple-language`,
  },
  plugins: [
    `gatsby-transformer-json`, 
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,  
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/config/translations`,
        name: `translations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },    
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby multiple language`,
        short_name: `Gatsby multiple language`,
        start_url: `/`,
        background_color: `#ddd`,
        theme_color: `#000`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`
      },
    },
    
  ],
}
