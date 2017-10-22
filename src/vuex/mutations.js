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
  }
}
