import React from "react"
import useTranslations from "../components/useTranslations"
import SEO from "../components/seo"

const About = () => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const { hello, subline } = useTranslations()

  return (
    <>
      <SEO title="About" />
      <h1>{hello}</h1>
      <p>{subline}</p>
    </>
  )
}

export default About
