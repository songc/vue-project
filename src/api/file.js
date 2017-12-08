import axios from './axios'
import {fileUrl} from './url'

const fileApi = {
  getByRowKey(rowKey) {
    return axios.get(fileUrl.addId(rowKey))
  },
  deleteByRowKey(rowKey) {
    return axios.delete(fileUrl.addId(rowKey))
  },
  deleteByListRowKey(listRowKey) {
    return axios.delete(fileUrl.base, {data: listRowKey})
  }
}

export default fileApi
