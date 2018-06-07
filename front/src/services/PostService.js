import Api from '@/services/Api'

export default {
  async index () {
    const response = await Api().get('/api/posts')
    return response.data
  },
  async createPost (credentials) {
    const response = await Api().post('/api/create', credentials)
    return response.data
  },
  async changePage (page) {
    const response = await Api().post('/api/page', page)
    return response.data
  },
  async single (id) {
    const response = await Api().get('/api/post/' + id)
    return response.data
  },
  async savePost (credentials) {
    const response = await Api().post('/api/save_post', credentials)
    return response.data
  },
  async deletePost (id) {
    const response = await Api().get('/api/delete/' + id)
    return response.data
  },
  async getUser (userID) {
    const response = await Api().post('/api/user', userID)
    return response.data
  },
  async saveUser (user) {
    const response = await Api().post('/api/save_user', user)
    return response.data
  }
}
