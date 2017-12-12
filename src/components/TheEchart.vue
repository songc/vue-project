<template>
<div>
  <div id="the-echart" ref="theEchart">
  </div>
  <Button @click="smooth(10,optionsData)">Smooth</Button>
  <Button @click="clearMarkPoint">ClearMarkPoint</Button>
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
      wareArray: []
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
        return this.optionsData.data[seriesIndex].slice(startIndex, endIndex).map(x => parseFloat(x))
      })
    },
    xNumber() {
      return this.wareArrayData.map(array => iecCal.calXNumber(array))
    },
    meanValue() {
      return this.wareArrayData.map(array => iecCal.calMeanValue(array))
    },
    subMean() {
      return this.wareArrayData.map((array, index) => iecCal.calSubMean(array, this.meanValue[index]))
    },
    deviation() {
      return this.subMean.map(array => iecCal.calDeviation(array))
    },
    skewness() {
      return this.subMean.map((array, index) => iecCal.calSkewness(array, this.deviation[index]))
    },
    kurtosis() {
      return this.subMean.map((array, index) => iecCal.calKurtosis(array, this.deviation[index]))
    },
    activity() {
      return this.wareArrayData.map(array => iecCal.calActivity(array))
    },
    diff() {
      return this.wareArrayData.map(array => iecCal.calDiff(array))
    },
    mobility() {
      return this.diff.map((array, index) => iecCal.calMobility(array, this.activity[index]))
    },
    complexity() {
      return this.diff.map((array, index) => iecCal.calComplexity(array, this.mobility[index]))
    },
    time() {
      return this.wareArrayData.map(array => iecCal.calTime(array, 1))
    },
    slop() {
      return this.wareArrayData.map(array => iecCal.calSlope(array))
    },
    y() {
      return this.wareArrayData.map(array => iecCal.calY(array))
    },
    area() {
      return this.subMean.map(array => iecCal.calArea(array))
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
