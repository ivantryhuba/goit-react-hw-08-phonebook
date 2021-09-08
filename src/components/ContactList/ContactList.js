import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getVisibleContacts } from '../../redux/contactsSelector';
import { fetchContacts, removeContact } from '../../redux/contactsOperations';
import { connect, useDispatch } from 'react-redux';
import { Notification } from '../Notification/Notification';
import {
  ContactListStyled,
  ContactItemStyled,
  RemoveBtnStyled,
} from './ContactList.styles';

const ContactList = ({ contacts, onRemoveContact }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contacts.length > 0 ? (
        <ContactListStyled>
          {contacts.map(({ id, name, number }) => (
            <ContactItemStyled key={id}>
              {name} : {number}
              <RemoveBtnStyled
                type="button"
                onClick={() => onRemoveContact(id)}
              >
                Remove
              </RemoveBtnStyled>
            </ContactItemStyled>
          ))}
        </ContactListStyled>
      ) : (
        <Notification text={'You don`t have any contacts'} />
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onRemoveContact: id => dispatch(removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
