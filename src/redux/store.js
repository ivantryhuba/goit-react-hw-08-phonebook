import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authReducer';
import contactsReducer from './contacts/contactsReducer';
// import logger from 'redux-logger';

const contactsPersistConfig = {
  key: 'contactList',
  storage,
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// console.log(process.env.NODE_ENV);

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contactList: persistReducer(contactsPersistConfig, contactsReducer),
  },
  // devTools: process.env.NODE_ENV === 'development',
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

const persistor = persistStore(store);

export default { store, persistor };
