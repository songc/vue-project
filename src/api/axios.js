import {LoadingBar, Notice} from 'iview'
import axios from 'axios'

axios.defaults.timeout = 5000

axios.interceptors.request.use(config => {
  LoadingBar.start()
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
  LoadingBar.finish()
  return response
}, error => {
  LoadingBar.error()
  Notice.error({
    title: 'Error',
    desc: error.message
  })
  return Promise.reject(error)
})

export default axios
