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
            <LocalizedLink to={`/blog/${post.fields.slug}`}>
              {post.frontmatter.title}
              < br />
              <small>{post.frontmatter.description}</small>
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
  query PostsList($locale: String!, $dateFormat: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}, 
      filter: {fields: {locale: {eq: $locale}}, fileAbsolutePath: {regex: "/(blog)/.*\\\\.md$/"}}
      limit: $limit
      skip: $skip
    ){
      edges {
        node {
          frontmatter {
            title
            category
            description
            date(formatString: $dateFormat)
          }
          fields {
            locale
            slug
          }
        }
      }
    }
  }
`
