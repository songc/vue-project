<template>
<div>
  <div id="the-echart" ref="theEchart" :style="styleObject"></div>
</div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'theEchart',
  props: {
    xData: Array,
    yData: Array,
    data: Array,
    width: Number,
    height: Number,
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
        tooltip: {},
        toolbox: {
          show: true,
          feature: {
            dataView: {readOnly: false},
            saveAsImage: {}
          }
        },
        gird: {
          right: 10,
          left: 150
        },
        xAxis: {
          type: 'category',
          position: 'top',
          data: this.xData
        },
        yAxis: {
          type: 'category',
          inverse: true,
          data: this.yData
        },
        visualMap: {
          type: 'continuous',
          min: Math.min(...this.data),
          max: Math.max(...this.data),
          calculable: true,
          inRange: {
            color: ['yellow', 'red']
          }
        },
        series: [{
          name: 'HeatMap',
          type: 'heatmap',
          data: this.convertArrayToTriArray(this.data, this.xData.length, this.yData.length),
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowColor: 'rgba(0,0,0,0.5)'
            }
          }
        }]
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
    convertArrayToTriArray(data, xLen, yLen) {
      return data.map((x, index) => [index % xLen, Math.floor(index / xLen), x])
    }
  }
}
</script>