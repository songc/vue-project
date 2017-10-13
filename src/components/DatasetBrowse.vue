<template>
  <Row>
    <Col span="4" class-name="dataset-browse-tree">
    <Card :bordered="false">
      <p slot="title">files</p>
      <RadioGroup v-model="selectedFile" vertical>
        <Radio v-for="(file, index) in files" :label="file.rowKey" :key="index" >{{ file.name }}</Radio>
      </RadioGroup>
    </Card>
    </Col>
    <Col span="20">
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
</template>

<script>
import TheEchart from './TheEchart'
export default {
  components: {
    TheEchart
  },
  data() {
    return {
      selectedFile: 0
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
      this.$store.dispatch('getFileByRowKey', this.selectedFile)
    }
  },
  created() {
    this.$store.dispatch('getFiles', this.$store.state.currentDataset.id).then(() => {
    })
  }
}
</script>

<style scoped>
.dataset-browse-tree{
  overflow: auto;
}
.dataset-browse-tabs{
  margin: 12px;
}
</style>
