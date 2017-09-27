import axios from 'axios'
import {fileUrl} from './url'

export default {
  fileApi: {
    find(rowKey) {
      return axios.get(fileUrl.addId(rowKey))
    },
    delete(rowKey) {
      return axios.delete(fileUrl.addId(rowKey))
    }
  }
}
