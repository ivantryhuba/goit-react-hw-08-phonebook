import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn, getUserName } from '../../redux/auth/authSelector';
import { logOut } from '../../redux/auth/authOperations';
import defaultAvatar from '../../images/defaultAvatar.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;

  return (
    <div>
      <img src={avatar} alt="default" width="32" />
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
