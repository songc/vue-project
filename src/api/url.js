
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
  extraction: rate => `/api/analysis/ap/extraction/${rate}`,
  judgement: rate => `/api/analysis/ap/judgement/${rate}`,
  allRegionGrayAver: datasetId => `/api/analysis/image/multiple/${datasetId}`,
  singleRegionGrayAver: datasetId => `/api/analysis/image/single/${datasetId}`
}

export const metaUrl = {
  base: '/api/user',
  dataset: userId => `/api/user/${userId}/datasetMeta`,
  datasetAddId: (userId, id) => `/api/user/${userId}/datasetMeta/${id}`,
  equipment: userId => `/api/user/${userId}/equipment`,
  equipmentAddId: (userId, id) => `/api/user/${userId}/equipment/${id}`,
  image: userId => `/api/user/${userId}/imageMeta`,
  imageAddId: (userId, id) => `/api/user/${userId}/imageMeta/${id}`,
  iec: userId => `/api/user/${userId}/iecMeta`,
  iecAddId: (userId, id) => `/api/user/${userId}/iecMeta/${id}`,
  software: userId => `/api/user/${userId}/software`,
  softwareAddId: (userId, id) => `/api/user/${userId}/software/${id}`,
  environment: userId => `/api/user/${userId}/environment`,
  environmentAddId: (userId, id) => `/api/user/${userId}/environment/${id}`,
  sample: userId => `/api/user/${userId}/sample`,
  sampleAddId: (userId, id) => `/api/user/${userId}/sample/${id}`
}
