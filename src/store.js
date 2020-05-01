import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    credit: 0
  },
  mutations: {
    setCredit (state, payload) {
      state.credit = payload
    }
  },
  getters: {
    getCredit (state) {
      return state.credit
    }
  },
  actions: {

  }
})
