import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../Navigation';



const App = () => {
  return (
    <Router>
      <Navigation />

      <hr />

      {/* <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
    </Router>
  )
}

export default App;
