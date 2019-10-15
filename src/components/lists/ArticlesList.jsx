import React from 'react';
import * as utils from '../../utils/utils';
import ArticleCard from '../cards/ArticleCard';

const ArticlesList = props => {
  const { articles } = props;
  const formattedArticles = utils.formatArticles(articles);
  return formattedArticles.map(article => {
    return (
      <div key={article.article_id}>
        <br />
        <ArticleCard article={article} />
      </div>
    );
  });
};

export default ArticlesList;
