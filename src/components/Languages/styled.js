import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

export const LanguageWrapper = styled.ul`
  display: flex;
  position: absolute;
  top: var(--space-sm);
  right: var(--space-sm);
  ${media.greaterThan('medium')`
    margin-left: 0;
    position: relative;
    top: 0;
    right: 0;
  `}
`;

export const LanguageItem = styled.li`
  margin-left: var(--space-sm);
`;

export const LanguageLink = styled(Link)`
  display: inline-block;
  margin-right: 0.5rem;
  color: var(--gray);
  font-size: 1.4rem;
  text-decoration: none;

  &.is-active {
    color: var(--secondary-color);
    font-weight: bold;
  }
`;
