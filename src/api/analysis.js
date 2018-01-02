import axios from './axios'
import {analysisUrl} from './url'

const analysisApi = {
  postSmooth(windowWidth, signal) {
    return axios.post(analysisUrl.smooth(windowWidth), signal)
  },
  postExtraction(rate, signal) {
    return axios.post(analysisUrl.extraction(rate), signal)
  },
  postJudgement(rate, signal) {
    return axios.post(analysisUrl.judgement(rate), signal)
  },
  getAllRegionGrayAver(datasetId, {width, height}) {
    return axios.get(analysisUrl.allRegionGrayAver(datasetId), {
      params: {
        width: width,
        height: height
      },
      timeout: 30000
    })
  },
  getSingleRegionGrayAver(datasetId, {startX, startY, width, height}) {
    return axios.get(analysisUrl.singleRegionGrayAver(datasetId), {
      params: {
        startX: startX,
        startY: startY,
        width: width,
        height: height
      },
      timeout: 30000
    })
  }
}

export default analysisApi
