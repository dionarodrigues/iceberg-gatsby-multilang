const path = require(`path`)
const locales = require(`./config/i18n`)
const {
  localizedSlug,
  findKey,
  removeTrailingSlash,
} = require(`./src/utils/gatsby-node-helpers`)

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // First delete the incoming page that was automatically created by Gatsby
  // So everything in src/pages/
  deletePage(page)

  // Grab the keys ('en' & 'de') of locales and map over them
  Object.keys(locales).map(lang => {
    // Use the values defined in "locales" to construct the path
    const localizedPath = locales[lang].default
      ? page.path
      : `${locales[lang].path}${page.path}`

    return createPage({
      // Pass on everything from the original page
      ...page,
      // Since page.path returns with a trailing slash (e.g. "/de/")
      // We want to remove that
      path: removeTrailingSlash(localizedPath),
      // Pass in the locale as context to every page
      // This context also gets passed to the src/components/layout file
      // This should ensure that the locale is available on every page
      context: {
        ...page.context,
        locale: lang,
        dateFormat: locales[lang].dateFormat,
      },
    })
  })
}

// Correcting language and slug to the frontmatter of each file
// A new node is created automatically with the filename
// It's necessary to do that to filter by language
// And the slug make sure the urls will be the same for all posts
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // Check for "Mdx" type so that other files (e.g. images) are exluded
  if (node.internal.type === `MarkdownRemark`) {
    // Use path.basename
    // https://nodejs.org/api/path.html#path_path_basename_path_ext
    const name = path.basename(node.fileAbsolutePath, `.md`)

    // Check if post.name is "index" -- because that's the file for default language
    // (In this case "en")
    const isDefault = name === `index`

    // Find the key that has "default: true" set (in this case it returns "en")
    const defaultKey = findKey(locales, o => o.default === true)

    // Files are defined with "name-with-dashes.lang.mdx"
    // name returns "name-with-dashes.lang"
    // So grab the lang from that string
    // If it's the default language, pass the locale for that
    const lang = isDefault ? defaultKey : name.split(`.`)[1]

    // All files for a blogpost are stored in a folder
    // Spliting the absolute path to get the name of the folder
    // to save on GraphQl as slug
    const absolutePath = path.parse(node.fileAbsolutePath).dir.split('/')
    const slug = absolutePath[ absolutePath.length - 1 ].slice(11)

    createNodeField({ node, name: `slug`, value: slug })
    createNodeField({ node, name: `locale`, value: lang })
    createNodeField({ node, name: `isDefault`, value: isDefault })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Templates for Posts List and Single post
  const postTemplate = path.resolve(`./src/templates/post.js`)
  const postsListTemplate = path.resolve(`./src/templates/posts-list.js`)

  const result = await graphql(`
    {
      blog: allMarkdownRemark(
        filter: { fileAbsolutePath: {regex: "/(blog)/.*\\\\.md$/"} }
        sort: { fields: [frontmatter___date], order: DESC }
        ){
        edges {
          node {
            fields {
              locale
              isDefault
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.error(result.errors)
    return
  }

  const postList = result.data.blog.edges

  // Creating each post
  postList.forEach(({ node: post }) => {

    // Getting Slug and Title
    const slug = post.fields.slug
    const title = post.frontmatter.title

    // Use the fields created in exports.onCreateNode
    const locale = post.fields.locale
    const isDefault = post.fields.isDefault

    createPage({
      path: localizedSlug({ isDefault, locale, slug }),
      component: postTemplate,
      context: {
        // Pass both the "title" and "locale" to find a unique file
        // Only the title would not have been sufficient as articles could have the same title
        // in different languages, e.g. because an english phrase is also common in german
        locale,
        title
      },
    })
  })

  // Crating Pagination
  const postsPerPage = 6
  const langs = Object.keys(locales).length
  const numPages = Math.ceil((postList.length/langs) / postsPerPage)   

  Object.keys(locales).map(lang => {

    // Use the values defined in "locales" to construct the path
    const localizedPath = locales[lang].default
      ? '/posts'
      : `${locales[lang].path}/posts`     

    return Array.from({ length: numPages }).forEach((_, index) => {
      
      createPage({
        path: index === 0 ? `${localizedPath}` : `${localizedPath}/page/${index + 1}`,
        component: postsListTemplate,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
          locale: lang,
          dateFormat: locales[lang].dateFormat,
        }, 
      })

    })
    
  })

}
