import React, { Component } from 'react';
import { Box, Heading } from 'grommet';
import ArticleCard from '../cards/ArticleCard';
import CommentsList from '../lists/CommentsList';
import * as api from '../../utils/api';
import * as utils from '../../utils/utils';

class SingleArticlePage extends Component {
  state = {
    article: {},
    isLoaded: false
  };

  render() {
    const { article, isLoaded } = this.state;
    const { article_id } = this.props;
    return !isLoaded ? (
      <Heading level='3' margin='none'>
        Loading Article...
      </Heading>
    ) : (
      <>
        <ArticleCard article={article} isFullPage={true} />
        <br />
        <CommentsList article_id={article_id} />
      </>
    );
  }

  componentDidMount = async () => {
    const { article_id, changeCurrentPageTitle } = this.props;
    changeCurrentPageTitle('Article');
    const article = await api.getArticleById(article_id);
    const formattedArticle = utils.formatArticle(article);
    this.setState({ article: formattedArticle, isLoaded: true });
  };
}

export default SingleArticlePage;
