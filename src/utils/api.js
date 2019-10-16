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

// USERS

export const getUsers = async () => {
  const {
    data: { users }
  } = await request.get('/users');
  return users;
};

getUsers();
