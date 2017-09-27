import axios from 'axios'
import {datasetUrl} from './url'

const datasetApi = {
  save(dataset) {
    return axios.post(datasetUrl.base, dataset)
  },
  getPage(page, size) {
    return axios.get(datasetUrl, {
      params: {
        page: page,
        size: size
      }
    })
  },
  findById(id) {
    return axios.get(datasetUrl.addId(id))
  },
  deleteById(id) {
    return axios.delete(datasetUrl.addId(id))
  }
}

export default datasetApi
