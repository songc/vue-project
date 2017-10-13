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
    optionsData: function() {
      return this.$store.getters.getData
    }
  },
  watch: {
    optionsData: {
      handler: function () {
        if (this.optionsData === undefined) {
          return false
        } else {
          let options = {
            xAxis: {
              data: this.optionsData.xAxis
            },
            series: Array.from(this.optionsData.data, x => {
              return {
                name: 'number',
                type: 'line',
                data: x
              }
            })
          }
          this.chart.setOption(options)
        }
      },
      deep: true
    }
  },
  beforeCreate() {
    return this.$store.dispatch('getFileByRowKey', '23')
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
