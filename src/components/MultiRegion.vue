<template>
  <div>
    <h3>The information of region (Unit: px):</h3>
    <Form label-position="left" :label-width="50" inline>
      <FormItem label="Width:">
        <InputNumber v-model="region.width" :max="Math.floor(imageInfo.width/2)" :min="100"></InputNumber>
      </FormItem>
      <FormItem label="Height:">
        <InputNumber v-model="region.height" :max="Math.floor(imageInfo.height/2)" :min="100"></InputNumber>
      </FormItem>
    </Form>
    <div>
      <h3>The size infomation of image (Unit: px):</h3>
      <Tag type="border">width:{{imageInfo.width}}</Tag>
      <Tag type="border">height:{{imageInfo.height}}</Tag>
    </div>
    <br>
    <Card :padding="0"
          :bordered="false"
           dis-hover style="text-align: center; position:relative;">
        <canvas ref="canvas" width="800px" height="600px" class="base"></canvas>
        <!-- <canvas ref="clip" width="800px" height="600px"></canvas> -->
        <MultiChart
          v-if="f!==[]"
          :scale="times"
          :xData="getAxis(false)"
          :yData="getAxis(true)"
          :data="f"
          :width="800"
          :height="600"></MultiChart>
    </Card>
    <br>
    <Button type="primary" @click="getRegionResult">get</Button>
    <SingleChart :xData="xData" :yData="f" :width="800" :height="400" :single="false" title="f"> </SingleChart>
    <SingleChart :xData="xData" :yData="f0" :width="800" :height="400" :single="false" title="f0"> </SingleChart>
    <SingleChart :xData="xData" :yData="f0DivF" :width="800" :height="400" :single="false" title="f0/f"> </SingleChart>
    <SingleChart :xData="xData" :yData="negF0DivF" :width="800" :height="400" :single="false" title="-f0/f"> </SingleChart>
  </div>
</template>

<script>
import { scaleing, generateData, getDived, getNeg } from '../util/imageUtil'
import SingleChart from './SingleChart'
import MultiChart from './MultiChart'
import analysisApi from '../api/analysis.js'
export default {
  name: 'MultiRegion',
  components: {
    SingleChart,
    MultiChart
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
        width: 100,
        height: 100
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
      analysisApi.getAllRegionGrayAver(this.$route.params.datasetId, this.region).then(res => {
        this.f = res.data.f
        this.f0 = res.data.f0
        this.xData = generateData(res.data.f[0].length, 1)
        this.$store.commit('changeMultiRegion', {...region, ...res.data})
      })
    },
    getAxis(isYAxis) {
      return this.$store.getters.getAxis(isYAxis)
    }
  }
}
</script>

<style scoped>
.base{
  position: absolute;
  left: 0px;
}
</style>
