import React from "react"
import { graphql } from "gatsby"
import LocalizedLink from "../components/localizedLink"
import useTranslations from "../components/useTranslations"

const Blog = ({ data: { allMarkdownRemark } }) => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const { hello, subline } = useTranslations()

  return (
    <>
      <h1>Blog</h1>
      <hr style={{ margin: `2rem 0` }} />
      <ul className="post-list">
        {allMarkdownRemark.edges.map(({ node: post }) => (
          <li key={`${post.frontmatter.title}-${post.fields.locale}`}>
            {/* <LocalizedLink to={`/${post.parent.relativeDirectory.slice(11)}`}> */}
            <LocalizedLink to={`/blog/${post.fields.slug}`}>
              {post.frontmatter.title}
              < br />
              <small>{post.excerpt}</small>
            </LocalizedLink>
            <div>{post.frontmatter.date}</div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Blog

export const query = graphql`
  query Blog($locale: String!, $dateFormat: String!) {
    allMarkdownRemark(
      filter: { fields: { locale: { eq: $locale } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: $dateFormat)
          }
          excerpt
          fields {
            locale
            slug
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  }
`
