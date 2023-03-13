import React from 'react';

import { NavItem, NavLink, Button} from "reactstrap";

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <NavLink type="button" onClick={firebase.doSignOut}>
    Sign Out
    </NavLink>
);

export default withFirebase(SignOutButton);
