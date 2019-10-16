import styled from "styled-components"
import media from "styled-media-query"
import LocalizedLink from "../LocalizedLink"

export const HeaderWrapper = styled.div`
  margin-bottom: 30px;
  background-color: var(--bg-light);  
`

export const Container = styled.div`
  display: flex;
  max-width: var(--width-container);
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: calc(var(--space)*1.3) var(--space);
  ${media.greaterThan("large")`
    padding: calc(var(--space)*1.3) var(--space-sm);
  `}
`

export const LogoLink = styled(LocalizedLink)`
  display: inline-block;
  margin-right: .5rem;
  width: 170px;
`

export const NavMenu = styled.div`
  margin-left: auto;
`

export const NavLanguages = styled.div`
  margin-left: var(--space);
`