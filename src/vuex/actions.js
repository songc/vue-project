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
  userApi.findDataset(userId).then(res => {
    commit('getDatasets', res.data)
  })
}

export const addDataset = ({ commit }, userId, dataset) => {
  userApi.saveDataset(userId, dataset).then(res => {
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
export const saveFolder = ({ commit }, folder) => {
  folderApi.save(folder).then(res => {
    commit('addFolder', res.data)
  })
}
export const findSubFolder = ({ commit }, folderId) => {
  folderApi.findSubFile(folderId).then(res => {
    commit('addFolders', res.data)
  })
}
export const findSubFile = ({commit}, folderId) => {
  folderApi.findSubFile(folderId).then(res => {
    commit('getFile', res.data)
  })
}
export const saveSingleFile = ({commit}, folderId, file) => {
  folderApi.saveSingleFile(folderId, file).then(res => {
    commit('addFile', res.data)
  })
}
export const saveMulFile = ({commit}, folderId, fileList) => {
  folderApi.saveMulFile(folderId, fileList).then(res => {
    commit('getFile', res.data)
  })
}

// operation file
export const findFileByRowKey = ({commit}, rowKey) => {
  fileApi.find(rowKey).then(res => {
    commit('addFile', res.data)
  })
}
export const delFile = ({commit}, rowKey) => {
  fileApi.delete(rowKey).then(res => {
    commit('delFile', rowKey)
  })
}
