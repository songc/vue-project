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
        <FormItem prop="dataset.descript" label="descript">
          <Input type="textarea" v-model="dataset.descript" placeholder="dataset descript"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="next">Next</Button>
        </FormItem>
      </Form>
    </Card>
    <Card v-show="card2">
      <p slot="title">Upload File</p> 
      <Upload multiple :action="uploadUrl" name="files" @on-success="uploadSuccess">
        <Button type="ghost" icon = "ios-cloud-upload-outline">Select the files</Button>
      </Upload>
      <Button type="info" @click="finish">Finish</Button>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'DatasetCreate',
  data() {
    return {
      card1: true,
      card2: false,
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
    uploadUrl() {
      return `/dataset/${this.$store.state.currentDataset.id}/file`
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
    uploadSuccess(response, file, fileList) {
      this.$store.commit('addFiles', response)
      this.$Message.success('upload success')
    }
  }
}
</script>

<style scoped>
.content {
  padding: 120px;
}
</style>
