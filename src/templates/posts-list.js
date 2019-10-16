import React from "react"
import { graphql } from "gatsby"
import LocalizedLink from "../components/LocalizedLink"
import SEO from "../components/seo"

import Pagination from "../components/Pagination"

const Blog = props => {
  const postList = props.data.allMarkdownRemark.edges

  // Logic for Pagination Component
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

  return (
    <>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <hr style={{ margin: `2rem 0` }} />
      <ul className="post-list">
        {postList.map(({ node: post }) => (
          <li key={`${post.frontmatter.title}-${post.fields.locale}`}>
            <LocalizedLink to={`/blog/${post.fields.slug}`}>
              {post.frontmatter.title}
              < br />
              <small>{post.frontmatter.description}</small>
            </LocalizedLink>
            <div>{post.frontmatter.date}</div>
            <br />
          </li>
        ))}
      </ul>
      
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  )
}

export const query = graphql`
  query PostsList($locale: String!, $dateFormat: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}, 
      filter: { 
        fields: { locale: { eq: $locale } } 
        fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
      }
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

export default Blog
