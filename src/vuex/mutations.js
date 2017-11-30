export default {
  changeLoginStatus(state, loginStatus) {
    state.isLogin = loginStatus
  },
  changeCurrentDataset(state, dataset) {
    state.currentDataset = {...dataset}
  },
  changeCurrentFile(state, file) {
    state.currentFile = {...file}
  },
  changeUser(state, user) {
    state.user = {...user}
  },
  addDataset(state, dataset) {
    state.datasets.push(dataset)
  },
  addFile(state, files) {
    state.files.push(...files)
  },
  changeDatasets(state, datasets) {
    state.datasets = datasets
  },
  changeFiles(state, files) {
    state.files = files
  },
  initAnalysis(state) {
    let currentFile = {
      rowKey: '',
      parentId: 0,
      name: '',
      content: ''
    }
    let singleRegion = {
      startX: 0,
      startY: 0,
      width: 0,
      height: 0,
      f: [],
      f0: []
    }
    let multiRegion = {
      width: 0,
      height: 0,
      naturalWidth: 0,
      naturalHeight: 0,
      f: [],
      f0: []
    }
    state.currentFile = {...currentFile}
    state.singleRegion = {...singleRegion}
    state.multiRegion = {...multiRegion}
  },
  getSingleRegionFAndF0(state, fAndF0) {
    state.singleRegion.f = fAndF0.f
    state.singleRegion.f0 = fAndF0.f0
  },
  getMultiRegionFAndF0(state, fAndF0) {
    state.multiRegion.f = fAndF0.f
    state.multiRegion.f0 = fAndF0.f0
  },
  changeSingleRegion(state, regionInfo) {
    state.singleRegion = {...regionInfo}
  },
  changeMultiRegion(state, regionInfo) {
    state.multiRegion = {...regionInfo}
  }
}
