import React from 'react';
import { Link } from '@reach/router';
import { Button } from 'grommet';

const NavArticles = () => {
  return (
    <Link to='/articles'>
      <Button label='test' />
    </Link>
  );
};

export default NavArticles;
