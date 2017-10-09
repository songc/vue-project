<template>
  <div class="content">
    <Steps :current='1'>
      <!-- <Step title="Finished" content="dataset info"></Step> -->
      <Step title="Doing" content="dataset info"></Step>
      <Step title="Pending" content="Upload file"></Step>
    </Steps>
    <Card v-show="card1">
      <p slot="title">dataset info</p>
      <Form>
        <FormItem prop="dataset.name" label="name">
          <Input type="text" v-model="dataset.name" placeholder="dataset name"></Input>
        </FormItem>
        <FormItem prop="dataset.author" label="author">
          <Input type="text" v-model="dataset.author" placeholder="dataset author"></Input>
        </FormItem>
        <FormItem prop="dataset.description" label="descript">
          <Input type="textarea" v-model="dataset.description" placeholder="dataset description"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="next">Next</Button>
        </FormItem>
      </Form>
    </Card>
    <Card v-show="card2">
      <p slot="title">Upload File</p>
      <Upload multiple
        name="files"
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
    <Modal v-model="modal" title="Upload Status">
      <p>Upload Success!</p>
      <p>You can continue upload file or finish the upload</p>
      <div slot="footer">
      <Button type="success" @click="keepOn">Continue upload</Button>
      <Button type="info" @click="finish">Finish</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'DatasetCreate',
  data() {
    return {
      card1: true,
      card2: false,
      modal: false,
      loadingStatus: false,
      files: [],
      dataset: {
        name: '',
        author: '',
        descript: ''
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
    next() {
      this.$store.dispatch('postDataset', this.userId).then(() => {
        this.card1 = false
        this.card2 = true
      })
    },
    finish() {
      this.$router.push('/user/' + this.userId + '/dataset')
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

<style scoped>
.content {
  padding: 120px;
}
</style>
