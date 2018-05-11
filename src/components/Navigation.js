import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';

import * as routes from '../constants/routes';


const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <Navbar color="light" light expand="md">
    <Link 
      className="navbar-brand"
      to={routes.HOME}
    >
      menu.me
    </Link>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink>
          <Link className="btn btn-info" to={routes.ACCOUNT}>Account</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <SignOutButton />
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>

const NavigationNonAuth = () =>
  <Navbar color="light" light expand="md">
    <Link 
      className="navbar-brand"
      to={routes.LANDING}
    >
    menu.me</Link>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink>
          <Link 
            className="btn btn-info" 
            to={routes.SIGN_IN}
            >
            Sign In
            </Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <Link 
            className="btn btn-info" 
            to={routes.SIGN_UP}
            >
            Sign Up
            </Link>
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>

export default Navigation;