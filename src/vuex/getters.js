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
  }
}

export default getters
