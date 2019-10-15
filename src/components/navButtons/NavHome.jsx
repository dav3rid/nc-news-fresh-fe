import React from 'react';
import { Link } from '@reach/router';
import { Button } from 'grommet';
import { Home } from 'grommet-icons';

const NavArticles = () => {
  return (
    <Link to='/'>
      <Button label='Home' icon={<Home />} />
    </Link>
  );
};

export default NavArticles;
