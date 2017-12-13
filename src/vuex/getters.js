import {getDived, getNeg, getTranspose, generateData} from '../util/imageUtil'
const getters = {
  getData: (state) => (rate) => {
    let splitContent = state.currentFile.content.split('\n')
    let index = splitContent.findIndex(s => s.startsWith('0'))
    let removeHead = splitContent.slice(index)
    const dataArray = Array.from(removeHead, x => x.split(','))
    const dataArrayTranspose = []
    for (let i = 0; i < dataArray[0].length; i++) {
      let temp = []
      for (let j = 0; j < dataArray.length; j = j + rate) {
        temp[j] = dataArray[j][i]
      }
      dataArrayTranspose[i] = temp
    }
    return {
      xAxis: dataArrayTranspose[0],
      data: dataArrayTranspose.slice(1).map(array => array.map(x => parseFloat(x)))
    }
  },
  getFilesByDatasetId: (state, getters) => (id) => {
    return state.files.filter(file => file.parentId === id)
  },
  getDatasetByUserId: (state, getters) => (id) => {
    return state.datasets.filter(dataset => dataset.userId === id)
  },
  getPngUrl: state => {
    if (state.currentFile.rowKey === '') {
      return ''
    } else {
      return `api/hbase/png/${state.currentFile.rowKey}`
    }
  },
  f0DivF: state => {
    return getDived(state.multiRegion.f, state.multiRegion.f0) || []
  },
  negF0DivF: (state, getters) => {
    return getNeg(getters.f0DivF) || []
  },
  getTranspose: state => {
    return getTranspose(state.multiRegion.f) || []
  },
  getDataByIndex: (state, getters) => (index) => {
    return getters.getTranspose[index] || []
  },
  getAxis: state => (yAxis) => {
    let xLen = Math.floor(state.multiRegion.naturalWidth / state.multiRegion.width)
    let ylen = Math.floor(state.multiRegion.naturalHeight / state.multiRegion.height)
    return yAxis ? generateData(ylen, 1, state.multiRegion.height) : generateData(xLen, 1, state.multiRegion.width)
  },
  getDatasetMetaById: state => (id) => {
    return state.datasetMetas.find(datasetMeta => datasetMeta.id === id)
  },
  getEquipmentById: state => (id) => {
    return state.equipments.find(equipment => equipment.id === id)
  },
  getImageMetaById: state => (id) => {
    return state.imageMetas.find(imageMeta => imageMeta.id === id)
  },
  getIecMetaById: state => (id) => {
    return state.iecMetas.find(iecMeta => iecMeta.id === id)
  },
  getEnvironmentById: state => (id) => {
    return state.environments.find(environment => environment.id === id)
  },
  getSampleById: state => (id) => {
    return state.samples.find(sample => sample.id === id)
  },
  getSoftwareById: state => (id) => {
    return state.softwares.find(software => software.id === id)
  }
}

export default getters
