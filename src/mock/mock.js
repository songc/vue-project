import Mock from 'mockjs'

const Random = Mock.Random

Mock.setup({
  timeout: '350-600'
})

Mock.mock('/user', 'post', {
  'id|+1': 1,
  username: Random.name(),
  password: Random.string(6, 12),
  email: Random.email(),
  address: Random.county(true),
  sex: 'man'
})
Mock.mock('/user/login', 'post', {
  'id|+1': 1,
  username: Random.name(),
  password: Random.string(6, 12),
  email: Random.email(),
  address: Random.county(true),
  sex: 'man'
})
Mock.mock(/\/user\/\d+\/dataset/, 'get', {
  'datasetList|3-10': [
    {
      'id|+1': 1,
      name: Random.string(3, 10),
      author: Random.string(3, 10),
      decription: Random.string(20, 40),
      folderId: Random.integer(1, 20),
      userId: Random.integer(1, 50)
    }
  ]
})
Mock.mock(/\/user\/\d+\/dataset/, 'post', {
  'id|+1': 1,
  name: Random.string(3, 10),
  author: Random.string(3, 10),
  decription: Random.string(20, 40),
  folderId: Random.integer(1, 20),
  userId: Random.integer(1, 50)
})

Mock.mock('/dataset')
Mock.mock(/\/dataset\/\d+/, 'delete', {
  msg: 'delete success'
})

Mock.mock('/folder', 'post', {
  'id|+1': 1,
  name: Random.string(3, 10),
  'parentId|+1': 0
})
Mock.mock(/\/folder\/\d+/, 'delete', {
  msg: 'delete success'
})
Mock.mock(/\/fodler\/\d+\/subfolder/, 'get', {
  'folderList|3-5': [
    {
      'id|+1': 1,
      name: Random.string(3, 10),
      'parentId|+1': 0
    }
  ]
})
Mock.mock(/\/fodler\/\d+\/subfile/, 'get', {
  'fileList|5-25': [
    {
      rowKey: 1 + Random.string(3, 10),
      name: Random.string(3, 10),
      data: Random.dataImage()
    }
  ]
})
Mock.mock(/\/fodler\/\d+\/singlefile/, 'post', {
  rowKey: 1 + Random.string(3, 10),
  name: Random.string(3, 10),
  data: Random.dataImage()
})
Mock.mock(/\/fodler\/\d+\/mulfile/, 'post', {
  'fileList|5-25': [
    {
      rowKey: 1 + Random.string(3, 10),
      name: Random.string(3, 10),
      data: Random.dataImage()
    }
  ]
})

Mock.mock('/hbase')
Mock.mock(/\/hbase\/\d+/, 'get', {
  rowKey: 1 + Random.string(3, 10),
  name: Random.string(3, 10),
  data: Random.dataImage()
})
Mock.mock(/\/hbase\/\d+/, 'delete', {
  msg: 'delete success'
})
export default Mock
