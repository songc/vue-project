const getters = {
  root: state => state.folders.filter(f => f.id === 0),
  children: state => (folderId) => {
    let children = []
    children.concat(state.folders.filter(f => f.parentId === folderId))
    children.concat(state.files.filter(f => f.parentId === folderId))
    return children
  }
}

export default getters
