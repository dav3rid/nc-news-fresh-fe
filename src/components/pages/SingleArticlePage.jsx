import React, { Component } from 'react';
import { Heading } from 'grommet';
import ArticleCard from '../cards/ArticleCard';
import CommentsList from '../lists/CommentsList';
import ErrorPage from './ErrorPage';
import * as api from '../../utils/api';
import * as utils from '../../utils/utils';

class SingleArticlePage extends Component {
  state = {
    article: {},
    isLoaded: false,
    isErr: false
  };

  render() {
    const { article, isLoaded, isErr } = this.state;
    const { article_id, currentUser } = this.props;
    return isErr ? (
      <ErrorPage errMsg='Article not found...' />
    ) : !isLoaded ? (
      <Heading level='3' margin='none'>
        Loading Article...
      </Heading>
    ) : (
      <>
        <ArticleCard article={article} isFullPage={true} />
        <br />
        <CommentsList article_id={article_id} currentUser={currentUser} />
      </>
    );
  }

  componentDidMount = async () => {
    const { article_id, changeCurrentPageTitle } = this.props;
    changeCurrentPageTitle('Article');
    try {
      const article = await api.getArticleById(article_id);
      const formattedArticle = utils.formatArticle(article);
      this.setState({ article: formattedArticle, isLoaded: true });
    } catch (err) {
      this.setState({ isErr: true });
    }
  };
}

export default SingleArticlePage;
