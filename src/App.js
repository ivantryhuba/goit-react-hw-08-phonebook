import React, { useEffect, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import { connect } from 'react-redux';
import { Container } from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import { getCurrentUser } from './redux/auth/authOperations';
import { getIsFetchingCurrent } from './redux/auth/authSelector';

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
  const isRefreshing = useSelector(getIsFetchingCurrent);

  console.log(`isRefreshing`, isRefreshing);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Container>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute path="/" exact>
              <Home />
            </PublicRoute>

            <PublicRoute path="/register" redirectTo="/contacts" restricted>
              <Register />
            </PublicRoute>

            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <Login />
            </PublicRoute>

            <PrivateRoute path="/contacts">
              {/* <H1Styled>PhoneBook</H1Styled>
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
            )} */}
              <Contacts />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    )
  );
};

export default connect()(App);
