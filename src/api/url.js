
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
  }
}

export const folderUrl = {
  base: '/folder',
  addId: folderid => '/folder/' + folderid,
  subFolder: folderId => '/folder/' + folderId + '/subfolder',
  subFile: folderId => '/folder/' + folderId + '/subfile',
  singleFile: folderId => '/folder/' + folderId + '/singlefile',
  mulFile: folderId => '/folder/' + folderId + '/mulfile'
}

export const fileUrl = {
  base: '/hbase',
  addId: rowKey => '/hbase/' + rowKey
}
