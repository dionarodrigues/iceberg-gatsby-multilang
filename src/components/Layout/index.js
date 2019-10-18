import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import GlobalStyles from '../../styles/global';

import * as S from './styled';

const LocaleContext = React.createContext();

// Use the built-in Context API to make the "locale" available to every component in the tree
// This e.g. enables the LocalizedLink to function correctly
// As this component wraps every page (due to the wrapPageElement API) we can be sure to have
// the locale available everywhere!
const Layout = ({ children, pageContext: { locale } }) => (
  <LocaleContext.Provider value={{ locale }}>
    <GlobalStyles />
    <S.Wrapper>
      <Header />
      <S.SiteContent role="main">
        <S.Container>{children}</S.Container>
      </S.SiteContent>
      <Footer />
    </S.Wrapper>
  </LocaleContext.Provider>
);

export { Layout, LocaleContext };
