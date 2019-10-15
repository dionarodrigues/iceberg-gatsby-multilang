import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import LocalizedLink from "../components/LocalizedLink"
import useTranslations from "../components/useTranslations"

const Index = ({ data: { allMarkdownRemark } }) => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const { hello, subline, category, latestPosts, allPosts } = useTranslations()

  return (
    <>
      <SEO title="Home" />
      <h1>{hello}</h1>
      <p>{subline}</p>
      <hr style={{ margin: `2rem 0` }} />
      <h2>{latestPosts}</h2>
      <ul className="post-list">
        {allMarkdownRemark.edges.map(({ node: post }) => (
          <li key={`${post.frontmatter.title}-${post.fields.locale}`}>
            <LocalizedLink to={`/blog/${post.fields.slug}`}>
              {post.frontmatter.title}
              < br />
              <small>{category}: {post.frontmatter.category}</small>
            </LocalizedLink>
            <div>{post.frontmatter.date}</div>
            <br />
          </li>
        ))}
      </ul>
      <br />
      <LocalizedLink to={`/blog/`}>
        {allPosts}
      </LocalizedLink>
    </>
  )
}

export default Index

export const query = graphql`
  query Index($locale: String!, $dateFormat: String!, ) {
    allMarkdownRemark(
      filter: { 
        fields: { locale: { eq: $locale } } 
        fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            category
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
