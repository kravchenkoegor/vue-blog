import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: process.env.HEROKU_URL,
    headers: {
      'Authorization': localStorage.getItem('jwtToken') || null
    }
  })
}
