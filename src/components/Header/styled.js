import styled from "styled-components"
import LocalizedLink from "../LocalizedLink"

export const HeaderWrapper = styled.div`
  background: red;
  margin-bottom: 30px;
  min-height: 4rem;
  background-color: #663299;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);  
  color: #fff;
`

export const Container = styled.div`
  display: flex;
  max-width: 940px;
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
`

export const LogoLink = styled(LocalizedLink)`
  display: inline-block;
  margin-right: .5rem;
`

export const NavMenu = styled.div`
  
`

export const NavLanguages = styled.div`
  margin-left: auto;
`