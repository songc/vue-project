<template>
<div  class="the-echart">
  <div id="the-echart" ref="theEchart">
  </div>
  <Button @click="smooth(10,optionsData)">Smooth</Button>
  <Button @click="clearMarkPoint">ClearMarkPoint</Button>
  <Button @click="extractAP">Extract AP</Button>
  <Button @click="vaildWave">VaildAP</Button>
  <Table :columns="columns" :data="waresFeature"></Table>
  <Modal :title="isStartPoint? 'add a startPoint':'add a endPonint'" v-model="modal" @on-cancel="modal=false" @on-ok="addMark(params)">
    <Input v-model="comment"></Input>
  </Modal>
  
</div>

</template>

<script>
import iecCal from '../util/iecCal.js'
import analysisApi from '../api/analysis'
import echarts from 'echarts'
export default {
  name: 'theEchart',
  data() {
    return {
      modal: false,
      isStartPoint: true,
      comment: '',
      chart: null,
      params: null,
      startPoint: {
        value: null,
        dataIndex: null,
        seriesIndex: null,
        name: null
      },
      endPoint: {
        value: null,
        dataIndex: null,
        seriesIndex: null,
        name: null
      },
      wareArray: [],
      featureKey: ['xNumber', 'meanValue', 'deviation', 'skewness', 'kurtosis',
        'activity', 'mobility', 'complexity', 'time', 'slop', 'y', 'area']
    }
  },
  computed: {
    optionsData: function() {
      return this.$store.getters.getData(1)
    },
    ware() {
      return {
        start: this.startPoint,
        end: this.endPoint
      }
    },
    wareArrayData() {
      return this.wareArray.map(wave => {
        let seriesIndex = wave.start.seriesIndex
        let startIndex = wave.start.dataIndex
        let endIndex = wave.end.dataIndex
        return this.optionsData.data[seriesIndex].slice(startIndex, endIndex)
      })
    },
    waresFeature() {
      return this.wareArrayData.map(array => this.calFeature(array))
    },
    columns() {
      let columns = [{
        type: 'index',
        width: 80,
        align: 'center',
        fixed: 'left'
      }, {
        title: 'isAP',
        key: 'isAP',
        width: 80,
        fixed: 'right',
        render: (h, params) => {
          return h('div', [
            h('Button', {
              props: {
                type: 'text',
                size: 'small'
              }
            }, 'View'),
            h('Button', {
              props: {
                type: 'text',
                size: 'small'
              }
            }, 'Edit')
          ])
        }
      }]
      return columns.concat(this.featureKey.map(key => {
        return {
          title: key,
          key: key,
          width: 150
        }
      }))
    }
  },
  watch: {
    optionsData: {
      handler: function(val, oldVal) {
        this.updateChart(val)
      },
      deep: true
    }
  },
  mounted() {
    this.chart = echarts.init(this.$refs.theEchart)
    this.chart.setOption({
      title: {text: 'example'},
      tooltip: {},
      xAxis: {
        data: []
      },
      yAxis: {},
      series: []
    })
    let _this = this
    this.chart.on('click', function(params) {
      _this.modal = true
      _this.params = params
    })
  },
  methods: {
    addMark(params) {
      if (this.isStartPoint) {
        this.startPoint = {
          value: params.value,
          dataIndex: params.dataIndex,
          name: params.name,
          seriesIndex: params.seriesIndex
        }
        this.isStartPoint = !this.isStartPoint
      } else {
        if (this.validEndPoint(params)) {
          this.endPoint = {
            value: params.value,
            dataIndex: params.dataIndex,
            name: params.name,
            seriesIndex: params.seriesIndex
          }
          this.isStartPoint = !this.isStartPoint
          this.wareArray.push(this.ware)
        } else {
          return false
        }
      }
      let mySeries = this.chart.getOption().series
      mySeries[params.seriesIndex].markPoint.data.push({
        name: this.comment,
        coord: [params.name, params.value]
      })
      this.chart.setOption({
        series: mySeries
      })
    },
    clearMarkPoint() {
      let mySeries = this.chart.getOption().series
      mySeries.forEach(serie => {
        serie.markPoint.data = []
      })
      this.chart.setOption({
        series: mySeries
      })
      this.wareArray = []
    },
    validEndPoint(params) {
      if (params.seriesIndex === this.startPoint.seriesIndex) {
        if (params.dataIndex > this.startPoint.dataIndex) {
          return true
        } else {
          this.$Notice.warning({
            title: 'error',
            desc: 'endPonint must be in the after of startPonit'
          })
          return false
        }
      } else {
        this.$Notice.warning({
          title: 'error',
          desc: 'endPoint and startPonit must be in the similar channl'
        })
        return false
      }
    },
    smooth(windowsWidth, optionsData) {
      let data = optionsData
      analysisApi.postSmooth(windowsWidth, optionsData.data).then(res => {
        data.data = res.data
      }).then(() => {
        this.updateChart(data)
      }).catch(res => {
        this.$Notice.error({
          title: 'Fail smooth',
          desc: res
        })
      })
    },
    updateChart(optionsData) {
      function createLegend(data) {
        let res = []
        for (let index = 0; index < data.length; index++) {
          res[index] = `channl${index}`
        }
        return res
      }
      if (optionsData === undefined) {
        return false
      } else {
        let options = {
          title: {text: 'example'},
          legend: {
            data: createLegend(optionsData.data)
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            data: optionsData.xAxis
          },
          yAxis: {},
          series: optionsData.data.map((x, index) => {
            return {
              name: 'channl' + index,
              type: 'line',
              data: x,
              showSymbol: false,
              markPoint: {
                symbol: 'circle',
                symbolSize: 15,
                label: {
                  normal: {
                    show: true,
                    position: 'top'
                  }
                },
                data: []
              }
            }
          }),
          dataZoom: [
            {
              type: 'slider',
              show: true,
              xAxisIndex: [0],
              start: 1,
              end: 50
            },
            {
              type: 'inside',
              xAxisIndex: [0],
              start: 1,
              end: 50
            }
          ]
        }
        this.chart.setOption(options, true)
      }
    },
    calFeature(array) {
      let meanValue = iecCal.calMeanValue(array)
      let diff = iecCal.calDiff(array)
      let subMean = iecCal.calSubMean(array, meanValue)
      let deviation = iecCal.calDeviation(subMean)
      let activity = iecCal.calActivity(array)
      let mobility = iecCal.calMobility(diff, activity)
      return {
        xNumber: iecCal.calXNumber(array).toFixed(3),
        meanValue: meanValue.toFixed(3),
        deviation: deviation.toFixed(3),
        skewness: iecCal.calSkewness(subMean, deviation).toFixed(3),
        kurtosis: iecCal.calKurtosis(subMean, deviation).toFixed(3),
        activity: activity.toFixed(3),
        mobility: mobility.toFixed(3),
        complexity: iecCal.calComplexity(diff, mobility).toFixed(3),
        time: iecCal.calTime(array, 1).toFixed(3),
        slop: iecCal.calSlope(array).toFixed(3),
        y: iecCal.calY(array).toFixed(3),
        area: iecCal.calArea(array).toFixed(3)
      }
    },
    extractAP() {
      let mySeries = this.chart.getOption().series
      let xAxis = this.chart.getOption().xAxis[0].data
      let dataArray = mySeries.map(serie => serie.data)
      analysisApi.postExtraction(10, dataArray).then(res => {
        res.data.map((x, index) => x.map(waveObject => {
          let params = {
            value: dataArray[index][waveObject.startIndex],
            dataIndex: waveObject.startIndex,
            name: xAxis[waveObject.startIndex],
            seriesIndex: index
          }
          this.addMark(params)
          params = {
            value: dataArray[index][waveObject.endIndex],
            dataIndex: waveObject.endIndex,
            name: xAxis[waveObject.endIndex],
            seriesIndex: index
          }
          this.addMark(params)
        }))
      })
    },
    vaildWave() {

    }
  }
}
</script>

<style scoped>
#the-echart {
  width: 800px;
  height: 500px;
}
</style>
