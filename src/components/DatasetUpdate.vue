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
          <Card class="dataset-create-upload" dis-hover :bordered="false">
            <Upload multiple name="files" slot="title" 
              accept=".csv"
              :show-upload-list="false" 
              :before-upload="handleUpload" 
              :action="uploadUrl">
              <Button type="ghost" icon="ios-cloud-upload-outline">Select the files</Button>
            </Upload>
            <Button v-show="files !=0" slot="extra" type="primary" @click="upload" :loading="loadingStatus">{{ loadingStatus ? '上传中' : '点击上传' }}</Button>
            <div v-if="files != 0">
              待上传文件：
              <li v-for="(file, index) in files" :key="file.name">
                {{ file.name }}
                <Button type="error" shape="circle" icon="close-round" @click="files.splice(index,1)" size="small"></Button>
              </li>
            </div>
          </Card>
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
export default {
  name: 'DatasetManage',
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
      return this.$store.state.user.id
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
    rename() {

    },
    delFile() {
      this.$Spin.show()
      this.$store.dispatch('delFile', this.selectedFiles).then((res) => {
        this.$Message.info('Delete Success')
        this.$Message.info('Update File')
        return this.$store.dispatch('getFiles', this.$route.params.id)
      }).then(() => {
        this.$Message.info('Update Success')
        this.$Spin.hide()
        this.selectedFiles = []
      }).catch(res => {
        this.$Spin.hide()
        this.$Message.error(res)
      })
    },
    saveChange() {
      this.$Spin.show()
      this.$store.dispatch('putDataset', this.dataset).then(() => {
        this.$Spin.hide()
        this.$Message.info('Save Success')
      }).catch(res => {
        this.$Spin.hide()
        this.$Notice.error({
          title: 'Error',
          desc: res.message
        })
      })
    },
    cancle() {
      this.$router.go(-1)
    },
    handleUpload(file) {
      this.files.push(file)
      return false
    },
    upload() {
      this.loadingStatus = true
      let formData = new FormData()
      this.files.forEach(function(element, index) {
        formData.append('files', element)
      })
      this.$store.dispatch('postFiles', {datasetId: this.$route.params.id, files: formData}).then(() => {
        this.loadingStatus = false
        this.modal = true
        this.files = []
      }).catch((res) => {
        this.loadingStatus = false
        this.$Message.error(res.message)
      })
    },
    keepOn() {
      this.modal = false
    },
    finish() {
      this.$router.push({name: 'dashBoard', params: {id: this.dataset.userId}})
    },
    fetchData() {
      this.$Spin.show()
      this.$store.dispatch('getDatasetById', this.$route.params.id).then((res) => {
        return this.$store.dispatch('getFiles', this.$route.params.id)
      }).then(res => {
        this.$Spin.hide()
      }).catch((res) => {
        this.$Spin.hide()
        this.$Notice({
          title: 'Fail to get Dataset info',
          desc: res
        })
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
