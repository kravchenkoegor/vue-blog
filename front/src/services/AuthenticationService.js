import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('/register', credentials)
  },
  async login (credentials) {
    const response = await Api().post('/login', credentials)
    return response.data
  }
}
