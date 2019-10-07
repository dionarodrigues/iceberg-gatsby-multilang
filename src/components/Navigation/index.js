import React from "react"
import { Link } from "gatsby"
import LocalizedLink from "../LocalizedLink"
import useTranslations from "../useTranslations"
import Logo from "../Logo"

const Navigation = () => {
  const { backToHome, homepage, about, posts } = useTranslations()

  return (
    <nav>
      <Logo />
      <LocalizedLink to="/" aria-label={backToHome}>
        {homepage}
      </LocalizedLink>
      <LocalizedLink to="/about" aria-label={about}>
        {about}
      </LocalizedLink>
      <LocalizedLink to="/posts" aria-label={posts}>
        {posts}
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
