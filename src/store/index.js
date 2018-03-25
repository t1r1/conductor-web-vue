import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      user: {},
      authState: 'authenticating'
  },
  mutations: {
    setAuthState (state, payload) {
      state.authState = payload
    },
    setUser (state, payload) {
      state.user = payload
    }
  }
})

export default store