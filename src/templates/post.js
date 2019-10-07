import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

// The normal <a> tag is modified here (so that internal links use gatsby-link/LocalizedLink
// More info:
// https://www.gatsbyjs.org/docs/mdx/customizing-components/
const Post = props => {
  const post = props.data.markdownRemark

  return (
    <>
      <SEO 
        title={post.frontmatter.title} 
        description={post.frontmatter.description} 
        image={post.frontmatter.image} 
      />
      <div className="blogpost">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </div>
    </>
  )
}

export const query = graphql`
  query Post($locale: String!, $title: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        description
        image
      }
      html
    }
  }
`

export default Post
