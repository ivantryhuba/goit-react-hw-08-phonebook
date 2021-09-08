import { v4 as uuidv4 } from 'uuid';
import { getAllContacts } from './redux/contactsSelector';
import { connect } from 'react-redux';
import { Container } from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { H1Styled, H2Styled } from './App.styles';

const App = ({ contacts }) => {
  return (
    <Container>
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
      <ContactList />
    </Container>
  );
};

const mapStateToProps = state => ({
  contacts: getAllContacts(state),
});

export default connect(mapStateToProps)(App);
