import React from 'react';
import { Link } from '@reach/router';
import { Button } from 'grommet';
import { User } from 'grommet-icons';

const NavLogin = props => {
  const { currentUser, toggleUserLogin } = props;
  return currentUser === 'Guest' ? (
    <Link to='/login'>
      <Button label='Login' icon={<User />} />
    </Link>
  ) : (
    <Button label='Logout' icon={<User />} onClick={() => toggleUserLogin()} />
  );
};

export default NavLogin;
