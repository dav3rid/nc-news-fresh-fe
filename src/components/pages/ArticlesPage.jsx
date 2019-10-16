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
    const { articlesParams } = this.props;
    if (
      JSON.stringify(prevProps.articlesParams) !==
      JSON.stringify(articlesParams)
    ) {
      this.setState({ isLoaded: false });
      const articles = await api.getArticles(articlesParams);
      this.setState({ articles, isLoaded: true });
    }
  };

  componentDidMount = async () => {
    this.props.changeCurrentPageTitle('Articles');
    const { articlesParams } = this.props;
    const articles = await api.getArticles(articlesParams);
    this.setState({ articles, isLoaded: true });
  };
}

export default ArticlesPage;
