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

  componentDidMount = async () => {
    this.props.changeCurrentPageTitle('Articles');
    const articles = await api.getArticles();
    this.setState({ articles, isLoaded: true });
  };

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (!prevState.isLoaded && this.state.isLoaded) {
  //     this.setState({ currentArticleBody: 'hello' });
  //   }
  // };

  // setCurrentArticleBody = currentArticleBody => {
  //   this.setState({ currentArticleBody });
  // };
}

export default ArticlesPage;
