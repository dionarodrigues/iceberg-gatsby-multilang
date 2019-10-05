import React from "react"
import { Link } from "gatsby"
import LocalizedLink from "./localizedLink"
import useTranslations from "./useTranslations"

const Navigation = () => {
  const { backToHome, homepage } = useTranslations()

  return (
    <nav>
      <LocalizedLink to="/" aria-label={backToHome}>
        {homepage}
      </LocalizedLink>
      <div>
        <Link to="/" hrefLang="en">
          English
        </Link>
        {` `}/{` `}
        <Link to="/pt" hrefLang="pt">
          Português
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
