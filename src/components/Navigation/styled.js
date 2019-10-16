import styled from 'styled-components'
import LocalizedLink from "../LocalizedLink"
import { Link } from "gatsby"

export const Navigation = styled.nav`

`

export const NavigationLink = styled(LocalizedLink)`
  color: var(--text-dark);
  margin-left: var(--space);
  text-decoration: none;
  position: relative;
  padding: 0 var(--space-sm);

  &:after {
    content: '';
    display: inline-block;
    width: 0;
    height: 4px;
    background: var(--primary-color);
    position: absolute;
    left: 0;
    bottom: -10px;
    opacity: 0;
    transition: .3s ease-in-out;
  }

  &:hover,
  &.active {
    &:after {
      opacity: 1;
      bottom: -10px;
      width: 100%;
    }
  }
`

export const NavigationButton = styled(Link)`
  background: var(--primary-color);
  border-radius: 2px;
  color: #fff;
  display: inline-block;
  margin-left: var(--space-lg);
  padding: var(--space-sm) var(--space);
  text-decoration: none;
  font-weight: bold;
`