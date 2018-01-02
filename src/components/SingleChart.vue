<template>
<div>
  <div id="the-echart" ref="theEchart" :style="styleObject"></div>
</div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'SignalChart',
  props: {
    xData: Array,
    yData: Array,
    width: Number,
    height: Number,
    single: Boolean,
    title: String
  },
  data() {
    return {
      chart: null
    }
  },
  computed: {
    styleObject() {
      return {
        width: this.width + 'px',
        height: this.height + 'px'
      }
    },
    option() {
      return {
        title: {text: this.title || 'example'},
        legend: {
          data: this.single ? ['channl'] : this.yData.length > 4 ? [] : this.createLegend(this.yData)
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        tooltip: {},
        xAxis: {
          data: this.xData
        },
        yAxis: {},
        series: this.single ? {
          name: 'channl',
          type: 'line',
          data: this.yData
        } : this.yData.map((x, index) => {
          return {
            name: 'channl' + index,
            type: 'line',
            data: x
          }
        })
      }
    }
  },
  watch: {
    'option': 'updateChart'
  },
  mounted() {
    this.chart = echarts.init(this.$refs.theEchart)
    this.updateChart()
  },
  methods: {
    updateChart() {
      this.chart.setOption(this.option, true)
    },
    createLegend(data) {
      let res = []
      for (let index = 0; index < data.length; index++) {
        res[index] = `channl${index}`
      }
      return res
    }
  }
}
</script>