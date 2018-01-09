<template>
  <div>
      <Slider v-model="xAxis" range :max="imageInfo.width"></Slider>
      <Slider v-model="yAxis" range :max="imageInfo.height"></Slider>
      <br>
      <h3>The information of the selected region (Unit:px):</h3>
      <br>
      <Form :model="region" label-position="left" :label-width="50" inline>
        <FormItem label="StartX:">
          <InputNumber v-model="region.startX" :max="maxValue.startX" :min="0"></InputNumber>
        </FormItem>
        <FormItem label="StartY:">
          <InputNumber v-model="region.startY" :max="maxValue.startY" :min="0"></InputNumber>
        </FormItem>
        <FormItem label="Width:">
          <InputNumber id="width" v-model="region.width" :max="maxValue.width" :min="1"></InputNumber>
        </FormItem>
        <FormItem label="Height:">
          <InputNumber v-model="region.height" :max="maxValue.height" :min="1"></InputNumber>
        </FormItem>
      </Form>
      <h3>The size information of the selected image (Unit:px):</h3>
      <Tag type="border">width:{{imageInfo.width}}</Tag>
      <Tag type="border">height:{{imageInfo.height}}</Tag>
      <br>
      <br>
      <Card :padding="0"
            :bordered="false"
            dis-hover style="text-align: center;">
          <canvas ref="canvas" width="800px" height="600px" class="base" style="display:none"></canvas>
          <canvas ref="canvas2" width="800px" height="600px" class="base"></canvas>
          <canvas ref="clip" width="800px" height="600px"></canvas>
      </Card>
      <br>
      <Button type="primary" @click="getRegionResult">get</Button>
      <SingleChart :xData="xData" :yData="f" :width="800" :height="400" :single="true" title="f"> </SingleChart>
      <SingleChart :xData="xData" :yData="f0" :width="800" :height="400" :single="true" title="f0"> </SingleChart>
      <SingleChart :xData="xData" :yData="f0DivF" :width="800" :height="400" :single="true" title="f0/f"> </SingleChart>
      <SingleChart :xData="xData" :yData="negF0DivF" :width="800" :height="400" :single="true" title="-f0/f"> </SingleChart>
  </div>
</template>

<script>
import {scaleing, generateData, getDived, getNeg} from '../util/imageUtil'
import SingleChart from './SingleChart'
import analysisApi from '../api/analysis.js'
export default {
  name: 'imageShow',
  components: {
    SingleChart
  },
  data() {
    return {
      img: null,
      times: 1,
      imageInfo: {
        width: 800,
        height: 600
      },
      region: {
        startX: 100,
        startY: 100,
        width: 200,
        height: 200
      },
      xData: [],
      f: [],
      f0: []
    }
  },
  computed: {
    pngUrl() {
      return this.$store.getters.getPngUrl
    },
    maxValue() {
      return {
        startX: this.imageInfo.width - this.region.width,
        startY: this.imageInfo.height - this.region.height,
        width: this.imageInfo.width - this.region.startX,
        height: this.imageInfo.height - this.region.startY
      }
    },
    f0DivF() {
      return getDived(this.f, this.f0) || []
    },
    negF0DivF() {
      return getNeg(this.f0DivF) || []
    },
    xAxis: {
      get: function() {
        return [this.region.startX, this.region.startX + this.region.width]
      },
      set: function(newValue) {
        this.region.startX = newValue[0]
        this.region.width = newValue[1] - newValue[0]
      }
    },
    yAxis: {
      get: function() {
        return [this.region.startY, this.region.startY + this.region.height]
      },
      set: function(newValue) {
        this.region.startY = newValue[0]
        this.region.height = newValue[1] - newValue[0]
      }
    }
  },
  watch: {
    pngUrl: 'getImage',
    region: {
      handler: 'clipPattern',
      deep: true
    }
  },
  methods: {
    getImage() {
      const _this = this
      _this.img = new Image()
      _this.img.onload = function() {
        let naturalWidth = this.naturalWidth
        let naturalHeight = this.naturalHeight
        _this.imageInfo.width = naturalWidth
        _this.imageInfo.height = naturalHeight
        let times = scaleing(naturalWidth, naturalHeight, 800, 600)
        _this.times = times
        const ctx = _this.$refs.canvas.getContext('2d')
        ctx.drawImage(_this.img, 0, 0, naturalWidth / times, naturalHeight / times)
        const ctx2 = _this.$refs.canvas2.getContext('2d')
        ctx2.clearRect(0, 0, 800, 600)
        ctx2.globalAlpha = 0.5
        ctx2.drawImage(_this.img, 0, 0, naturalWidth / times, naturalHeight / times)
        _this.clipPattern()
      }
      _this.img.src = _this.pngUrl
    },
    clipPattern() {
      if (this.img) {
        const canvas = this.$refs.canvas
        const region = this.region
        const ctx = this.$refs.clip.getContext('2d')
        let times = this.times
        ctx.clearRect(0, 0, 800, 600)
        ctx.drawImage(canvas, region.startX / times, region.startY / times, region.width / times, region.height / times, region.startX / times, region.startY / times, region.width / times, region.height / times)
      }
    },
    getRegionResult() {
      analysisApi.getSingleRegionGrayAver(this.$route.params.datasetId, this.region).then(res => {
        this.f = res.data.f
        this.f0 = res.data.f0
        this.xData = generateData(res.data.f.length, 1)
      })
    }
  }
}
</script>

<style scoped>
  .base{
    position: absolute;
  }
</style>
