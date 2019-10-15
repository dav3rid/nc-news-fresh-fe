import React, { Component } from 'react';
import { Router } from '@reach/router';
import { Box } from 'grommet';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import TopicsPage from './pages/TopicsPage';
import UsersPage from './pages/UsersPage';
import LoginPage from './pages/LoginPage';

class AppBody extends Component {
  state = {
    axiosParams: {
      articles: {
        sort_by: undefined,
        order: undefined,
        author: undefined,
        topic: undefined
      },
      comments: { sort_by: undefined, order: undefined }
    }
  };
  render() {
    const { currentPageTitle, changeCurrentPageTitle } = this.props;
    const { axiosParams } = this.state;
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
            setAxiosParams={this.setAxiosParams}
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

  // CHANGE PARAMS OBJECT HELD IN STATE TO BE PASSED TO ANY PAGE TO ADD TO AXIOS REQUEST
  setAxiosParams = (endpoint, param, value) => {
    this.setState({ axiosParams: { [endpoint]: { [param]: value } } });
  };
}

export default AppBody;
