import Api from '@/services/Api'

export default {
  async index () {
    const response = await Api().get('/posts')
    return response.data
  },
  async createPost (credentials) {
    const response = await Api().post('/create', credentials)
    return response.data
  },
  async changePage (page) {
    const response = await Api().post('/page', page)
    return response.data
  },
  async single (id) {
    const response = await Api().get('/post/' + id)
    return response.data
  },
  async editPost (credentials) {
    const response = await Api().post('/save', credentials)
    return response.data
  },
  async deletePost (id) {
    const response = await Api().get('/delete/' + id)
    return response.data
  }
}
