import React, { Component } from 'react';
import { Heading } from 'grommet';
import UsersList from '../lists/UsersList';
import * as api from '../../utils/api';

class LoginPage extends Component {
  state = {
    users: [],
    isLoaded: false
  };
  render() {
    const { users, isLoaded } = this.state;
    const { toggleUserLogin } = this.props;
    return !isLoaded ? (
      <Heading level='3' margin='none'>
        Loading Users...
      </Heading>
    ) : (
      <UsersList users={users} toggleUserLogin={toggleUserLogin} />
    );
  }

  componentDidMount = async () => {
    const { changeCurrentPageTitle } = this.props;
    changeCurrentPageTitle('Login');
    const users = await api.getUsers();
    this.setState({ users, isLoaded: true });
  };
}

export default LoginPage;
