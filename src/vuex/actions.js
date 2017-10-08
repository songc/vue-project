import userApi from '../api/user'
import datasetApi from '../api/dataset'
import fileApi from '../api/file'

// action about user
export const register = ({ commit }, user) => {
  userApi.register(user).then(res => {
    let loginStatus = true
    commit('changeLoginStatus', loginStatus)
    commit('addUser', res.data)
  })
}

export const login = ({ commit }, user) => {
  return userApi.login(user.username, user.password).then(res => {
    return new Promise((resolve, reject) => {
      let loginStatus = true
      commit('changeLoginStatus', loginStatus)
      commit('addUser', res.data)
      resolve(res.data)
    })
  })
}

export const getDatasets = ({ commit }, userId) => {
  userApi.getDataset(userId).then(res => {
    commit('addDatasets', res.data.datasetList)
  })
}

export const postDataset = ({ commit }, userId, dataset) => {
  return userApi.postDataset(userId, dataset).then(res => {
    return new Promise((resolve, reject) => {
      commit('addDataset', res.data)
      commit('changeCurrentDataset', res.data)
      resolve(res.data)
    })
  })
}

// action about dataset
export const getPublicDatasets = ({ commit }, page, size) => {
  datasetApi.getPage(page, size).then(res => {
    commit('addDatasets', res.data.datasetList)
  })
}
export const delDatasetById = ({ commit }, datasetId) => {
  datasetApi.deleteById(datasetId).then(res => {
    commit('delDataset', datasetId)
    commit('addMsg', res.data.msg)
  })
}

export const getFiles = ({commit}, datasetId) => {
  datasetApi.getFiles(datasetId).then(res => {
    commit('addFiles', res.data.fileList)
  })
}

export const postFiles = ({commit}, datasetId, files) => {
  datasetApi.postFile(datasetId, files).then(res => {
    commit('addFiles', res.data)
  })
}

// operation file
export const getFileByRowKey = ({commit}, rowKey) => {
  fileApi.getByRowKey(rowKey).then(res => {
    commit('addFile', res.data)
  })
}
export const delFile = ({commit}, rowKey) => {
  fileApi.deleteByRowKey(rowKey).then(res => {
    commit('delFile', rowKey)
    commit('addMsg', res.data.msg)
  })
}
