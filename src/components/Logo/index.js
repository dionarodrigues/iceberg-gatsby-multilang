import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//import logo from '../../images/logo-iceberg.svg'

const Logo = () => {
  const { logoImage } = useStaticQuery(
    graphql`
      query {
        logoImage: file(relativePath: { eq: "gatsby-icon.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return <Img fixed={logoImage.childImageSharp.fixed} />
  // return <img src={logo} alt="Iceberg Logo" width="120" />
}

export default Logo