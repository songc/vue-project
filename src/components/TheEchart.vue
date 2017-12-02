<template>
<div>
  <div id="the-echart" ref="theEchart">
  </div>
  <Button @click="smooth(10,optionsData)">Smooth</Button>
  <Modal title="add comment" v-model="modal" @on-cancel="false" @on-ok="addMark(params)">
    <Input v-model="comment"></Input>
  </Modal>
</div>

</template>

<script>
import analysisApi from '../api/analysis'
import echarts from 'echarts'
export default {
  name: 'theEchart',
  data() {
    return {
      modal: false,
      comment: '',
      chart: null,
      params: null
    }
  },
  computed: {
    optionsData: function() {
      return this.$store.getters.getData(1)
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
      let mySeries = this.chart.getOption().series
      mySeries[params.seriesIndex].markPoint.data.push({
        name: this.comment,
        coord: [params.name, params.value]
      })
      this.chart.setOption({
        series: mySeries
      })
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
          tooltip: {},
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
                symbol: 'pin',
                symbolSize: '30',
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
