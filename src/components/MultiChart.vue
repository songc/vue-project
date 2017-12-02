<template>
<div>
  <div id="the-echart" ref="theEchart" :style="styleObject"></div>
</div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'MultiChart',
  props: {
    scale: Number,
    xData: Array,
    yData: Array,
    width: Number,
    height: Number,
    data: Array,
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
        tooltip: {
          trigger: 'axis'
        },
        grid: this.data.map((value, index) => {
          let xIndex = index % this.xData.length
          let yIndex = Math.floor(index / this.xData.length)
          return {
            show: true,
            left: (this.xData[xIndex] - this.xData[0]) / this.scale,
            top: (this.yData[yIndex] - this.yData[0]) / this.scale,
            width: this.xData[0] / this.scale,
            height: this.yData[0] / this.scale
          }
        }),
        xAxis: this.data.map((value, index) => {
          return {
            type: 'value',
            show: false,
            gridIndex: index,
            min: 0,
            max: value.length
          }
        }),
        yAxis: this.data.map((value, index) => {
          let vMax = Math.max(...value)
          let vMin = Math.min(...value)
          return {
            type: 'value',
            show: false,
            gridIndex: index,
            min: vMin - (vMax - vMin) * 0.2,
            max: vMax + (vMax - vMin) * 0.2
          }
        }),
        series: this.data.map((value, index) => {
          return {
            name: 'channl' + index,
            type: 'line',
            xAxisIndex: index,
            yAxisIndex: index,
            showSymbol: false,
            smooth: true,
            data: value.map((x, index) => [index, x]),
            lineStyle: {
              normal: {
                color: 'red'
              }
            }
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
    }
  }
}
</script>