import React, { Component } from 'react';
import { Heading } from 'grommet';
import * as api from '../../utils/api';
import ArticlesList from '../lists/ArticlesList';
import ErrorPage from './ErrorPage';

class ArticlesPage extends Component {
  state = {
    articles: [],
    isLoaded: false,
    isErr: false
  };

  render() {
    const { articles, isLoaded, isErr } = this.state;
    return !isErr ? (
      !isLoaded ? (
        <Heading level='3' margin='none'>
          Loading Articles...
        </Heading>
      ) : (
        <ArticlesList articles={articles} />
      )
    ) : (
      <ErrorPage />
    );
  }

  componentDidUpdate = async (prevProps, prevState) => {
    const { articlesParams } = this.props;
    if (
      JSON.stringify(prevProps.articlesParams) !==
      JSON.stringify(articlesParams)
    ) {
      this.setState({ isLoaded: false });
      try {
        const articles = await api.getArticles(articlesParams);
        this.setState({ articles, isLoaded: true });
      } catch (err) {
        this.setState({ isErr: true });
      }
    }
  };

  componentDidMount = async () => {
    this.props.changeCurrentPageTitle('Articles');
    const { articlesParams } = this.props;

    try {
      const articles = await api.getArticles(articlesParams);
      this.setState({ articles, isLoaded: true });
    } catch (err) {
      this.setState({ isErr: true });
    }
  };
}

export default ArticlesPage;
