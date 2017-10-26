
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
