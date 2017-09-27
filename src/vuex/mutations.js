export default {
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
  addFiles(state, files) {
    state.files.concat(files)
  },
  // getUser(state, user) {
  //   state.user = user
  // },
  getDatasets(state, datasets) {
    state.datasets.concat(datasets)
  },
  getFolder(state, folders) {
    state.folders.concat(folders)
  },
  getFile(state, files) {
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
  }
}
