<template>
  <Row>
    <Col span="4">
    <ButtonGroup size="small">
      <Button type="warning" @click="rename">Rename</Button>
      <Button type="error" @click="delFile">Delete</Button>
    </ButtonGroup>
    <Tree :data="files"></Tree>
    </Col>
    <Col span="20">
    <Tabs value="info">
      <TabPane label="Dataset Info" name="info">
        <Form>
          <FormItem prop="dataset.name" label="name">
            <Input type="text" v-model="dataset.name" placeholder="dataset name"></Input>
          </FormItem>
          <FormItem prop="dataset.author" label="author">
            <Input type="text" v-model="dataset.author" placeholder="dataset author"></Input>
          </FormItem>
          <FormItem prop="dataset.descript" label="descript">
            <Input type="textarea" v-model="dataset.descript" placeholder="dataset descript"></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="saveChange">Save Change</Button>
            <Button type="ghost" @click="cancle">Cancle</Button>
          </FormItem>
        </Form>
      </TabPane>
      <TabPane label="Upload File" name="upload">
        <Card>
          <p slot="title">Upload File</p>
          <Upload multiple name="files" 
            :show-upload-list="false" 
            :before-upload="handleUpload" 
            :action="uploadUrl" 
            @on-success="uploadSuccess">
            <Button type="ghost" icon="ios-cloud-upload-outline">Select the files</Button>
          </Upload>
          <div v-if="files != 0">
            <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? '上传中' : '点击上传' }}</Button>
            待上传文件：
            <li v-for="(file, index) in files" :key="index">
              {{ file.name }}
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
</template>

<script>
export default {
  name: 'DatasetManage',
  data() {
    return {
      modal: false,
      loadingStatus: false,
      files: [],
      dataset: {
        id: 0,
        name: '',
        author: '',
        decript: ''
      }
    }
  },
  computed: {
    userId() {
      return this.$store.state.user.id
    },
    datasetId() {
      return this.$store.state.currentDataset.id
    },
    uploadUrl() {
      return `/dataset/${this.datasetId}/file`
    }
  },
  methods: {
    rename() {

    },
    delFile() {

    },
    saveChange() {

    },
    cancle() {

    },
    handleUpload(file) {
      this.files.push(file)
      return false
    },
    upload() {
      this.loadingStatus = true
      this.$store.dispatch('postFiles', this.datasetId, this.files).then(() => {
        this.loadingStatus = false
        this.modal = true
        this.files = []
      })
    },
    keepOn() {
      this.modal = false
    }
  }
}
</script>
