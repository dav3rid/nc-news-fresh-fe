import React from 'react';
import { Router } from '@reach/router';
import { Box } from 'grommet';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import TopicsPage from './pages/TopicsPage';
import UsersPage from './pages/UsersPage';
import LoginPage from './pages/LoginPage';

const AppBody = props => {
  const { changeCurrentPageTitle } = props;
  return (
    <Box flex align='center' justify='center'>
      <Router>
        <HomePage path='/' changeCurrentPageTitle={changeCurrentPageTitle} />
        <ArticlesPage
          path='/articles'
          changeCurrentPageTitle={changeCurrentPageTitle}
        />
        <TopicsPage
          path='/topics'
          changeCurrentPageTitle={changeCurrentPageTitle}
        />
        <UsersPage
          path='/users'
          changeCurrentPageTitle={changeCurrentPageTitle}
        />
        <LoginPage
          path='/login'
          changeCurrentPageTitle={changeCurrentPageTitle}
        />
      </Router>
    </Box>
  );
};

export default AppBody;
