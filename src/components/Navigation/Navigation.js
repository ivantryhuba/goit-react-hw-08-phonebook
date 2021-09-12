import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelector';

import { NavStyled, NavLinkStyled } from './Navigation.styles';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <NavStyled>
      <NavLinkStyled href="/" exact="true">
        Home
      </NavLinkStyled>

      {isLoggedIn && (
        <NavLinkStyled href="/contacts" exact="true">
          Contacts
        </NavLinkStyled>
      )}
    </NavStyled>
  );
};

export default Navigation;
