import styled from "styled-components"
import media from "styled-media-query"

export const ListWrapper = styled.section`
    display: grid;
    grid-gap: 20px;
    margin-bottom: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    ${media.greaterThan("large")`
        grid-template-columns: repeat(auto-fit, minmax(250px, calc(50% - 10px)));
    `}   

    .homepage & {
        grid-template-columns: repeat(auto-fit, minmax(500px, 2fr));
    }
`

