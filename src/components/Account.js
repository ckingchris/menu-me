import React from 'react';
import { Container } from 'reactstrap';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <Container>
          <div className="form-container">
            <h3>Account: {authUser.email}</h3>
            {/* <h3>Forgot your password?</h3>
            <PasswordForgetForm /> */}
            <h3>Change your password</h3>
            <PasswordChangeForm />
          </div>
        </Container>
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);