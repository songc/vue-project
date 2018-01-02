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
    address: '',
    createdAt: 0,
    updatedAt: 0
  },
  currentDataset: {
    id: 0,
    name: '',
    author: '',
    state: '',
    type: '',
    createdAt: 0,
    updatedAt: 0,
    userId: 0
  },
  currentFile: {},
  datasets: [],
  files: [],
  multiRegion: {
    width: 0,
    height: 0,
    naturalWidth: 0,
    naturalHeight: 0,
    f: [],
    f0: []
  },
  datasetMetas: [],
  iecMetas: [],
  imageMetas: [],
  environments: [],
  samples: [],
  softwares: [],
  equipments: []
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

