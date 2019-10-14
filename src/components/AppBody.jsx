import React from 'react';
import { Router } from '@reach/router';
import { Box } from 'grommet';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
const AppBody = () => {
  return (
    <Box flex align='center' justify='center'>
      <Router>
        <HomePage path='/' />
        <ArticlesPage path='/articles' />
      </Router>
    </Box>
  );
};

export default AppBody;
