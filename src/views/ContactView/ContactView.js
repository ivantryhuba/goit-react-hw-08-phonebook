import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
  getAllContacts,
  getFilteredContacts,
  getIsEmpty,
} from '../../redux/contacts/contactsSelector';
import { fetchContacts } from '../../redux/contacts/contactsOperations';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from '../../components/ContactForm/ContactForm';
import Contact from '../../components/Contact/Contact';
import Filter from '../../components/Filter/Filter';
import { Notification } from '../../components/Notification/Notification';
import { H1Styled, H2Styled, ContactListStyled } from './ContactView.styles';

const ContactView = () => {
  const contacts = useSelector(getAllContacts);
  const filteredContacts = useSelector(getFilteredContacts);
  const isEmpty = useSelector(getIsEmpty);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <H1Styled>PhoneBook</H1Styled>
      <H2Styled>Add contact</H2Styled>
      <ContactForm />
      <H2Styled>Contacts</H2Styled>

      {contacts.length > 0 && (
        <Filter
          id={uuidv4()}
          label={'Find contacts by name'}
          placeholder={'Boris Britva'}
          name={'search'}
        />
      )}

      {filteredContacts.length ? (
        <ContactListStyled>
          {filteredContacts.map(({ id, name, number }) => (
            <Contact key={id} name={name} number={number} id={id} />
          ))}
        </ContactListStyled>
      ) : null}

      {!contacts[0] && isEmpty && (
        <Notification text={'You don`t have any contacts'} />
      )}

      {contacts[0] && !filteredContacts.length && (
        <Notification text={'No contact matches '} />
      )}
    </>
  );
};

export default connect()(ContactView);
