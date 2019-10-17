import React, { Component } from 'react';
import { Heading } from 'grommet';
import UsersList from '../lists/UsersList';
import * as api from '../../utils/api';
import ErrorPage from '../pages/ErrorPage';

class LoginPage extends Component {
  state = {
    users: [],
    isLoaded: false,
    isErr: false
  };
  render() {
    const { users, isLoaded, isErr } = this.state;
    const { toggleUserLogin } = this.props;
    return !isErr ? (
      !isLoaded ? (
        <Heading level='3' margin='none'>
          Loading Users...
        </Heading>
      ) : (
        <UsersList users={users} toggleUserLogin={toggleUserLogin} />
      )
    ) : (
      <ErrorPage errMsg='Users could not be retrieved...' />
    );
  }

  componentDidMount = async () => {
    const { changeCurrentPageTitle } = this.props;
    changeCurrentPageTitle('Login');

    try {
      const users = await api.getUsers();
      this.setState({ users, isLoaded: true });
    } catch (err) {
      this.setState({ isErr: true });
    }
  };
}

export default LoginPage;
