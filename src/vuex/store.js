import Vuex from 'vuex'
import Vue from 'vue'
import * as actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  isLogin: false,
  user: {},
  currentDataset: {},
  datasets: [],
  files: []
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

