import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactsSuccess,
  addContactSuccess,
  removeContactSuccess,
  changeFilter,
  isEmpty,
} from './contactsActions';

const contacts = createReducer([], {
  [fetchContactsSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [removeContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

// const isFetchingContacts=createReducer(false,{
// [fetchContactsRequest]:()=>true,
// [fetchContactsSuccess]:()=>false,
// [fetchContactsError]:()=>false
// })

const empty = createReducer(false, {
  [isEmpty]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  contacts,
  filter,
  empty,
});
