import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import storeInLocal from './plugin/storeInLocal'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  },
  plugins: [ storeInLocal ]
})

/* Vuex相关配置 */
