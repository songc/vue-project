import Vuex from 'vuex'
import Vue from 'vue'
import * as actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  user: {
    // id: '',
    // username: '',
    // password: '',
    // email: '',
    // sex: '',
    // address: ''
  },
  datasets: [],
  folders: [
    // {
    //   id: '',
    //   name: '',
    //   children: []
    // }
  ],
  files: [
    // id: '',
    // name: '',
    // data: {}
  ]
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

