import Vue from 'vue'
import Vuex from 'vuex'
import { TOKEN_KEY } from '@/constant/common.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    joy: localStorage.getItem(TOKEN_KEY.TOKEN) ? localStorage.getItem(TOKEN_KEY.TOKEN) : '',
    id: localStorage.getItem(TOKEN_KEY.ID) ? localStorage.getItem(TOKEN_KEY.ID) : '',
    username: localStorage.getItem(TOKEN_KEY.USERNAME) ? localStorage.getItem(TOKEN_KEY.USERNAME) : ''
  },
  mutations: {
    changeLogin (state, user) {
      state.joy = user.joy
      state.id = user.id
      state.username = user.username
      localStorage.setItem(TOKEN_KEY.TOKEN, user.joy)
      localStorage.setItem(TOKEN_KEY.ID, user.id)
      localStorage.setItem(TOKEN_KEY.USERNAME, user.username)
    }
  },
  actions: {
  },
  modules: {
  }
})
