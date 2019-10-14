import React, { Component } from 'react';
import { Heading } from 'grommet';

class UsersPage extends Component {
  render() {
    return <Heading>Welcome to the Users Page, fear its power</Heading>;
  }
  componentDidMount() {
    this.props.changeCurrentPageTitle('Users');
  }
}

export default UsersPage;
