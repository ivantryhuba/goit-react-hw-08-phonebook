import { createSelector } from 'reselect';

export const getAllContacts = state => state.contactList.contacts;

export const getFilter = state => state.contactList.filter;

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter),
    );
  },
);
