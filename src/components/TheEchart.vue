<template>
<div  class="the-echart">
  <div id="the-echart" ref="theEchart">
  </div>
  <label for="windowsWidth">The windowsWidth of smooth:</label>
  <InputNumber id="windowsWidth" v-model="windowsWidth" :min="1" @on-change="smooth"></InputNumber>
  <br>
  <br>
  <Button @click="clearMarkPoint">ClearMarkPoint</Button>
  <Button @click="extractAP">Extract AP</Button>
  <Button @click="vaildWave">VaildAP</Button>
  <br>
  <br>
  <Table :columns="columns" :data="wavesFeature" ref="table"></Table>
  <br>
  <Button type="primary" size="large" @click="exportData()"><Icon type="ios-download-outline"></Icon> Export data</Button>
  <Modal :title="isStartPoint? 'add a startPoint':'add a endPonint'" v-model="modal" @on-cancel="modal=false" @on-ok="addMark(params)">
    <Input v-model="comment"/>
  </Modal>  
</div>

</template>

<script>
import calFeature from '../util/iecCal.js'
import analysisApi from '../api/analysis'
import echarts from 'echarts'
export default {
  name: 'theEchart',
  data() {
    return {
      modal: false,
      isStartPoint: true,
      windowsWidth: 1,
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
      waveArray: [],
      featureKey: ['xNumber', 'meanValue', 'deviation', 'skewness', 'kurtosis',
        'activity', 'mobility', 'complexity', 'time', 'slop', 'y', 'area'],
      wavesFeature: []
    }
  },
  computed: {
    optionsData: function() {
      return this.$store.getters.getData(1)
    },
    wave() {
      return {
        start: this.startPoint,
        end: this.endPoint
      }
    },
    waveArrayData() {
      return this.waveArray.map(wave => {
        let seriesIndex = wave.start.seriesIndex
        let startIndex = wave.start.dataIndex
        let endIndex = wave.end.dataIndex
        return this.optionsData.data[seriesIndex].slice(startIndex, endIndex)
      })
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
              },
              style: {
                color: 'red'
              }
            }, params.row.isAP)
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
    },
    'waveArrayData': 'getWavesFeature'
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
          this.waveArray.push(this.wave)
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
      this.waveArray = []
      this.wavesFeature = []
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
    smooth(windowsWidth) {
      let data = this.optionsData
      analysisApi.postSmooth(windowsWidth, this.optionsData.data).then(res => {
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
      if (optionsData === undefined) {
        return false
      } else {
        let options = {
          title: {text: 'Signal'},
          legend: {
            data: optionsData.xAxis.length > 8 ? null : optionsData.xAxis.map((val, index) => `ch${index}`)
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
    getWavesFeature() {
      this.wavesFeature = this.waveArrayData.map(arr => calFeature(arr))
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
      analysisApi.postJudgement(10, this.waveArrayData).then(res => {
        res.data.map((val, i, arr) => {
          this.wavesFeature[i].isAP = val
        })
      })
    },
    exportData() {
      this.$refs.table.exportCsv({
        filename: 'Analysis Results'
      })
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
