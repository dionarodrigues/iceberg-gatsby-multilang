import React from "react"
import { graphql } from "gatsby"
import LocalizedLink from "../components/localizedLink"
import useTranslations from "../components/useTranslations"

const Index = ({ data: { allMdx } }) => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const { hello, subline, category } = useTranslations()

  return (
    <>
      <h1>{hello}</h1>
      <p>{subline}</p>
      <hr style={{ margin: `2rem 0` }} />
      <ul className="post-list">
        {allMdx.edges.map(({ node: post }) => (
          <li key={`${post.frontmatter.title}-${post.fields.locale}`}>
            {/* <LocalizedLink to={`/${post.parent.relativeDirectory.slice(11)}`}> */}
            <LocalizedLink to={`/blog/${post.fields.slug}`}>
              {post.frontmatter.title}
              < br />
              {/* <small>{post.frontmatter.description}</small>
              <br /> */}
              <small>{category}: {post.frontmatter.category}</small>
            </LocalizedLink>
            <div>{post.frontmatter.date}</div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Index

export const query = graphql`
  query Index($locale: String!, $dateFormat: String!, ) {
    allMdx(
      filter: { fields: { locale: { eq: $locale } } }
      sort: { fields: [frontmatter___date], order: DESC }
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
