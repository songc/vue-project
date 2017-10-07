<template>
  <Row>
    <Col span="4">
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
  data() {
    return {
      dataset: {
        name: '',
        author: '',
        descript: ''
      }
    }
  },
  computed: {
    files() {
      return this.$store.state.files
    }
  }
}
</script>
