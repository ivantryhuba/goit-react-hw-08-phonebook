import React from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeContact } from '../../redux/contacts/contactsOperations';

import { ContactItemStyled, RemoveBtnStyled } from './Contact.styles';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(removeContact(id));
  };
  return (
    <ContactItemStyled>
      {name} : {number}
      <RemoveBtnStyled onClick={deleteContact} type="button">
        Remove
      </RemoveBtnStyled>
    </ContactItemStyled>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default connect()(Contact);
