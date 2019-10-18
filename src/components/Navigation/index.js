import React from 'react';
import useMenu from '../useMenu';
import useTranslations from '../useTranslations';

import * as S from './styled';

const Navigation = props => {
  const menuItems = useMenu();
  const { button } = useTranslations();

  return (
    <>
      <S.Navigation className={props.isActive ? 'active' : ''}>
        {menuItems.map(menu => (
          <S.NavigationLink
            to={menu.link}
            aria-label={menu.name}
            activeClassName="active"
          >
            {menu.name}
          </S.NavigationLink>
        ))}

        <S.NavigationButton to="" aria-label="Login">
          {button}
        </S.NavigationButton>
      </S.Navigation>
    </>
  );
};

export default Navigation;
