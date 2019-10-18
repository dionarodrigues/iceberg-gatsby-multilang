import React from 'react';
import propTypes from 'prop-types';
import LocalizedLink from '../LocalizedLink';
import useTranslations from '../useTranslations';

import * as S from './styled';

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => {
  const { next, prev, of } = useTranslations();

  return (
    <S.PaginationWrapper>
      <li>
        {!isFirst && (
          <LocalizedLink to={prevPage}>← {prev}</LocalizedLink>
        )}
      </li>
      <p>
        {currentPage} {of} {numPages}
      </p>
      <li>
        {!isLast && (
          <LocalizedLink to={nextPage}>{next} →</LocalizedLink>
        )}
      </li>
    </S.PaginationWrapper>
  );
};

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
};

export default Pagination;
