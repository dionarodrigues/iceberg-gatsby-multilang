import React from "react"
import useTranslations from "../useTranslations"

import * as S from './styled'

const Navigation = () => {
  const { backToHome, homepage, about, posts } = useTranslations()

  return (
    <>
      <S.Navigation>   
        <S.NavigationLink to="/" aria-label={backToHome}>
          {homepage}
        </S.NavigationLink>
        <S.NavigationLink to="/about" aria-label={about}>
          {about}
        </S.NavigationLink>
        <S.NavigationLink to="/posts" aria-label={posts}>
          {posts}
        </S.NavigationLink>
      </S.Navigation>  
    </>
  )
}

export default Navigation
