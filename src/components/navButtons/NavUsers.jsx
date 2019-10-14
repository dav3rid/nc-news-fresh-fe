import React from 'react';
import { Link } from '@reach/router';
import { Button } from 'grommet';

const NavUsers = () => {
  return (
    <Link to='/users'>
      <Button label='Users' />
    </Link>
  );
};

export default NavUsers;
