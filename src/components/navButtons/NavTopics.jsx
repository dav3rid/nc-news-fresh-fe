import React from 'react';
import { Link } from '@reach/router';
import { Button } from 'grommet';

const NavTopics = () => {
  return (
    <Link to='/topics'>
      <Button label='Topics' />
    </Link>
  );
};

export default NavTopics;
