import axios from 'axios'
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
  }
}

export default analysisApi
