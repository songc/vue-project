<template>
<div>
  <Row type="flex" justify="center" class-name="dataset-browse-row">
    <Col span="4" class-name="dataset-browse-tree">
    <Card :bordered="false" dis-hover>
      <p slot="title">files</p>
      <RadioGroup v-model="selectedFile" vertical>
        <Radio v-for="(file, index) in files" :label="file.rowKey" :key="index" >{{ file.name }}</Radio>
      </RadioGroup>
    </Card>
    </Col>
    <Col span="16">
    <Tabs value="info" class="dataset-browse-tabs">
      <TabPane label="Dataset Info" name="info">
        <Form>
          <FormItem prop="dataset.name" label="name">
            <Input type="text" v-model="dataset.name" placeholder="dataset name" disabled></Input>
          </FormItem>
          <FormItem prop="dataset.author" label="author">
            <Input type="text" v-model="dataset.author" placeholder="dataset author" disabled></Input>
          </FormItem>
          <FormItem prop="dataset.description" label="description">
            <Input type="textarea" v-model="dataset.description" placeholder="dataset description" :autosize="true" disabled></Input>
          </FormItem>
        </Form>
      </TabPane>
      <TabPane label="Content" name="content">
        <TheEchart v-if="dataset.type==='CSV'"></TheEchart>
        <ImageShow v-else-if="dataset.type==='IMAGE'"></ImageShow>
      </TabPane>
      <TabPane v-if="dataset.type==='IMAGE'" label="MultiRegion" name="multiRegion">
        <MultiRegion></MultiRegion>
      </TabPane>
      <TabPane v-if="f[0]" label="HeatMap" name="heatMap">
        <HeatMap  :xData="getAxis(false)" :yData="getAxis(true)" :data="signalData" :width="800" :height="500"></HeatMap>
      </TabPane>
    </Tabs>
    </Col>
  </Row>
</div>
</template>

<script>
import ImageShow from './ImageShow'
import TheEchart from './TheEchart'
import MultiRegion from './MultiRegion'
import HeatMap from './HeatMap'
import {generateData} from '../util/imageUtil'
export default {
  components: {
    TheEchart,
    ImageShow,
    MultiRegion,
    HeatMap
  },
  data() {
    return {
      selectedFile: ''
    }
  },
  computed: {
    files() {
      return this.$store.state.files
    },
    dataset() {
      return this.$store.state.currentDataset
    },
    datasetTree() {
      let files = this.files
      return files.map((file) => {
        let newFile = file
        newFile.title = file.name
        return newFile
      })
    },
    selectedFileIndex() {
      return this.files.findIndex(file => file.rowKey === this.selectedFile)
    },
    f() {
      return this.$store.getters.getTranspose
    },
    signalData() {
      return this.f[this.selectedFileIndex]
    }
  },
  watch: {
    selectedFile: 'fetchFile',
    $route: 'fetchDataset'
  },
  created() {
    this.$store.commit('initAnalysis')
    this.fetchDataset()
  },
  methods: {
    fetchDataset() {
      this.$Spin.show()
      this.$store.dispatch('getDatasetById', this.$route.params.id).then((res) => {
        return this.$store.dispatch('getFiles', this.$route.params.id)
      }).then((res) => {
        this.$Spin.hide()
      }).catch((res) => {
        this.$Spin.hide()
        this.$Notice.error({
          title: 'Fail to get Dataset info',
          desc: res
        })
      })
    },
    fetchFile() {
      this.$Spin.show()
      this.$store.dispatch('getFileByRowKey', this.selectedFile).then(() => {
        this.$Spin.hide()
      }).catch((res) => {
        this.$Spin.hide()
        this.$Notice.error({
          title: 'Fail to get File info',
          desc: res
        })
      })
    },
    getAxis(isYAxis) {
      return this.$store.getters.getAxis(isYAxis)
    },
    getData(len, start) {
      return generateData(len, start)
    }
  }
}
</script>

<style scoped>
.dataset-browse-row{
  padding: 12px;
  background-color: #fff;
}
.dataset-browse-tree{
  max-height: 800px;
  overflow: auto;
}
.dataset-browse-tabs{
  background-color: #fff;
  margin: 14px 12px;
}
</style>
