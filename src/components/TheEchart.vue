<template>
<div>
  <div id="the-echart" ref="theEchart">
  </div>
  <Button type="ghost" @click="updateData"> update</Button>
  <Modal title="add comment" v-model="modal" @on-cancel="false">
    <Input v-model="comment"></Input>
  </Modal>
</div>

</template>

<script>
import echarts from 'echarts'
export default {
  name: 'theEchart',
  data() {
    return {
      modal: false,
      comment: '',
      chart: null,
      test: null
    }
  },
  computed: {
    splitContent: function() {
      return this.$store.state.currentFile.content.split('\n')
    },
    removeHead: function() {
      let index = this.splitContent.findIndex(string => {
        return string.startsWith('0')
      })
      return this.splitContent.slice(index)
    }
  },
  watch: {
    optionsData: {
      handler: function () {
        const dataArray = this.removeHead.forEach(string => {
          return string.split(',')
        })
        const dataArrayTranspose = []
        for (let i = 0; i < dataArray[0].length; i++) {
          for (let j = 0; j < dataArray.length; j++) {
            dataArrayTranspose[i][j] = dataArray[j][i]
          }
        }
        let optionsData = {
          xAxis: dataArrayTranspose[0],
          series: dataArrayTranspose.slice(1).forEach(numArray => {
            return {
              name: 'number',
              type: 'line',
              data: numArray
            }
          })
        }
        this.chart.setOption(optionsData)
      },
      deep: true
    }
  },
  beforeCreate() {
    return this.$store.dispatch('getFileByRowKey', '23')
  },
  mounted() {
    const dataArray = []
    const syz = this.removeHead
    for (let k = 0; k < syz.length; k++) {
      dataArray[k] = syz[k].split(',')
    }
    const dataArrayTranspose = []
    for (let i = 0; i < dataArray[0].length; i++) {
      let temp = []
      for (let j = 0; j < dataArray.length; j++) {
        temp[j] = dataArray[j][i]
      }
      dataArrayTranspose[i] = temp
    }
    this.test = dataArrayTranspose
    const series = []
    for (let i = 1; i < dataArrayTranspose.length; i++) {
      series[i - 1] = {
        name: 'number',
        type: 'line',
        data: dataArrayTranspose[i]
      }
    }
    let optionsData = {
      xAxis: dataArrayTranspose[0],
      series: series
    }
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
    this.chart.setOption(optionsData)
    let _this = this
    this.chart.on('click', function(params) {
      _this.modal = true
      _this.addMark(params.name, params.seriesIndex, params.value)
    })
  },
  methods: {
    updateData() {
    },
    addMark(yname, seriesIndex, value) {
      this.option.series[seriesIndex].markPoint.data.push({
        name: this.comment,
        coord: [yname, value]
      })
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
