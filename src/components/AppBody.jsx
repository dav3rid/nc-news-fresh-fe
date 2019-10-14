import React from 'react';
import { Router } from '@reach/router';
import { Box } from 'grommet';
import HomePage from './pages/HomePage';
const AppBody = () => {
  return (
    <Box flex align='center' justify='center'>
      <Router>
        <HomePage path='/' />
      </Router>
    </Box>
  );
};

export default AppBody;
