import axios from 'axios';

const request = axios.create({
  baseURL: 'https://nc-news-fresh.herokuapp.com/api'
});

// ARTICLES

export const getArticles = async axiosParams => {
  const {
    data: { articles }
  } = await request.get('/articles', { params: axiosParams.articles });
  return articles;
};

// TOPICS

export const getTopics = async () => {
  const {
    data: { topics }
  } = await request.get('/topics');
  return topics;
};
