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
          <Upload multiple :action="uploadUrl" name="files" @on-success="uploadSuccess">
            <Button type="ghost" icon="ios-cloud-upload-outline">Select the files</Button>
          </Upload>
          <Button type="info" @click="finish">Finish</Button>
        </Card>
      </TabPane>
    </Tabs>
    </Col>
  </Row>
</template>

<script>
export default {
  name: 'DatasetManage',
  data() {
    return {
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
    uploadUrl() {

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
    uploadSuccess(response, file, fileList) {
      this.$store.commit('addFiles', response)
      this.$Message.success('upload success')
    }
  }
}
</script>
