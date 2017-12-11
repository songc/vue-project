<template>
  <div>
    <Card  dis-hover :bordered="false">
            <Upload multiple
              name="files"
              slot="title"
              :accept="datasetType==='CSV'? '.csv':'image/*'"
              :show-upload-list="false"
              :before-upload="handleUpload" 
              :action="uploadUrl">
              <Button type="ghost" icon="ios-cloud-upload-outline">Select the files</Button>
            </Upload>
            <Button v-show="files !=0" slot="extra" type="primary" @click="upload" :loading="loadingStatus">{{ loadingStatus ? '上传中' : '点击上传' }}</Button>
            <Form :model="fileMeta" :label-width="80" label-position="left">
              <FormItem v-if="datasetType=='CSV'" label="IecMeta" prop="iecMetaId">
                <Select v-if="iecMetas.length!==0" v-model="fileMeta.iecMetaId" style="width:300px">
                  <Option v-for="iecMeta in iecMetas" :value="iecMeta.id" :key="iecMeta.id">{{ iecMeta.name }}</Option>
                </Select>
                <p v-else>You hasn't any template, Go to Create</p>
                <Button type="primary" @click="iecMetaModal=true">Create New</Button>
                <InfoShow v-if="getIecMetaById" :info="getIecMetaById"></InfoShow>  
              </FormItem>
              <FormItem v-if="datasetType=='IMAGE'" label="ImageMeta" prop="imageMetaId">
                <Select v-if="imageMetas.length!==0" v-model="fileMeta.imageMetaId" style="width:300px">
                  <Option v-for="imageMeta in imageMetas" :value="imageMeta.id" :key="imageMeta.id">{{ imageMeta.name }}</Option>
                </Select>
                <p v-else>You hasn't any template, Go to Create</p>
                <Button type="primary" @click="imageMetaModal=true">Create New</Button>
                <InfoShow v-if="getImageMetaById" :info="getImageMetaById"></InfoShow> 
              </FormItem>
              <FormItem label="Software" prop="softwareId">
                <Select v-if="softwares.length!==0" v-model="fileMeta.softwareId" style="width:300px">
                  <Option v-for="software in softwares" :value="software.id" :key="software.id">{{ software.name }}</Option>
                </Select>
                <p v-else>You hasn't any template, Go to Create</p>
                <Button type="primary" @click="softwareModal=true">Create New</Button>
                <InfoShow v-if="getSoftwareById" :info="getSoftwareById"></InfoShow> 
              </FormItem>
              <FormItem label="Environment" prop="environmentId">
                <Select v-if="environments.length!==0" v-model="fileMeta.environmentId" style="width:300px">
                  <Option v-for="environment in environments" :value="environment.id" :key="environment.id">{{ environment.name }}</Option>
                </Select>
                <p v-else>You hasn't any template, Go to Create</p>
                <Button type="primary" @click="environmentModal=true">Create New</Button>
                <InfoShow v-if="getEnvironmentById" :info="getEnvironmentById"></InfoShow> 
              </FormItem>
              <FormItem label="Sample" prop="sampleId">
                <Select v-if="samples.length!==0" v-model="fileMeta.sampleId" style="width:300px">
                  <Option v-for="sample in samples" :value="sample.id" :key="sample.id">{{ sample.name }}</Option>
                </Select>
                <p v-else>You hasn't any template, Go to Create</p>
                <Button type="primary" @click="sampleModal=true">Create New</Button>
                <InfoShow v-if="getSampleById" :info="getSampleById"></InfoShow> 
              </FormItem>
            </Form>
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
    <Modal v-model="iecMetaModal">
      <IecMetaForm></IecMetaForm>
    </Modal>
    <Modal v-model="imageMetaModal">
      <ImageMetaForm></ImageMetaForm>
    </Modal>
    <Modal v-model="environmentModal">
      <EnvironmentForm></EnvironmentForm>
    </Modal>
    <Modal v-model="softwareModal">
      <SoftwareForm></SoftwareForm>
    </Modal>
    <Modal v-model="sampleModal">
      <SampleForm></SampleForm>
    </Modal>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import IecMetaForm from '../components/IecMetaForm'
import ImageMetaForm from '../components/ImageMetaForm'
import SoftwareForm from '../components/SoftWareForm'
import SampleForm from '../components/SampleForm'
import EnvironmentForm from '../components/EnvironmentForm'
import InfoShow from '../components/InfoShow'
export default {
  name: 'FileUpload',
  components: {
    IecMetaForm,
    ImageMetaForm,
    SoftwareForm,
    SampleForm,
    EnvironmentForm,
    InfoShow
  },
  data() {
    return {
      iecMetaModal: false,
      imageMetaModal: false,
      sampleModal: false,
      softwareModal: false,
      environmentModal: false,
      files: [],
      loadingStatus: false,
      fileMeta: {
        iecMetaId: null,
        imageMetaId: null,
        softwareId: null,
        sampleId: null,
        environmentId: null
      }
    }
  },
  computed: {
    datasetId() {
      return this.$route.params.datasetId
    },
    datasetType() {
      return this.$store.state.currentDataset.type
    },
    uploadUrl() {
      return `/dataset/${this.datasetId}/file`
    },
    ...mapState([
      'softwares',
      'imageMetas',
      'iecMetas',
      'samples',
      'environments'
    ]),
    getSoftwareById() {
      return this.$store.getters.getSoftwareById(this.fileMeta.softwareId)
    },
    getEnvironmentById() {
      return this.$store.getters.getEnvironmentById(this.fileMeta.environmentId)
    },
    getIecMetaById() {
      return this.$store.getters.getIecMetaById(this.fileMeta.iecMetaId)
    },
    getImageMetaById() {
      return this.$store.getters.getImageMetaById(this.fileMeta.imageMetaId)
    },
    getSampleById() {
      return this.$store.getters.getSampleById(this.fileMeta.sampleId)
    }
  },
  created() {
    let userId = this.$route.params.id
    this.$store.dispatch('getEnvironments', userId)
    this.$store.dispatch('getIecMetas', userId)
    this.$store.dispatch('getImageMetas', userId)
    this.$store.dispatch('getSamples', userId)
    this.$store.dispatch('getSoftwares', userId)
  },
  methods: {
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
      Object.keys(this.fileMeta).forEach((element, index) => {
        if (this.fileMeta[element]) {
          formData.append(element, this.fileMeta[element])
        }
      })
      this.$store.dispatch('postFiles', {datasetId: this.datasetId, files: formData}).then(() => {
        this.loadingStatus = false
        this.files = []
      }).catch((res) => {
        this.loadingStatus = false
      })
    }
  }
}
</script>

<style scoped>
li {
  margin: 10px;
}
.filelist{
  margin: 10px;
}
</style>