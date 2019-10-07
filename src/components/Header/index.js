import React from "react"
import useTranslations from "../useTranslations"
import Navigation from "../Navigation"
import Languages from "../Languages"
import Logo from "../Logo"

import * as S from './styled'

const Header = () => {
  const { backToHome } = useTranslations()

  return (
    <S.HeaderWrapper>
      <S.Container>        
      
        <S.LogoLink to="/" aria-label={backToHome}>
          <Logo />
        </S.LogoLink>

        <S.NavMenu>
          <Navigation />
        </S.NavMenu>

        <S.NavLanguages>
          <Languages />
        </S.NavLanguages>   

      </S.Container>   
    </S.HeaderWrapper>
  )
}

export default Header
