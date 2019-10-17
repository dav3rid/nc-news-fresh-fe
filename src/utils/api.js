import axios from 'axios';

const request = axios.create({
  baseURL: 'https://nc-news-fresh.herokuapp.com/api'
});

// ARTICLES

export const getArticles = async articlesParams => {
  const {
    data: { articles }
  } = await request.get('/articles', { params: articlesParams });
  return articles;
};

export const getArticleById = async article_id => {
  const {
    data: { article }
  } = await request.get(`/articles/${article_id}`);
  return article;
};

export const patchArticle = (article_id, voteObj) => {
  request.patch(`/articles/${article_id}`, voteObj);
};

// TOPICS

export const getTopics = async () => {
  const {
    data: { topics }
  } = await request.get('/topics');
  return topics;
};

// COMMENTS

export const getComments = async article_id => {
  const {
    data: { comments }
  } = await request.get(`/articles/${article_id}/comments`);
  return comments;
};

export const postComment = async (username, body, article_id) => {
  const { data } = await request.post(`/articles/${article_id}/comments`, {
    username,
    body
  });
  return data;
};

export const deleteComment = comment_id => {
  return request.delete(`/comments/${comment_id}`);
};

// VOTE ON COMMENT

export const patchComment = (comment_id, voteObj) => {
  request.patch(`/comments/${comment_id}`, voteObj);
};

// USERS

export const getUsers = async () => {
  const {
    data: { users }
  } = await request.get('/users');
  return users;
};
