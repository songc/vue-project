<template>
  <Form :model="datasetMeta">
    <FormItem label="Name">
      <Input v-model="datasetMeta.name" type="text"></Input>
    </FormItem>
    <FormItem label="Goal">
      <Input v-model="datasetMeta.goal" type="textarea"></Input>
    </FormItem>
    <FormItem label="Operators">
      <Input v-model="datasetMeta.operators" type="text"></Input>
    </FormItem>
    <FormItem label="Sample">
      <Input v-model="datasetMeta.sample" type="text"></Input>
    </FormItem>
    <FormItem label="Position">
      <Input v-model="datasetMeta.position" type="text"></Input>
    </FormItem>
    <FormItem label="Signal Type">
      <Input v-model="datasetMeta.signalType" type="text"></Input>
    </FormItem>
    <FormItem label="Detail">
      <Input v-model="datasetMeta.detail" type="text"></Input>
    </FormItem>
    <FormItem label="Paper">
      <Input v-model="datasetMeta.paper" type="text"></Input>
    </FormItem>
    <Button type="primary" @click="save">Save</Button>
    <Button type="glory">Cancel</Button>
  </Form>
</template>

<script>
export default {
  name: 'DatasetMetaForm',
  props: {
    datasetMeta1: Object
  },
  data() {
    return {
      datasetMeta: {
        name: '',
        goal: '',
        operators: '',
        sample: '',
        postion: '',
        stimulus: '',
        signalType: '',
        detail: '',
        paper: ''
      }
    }
  },
  methods: {
    save() {
      this.$store.dispatch('postDatasetMeta', {userId: this.$route.params.id, datasetMeta: this.datasetMeta})
    }
  }
}
</script>
