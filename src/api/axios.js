import {Spin, Notice} from 'iview'
import axios from 'axios'

axios.defaults.timeout = 5000

axios.interceptors.request.use(config => {
  Spin.show()
  return config
}, function(error) {
  Spin.hide()
  Notice.error(error)
  return Promise.reject(error)
})

axios.interceptors.response.use(function(response) {
  Spin.hide()
  return response
}, function(error) {
  Spin.hide()
  Notice.error(error)
  return Promise.reject(error)
})

export default axios
