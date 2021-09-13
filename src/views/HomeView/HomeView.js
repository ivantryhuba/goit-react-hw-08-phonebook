import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelector';
import styles from './HomeView.module.css';

export const HomeView = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <h1 className={styles.title}>Welcome to PhoneBook</h1>
      {!isLoggedIn && (
        <div className={styles.homeContainer}>
          <p className={styles.text}>Please</p>

          <div className={styles.authNavCont}>
            <NavLink to="/register" exact className={styles.authNavLink}>
              Sign Up
            </NavLink>

            <p className={styles.text}>or</p>

            <NavLink to="/login" exact className={styles.authNavLink}>
              Sign In
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeView;
