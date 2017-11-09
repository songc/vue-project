<template>
  <div class="content">
    <div>
    <Card v-show="card1" class="dataset-create-card">
      <p slot="title">dataset info</p>
      <Form>
        <FormItem prop="dataset.name" label="name">
          <Input type="text" v-model="dataset.name" placeholder="dataset name"></Input>
        </FormItem>
        <FormItem prop="dataset.author" label="author">
          <Input type="text" v-model="dataset.author" placeholder="dataset author"></Input>
        </FormItem>
        <FormItem prop="dataset.type" label="type">
          <RadioGroup v-model="dataset.type">
            <Radio label="CSV">CSV</Radio>
            <Radio label="IMAGE">IMAGE</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem prop="dataset.description" label="descript">
          <Input type="textarea" v-model="dataset.description" placeholder="dataset description"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="next">Next</Button>
        </FormItem>
      </Form>
    </Card>
    <Card v-show="card2" class="dataset-create-card">
      <p slot="title">Upload File</p>
      <Row type="flex" justify="center">
        <Col span="4">
          <Card :bordered="false" dis-hover class="dataset-create-filelist">
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
        <Col span="16">
          <Card class="dataset-create-upload" dis-hover :bordered="false">
            <Upload multiple
              name="files"
              slot="title"
              :accept="dataset.type==='CSV'? '.csv':'image/*'"
              :show-upload-list="false"
              :before-upload="handleUpload" 
              :action="uploadUrl">
              <Button type="ghost" icon="ios-cloud-upload-outline">Select the files</Button>
            </Upload>
            <Button v-show="files !=0" slot="extra" type="primary" @click="upload" :loading="loadingStatus">{{ loadingStatus ? '上传中' : '点击上传' }}</Button>
            <div v-if="files != 0">
               待上传文件：
              <li 
                v-for="(file, index) in files" 
                :key="file.name">
                {{ file.name }} 
                <Button type="error" shape="circle" icon="close-round" @click="files.splice(index,1)" size="small"></Button>
              </li> 
            </div>
          </Card>
        </Col>
      </Row>
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
        type: 'CSV',
        description: ''
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
    filesUploaded() {
      return this.$store.getters.getFilesByDatasetId(this.datasetId)
    },
    uploadUrl() {
      return `/dataset/${this.datasetId}/file`
    }
  },
  methods: {
    next() {
      this.$store.dispatch('postDataset', {userId: this.$route.params.id, dataset: this.dataset}).then(() => {
        this.card1 = false
        this.card2 = true
      }).catch(res => {
        this.$Message.error(res.message)
      })
    },
    finish() {
      this.$router.push({name: 'dashBoard', params: {id: this.userId}})
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
      this.$store.dispatch('postFiles', {datasetId: this.datasetId, files: formData}).then(() => {
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
    }
  }
}
</script>

<style scoped>
li {
  margin: 10px;
}
.content {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  padding: 12px;
}
.dataset-create-card {
  min-height: 800px;
}
.dataset-create-upload {
  /* width: 75%;
  margin-left: auto;
  margin-right: auto; */
  text-align: center;
}
.dataset-create-filelist {
  margin: 10px;
}
</style>
