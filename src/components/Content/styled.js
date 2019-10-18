import styled from 'styled-components';
import media from 'styled-media-query';

export const Content = styled.section`
  margin: auto;
  padding: var(--space-lg) 0;

  & > *:first-child {
    margin-top: 0 !important;
  }

  & > *:last-child {
    margin-bottom: 0 !important;
  }

  iframe {
    width: 100%;
    ${media.lessThan('large')`
      padding: 0 1rem;
    `}
  }

  a {
    color: var(--link-color);
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      color: var(--link-color-hover);
    }

    &.absent {
      color: #cc0000;
    }

    &.anchor {
      display: block;
      padding-left: 30px;
      margin-left: -30px;
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: var(--space-lg) 0 var(--space-lg);
    padding: 0;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    cursor: text;
    position: relative;

    &:first-child {
      margin-top: 0;
      padding-top: 0;
    }

    &:hover a.anchor {
      text-decoration: none;
    }

    tt,
    code {
      font-size: inherit;
    }
  }

  h1:first-child + h2 {
    margin-top: 0;
    padding-top: 0;
  }

  h1 {
    font-size: 2.8rem;
    color: black;
  }

  h2 {
    font-size: 2.4rem;
    color: black;
  }

  h1,
  h2 {
    padding-bottom: var(--space);
    border-bottom: 1px solid var(--border-light);
  }

  h3 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.6rem;
  }

  h5 {
    font-size: 1.4rem;
  }

  h6 {
    color: var(--text-light);
    font-size: 1.4rem;
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  li,
  table,
  pre {
    margin: 15px 0;
  }

  hr {
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: var(--bg-light);
    border: 0;
  }

  & > h2:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  & > h1:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  & > h1:first-child + h2 {
    margin-top: 0;
    padding-top: 0;
  }

  & > h3:first-child,
  & > h4:first-child,
  & > h5:first-child,
  & > h6:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  a:first-child h1,
  a:first-child h2,
  a:first-child h3,
  a:first-child h4,
  a:first-child h5,
  a:first-child h6 {
    margin-top: 0;
    padding-top: 0;
  }

  h1 p,
  h2 p,
  h3 p,
  h4 p,
  h5 p,
  h6 p {
    margin-top: 0;
  }

  li p.first {
    display: inline-block;
  }

  ul,
  ol {
    padding-left: 30px;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  dl {
    padding: 0;

    dt {
      font-size: 14px;
      font-weight: bold;
      font-style: italic;
      padding: 0;
      margin: 15px 0 5px;

      &:first-child {
        padding: 0;
      }

      & > :first-child {
        margin-top: 0;
      }

      & > :last-child {
        margin-bottom: 0;
      }

      dd {
        margin: 0 0 15px;
        padding: 0 15px;

        & > :first-child {
          margin-top: 0;
        }

        & :last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  blockquote {
    border-left: 4px solid #dddddd;
    padding: 0 15px;
    color: #777777;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  table {
    padding: 0;

    tr {
      border-top: 1px solid #cccccc;
      background-color: white;
      margin: 0;
      padding: 0;

      &:nth-child(2n) {
        background-color: #f8f8f8;
      }

      th {
        font-weight: bold;
        border: 1px solid #cccccc;
        text-align: left;
        margin: 0;
        padding: 6px 13px;
      }

      td {
        border: 1px solid #cccccc;
        text-align: left;
        margin: 0;
        padding: 6px 13px;
      }

      th:first-child,
      td:first-child {
        margin-top: 0;
      }

      th:last-child,
      td:last-child {
        margin-bottom: 0;
      }
    }
  }

  img {
    max-width: 100%;
  }

  span.frame {
    display: block;
    overflow: hidden;

    & > span {
      border: 1px solid #dddddd;
      display: block;
      float: left;
      overflow: hidden;
      margin: 13px 0 0;
      padding: 7px;
      width: auto;

      img {
        display: block;
        float: left;
      }

      span {
        clear: both;
        color: #333333;
        display: block;
        padding: 5px 0 0;
      }
    }
  }

  span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-center > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: center;
  }

  span.align-center span img {
    margin: 0 auto;
    text-align: center;
  }

  span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-right > span {
    display: block;
    overflow: hidden;
    margin: 13px 0 0;
    text-align: right;
  }

  span.align-right span img {
    margin: 0;
    text-align: right;
  }

  span.float-left {
    display: block;
    margin-right: 13px;
    overflow: hidden;
    float: left;
  }

  span.float-left span {
    margin: 13px 0 0;
  }

  span.float-right {
    display: block;
    margin-left: 13px;
    overflow: hidden;
    float: right;
  }

  span.float-right > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: right;
  }

  code,
  tt {
    margin: 0 2px;
    padding: 0 5px;
    white-space: nowrap;
    border: 1px solid #eaeaea;
    background-color: #f8f8f8;
    border-radius: 3px;
  }

  pre code {
    margin: 0;
    padding: 0;
    white-space: pre;
    border: none;
    background: transparent;
  }

  .highlight pre {
    background-color: #f8f8f8;
    border: 1px solid #cccccc;
    font-size: 13px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;
  }

  pre {
    background-color: #f8f8f8;
    border: 1px solid #cccccc;
    font-size: 13px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;

    code,
    tt {
      background-color: transparent;
      border: none;
    }
  }
`;
