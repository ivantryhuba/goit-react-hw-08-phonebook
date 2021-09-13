import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={styles.authNavCont}>
      <NavLink
        to="/register"
        exact
        className={styles.authNavLink}
        activeClassName={styles.actAuthNavLink}
      >
        Sign Up
      </NavLink>

      <NavLink
        to="/login"
        exact
        className={styles.authNavLink}
        activeClassName={styles.actAuthNavLink}
      >
        Sign In
      </NavLink>
    </div>
  );
};

export default AuthNav;
