<template>
  <div>
    <InputNumber v-model="region.width" :max="Math.floor(imageInfo.width/2)" :min="50"></InputNumber>
    <InputNumber v-model="region.height" :max="Math.floor(imageInfo.height/2)" :min="50"></InputNumber>
    <p>width:{{imageInfo.width}}</p>
    <p>height:{{imageInfo.height}}</p>     
    <Card :padding="0"
          :bordered="false"
           dis-hover style="text-align: center;">
        <canvas ref="canvas" width="800px" height="600px" class="base"></canvas>
        <!-- <canvas ref="clip" width="800px" height="600px"></canvas> -->
    </Card>
    <Button type="primary" @click="getRegionResult">get</Button>
    <SignalChart :xData="xData" :yData="f" :width="800" :height="400" :single="false" title="f"> </SignalChart>
    <SignalChart :xData="xData" :yData="f0" :width="800" :height="400" :single="false" title="f0"> </SignalChart>
    <SignalChart :xData="xData" :yData="f0DivF" :width="800" :height="400" :single="false" title="f0/f"> </SignalChart>
    <SignalChart :xData="xData" :yData="negF0DivF" :width="800" :height="400" :single="false" title="-f0/f"> </SignalChart>
  </div>
</template>

<script>
import { scaleing, getX, getDived, getNeg } from '../util/imageUtil'
import SignalChart from './SignalChart'
import analysisApi from '../api/analysis.js'
export default {
  name: 'MultiRegion',
  components: {
    SignalChart
  },
  data() {
    return {
      img: null,
      times: 1,
      imageInfo: {
        width: 0,
        height: 0
      },
      region: {
        width: 50,
        height: 50
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
    f0DivF() {
      return getDived(this.f, this.f0) || []
    },
    negF0DivF() {
      return getNeg(this.f0DivF) || []
    }
  },
  watch: {
    'pngUrl': 'getImage'
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
      }
      _this.img.src = _this.pngUrl
    },
    getRegionResult() {
      let region = {
        width: this.region.width,
        height: this.region.height,
        naturalWidth: this.imageInfo.width,
        naturalHeight: this.imageInfo.height
      }
      analysisApi.getAllRegionGrayAver(this.$route.params.id, this.region).then(res => {
        this.f = res.data.f
        this.f0 = res.data.f0
        this.xData = getX(res.data.f[0].length, 1)
        this.$store.commit('changeMultiRegion', {...region, ...res.data})
      })
    }
  }
}
</script>

