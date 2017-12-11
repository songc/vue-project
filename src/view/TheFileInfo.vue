<template>
  <div>
    <Card class="main" dis-hover>
      <Row type="flex" justify="center">
        <Col span="6">
          <Card :bordered="false" dis-hover class="filelist">
            <p slot="title">Dataset Files</p>
            <ul>
              <li
                v-for="(file, index) in filesUploaded"
                :key="index">
                {{ file.name }}
                </li>
            </ul>
            <p v-if="filesUploaded==0">No files yet uploaded</p>
          </Card>
        </Col>
        <Col span="18">
          <FileUpload></FileUpload>        
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
import FileUpload from '../components/FileUpload'
export default {
  name: 'TheFileInfo',
  components: {
    FileUpload
  },
  computed: {
    datasetId() {
      return this.$route.params.datasetId
    },
    datasetType() {
      return this.$store.state.currentDataset.type
    },
    filesUploaded() {
      return this.$store.getters.getFilesByDatasetId(this.datasetId)
    }
  }
}
</script>

<style scoped>
li {
  margin: 10px;
}
.main{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  min-height: 800px;
}
.filelist{
  margin: 10px;
}
</style>

