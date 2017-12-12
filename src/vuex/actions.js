import userApi from '../api/user'
import datasetApi from '../api/dataset'
import fileApi from '../api/file'
import {iecMetaApi, imageMetaApi, environmentApi, equipmentApi, sampleApi, softwareApi, datasetMetaApi} from '../api/metaData'

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

// operation meta data
export const postDatasetMeta = ({commit, dispatch}, {userId, datasetMeta}) => {
  return datasetMetaApi.save(userId, datasetMeta).then(res => {
    dispatch('getDatasetMetas', userId)
  })
}
export const getDatasetMetas = ({commit}, userId) => {
  return datasetMetaApi.getAll(userId).then(res => {
    commit('changeDatasetMetas', res.data)
  })
}

export const postImageMeta = ({commit, dispatch}, {userId, imageMeta}) => {
  return imageMetaApi.save(userId, imageMeta).then(res => {
    dispatch('getImageMetas', userId)
  })
}
export const getImageMetas = ({commit}, userId) => {
  return imageMetaApi.getAll(userId).then(res => {
    commit('changeImageMetas', res.data)
  })
}

export const postIecMeta = ({commit, dispatch}, {userId, iecMeta}) => {
  return iecMetaApi.save(userId, iecMeta).then(res => {
    dispatch('getIecMetas', userId)
  })
}
export const getIecMetas = ({commit}, userId) => {
  return iecMetaApi.getAll(userId).then(res => {
    commit('changeIecMetas', res.data)
  })
}

export const postSoftware = ({commit, dispatch}, {userId, software}) => {
  return softwareApi.save(userId, software).then(res => {
    dispatch('getSoftwares', userId)
  })
}
export const getSoftwares = ({commit}, userId) => {
  return softwareApi.getAll(userId).then(res => {
    commit('changeSoftwares', res.data)
  })
}

export const postEquipment = ({commit, dispatch}, {userId, equipment}) => {
  return equipmentApi.save(userId, equipment).then(res => {
    dispatch('getEquipments', userId)
  })
}
export const getEquipments = ({commit}, userId) => {
  return equipmentApi.getAll(userId).then(res => {
    commit('changeEquipments', res.data)
  })
}

export const postEnvironment = ({commit, dispatch}, {userId, environment}) => {
  return environmentApi.save(userId, environment).then(res => {
    dispatch('getEnvironments', userId)
  })
}
export const getEnvironments = ({commit}, userId) => {
  return environmentApi.getAll(userId).then(res => {
    commit('changeEnvironments', res.data)
  })
}

export const postSample = ({commit, dispatch}, {userId, sample}) => {
  return sampleApi.save(userId, sample).then(res => {
    dispatch('getSamples', userId)
  })
}
export const getSamples = ({commit}, userId) => {
  return sampleApi.getAll(userId).then(res => {
    commit('changeSamples', res.data)
  })
}
