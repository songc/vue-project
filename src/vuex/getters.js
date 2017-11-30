import {getDived, getNeg, getTranspose} from '../util/imageUtil'
const getters = {
  splitContent: state => {
    return state.currentFile.content.split('\n')
  },
  removeHead: (state, getters) => {
    let index = getters.splitContent.findIndex(string => {
      return string.startsWith('0')
    })
    if (index === -1) {
      return []
    }
    return getters.splitContent.slice(index)
  },
  getData: (state, getters) => {
    if (getters.removeHead.length === 0) {
      return undefined
    } else {
      const dataArray = Array.from(getters.removeHead, x => x.split(','))
      const dataArrayTranspose = []
      for (let i = 0; i < dataArray[0].length; i++) {
        let temp = []
        for (let j = 0; j < dataArray.length; j++) {
          temp[j] = dataArray[j][i]
        }
        dataArrayTranspose[i] = temp
      }
      return {
        xAxis: dataArrayTranspose[0],
        data: dataArrayTranspose.slice(1)
      }
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
  getF0DivF: state => {
    return getDived(state.multiRegion.f, state.multiRegion.f0) || []
  },
  getNegF0DivF: (state, getters) => {
    return getNeg(getters.getF0DivF) || []
  },
  getTranspose: state => {
    return getTranspose(state.multiRegion.f) || []
  },
  getXData: state => (yAxis) => yAxis ? Array.from({length: Math.floor(state.multiRegion.naturealHeight / state.multiRegion.height)}, (v, k) =>
    k * state.multiRegion.height) : Array.from({length: Math.floor(state.multiRegion.naturealWidth / state.multiRegion.width)}, (v, k) =>
      k * state.multiRegion.width)

}

export default getters
