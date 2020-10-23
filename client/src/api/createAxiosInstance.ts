import axios from 'axios';

export default function() {
  return axios.create({
    baseURL:
      process.env.NODE_ENV === 'production'
        ? process.env.HEROKU_URL
        : 'http://localhost:3000',
    headers: {
      Authorization: localStorage.getItem('jwtToken') || null
    }
  });
}
