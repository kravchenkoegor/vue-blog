import { createStore } from 'vuex';

interface User {
  _id: string;
  dateOfBirth: string;
  email: string;
  fullName: string;
  location: string;
  password: string;
  username: string;
}

interface State {
  user: null | User;
}

export default createStore<State>({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    setUser({ commit }, payload) {
      commit('setUser', payload);
    }
  },
  getters: {
    isLoggedIn(state) {
      return Boolean(state.user);
    },
    username(state) {
      return state.user?.username;
    }
  },
  modules: {}
});
