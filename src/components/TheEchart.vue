<template>
<div>
  <div id="the-echart" ref="theEchart">
  </div>
  <Modal title="add comment" v-model="modal" @on-cancel="false" @on-ok="addMark(params)">
    <Input v-model="comment"></Input>
  </Modal>
</div>

</template>

<script>
// import analysisApi from '../api/analysis'
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
      return this.$store.getters.getData
    }
  },
  watch: {
    optionsData: {
      handler: function() {
        this.updateChart()
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
    updateChart() {
      function createLegend(data) {
        let res = []
        for (let index = 0; index < data.length; index++) {
          res[index] = `channl${index}`
        }
        return res
      }
      if (this.optionsData === undefined) {
        return false
      } else {
        let options = {
          title: {text: 'example'},
          legend: {
            data: createLegend(this.optionsData.data)
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
            data: this.optionsData.xAxis
          },
          yAxis: {},
          series: this.optionsData.data.map((x, index) => {
            return {
              name: 'channl' + index,
              type: 'line',
              data: x,
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
  width: 700px;
  height: 500px;
}
</style>
