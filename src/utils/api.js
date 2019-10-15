import axios from 'axios';

const request = axios.create({
  baseURL: 'https://nc-news-fresh.herokuapp.com/api'
});

// ARTICLES

export const getArticles = async () => {
  const {
    data: { articles }
  } = await request.get('/articles');
  return articles;
};
