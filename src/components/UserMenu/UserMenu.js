import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/authSelector';
import { logOut } from '../../redux/auth/authOperations';
import defaultAvatar from '../../images/defaultAvatar.png';

import {
  UserMenuContainer,
  UserContainer,
  AvatarContainer,
  Avatar,
  User,
  UserName,
  LogOutBtn,
} from './UserMenu.styles';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;

  return (
    <UserMenuContainer>
      <UserContainer>
        <AvatarContainer>
          <Avatar src={avatar} alt="default" />
        </AvatarContainer>

        <User>
          Welcome, <UserName>{name}</UserName>
        </User>
      </UserContainer>

      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Log out
      </LogOutBtn>
    </UserMenuContainer>
  );
};

export default UserMenu;
