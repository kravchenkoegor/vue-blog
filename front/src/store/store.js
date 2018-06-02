import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('jwtToken') || null,
    user: null,
    isLoading: false
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setToken (state, token) {
      state.token = token
    },
    setLoading (state, loading) {
      state.isLoading = loading
    }
  },
  actions: {
    loginUser ({commit}, {user, token}) {
      commit('setUser', user)
      localStorage.setItem('jwtToken', token)
      localStorage.setItem('user', JSON.stringify(user))
    },
    logoutUser ({commit}) {
      commit('setUser', null)
      commit('setToken', null)
      localStorage.clear()
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setLoading ({commit}, loading) {
      commit('setLoading', loading)
    }
  },
  getters: {
    getToken (state) {
      return state.token
    },
    isUserLoggedIn (state) {
      return !!state.token
    },
    getUser (state) {
      return state.user
    },
    isLoading (state) {
      return state.isLoading
    }
  }
})
