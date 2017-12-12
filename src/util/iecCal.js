const iecUtil = {
  calXNumber(array) {
    return array.length
  },
  calMeanValue(array) {
    return array.reduce((a, b) => a + b, 0) / array.length
  },
  calSubMean(array, meanValue) {
    return array.map(x => x - meanValue)
  },
  calDeviation(subMean) {
    return subMean.map((value, index, array) => {
      return index === array.length - 1 ? 0 : array[index + 1] * value
    }).reduce((a, b) => a + b, 0) / (subMean.length - 1)
  },
  calSkewness(subMean, deviation) {
    let sumCube = subMean.map(x => Math.pow(x, 3)).reduce((a, b) => a + b, 0)
    return sumCube / ((subMean.length - 1) * Math.pow(deviation, 3))
  },
  calKurtosis(subMean, deviation) {
    let sum = subMean.map(x => Math.pow(x, 4)).reduce((a, b) => a + b, 0)
    return sum / ((subMean.length - 1) * Math.pow(deviation, 4))
  },
  calActivity(array) {
    return array.map(x => Math.pow(x, 2)).reduce((a, b) => a + b, 0) / array.length
  },
  calDiff(array) {
    let diff = array.map((value, index, array) => {
      return index === array.length - 1 ? 0 : (array[index + 1] - value) * value
    })
    diff.pop()
    return diff
  },
  calMobility(diff, activity) {
    return this.calMeanValue(diff) / activity
  },
  calComplexity(diff, mobility) {
    let result = (this.calMeanValue(diff)) / (this.calMeanValue(diff) - mobility)
    return Math.sqrt(Math.abs(result))
  },
  calTime(array, rate) {
    return array.length / rate
  },
  calSlope(array) {
    let len = array.length
    return Math.abs((array[len - 1] - array[0]) / len)
  },
  calY(array) {
    return Math.max(...array) - Math.min(...array)
  },
  calArea(array) {
    return Math.abs(array.reduce((a, b) => a + b, 0))
  }
}

export default iecUtil
