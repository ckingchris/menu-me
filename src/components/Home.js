import React from 'react';
import { Container } from 'reactstrap';

import withAuthorization from './withAuthorization';

const HomePage = () =>
  <div>
    <Container>
      <div className="form-container">
      <h3>Home Page</h3>
        <p>The Home Page is accessible by every signed in user.</p>
      </div>
    </Container>
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);