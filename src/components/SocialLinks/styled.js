import styled from "styled-components"
import { Link } from "gatsby"

export const SocialLinksList = styled.ul`
  display: flex;
`

export const SocialLinksItem = styled.li`
  display: block;  
  margin-right: 1rem;
`

export const SocialLinksLink = styled(Link)`
  display: block;
  width: 50px;
  color: var(--mainColor);
`

