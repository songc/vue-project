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

function calFeature(array) {
  let meanValue = iecUtil.calMeanValue(array)
  let diff = iecUtil.calDiff(array)
  let subMean = iecUtil.calSubMean(array, meanValue)
  let deviation = iecUtil.calDeviation(subMean)
  let activity = iecUtil.calActivity(array)
  let mobility = iecUtil.calMobility(diff, activity)
  return {
    xNumber: iecUtil.calXNumber(array),
    meanValue: meanValue.toFixed(3),
    deviation: deviation.toFixed(3),
    skewness: iecUtil.calSkewness(subMean, deviation).toFixed(3),
    kurtosis: iecUtil.calKurtosis(subMean, deviation).toFixed(3),
    activity: activity.toFixed(3),
    mobility: mobility.toFixed(3),
    complexity: iecUtil.calComplexity(diff, mobility).toFixed(3),
    time: iecUtil.calTime(array, 1),
    slop: iecUtil.calSlope(array).toFixed(3),
    y: iecUtil.calY(array),
    area: iecUtil.calArea(array).toFixed(3),
    isAP: 'no judge'
  }
}

export default calFeature
