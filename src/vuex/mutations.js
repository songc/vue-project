export default {
  addMsg(state, msg) {
    state.msg = msg
  },
  changeLoginStatus(state, loginStatus) {
    state.isLogin = loginStatus
  },
  addUser(state, user) {
    state.user = user
  },
  addDataset(state, dataset) {
    state.datasets.push(dataset)
  },
  addFolder(state, folder) {
    state.folders.push(folder)
  },
  addFile(state, file) {
    state.files.push(file)
  },
  addDatasets(state, datasets) {
    state.datasets = datasets
  },
  addFolders(state, folders) {
    state.folders = state.folders.concat(folders)
  },
  addFiles(state, files) {
    state.files.concat(files)
  },
  delDataset(state, id) {
    let index = state.datasets.findindex(dataset => dataset.id === id)
    state.datasets.splice(index, 1)
  },
  delFolder(state, id) {
    let index = state.folders.findindex(f => f.id === id)
    state.folders.splice(index, 1)
  },
  delFile (state, rowKey) {
    let index = state.files.findindex(f => f.rowKey === rowKey)
    state.files.splice(index, 1)
  },
  logout(state) {
    state.isLogin = false
    state.user = {}
    state.datasets = []
    state.folders = []
    state.files = []
  }
}
