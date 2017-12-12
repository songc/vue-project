const iecUtil = {
  calXNumber(array) {
    return array.length
  },
  calMeanValue(array) {
    return array.reduce((a, b) => a + b, 0) / array.length
  },
  calDeviation(array, meanValue) {
    return array.map(x => x - meanValue)
      .reduce((a, b) => a * b, 1) / (array.length - 1)
  },
  calSkewness(array, meanValue, deviation) {
    let sumCube = array.map(x => Math.pow(x - meanValue, 3)).reduce((a, b) => a + b, 0)
    return sumCube / ((array.length - 1) * Math.pow(deviation, 3))
  },
  calKurtosis(array, meanValue, deviation) {
    let sum = array.map(x => x - meanValue).map(x => Math.pow(x, 4)).reduce((a, b) => a + b, 0)
    return sum / ((array.length - 1) * Math.pow(deviation, 4))
  },
  calActivity(array) {
    return array.map(x => Math.pow(x, 2)).reduce((a, b) => a + b, 0) / array.length
  },
  calDiff(array) {
    let diff = array.map((value, index, array) => {
      return index === array.length ? 0 : (array[index + 1] - value) * value
    })
    diff.pop()
    return diff
  },
  calMobility(diff, activity) {
    return this.calMeanValue(diff) / activity
  },
  calComplexity(diff, mobility) {
    return this.calMeanValue(this.diff(diff)) / (diff - mobility)
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
