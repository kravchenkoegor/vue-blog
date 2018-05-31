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
    console.log(response)
    return response.data
  }
}
