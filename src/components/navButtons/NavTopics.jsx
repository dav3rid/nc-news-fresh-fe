import React from 'react';
import { Link } from '@reach/router';
import { Button } from 'grommet';
import { Catalog } from 'grommet-icons';

const NavTopics = () => {
  return (
    <Link to='/topics'>
      <Button label='Topics' icon={<Catalog />} />
    </Link>
  );
};

export default NavTopics;
