
export const userUrl = {
  base: '/api/user',
  login: '/api/user/login',
  addId: userId => '/api/user/' + userId,
  opsDataset: userId => '/api/user/' + userId + '/dataset'
}

export const datasetUrl = {
  base: '/api/dataset',
  query: '/api/dataset/query',
  addId: function(datasetId) {
    return '/api/dataset/' + datasetId
  },
  opsFile: datasetId => '/api/dataset/' + datasetId + '/file'
}

export const fileUrl = {
  base: '/api/hbase',
  addId: rowKey => '/api/hbase/' + rowKey
}

export const analysisUrl = {
  base: '/api/analysis',
  smooth: function(windowsWidth) {
    return `${this.base}/smooth/${windowsWidth}`
  },
  extraction: rate => `/api/analysis/extraction/${rate}`,
  judgement: rate => `/api/analysis/judgement/${rate}`,
  allRegionGrayAver: datasetId => `/api/analysis/image/multiple/${datasetId}`,
  singleRegionGrayAver: datasetId => `/api/analysis/image/single/${datasetId}`
}

export const metaUrl = {
  base: '/api/user',
  dataset: userId => `${this.base}/${userId}/datasetMeta`,
  datasetAddId: (userId, id) => `${this.base}/${userId}/datasetMeta/${id}`,
  equipment: userId => `${this.base}/${userId}/equipment`,
  equipmentAddId: (userId, id) => `${this.base}/${userId}/equipment/${id}`,
  image: userId => `${this.base}/${userId}/imageMeta`,
  imageAddId: (userId, id) => `${this.base}/${userId}/imageMeta/${id}`,
  iec: userId => `${this.base}/${userId}/cellularRecordingMeta`,
  iecAddId: (userId, id) => `${this.base}/${userId}/cellularRecordingMeta/${id}`,
  software: userId => `${this.base}/${userId}/software`,
  softwareAddId: (userId, id) => `${this.base}/${userId}/software/${id}`,
  environment: userId => `${this.base}/${userId}/environment`,
  environmentAddId: (userId, id) => `${this.base}/${userId}/environment/${id}`
}
