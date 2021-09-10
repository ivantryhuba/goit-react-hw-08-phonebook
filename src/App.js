import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { getAllContacts } from './redux/contacts/contactsSelector';
import { connect } from 'react-redux';
import { Container } from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { H1Styled, H2Styled } from './App.styles';

const Register = lazy(() =>
  import(
    './views/RegisterView/RegisterView' /* webpackChunkName: "Register" */
  ),
);
const Login = lazy(() =>
  import('./views/LoginView/LoginView' /* webpackChunkName: "Login" */),
);

const App = ({ contacts }) => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={'Loading...'}>
        <Switch>
          <Route path="/register" exact>
            <Register />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </Suspense>

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
