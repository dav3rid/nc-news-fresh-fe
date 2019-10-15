import React from 'react';
import { Link } from '@reach/router';
import { Button } from 'grommet';
import { Article } from 'grommet-icons';

const NavArticles = () => {
  return (
    <Link to='/articles'>
      <Button label='Articles' icon={<Article />} />
    </Link>
  );
};

export default NavArticles;
