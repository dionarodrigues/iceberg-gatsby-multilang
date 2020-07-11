import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const MenuContext = createContext({});

const MenuProvider = ({ children }) => {
  const [openedMenu, setOpenedMenu] = useState(false);

  function toggleMenu() {
    setOpenedMenu(!openedMenu);
  }

  return (
    <MenuContext.Provider value={{ openedMenu, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

MenuProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within an MenuProvider');
  }
  return context;
};

export { MenuProvider, useMenu };