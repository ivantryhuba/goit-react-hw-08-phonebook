import React from 'react';
import { AuthNavCont, AuthNavLink } from './AuthNav.styles';

export const AuthNav = () => {
  return (
    <AuthNavCont>
      <AuthNavLink href="/register" exact="true">
        Sign Up
      </AuthNavLink>

      <AuthNavLink href="/login" exact="true">
        Sign In
      </AuthNavLink>
    </AuthNavCont>
  );
};

export default AuthNav;
