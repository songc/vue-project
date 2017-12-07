<template>
  <Form :model="sample">
    <FormItem label="Name">
      <Input v-model="sample.name" type="text"></Input>
    </FormItem>
    <FormItem label="Growth">
      <Input v-model="sample.growth" type="text"></Input>
    </FormItem>
    <FormItem label="Period">
      <Input v-model="sample.period" type="text"></Input>
    </FormItem>
    <Button type="primary" @click="save">Save</Button>
    <Button type="glory">Cancel</Button>
  </Form>
</template>

<script>
export default {
  name: 'SampleForm',
  props: {
    sample1: Object
  },
  data() {
    return {
      sample: {
        name: null,
        growth: null,
        period: null
      }
    }
  },
  methods: {
    save() {
      this.$store.dispatch('postSample', {userId: this.$route.params.id, datasetMeta: this.sample})
    }
  }
}
</script>
