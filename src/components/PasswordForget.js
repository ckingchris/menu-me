import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  Container,
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input } from 'reactstrap';

import { auth } from '../firebase';

const PasswordForgetPage = () =>
  <div>
    <Container>
      <div className="form-container">
        <h3>Reset Password</h3>
        <PasswordForgetForm />
      </div>
    </Container>
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input 
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            placeholder="Email Address"
          />
        </FormGroup>
        <Button
          className="btn-info" 
          disabled={isInvalid} 
          type="submit"
        >
          Reset My Password
        </Button>

        { error && <p>{error.message}</p> }
      </Form>
      // <form onSubmit={this.onSubmit}>
      //   <input
      //     value={this.state.email}
      //     onChange={event => this.setState(byPropKey('email', event.target.value))}
      //     type="text"
      //     placeholder="Email Address"
      //   />
      //   <button disabled={isInvalid} type="submit">
      //     Reset My Password
      //   </button>

      //   { error && <p>{error.message}</p> }
      // </form>
    );
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to="/pw-forget">Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};