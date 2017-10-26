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

export const getDatasets = ({ commit }, {userId, pageNumber, pageSize}) => {
  return userApi.getDataset(userId, pageNumber, pageSize).then(res => {
    commit('changeDatasets', res.data.content)
    return res.data
  })
}

export const postDataset = ({ commit }, {userId, dataset}) => {
  return userApi.postDataset(userId, dataset).then(res => {
    commit('addDataset', res.data)
    commit('changeCurrentDataset', res.data)
  })
}

export const putDataset = ({commit}, dataset) => {
  return datasetApi.putDataset(dataset).then(res => {
    commit('changeCurrentDataset', res.data)
  })
}

// action about dataset
export const getPublicDatasets = ({ commit }, {seachKeyWord, pageNumber, pageSize}) => {
  if (seachKeyWord) {
    return datasetApi.seach(seachKeyWord, pageNumber, pageSize).then(res => {
      commit('changeDatasets', res.data.content)
      return res.data
    })
  } else {
    return datasetApi.getPage(pageNumber, pageSize).then(res => {
      commit('changeDatasets', res.data.content)
      return res.data
    })
  }
}

export const getDatasetById = ({commit}, datasetId) => {
  return datasetApi.getById(datasetId).then(res => {
    commit('changeCurrentDataset', res.data)
  })
}
export const delDatasetById = ({ commit }, datasetId) => {
  return datasetApi.deleteById(datasetId)
}

export const getFiles = ({commit}, datasetId) => {
  return datasetApi.getFiles(datasetId).then(res => {
    commit('changeFiles', res.data)
  })
}

export const postFiles = ({commit}, {datasetId, files}) => {
  return datasetApi.postFile(datasetId, files).then(res => {
    commit('addFile', res.data)
  })
}

// operation file
export const getFileByRowKey = ({commit}, rowKey) => {
  return fileApi.getByRowKey(rowKey).then(res => {
    commit('changeCurrentFile', res.data)
  })
}
export const delFile = ({commit}, listRowKey) => {
  return fileApi.deleteByListRowKey(listRowKey)
}

