import { createStore } from 'vuex'
import * as auth from '../services/AuthService'

export default createStore({
  state: {
    IsLogin: false,
    apiUrl: `${window.location.protocol}//${window.location.hostname}:3000/api`,
    username: null,
    userId: null
  },
  mutations: {
    authenticate (state) {
      state.IsLogin = auth.IsLogin()
      if (state.IsLogin) {
        state.username = auth.GetUsername()
        state.userId = auth.GetuserId()
      } else {
        state.username = null
        state.userId = null
      }
    }
  },
  actions: {
    authenticate (context) {
      context.commit('authenticate')
    }
  },
  modules: {
  }
})
