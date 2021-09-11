import axios from 'axios';

import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './authActions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = newUser => dispatch => {
  dispatch(registerRequest());
  axios
    .post('/users/signup', newUser)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(registerSuccess(data));
    })
    .catch(error => dispatch(registerError(error)));
};

export const login = user => dispatch => {
  dispatch(loginRequest());
  axios
    .post('/users/login', user)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(loginSuccess(data));
    })
    .catch(error => dispatch(loginError(error)));
};

export const logOut = () => dispatch => {
  dispatch(logoutRequest());
  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(logoutSuccess());
    })
    .catch(error => dispatch(logoutError(error)));
};

export const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(({ data }) => dispatch(getCurrentUserSuccess(data)))
    .catch(error => dispatch(getCurrentUserError(error)));
};
