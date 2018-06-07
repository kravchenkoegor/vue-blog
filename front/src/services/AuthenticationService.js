import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('/api/register', credentials)
  },
  async login (credentials) {
    const response = await Api().post('/api/login', credentials)
    return response.data
  }
}
