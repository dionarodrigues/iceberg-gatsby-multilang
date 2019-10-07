import React from 'react'

import { Twitter } from "styled-icons/boxicons-logos/Twitter"
import { Github } from "styled-icons/boxicons-logos/Github"

import * as S from './styled'

const SocialLinks = () => {
  return(
    <S.SocialLinksList>
      <S.SocialLinksItem>
        <S.SocialLinksLink to="https://github.com/diogorodrigues/iceberg-gatsby-multilang" title="Github">
          <Github />
        </S.SocialLinksLink>
      </S.SocialLinksItem> 
      <S.SocialLinksItem>
        <S.SocialLinksLink to="https://twitter.com/_diogorodrigues" title="Twitter">
          <Twitter />
        </S.SocialLinksLink>
      </S.SocialLinksItem>           
    </S.SocialLinksList>
  )
}

export default SocialLinks