<template>
  <Row>
    <Col span="4">
    <Tree ref="tree" :data="datasetTree"></Tree>
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
          <FormItem prop="dataset.description" label="description">
            <Input type="textarea" v-model="dataset.description" placeholder="dataset description"></Input>
          </FormItem>
        </Form>
      </TabPane>
      <TabPane label="Content" name="content">
        
      </TabPane>
    </Tabs>
    </Col>
  </Row>
</template>

<script>
export default {
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
  beforeCreate() {
    return this.$store.dispatch('getFiles', this.$store.state.currentDataset.id)
  }
}
</script>
