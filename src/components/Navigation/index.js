import React from "react"
import useMenu from "../useMenu"

import * as S from './styled'

const Navigation = () => {
  const menuItems = useMenu()

  return (
    <>
      <S.Navigation>   
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
