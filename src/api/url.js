
export const userUrl = {
  base: '/user',
  login: '/user/login',
  addId: userId => '/user/' + userId,
  opsDataset: userId => '/user/' + userId + '/dataset'
}

export const datasetUrl = {
  base: '/dataset',
  addId: function(datasetId) {
    return '/dataset/' + datasetId
  },
  opsFile: datasetId => '/dataset/' + datasetId + '/file'
}

export const fileUrl = {
  base: '/hbase',
  addId: rowKey => '/hbase/' + rowKey
}
