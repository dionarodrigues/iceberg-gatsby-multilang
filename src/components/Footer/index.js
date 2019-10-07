import React from "react"
import useTranslations from "../useTranslations"
import SocialLinks from "../SocialLinks"

import * as S from './styled'

const Footer = () => {
  const { backToHome } = useTranslations()

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
          <SocialLinks />
            <p>Iceberg Gatsby is a <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank">PWA</a>. Save it for offline reading.</p>
            <p>Maintained by <a href="https://twitter.com/_diogorodrigues" target="_blank">@_diogorodrigues</a>. You can always see contribute with the project on <a href="" target="_blank">Github</a>.</p>
      </S.FooterContainer>
    </S.FooterWrapper>
  )
}

export default Footer
