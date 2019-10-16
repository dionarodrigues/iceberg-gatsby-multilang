import React from "react"
import useTranslations from "../useTranslations"
import Navigation from "../Navigation"
import Languages from "../Languages"
import Logo from "../Logo"

import * as S from './styled'

const Header = () => {
  const { home } = useTranslations()

  return (
    <S.HeaderWrapper>
      <S.Container>        
      
        <S.LogoLink to="/" title={home} aria-label={home}>
          <Logo />
        </S.LogoLink>

        <S.NavLanguages>
          <Languages />
        </S.NavLanguages>  

        <S.NavMenu>
          <Navigation />
        </S.NavMenu>         

      </S.Container>   
    </S.HeaderWrapper>
  )
}

export default Header
