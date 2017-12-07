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
    let multiRegion = {
      width: 0,
      height: 0,
      naturalWidth: 0,
      naturalHeight: 0,
      f: [],
      f0: []
    }
    state.currentFile = {...currentFile}
    state.multiRegion = {...multiRegion}
  },
  changeMultiRegion(state, info) {
    state.multiRegion = {...info}
  },
  changeIecMetas(state, iecMetas) {
    state.iecMetas = iecMetas
  },
  changeImageMetas(state, imageMetas) {
    state.imageMetas = imageMetas
  },
  changeDatasetMetas(state, datasetMetas) {
    state.datasetMetas = datasetMetas
  },
  changeEnvironments(state, environments) {
    state.environments = environments
  },
  changeSoftwares(state, softwares) {
    state.softwares = softwares
  },
  changeSamples(state, samples) {
    state.samples = samples
  },
  changeEquipments(state, equipments) {
    state.equipments = equipments
  }
}
