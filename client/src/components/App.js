
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';




import PasswordForgetPage from './PasswordForget';

import AccountPage from './Account';
import AdminPage from './Admin';

import * as ROUTES from '../constants/routes';
import { withAuthentication } from './Session';
import BattleClub  from 'views/examples/BattleClub';
import ProfilePage from 'views/examples/ProfilePage';
import  LoginPage  from 'views/examples/LoginPage';
import  SignUpPage  from 'views/examples/SignUpPage';
import Index from './../views/Index';


const App = () => (
  <Router>
    <div>
      <Route exact path={ROUTES.LANDING} component={Index} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={LoginPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.BATTLECLUB} component={BattleClub} />
      <Route path={ROUTES.PROFILE} component={ProfilePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default withAuthentication(App);