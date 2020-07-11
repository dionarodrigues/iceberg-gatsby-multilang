import React from 'react';
import { useLocale } from '../../hooks/locale';

import * as S from './styled';

const Languages = () => {
  const { locale } = useLocale();

  return (
    <S.LanguageWrapper>
      <S.LanguageItem>
        <S.LanguageLink to="/" hrefLang="en" className={locale === 'en' ? 'is-active' : ''}>
          EN
        </S.LanguageLink>
      </S.LanguageItem>
      <S.LanguageItem>
        <S.LanguageLink to="/pt" hrefLang="pt" className={locale === 'pt' ? 'is-active' : ''}>
          PT
        </S.LanguageLink>
      </S.LanguageItem>
    </S.LanguageWrapper>
  );
};

export default Languages;
