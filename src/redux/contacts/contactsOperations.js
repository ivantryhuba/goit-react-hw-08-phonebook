import axios from 'axios';
import { store } from '../store';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  isEmpty,
} from './contactsActions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => {
      dispatch(fetchContactsSuccess(data));
      dispatch(isEmpty(data[0] ? false : true));
    })
    .catch(error => dispatch(fetchContactsError(error)));
};

export const addContact = newContact => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('/contacts', newContact)
    .then(({ data }) => {
      dispatch(addContactSuccess(data));
      dispatch(isEmpty(false));
    })
    .catch(error => dispatch(addContactError(error)));
};

export const removeContact = contactId => dispatch => {
  dispatch(removeContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => {
      dispatch(removeContactSuccess(contactId));
      const length = store.getState().contactList.contacts.length;
      dispatch(isEmpty(length > 1 ? false : true));
    })
    .catch(error => dispatch(removeContactError(error)));
};
