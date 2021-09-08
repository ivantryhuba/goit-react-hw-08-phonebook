import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5555';

const fetchContacts = () => {
  return axios.get('/contacts').then(res => res.data);
};

const addContact = contact => {
  return axios.post('/contacts', contact).then(({ data }) => data);
};

const removeContact = contactId => {
  return axios.delete(`/contacts/${contactId}`);
};

export default { fetchContacts, addContact, removeContact };
