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
      option: {
        title: {text: 'example'},
        tooltip: {},
        xAxis: {
          data: ['ss', 'ww', 'cc', 'dd']
        },
        yAxis: {},
        series: [{
          name: 'number',
          type: 'line',
          data: [5, 40, 30, 10],
          markPoint: {
            label: 'content',
            data: [{
              name: 'max',
              type: 'max'
            },
            {
              name: 'something',
              coord: ['ss', 10]
            }
            ]
          }
        }]
      }
    }
  },
  watch: {
    option: {
      handler: function () {
        this.chart.setOption(this.option)
      },
      deep: true
    }
  },
  mounted() {
    this.chart = echarts.init(this.$refs.theEchart)
    this.chart.setOption(this.option)
    let _this = this
    this.chart.on('click', function(params) {
      _this.modal = true
      _this.addMark(params.name, params.seriesIndex, params.value)
    })
  },
  methods: {
    updateData() {
      var a = []
      for (let i = 0; i < 4; i++) {
        a.push(Math.random() * 40)
      }
      this.option.series[0].data = a
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
