import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  logoutSuccess,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './authActions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const isLoggedIn = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [logoutSuccess]: () => false,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
});

const isFetchingCurrent = createReducer(false, {
  [getCurrentUserRequest]: () => true,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
});

export default combineReducers({
  user,
  token,
  isLoggedIn,
  isFetchingCurrent,
});
