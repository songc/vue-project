import axios from 'axios'
import { userUrl } from './url'

const userApi = {
  register(user) {
    return axios.post(userUrl.base, user)
  },
  login(username, password) {
    return axios({
      method: 'post',
      url: userUrl.login,
      params: {
        username: username,
        password: password
      }
    })
  },
  getUser(userId) {
    return axios.get(userUrl.addId(userId))
  },
  getDataset(userId) {
    return axios.get(userUrl.opsDataset(userId))
  },
  postDataset(userId, dataset) {
    return axios.post(userUrl.opsDataset(userId), dataset)
  }
}

export default userApi
