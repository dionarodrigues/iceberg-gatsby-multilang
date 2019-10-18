import styled from 'styled-components';
import media from 'styled-media-query';

export const FooterWrapper = styled.div`
  margin-top: 3rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: var(--width-container);
  margin: 0 auto;
  padding: calc(var(--space) * 1.3) var(--space);
  ${media.greaterThan('large')`
    padding: calc(var(--space)*1.3) var(--space-sm);
  `}

  p {
    margin: 1rem 0;
  }
`;
