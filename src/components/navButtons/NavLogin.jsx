import React from 'react';
import { Link } from '@reach/router';
import { Button } from 'grommet';

const NavLogin = () => {
  return (
    <Link to='/login'>
      <Button label='Login' />
    </Link>
  );
};

export default NavLogin;
