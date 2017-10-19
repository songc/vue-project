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
  delDataset(state, id) {
    let index = state.datasets.findindex(dataset => dataset.id === id)
    state.datasets.splice(index, 1)
  },
  delFile (state, rowKey) {
    let index = state.files.findindex(f => f.rowKey === rowKey)
    state.files.splice(index, 1)
  }
}
