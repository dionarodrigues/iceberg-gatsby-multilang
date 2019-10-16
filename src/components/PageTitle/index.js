import React from 'react'

import * as S from './styled'

const PageTitle = ( props ) => {

  const {text} = props

  return(
    <S.TitleElement>{text}</S.TitleElement>
  )
}

export default PageTitle