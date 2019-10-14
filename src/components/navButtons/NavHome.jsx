import React from 'react';
import { Link } from '@reach/router';
import { Button } from 'grommet';

const NavArticles = () => {
  return (
    <Link to='/'>
      <Button label='Home' />
    </Link>
  );
};

export default NavArticles;
