import React, { Component } from 'react';
import { Router } from '@reach/router';
import { Box } from 'grommet';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import SingleArticlePage from './pages/SingleArticlePage';
import TopicsPage from './pages/TopicsPage';
import UsersPage from './pages/UsersPage';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';

class AppBody extends Component {
  state = {};
  render() {
    const {
      currentPageTitle,
      changeCurrentPageTitle,
      articlesParams,
      setAxiosParams,
      currentUser,
      toggleUserLogin
    } = this.props;
    return (
      <Box
        flex
        align='center'
        justify={
          currentPageTitle.includes('Article') || currentPageTitle === 'Login'
            ? 'start'
            : 'center'
        }
      >
        <Router>
          <HomePage
            path='/'
            changeCurrentPageTitle={changeCurrentPageTitle}
            currentUser={currentUser}
          />
          <ArticlesPage
            path='/articles'
            changeCurrentPageTitle={changeCurrentPageTitle}
            articlesParams={articlesParams}
          />
          <SingleArticlePage
            path='articles/:article_id'
            changeCurrentPageTitle={changeCurrentPageTitle}
            currentUser={currentUser}
          />
          <TopicsPage
            path='/topics'
            changeCurrentPageTitle={changeCurrentPageTitle}
            setAxiosParams={setAxiosParams}
          />
          <UsersPage
            path='/users'
            changeCurrentPageTitle={changeCurrentPageTitle}
          />
          <LoginPage
            path='/login'
            changeCurrentPageTitle={changeCurrentPageTitle}
            toggleUserLogin={toggleUserLogin}
          />
          <ErrorPage default />
        </Router>
      </Box>
    );
  }
}

export default AppBody;
