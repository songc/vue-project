import api from '../api/user'

export const register = ({ commit }, user) => {
  commit('getUser', api.client.register(user))
}

export const login = ({ commit }, user) => {
  api.client.login(user.username, user.password).then(res => {
    commit('getUser', res.data)
  })
}

export const getDatasets = ({ commit }, userId) => {
  commit('getDatasets', api.client.findDataset(userId))
}

export const addDataset = ({ commit }, dataset) => {
  commit('addDataset', api.client.addDataset(dataset))
}
