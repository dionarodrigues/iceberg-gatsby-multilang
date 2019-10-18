import React from 'react';

import * as S from './styled';

const TitlePage = props => {
  const { text } = props;

  return <S.TitleElement>{text}</S.TitleElement>;
};

export default TitlePage;
