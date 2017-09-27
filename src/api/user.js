import axios from 'axios'
import { userUrl } from './url'
export default {
  client: {
    register(user) {
      return axios.post(userUrl.base, user)
    },
    login(username, password) {
      return axios.post(userUrl.login, { params: {username: username, password: password} })
    },
    findUser(userId) {
      return axios.get(userUrl.addId(userId))
    },
    findDataset(userId) {
      return axios.get(userUrl.opsDataset(userId))
    },
    saveDataset(userId, dataset) {
      return axios.post(userUrl.opsDataset(userId), dataset)
    }
  }
}
