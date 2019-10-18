import React from 'react';
import useTranslations from '../useTranslations';
import SocialLinks from '../SocialLinks';

import * as S from './styled';

const Footer = () => {
  const {
    aboutProject,
    seeMorePWA,
    maintainedBy,
    contributeMessage,
  } = useTranslations();

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <SocialLinks />
        <p>
          {aboutProject}{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
            target="_blank"
          >
            {seeMorePWA}
          </a>
          .
        </p>
        <p>
          {maintainedBy}{' '}
          <a
            href="https://twitter.com/_diogorodrigues"
            target="_blank"
          >
            @_diogorodrigues
          </a>
          . {contributeMessage}{' '}
          <a
            href="https://github.com/diogorodrigues/iceberg-gatsby-multilang"
            target="_blank"
          >
            Github
          </a>
          .
        </p>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
