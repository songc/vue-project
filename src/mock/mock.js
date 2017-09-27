import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { users, datasets, folders, files } from './data'
import { userUrl, datasetUrl, folderUrl, fileUrl } from '../api/url'
import Mock from 'mockjs'

var Random = Mock.Random
const userId = 1
const datasetId = 1
const folderId = 1
const fileRowKey = 1
export default {
  start() {
    // init mock
    const mock = new MockAdapter(axios)

    // operation user
    mock.onPost(userUrl.login).reply(config => {
      let {username, password} = config.params
      return new Promise((resolve, reject) => {
        let user = {}
        let hasUser = users.some(u => {
          if (u.username === username && u.password === password) {
            user = u
            return true
          }
        })
        if (hasUser) {
          resolve([200, {user}])
        } else {
          resolve([500, {msg: 'password or username error'}])
        }
      })
    })
    mock.onPost(userUrl.base).reply(config => {
      let user = JSON.parse(config.data)
      return new Promise((resolve, reject) => {
        user.id = Random.integer(10, 100)
        users.push(user)
        return resolve([200, {user}])
      })
    })
    mock.onPost(userUrl.opsDataset(userId)).reply(config => {
      let dataset = JSON.parse(config.data)
      return new Promise((resolve, reject) => {
        dataset.id = Random.integer(10, 100)
        dataset.userId = userId
        datasets.push(dataset)
        return resolve([200, {dataset}])
      })
    })
    mock.onGet(userUrl.opsDataset(userId)).reply(config => {
      return new Promise((resolve, reject) => {
        let datasetList = datasets.filter(d => d.userId === userId)
        return resolve([200, {datasetList}])
      })
    })

    // dataset operations
    mock.onDelete(datasetUrl.addId(datasetId)).reply(config => {
      return new Promise((resolve, reject) => {
        let index = datasets.findIndex(d => d.datasetId === datasetId)
        datasets.splice(index, 1)
        return resolve([200, {msg: 'delete success'}])
      })
    })

    // folder operation
    mock.onPost(folderUrl.base).reply(config => {
      return new Promise((resolve, reject) => {
        let folder = JSON.parse(config.data)
        folder.id = Random.integer(10, 100)
        folders.push(folder)
        return resolve([200, {folder}])
      })
    })
    mock.onDelete(folderUrl.addId(folderId)).reply(config => {
      return new Promise((resolve, reject) => {
        let index = folders.findIndex(f => f.id === folderId)
        folders.splice(index, 1)
        return resolve([200, {msg: 'delete success'}])
      })
    })
    mock.onGet(folderUrl.subFolder(folderId)).reply(config => {
      return new Promise((resolve, reject) => {
        let folderList = folders.filter(f => f.parentId === folderId)
        return resolve([200, {folderList}])
      })
    })
    mock.onGet(folderUrl.subFile(folderId)).reply(config => {
      return new Promise((resolve, reject) => {
        let fileList = files.filter(f => f.parentId === folderId)
        return resolve([200, {fileList}])
      })
    })
    mock.onPost(folderUrl.singleFile(folderId)).reply(config => {
      return new Promise((resolve, reject) => {
        let file = JSON.parse(config.data)
        files.push(file)
        return resolve([200, {file}])
      })
    })
    mock.onPost(folderUrl.mulFile(folderId)).reply(config => {
      return new Promise((resolve, reject) => {
        let fileList = JSON.parse(config.data)
        files.concat(fileList)
        return resolve([200, {fileList}])
      })
    })

    // file operations
    mock.onGet(fileUrl.addId(fileRowKey)).reply(config => {
      return new Promise((resolve, reject) => {
        let file = files.filter(f => f.rowKey === fileRowKey)
        return resolve([200, {file}])
      })
    })
    mock.onDelete(fileUrl.addId(fileRowKey)).reply(config => {
      return new Promise((resolve, reject) => {
        let index = files.findIndex(f => f.rowKey === fileRowKey)
        files.splice(index, 1)
        return resolve([200, {msg: 'delete success'}])
      })
    })
  }
}

