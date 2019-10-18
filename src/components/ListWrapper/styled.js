import styled from 'styled-components';
import media from 'styled-media-query';

export const ListWrapper = styled.section`
  margin-bottom: 20px;
  ${media.greaterThan('small')`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    `}
  ${media.greaterThan('large')`
        grid-template-columns: repeat(auto-fit, minmax(250px, calc(50% - 10px)));
    `}
`;
