import Api from '@/services/Api'

export default {
  async index () {
    const response = await Api().get('/songs')
    return response.data
  }
}
