import userApi from '../api/user'
import datasetApi from '../api/dataset'
import folderApi from '../api/folder'
import fileApi from '../api/file'

// action about user
export const register = ({ commit }, user) => {
  userApi.register(user).then(res => {
    commit('addUser', user)
  })
}

export const login = ({ commit }, user) => {
  userApi.login(user.username, user.password).then(res => {
    commit('addUser', res.data)
  })
}

export const getDatasets = ({ commit }, userId) => {
  userApi.getDataset(userId).then(res => {
    commit('addDatasets', res.data)
  })
}

export const postDataset = ({ commit }, userId, dataset) => {
  userApi.postDataset(userId, dataset).then(res => {
    commit('addDataset', res.data)
  })
}

// action about dataset
export const delDatasetById = ({ commit }, datasetId) => {
  datasetApi.deleteById(datasetId).then(res => {
    commit('delDataset', datasetId)
  })
}

// action about
export const postFolder = ({ commit }, folder) => {
  folderApi.postFolder(folder).then(res => {
    commit('addFolder', res.data)
  })
}
export const getSubFolder = ({ commit }, folderId) => {
  folderApi.getSubFile(folderId).then(res => {
    commit('addFolders', res.data)
  })
}
export const getSubFile = ({commit}, folderId) => {
  folderApi.getSubFile(folderId).then(res => {
    commit('addFiles', res.data)
  })
}
export const postSingleFile = ({commit}, folderId, file) => {
  folderApi.postSingleFile(folderId, file).then(res => {
    commit('addFile', res.data)
  })
}
export const postMulFile = ({commit}, folderId, fileList) => {
  folderApi.postMulFile(folderId, fileList).then(res => {
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
  })
}
