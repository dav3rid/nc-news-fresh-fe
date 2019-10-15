import React, { Component } from 'react';
import { Heading } from 'grommet';
import * as api from '../../utils/api';
import ArticlesList from '../lists/ArticlesList';

class ArticlesPage extends Component {
  state = {
    articles: [],
    isLoaded: false
  };

  render() {
    const { articles, isLoaded } = this.state;
    return !isLoaded ? (
      <Heading level='3' margin='none'>
        Loading Articles...
      </Heading>
    ) : (
      <ArticlesList articles={articles} />
    );
  }

  componentDidUpdate = async (prevProps, prevState) => {
    const { axiosParams } = this.props;
    if (JSON.stringify(prevProps.axiosParams) !== JSON.stringify(axiosParams)) {
      this.setState({ isLoaded: false });
      const articles = await api.getArticles(axiosParams);
      this.setState({ articles, isLoaded: true });
    }
  };

  componentDidMount = async () => {
    this.props.changeCurrentPageTitle('Articles');
    const { axiosParams } = this.props;
    const articles = await api.getArticles(axiosParams);
    this.setState({ articles, isLoaded: true });
  };
}

export default ArticlesPage;
