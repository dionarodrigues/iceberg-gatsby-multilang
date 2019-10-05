import React from "react"
import { graphql } from "gatsby"

// The normal <a> tag is modified here (so that internal links use gatsby-link/LocalizedLink
// More info:
// https://www.gatsbyjs.org/docs/mdx/customizing-components/
const Post = ({ data: { markdownRemark } }) => (
  <div className="blogpost">
    <h1>{markdownRemark.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
  </div>
)

export default Post

export const query = graphql`
  query Post($locale: String!, $title: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
      }
      html
    }
  }
`
