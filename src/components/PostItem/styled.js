import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';
import LocalizedLink from '../LocalizedLink';

export const PostItemLink = styled(LocalizedLink)`
  text-decoration: none;
  display: block;
  margin-bottom: var(--space);
  ${media.greaterThan('small')`
    margin-bottom: 0;
  `}
`;

export const PostItemWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: var(--bg-light);

  /* .homepage & {
    flex-direction: row;
  } */
`;

// export const PostItemImg = styled.img`
//   display: block;
// `

export const PostItemImg = styled(Img)`
  width: 100%;
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: calc(var(--space) * 1.5) var(--space);
  position: relative;
`;

export const PostItemTag = styled.span`
  display: inline-block;
  align-items: center;
  background: ${props =>
    props.background ? props.background : 'red'};
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: calc(var(--space-sm) / 1.5) var(--space-sm);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const PostItemDate = styled.time`
  font-size: 1.4rem;
  margin-bottom: var(--space-sm);
`;

export const PostItemTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 140%;
`;

export const PostItemDescription = styled.p`
  margin-top: var(--space-sm);
`;
