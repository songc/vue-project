import Vuex from 'vuex'
import Vue from 'vue'
import * as actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  isLogin: false,
  user: {
    id: 0,
    username: '',
    email: '',
    sex: '',
    address: ''
  },
  currentDataset: {
    id: 0,
    name: '',
    author: '',
    userId: ''
  },
  currentFile: {
    rowKey: '',
    parentId: 0,
    name: '',
    content: ''
  },
  datasets: [],
  files: []
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

