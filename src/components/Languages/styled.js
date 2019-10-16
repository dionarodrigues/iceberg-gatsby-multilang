import styled from "styled-components"
import {Link} from "gatsby"

export const LanguageWrapper = styled.ul`
  display: flex;
`

export const LanguageItem = styled.li`
  margin-left: var(--space-sm);
`

export const LanguageLink = styled(Link)`
  display: inline-block;
  margin-right: .5rem;
  color: var(--grayColor);
  font-size: 1.4rem;
`