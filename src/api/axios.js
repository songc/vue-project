import {LoadingBar, Notice} from 'iview'
import axios from 'axios'

axios.defaults.timeout = 15000

let request = 0
axios.interceptors.request.use(config => {
  LoadingBar.start()
  request++
  return config
}, error => {
  LoadingBar.error()
  Notice.error({
    title: 'Error',
    desc: error.message
  })
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  request--
  if (request === 0) {
    LoadingBar.finish()
  }
  return response
}, error => {
  request--
  LoadingBar.error()
  Notice.error({
    title: 'Error',
    desc: error.message
  })
  return Promise.reject(error)
})

export default axios
