<template>
  <Form :model="datasetMeta" :label-width="80" label-position="left">
    <FormItem label="Name" prop="name">
      <Input v-model="datasetMeta.name" type="text"></Input>
    </FormItem>
    <FormItem label="Goal" prop="goal">
      <Input v-model="datasetMeta.goal" type="textarea"></Input>
    </FormItem>
    <FormItem label="Operators" prop="operators">
      <Input v-model="datasetMeta.operators" type="text"></Input>
    </FormItem>
    <FormItem label="Sample" prop="sample">
      <Input v-model="datasetMeta.sample" type="text"></Input>
    </FormItem>
    <FormItem label="Position" prop="position">
      <Input v-model="datasetMeta.position" type="text"></Input>
    </FormItem>
    <FormItem label="Signal Type" prop="signalType">
      <Input v-model="datasetMeta.signalType" type="text"></Input>
    </FormItem>
    <FormItem label="Detail" prop="detail">
      <Input v-model="datasetMeta.detail" type="text"></Input>
    </FormItem>
    <FormItem label="Paper" prop="paper">
      <Input v-model="datasetMeta.paper" type="text"></Input>
    </FormItem>
    <Button type="primary" @click="save">Save</Button>
    <Button type="ghost" @click="$emit('cancel')">Cancel</Button>
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
        .then(() => {
          this.$emit('success')
        })
    }
  }
}
</script>
