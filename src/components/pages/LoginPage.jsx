import React, { Component } from 'react';
import { Heading } from 'grommet';

class LoginPage extends Component {
  render() {
    return <Heading>Welcome to the Login Page, bow to its will!</Heading>;
  }
  componentDidMount() {
    this.props.changeCurrentPageTitle('Login');
  }
}

export default LoginPage;
