import axios from 'axios'
import {folderUrl} from './url'

export default {
  folderApi: {
    save(folder) {
      return axios.post(folderUrl.base, folder)
    },
    find(id) {
      return axios.get(folderUrl.addId(id))
    },
    delete(id) {
      return axios.delete(folderUrl.addId(id))
    },
    findSubFolder(id) {
      return axios.get(folderUrl.subFolder(id))
    },
    findSubFile(id) {
      return axios.get(folderUrl.subFile(id))
    },
    saveSingleFile(id, data) {
      return axios({
        url: folderUrl.singleFile(id),
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: data
      })
    },
    saveMulFile(id, data) {
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
}
