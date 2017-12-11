<template>
  <div class="data-update">
    <Row type="flex" justify="center" class-name="data-update-row">
      <Col span="6" class-name="dataset-update-tree">
      <Card :bordered="false" dis-hover>
        <p slot="title">files</p>
        <Button slot="extra" type="warning" v-show="selectedFiles != 0" @click="delFile">Delete</Button>
        <CheckboxGroup v-model="selectedFiles">
          <Checkbox class="dataset-update-checkbox" size="large" v-for="(file, index) in filesUploaded" :label="file.rowKey" :key="index">
            <Icon type="document"></Icon>
            {{ file.name }}
          </Checkbox>
        </CheckboxGroup>
      </Card>
      </Col>
      <Col span="18">
      <Tabs value="info" class="data-update-tabs">
        <TabPane label="Dataset Info" name="info">
          <Form>
            <FormItem prop="dataset.name" label="name">
              <Input type="text" v-model="dataset.name" placeholder="dataset name"></Input>
            </FormItem>
            <FormItem prop="dataset.author" label="author">
              <Input type="text" v-model="dataset.author" placeholder="dataset author"></Input>
            </FormItem>
            <FormItem prop="dataset.descript" label="descript">
              <Input type="textarea" :autosize="true" v-model="dataset.description" placeholder="dataset descript"></Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="saveChange">Save Change</Button>
              <Button type="ghost" @click="cancle">Cancle</Button>
            </FormItem>
          </Form>
        </TabPane>
        <TabPane label="Upload File" name="upload">
          <FileUpload></FileUpload>
        </TabPane>
      </Tabs>
      </Col>
      <Modal v-model="modal" title="Upload Status">
        <p>Upload Success!</p>
        <p>You can continue upload file or finish the upload</p>
        <div slot="footer">
          <Button type="success" @click="keepOn">Continue upload</Button>
          <Button type="info" @click="finish">Finish</Button>
        </div>
      </Modal>
    </Row>
  </div>
</template>

<script>
import FileUpload from '../components/FileUpload'
export default {
  name: 'DatasetManage',
  components: {
    FileUpload
  },
  data() {
    return {
      modal: false,
      loadingStatus: false,
      files: [],
      selectedFiles: []
    }
  },
  computed: {
    userId() {
      return this.$route.params.id
    },
    dataset() {
      return this.$store.state.currentDataset
    },
    uploadUrl() {
      return `/dataset/${this.datasetId}/file`
    },
    filesUploaded() {
      return this.$store.state.files
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  created() {
    this.fetchData()
  },
  methods: {
    cancle() {
      this.$router.go(-1)
    },
    delFile() {
      this.$store.dispatch('delFile', this.selectedFiles).then((res) => {
        this.$Message.info('Delete Success')
        this.$Message.info('Update File')
        return this.$store.dispatch('getFiles', this.$route.params.datasetId)
      }).then(() => {
        this.$Message.info('Update Success')
        this.selectedFiles = []
      })
    },
    saveChange() {
      this.$store.dispatch('putDataset', this.dataset).then(() => {
        this.$Message.info('Save Success')
      })
    },
    keepOn() {
      this.modal = false
    },
    finish() {
      this.$router.push({name: 'dashBoard', params: {id: this.dataset.userId}})
    },
    fetchData() {
      this.$store.dispatch('getDatasetById', this.$route.params.datasetId).then((res) => {
        return this.$store.dispatch('getFiles', this.$route.params.datasetId)
      })
    }
  }
}
</script>

<style scoped>
.data-update {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  padding: 12px;
}

.data-update-row {
  padding: 12px;
  background-color: #fff;
  min-height: 800px;
}

.data-update-tabs {
  margin: 14px;
}

.dataset-update-checkbox {
  display: block;
}
</style>
