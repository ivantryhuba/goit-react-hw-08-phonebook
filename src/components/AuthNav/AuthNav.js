import React from 'react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" exact>
        Sign Up
      </NavLink>

      <NavLink to="/login" exact>
        Sign In
      </NavLink>
    </div>
  );
};

export default AuthNav;
