<template>
<div>
  <Row type="flex" justify="center" class-name="dataset-browse-row">
    <Col span="4" class-name="dataset-browse-tree">
    <Card :bordered="false" dis-hovar>
      <p slot="title">files</p>
      <RadioGroup v-model="selectedFile" vertical>
        <Radio v-for="(file, index) in files" :label="file.rowKey" :key="index" >{{ file.name }}</Radio>
      </RadioGroup>
    </Card>
    </Col>
    <Col span="14">
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
        <TheEchart></TheEchart>
      </TabPane>
    </Tabs>
    </Col>
  </Row>
</div>
</template>

<script>
import TheEchart from './TheEchart'
export default {
  components: {
    TheEchart
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
    }
  },
  watch: {
    selectedFile: function() {
      this.$Spin.show()
      this.$store.dispatch('getFileByRowKey', this.selectedFile).then(() => {
        this.$Spin.hide()
      })
    }
  },
  created() {
    this.$store.dispatch('getFiles', this.$store.state.currentDataset.id)
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
