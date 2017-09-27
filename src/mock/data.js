import Mock from 'mockjs'
var Random = Mock.Random
function addUser(num) {
  var user = []
  for (let i = 0; i++; i < num) {
    user.push(Mock.mock({
      'id|+1': 1,
      username: 'songc',
      'password|1-10': '4',
      email: Random.email(),
      address: Random.county(true),
      sex: 'man'
    }))
  }
  return user
}
function addDataset(num) {
  var dataset = []
  for (let i = 0; i++; i < num) {
    dataset.push(Mock.mock({
      'id|+1': 1,
      name: Random.string(3, 10),
      author: Random.string(3, 10),
      decription: Random.string(20, 40),
      folderId: 1,
      userId: 1
    }))
  }
  return dataset
}
function addFolder(num) {
  var folder = []
  for (let i = 0; i++; i < num) {
    folder.push(Mock.mock({
      'id|+1': 1,
      name: Random.string(3, 10),
      'parentId|+1': 0
    }))
  }
  return folder
}
function addFile(num) {
  var file = []
  for (let i = 0; i++; i < num) {
    file.push(Mock.mock({
      rowKey: 1 + Random.string(3, 10),
      name: Random.string(3, 10),
      data: Random.dataImage()
    }))
  }
  return file
}

export const users = addUser(3)
export const datasets = addDataset(10)
export const files = addFile(10)
export const folders = addFolder(10)
