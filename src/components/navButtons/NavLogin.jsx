import React from 'react';
import { Link } from '@reach/router';
import { Button } from 'grommet';
import { User } from 'grommet-icons';

const NavLogin = () => {
  return (
    <Link to='/login'>
      <Button label='Login' icon={<User />} />
    </Link>
  );
};

export default NavLogin;
