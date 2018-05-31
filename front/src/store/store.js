import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('jwtToken') || null,
    user: null
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setToken (state, token) {
      state.token = token
    }
  },
  actions: {
    loginUser ({commit}, {user, token}) {
      commit('setUser', user)
      localStorage.setItem('jwtToken', token)
    },
    logoutUser ({commit}) {
      commit('setUser', null)
      commit('setToken', null)
      localStorage.clear()
    },
    setToken ({commit}, token) {
      commit('setToken', token)
    }
  },
  getters: {
    getToken (state) {
      return state.token
    },
    isUserLoggedIn (state) {
      return !!state.token
    }
  }
})
