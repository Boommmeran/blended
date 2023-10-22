import axios from 'axios';

const API_KEY = 'Iffj47kuje1B0aVuISuXJkZIKF9U0U3nzlYwgdWXoMnDzkApswAKqNEg';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

// "https://api.pexels.com/v1/search?query=nature&per_page=1"

export const getImages = (query, page) => {
  try {
    const { data } = axios.get(`search?query=${query}&page=${page}`);
    return data;
  } catch (error) {
    throw new Error(error.message)
  }
};

