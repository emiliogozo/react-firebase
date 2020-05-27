import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import AccountPage from '../Account';
import HomePage from '../Home';
import Navigation from '../Navigation';
import PasswordForgetPage from '../PasswordForget';
import { withAuthentication } from '../Session';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';

const App = () => {
  return (
    <Router>
      <Navigation />

      <hr />

      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      {/* <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
    </Router>
  );
}

export default withAuthentication(App);
