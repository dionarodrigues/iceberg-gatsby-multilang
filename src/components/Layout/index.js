import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import GlobalStyles from '../../styles/global';

import { useLocale } from '../../hooks/locale';

import * as S from './styled';

const Layout = ({ children, pageContext: { locale } }) => {
  // Using the useLocale() hook to define the correct locale 
  // that will be available in all components of the tree thought its context
  const { changeLocale } = useLocale();
  changeLocale(locale);

  return (
    <>
      <GlobalStyles />
      <S.Wrapper>
        <Header />
        <S.SiteContent role="main">
          <S.Container>{children}</S.Container>
        </S.SiteContent>
        <Footer />
      </S.Wrapper>
    </>
  )
};

export { Layout };
