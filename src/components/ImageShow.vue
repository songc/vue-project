<template>
  <div>
      <Slider v-model="xAxis" range :max="imageInfo.width"></Slider>
      <Slider v-model="yAxis" range :max="imageInfo.height"></Slider>
      <InputNumber v-model="region.startX" :max="maxValue.startX" :min="0"></InputNumber>
      <InputNumber v-model="region.startY" :max="maxValue.startY" :min="0"></InputNumber>
      <InputNumber v-model="region.width" :max="maxValue.width" :min="1"></InputNumber>
      <InputNumber v-model="region.height" :max="maxValue.height" :min="1"></InputNumber>
      <p>width:{{imageInfo.width}}</p>
      <p>height:{{imageInfo.height}}</p>     
      <Card :padding="0" dis-hover>
          <canvas ref="canvas" width="800px" height="600px" class="base"></canvas>
          <canvas ref="canvas2" width="800px" height="600px" class="base"></canvas>
          <canvas ref="clip" width="800px" height="600px"></canvas>
      </Card>
  </div>
</template>

<script>
import {scaleing} from '../util/imageUtil'
export default {
  name: 'imageShow',
  data() {
    return {
      img: null,
      times: 1,
      imageInfo: {
        width: 800,
        height: 600
      },
      region: {
        startX: 0,
        startY: 0,
        width: 1,
        height: 1
      }
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
  mounted() {
    const ctx = this.$refs.canvas.getContext('2d')
    ctx.globalAlpha = 0.5
  },
  methods: {
    getImage() {
      const _this = this
      _this.img = new Image()
      const ctx = _this.$refs.canvas.getContext('2d')
      const ctx2 = _this.$refs.canvas.getContext('2d')
      _this.img.onload = function() {
        let naturalWidth = this.naturalWidth
        let naturalHeight = this.naturalHeight
        _this.imageInfo.width = naturalWidth
        _this.imageInfo.height = naturalHeight
        let times = scaleing(naturalWidth, naturalHeight, 800, 600)
        _this.times = times
        ctx.drawImage(_this.img, 0, 0, naturalWidth / times, naturalHeight / times)
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
    }
  }
}
</script>

<style scoped>
  .base{
    position: absolute;
  } 
</style>
