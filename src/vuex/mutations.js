export default {
  addUser(state, user) {
    state.user = user
  },
  addDataset(state, dataset) {
    state.datasets.push(dataset)
  },
  addFolder(state, folder) {
    state.folder.children.addFolder(folder)
  },
  getUser(state, user) {
    state.user = user
  },
  getDatasets(state, datasets) {
    state.datasets = datasets
  },
  getFolder(state, folder) {
    state.folder = folder
  },
  getFile(state, file) {
    state.file = file
  },
  delDataset(state, id) {
    state.datasets = state.datasets.filter(dataset => dataset.id !== id)
  },
  delFolder(state, id) {
    let index = state.folder.findindex(f => f.id === id)
    state.folder.splice(index, 1)
  },
  delFile (state, id) {}
}
