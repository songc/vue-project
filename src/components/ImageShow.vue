<template>
  <div>
      <Card :padding="0" dis-hover>

          <!-- <img ref="image" :src="pngUrl" class="baseImg"> -->
          <canvas ref="canvas" width="800px" height="600px" class="base"></canvas>
          <canvas ref="canvas2" width="800px" height="600px" class="base"></canvas>
          <canvas v-show="clipShow" ref="clip" width="800px" height="600px"></canvas>
      </Card>
      <p>width:{{imageInfo.width}}</p>
      <p>height:{{imageInfo.height}}</p>
      <Slider v-model="region.startX" show-input :max="1000"></Slider>
      <Slider v-model="region.startY" show-input :max="1000"></Slider>
      <Slider v-model="region.width" show-input :max="1000"></Slider>
      <Slider v-model="region.height" show-input :max="1000"></Slider>
  </div>
</template>

<script>
export default {
  name: 'imageShow',
  data() {
    return {
      img: null,
      clipShow: false,
      imageInfo: {
        width: 0,
        height: 0
      },
      region: {
        startX: 50,
        startY: 50,
        width: 50,
        height: 50
      }
    }
  },
  computed: {
    pngUrl() {
      return this.$store.getters.getPngUrl
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
      const ctx = _this.$refs.canvas.getContext('2d')
      const ctx2 = _this.$refs.canvas.getContext('2d')
      ctx.globalAlpha = 0.3
      _this.img.onload = function() {
        _this.imageInfo.width = this.naturalWidth
        _this.imageInfo.height = this.naturalHeight
        ctx.drawImage(_this.img, 0, 0)
        ctx2.drawImage(_this.img, 0, 0)
        _this.clipPattern()
      }
      _this.img.src = _this.pngUrl
    },
    clipPattern() {
      if (this.img) {
        const canvas = this.$refs.canvas
        const region = this.region
        const ctx = this.$refs.clip.getContext('2d')
        ctx.clearRect(0, 0, 800, 600)
        ctx.drawImage(canvas, region.startX, region.startY, region.width, region.height, region.startX, region.startY, region.width, region.height)
        this.clipShow = true
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
