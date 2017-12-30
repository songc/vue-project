<template>
  <Form :model="datasetMeta" :label-width="120" label-position="right">
    <FormItem label="Name:" prop="name">
      {{datasetMeta.name}}
    </FormItem>
    <FormItem label="Goal:" prop="goal">
      {{datasetMeta.goal}}
    </FormItem>
    <FormItem label="Operators:" prop="operators">
      {{datasetMeta.operators}}
    </FormItem>
    <FormItem label="Sample:" prop="sample">
      {{datasetMeta.sample}}
    </FormItem>
    <FormItem label="Position:" prop="position">
      {{datasetMeta.position}}
    </FormItem>
    <FormItem label="Signal Type:" prop="signalType">
      {{datasetMeta.signalType}}
    </FormItem>
    <FormItem label="Detail:" prop="detail">
      {{datasetMeta.detail}}
    </FormItem>
    <FormItem label="Paper:" prop="paper">
      {{datasetMeta.paper}}
    </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'DatasetMetaShow',
  props: {
    datasetMeta: Object
  }
}
</script>