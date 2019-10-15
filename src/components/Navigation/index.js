import React from "react"
import useTranslations from "../useTranslations"
import useMenu from "../useMenu"

import * as S from './styled'

const Navigation = () => {
  const { backToHome, homepage, about, posts } = useTranslations()
  const menuItems = useMenu()

  return (
    <>
      <S.Navigation>   
        {/* <S.NavigationLink to="/" aria-label={backToHome}>
          {homepage}
        </S.NavigationLink>
        <S.NavigationLink to="/about" aria-label={about}>
          {about}
        </S.NavigationLink>
        <S.NavigationLink to="/blog" aria-label="Blog">
          Blog
        </S.NavigationLink> */}

        {/* {menuItems[0].name} */}

        { 
          menuItems.map(menu => (
            <S.NavigationLink to={menu.link} aria-label={menu.name}>
              {menu.name}
            </S.NavigationLink>
          ))
        }

      </S.Navigation>  
    </>
  )
}

export default Navigation
