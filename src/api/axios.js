import {Spin, Notice} from 'iview'
import axios from 'axios'

axios.defaults.timeout = 5000

axios.interceptors.request.use(config => {
  Spin.show()
  return config
}, error => {
  Spin.hide()
  Notice.error({
    title: 'Error',
    desc: error.message
  })
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  Spin.hide()
  return response
}, error => {
  Spin.hide()
  Notice.error({
    title: 'Error',
    desc: error.message
  })
  return Promise.reject(error)
})

export default axios
