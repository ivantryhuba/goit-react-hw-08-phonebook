import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelector';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav className={styles.navigation}>
      <NavLink
        to="/"
        exact
        className={styles.navLink}
        activeClassName={styles.actNavLink}
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={styles.navLink}
          activeClassName={styles.actNavLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
