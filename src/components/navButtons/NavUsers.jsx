import React from 'react';
import { Link } from '@reach/router';
import { Button } from 'grommet';
import { Group } from 'grommet-icons';

const NavUsers = () => {
  return (
    <Link to='/users'>
      <Button label='Users' icon={<Group />} />
    </Link>
  );
};

export default NavUsers;
