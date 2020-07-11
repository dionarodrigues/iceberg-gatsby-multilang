import styled from 'styled-components';
import media from 'styled-media-query';
import LocalizedLink from '../LocalizedLink';
import { Link } from 'gatsby';

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: var(--space-sm);
  ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: center;
  `}
`;

export const NavigationLink = styled(LocalizedLink)`
  color: var(--text-dark);
  text-decoration: none;
  position: relative;
  padding: 0 var(--space-sm);
  margin-bottom: var(--space-sm);
  text-align: center;
  ${media.greaterThan('medium')`
    margin-left: var(--space-sm);
    margin-bottom: 0;
  `}
  ${media.greaterThan('large')`
    margin-left: var(--space);
  `} 

  &:after {
    ${media.greaterThan('medium')`
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
    `}
  }

  &:hover,
  &.active {
    font-weight: bold;
    ${media.greaterThan('medium')`
      font-weight: normal;
    `}

    &:after {
      opacity: 1;
      bottom: -10px;
      width: 100%;
    }
  }
`;

export const NavigationButton = styled(Link)`
  background: var(--primary-color);
  border-radius: 2px;
  color: #fff;
  display: inline-block;
  padding: var(--space-sm) var(--space);
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  ${media.greaterThan('medium')`
    margin-left: var(--space-lg);
  `}
`;
