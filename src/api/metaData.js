import axios from './axios'
import {metaUrl} from './url'

export const softwareApi = {
  save(userId, software) {
    return axios.post(metaUrl.software(userId), software)
  },
  get(userId, id) {
    return axios.get(metaUrl.softwareAddId(userId, id))
  },
  getAll(userId) {
    return axios.get(metaUrl.software(userId))
  },
  update(userId, software) {
    return axios.put(metaUrl.software(userId))
  },
  delete(userId, id) {
    return axios.delete(metaUrl.softwareAddId(userId, id))
  }
}
export const datasetMetaApi = {
  save(userId, dataset) {
    return axios.post(metaUrl.dataset(userId), dataset)
  },
  get(userId, id) {
    return axios.get(metaUrl.datasetAddId(userId, id))
  },
  getAll(userId) {
    return axios.get(metaUrl.dataset(userId))
  },
  update(userId, dataset) {
    return axios.put(metaUrl.dataset(userId))
  },
  delete(userId, id) {
    return axios.delete(metaUrl.datasetAddId(userId, id))
  }
}
export const environmentApi = {
  save(userId, environment) {
    return axios.post(metaUrl.environment(userId), environment)
  },
  get(userId, id) {
    return axios.get(metaUrl.environmentAddId(userId, id))
  },
  getAll(userId) {
    return axios.get(metaUrl.environment(userId))
  },
  update(userId, environment) {
    return axios.put(metaUrl.environment(userId))
  },
  delete(userId, id) {
    return axios.delete(metaUrl.environmentAddId(userId, id))
  }
}
export const sampleApi = {
  save(userId, sample) {
    return axios.post(metaUrl.sample(userId), sample)
  },
  get(userId, id) {
    return axios.get(metaUrl.sampleAddId(userId, id))
  },
  getAll(userId) {
    return axios.get(metaUrl.sample(userId))
  },
  update(userId, sample) {
    return axios.put(metaUrl.sample(userId))
  },
  delete(userId, id) {
    return axios.delete(metaUrl.sampleAddId(userId, id))
  }
}
export const imageMetaApi = {
  save(userId, image) {
    return axios.post(metaUrl.image(userId), image)
  },
  get(userId, id) {
    return axios.get(metaUrl.imageAddId(userId, id))
  },
  getAll(userId) {
    return axios.get(metaUrl.image(userId))
  },
  update(userId, image) {
    return axios.put(metaUrl.image(userId))
  },
  delete(userId, id) {
    return axios.delete(metaUrl.imageAddId(userId, id))
  }
}
export const equipmentApi = {
  save(userId, equipment) {
    return axios.post(metaUrl.equipment(userId), equipment)
  },
  get(userId, id) {
    return axios.get(metaUrl.equipmentAddId(userId, id))
  },
  getAll(userId) {
    return axios.get(metaUrl.equipment(userId))
  },
  update(userId, equipment) {
    return axios.put(metaUrl.equipment(userId))
  },
  delete(userId, id) {
    return axios.delete(metaUrl.equipmentAddId(userId, id))
  }
}
export const iecMetaApi = {
  save(userId, iec) {
    return axios.post(metaUrl.iec(userId), iec)
  },
  get(userId, id) {
    return axios.get(metaUrl.iecAddId(userId, id))
  },
  getAll(userId) {
    return axios.get(metaUrl.iec(userId))
  },
  update(userId, iec) {
    return axios.put(metaUrl.iec(userId))
  },
  delete(userId, id) {
    return axios.delete(metaUrl.iecAddId(userId, id))
  }
}
