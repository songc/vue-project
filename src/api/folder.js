import axios from 'axios'
import {folderUrl} from './url'

const folderApi = {
  postFolder(folder) {
    return axios.post(folderUrl.base, folder)
  },
  getFolder(id) {
    return axios.get(folderUrl.addId(id))
  },
  delete(id) {
    return axios.delete(folderUrl.addId(id))
  },
  getSubFolder(id) {
    return axios.get(folderUrl.subFolder(id))
  },
  getSubFile(id) {
    return axios.get(folderUrl.subFile(id))
  },
  postSingleFile(id, data) {
    return axios({
      url: folderUrl.singleFile(id),
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: data
    })
  },
  postMulFile(id, data) {
    return axios({
      url: folderUrl.mulFile(id),
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: data
    })
  }
}

export default folderApi
