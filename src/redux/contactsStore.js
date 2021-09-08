import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contactsReducer';
import logger from 'redux-logger';

const rootReducer = combineReducers({ contactList: contactsReducer });

console.log(process.env.NODE_ENV);

const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
