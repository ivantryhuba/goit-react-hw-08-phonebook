import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import { getAllContacts } from './redux/contacts/contactsSelector';
import { connect } from 'react-redux';
import { Container } from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import { H1Styled, H2Styled } from './App.styles';
import { getCurrentUser } from './redux/auth/authOperations';

const Home = lazy(() =>
  import('./views/HomeView/HomeView' /* webpackChunkName: "Home" */),
);

const Register = lazy(() =>
  import(
    './views/RegisterView/RegisterView' /* webpackChunkName: "Register" */
  ),
);

const Login = lazy(() =>
  import('./views/LoginView/LoginView' /* webpackChunkName: "Login" */),
);

const Contacts = lazy(() =>
  import('./views//ContactView/ContactView' /* webpackChunkName: "Contacts" */),
);

const App = ({ contacts }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={'Loading...'}>
        <Switch>
          <PublicRoute path="/" exact>
            <Home />
          </PublicRoute>

          <PublicRoute path="/register" exact restricted>
            <Register />
          </PublicRoute>

          <PublicRoute path="/login" exact restricted>
            <Login />
          </PublicRoute>

          <PrivateRoute path="/contacts">
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
            <Contacts />
          </PrivateRoute>

          {/* <Route path="/contacts" exact>
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
            <Contacts />
          </Route> */}
        </Switch>
      </Suspense>
    </Container>
  );
};

const mapStateToProps = state => ({
  contacts: getAllContacts(state),
});

export default connect(mapStateToProps)(App);
