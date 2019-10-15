import React, { Component } from 'react';
import { Router } from '@reach/router';
import { Box } from 'grommet';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import TopicsPage from './pages/TopicsPage';
import UsersPage from './pages/UsersPage';
import LoginPage from './pages/LoginPage';

class AppBody extends Component {
  state = {};
  render() {
    const {
      currentPageTitle,
      changeCurrentPageTitle,
      axiosParams,
      setAxiosParams
    } = this.props;
    return (
      <Box
        flex
        align='center'
        justify={currentPageTitle === 'Articles' ? 'start' : 'center'}
      >
        <Router>
          <HomePage path='/' changeCurrentPageTitle={changeCurrentPageTitle} />
          <ArticlesPage
            path='/articles'
            changeCurrentPageTitle={changeCurrentPageTitle}
            axiosParams={axiosParams}
          />
          <TopicsPage
            path='/topics'
            changeCurrentPageTitle={changeCurrentPageTitle}
            setAxiosParams={setAxiosParams}
            axiosParams={axiosParams}
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
  }
}

export default AppBody;
