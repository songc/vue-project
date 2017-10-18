import userApi from '../api/user'
import datasetApi from '../api/dataset'
import fileApi from '../api/file'

// action about user
export const register = ({ commit }, user) => {
  return userApi.register(user).then(res => {
    commit('changeLoginStatus', true)
    commit('changeUser', res.data)
  })
}

export const login = ({ commit }, user) => {
  return userApi.login(user.username, user.password).then(res => {
    commit('changeLoginStatus', true)
    commit('changeUser', res.data)
  })
}

export const getDatasets = ({ commit }, userId) => {
  return userApi.getDataset(userId).then(res => {
    commit('changeDatasets', res.data.datasetList)
  })
}

export const postDataset = ({ commit }, userId, dataset) => {
  return userApi.postDataset(userId, dataset).then(res => {
    commit('addDataset', res.data)
    commit('changeCurrentDataset', res.data)
  })
}

// action about dataset
export const getPublicDatasets = ({ commit }, page, size) => {
  return datasetApi.getPage(page, size).then(res => {
    commit('changeDatasets', res.data.datasetList)
  })
}
export const delDatasetById = ({ commit }, datasetId) => {
  return datasetApi.deleteById(datasetId).then(res => {
    commit('delDataset', datasetId)
  })
}

export const getFiles = ({commit}, datasetId) => {
  return datasetApi.getFiles(datasetId).then(res => {
    commit('changeFiles', res.data.fileList)
  })
}

export const postFiles = ({commit}, datasetId, files) => {
  return datasetApi.postFile(datasetId, files).then(res => {
    commit('addFile', res.data.fileList)
  })
}

// operation file
export const getFileByRowKey = ({commit}, rowKey) => {
  return fileApi.getByRowKey(rowKey).then(res => {
    commit('changeCurrentFile', res.data)
  })
}
export const delFile = ({commit}, rowKey) => {
  return fileApi.deleteByRowKey(rowKey).then(res => {
    commit('delFile', rowKey)
  })
}
