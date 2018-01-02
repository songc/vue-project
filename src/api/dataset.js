import axios from './axios'
import {datasetUrl} from './url'

const datasetApi = {
  postDataset(dataset) {
    return axios.post(datasetUrl.base, dataset)
  },
  getPage(pageNumber, pageSize) {
    return axios({
      method: 'get',
      url: datasetUrl.base,
      params: {
        number: pageNumber,
        size: pageSize
      }
    })
  },
  seach(keyWord, pageNumber, pageSize) {
    return axios({
      method: 'get',
      url: datasetUrl.query,
      params: {
        keyWord: keyWord,
        number: pageNumber,
        size: pageSize
      }
    })
  },
  putDataset(dataset) {
    return axios.put(datasetUrl.base, dataset)
  },
  getById(id) {
    return axios.get(datasetUrl.addId(id))
  },
  deleteById(id) {
    return axios.delete(datasetUrl.addId(id))
  },
  getFiles(id) {
    return axios.get(datasetUrl.opsFile(id))
  },
  postFile(id, data) {
    return axios({
      url: datasetUrl.opsFile(id),
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: data,
      timeout: 60000
    })
  }
}

export default datasetApi
