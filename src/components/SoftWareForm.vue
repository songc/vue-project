<template>
  <Form :model="software">
    <FormItem label="Name">
      <Input v-model="software.name" type="text"></Input>
    </FormItem>
    <FormItem label="Version">
      <Input v-model="software.version" type="text"></Input>
    </FormItem>
    <FormItem label="">
      <Input v-model="software.period" type="text"></Input>
    </FormItem>
    <Button type="primary" @click="save">Save</Button>
    <Button type="glory">Cancel</Button>
  </Form>
</template>

<script>
export default {
  name: 'SoftwareForm',
  props: {
    software1: Object
  },
  data() {
    return {
      software: {
        name: null,
        version: null
      }
    }
  },
  methods: {
    save() {
      this.$store.dispatch('postSoftware', {userId: this.$route.params.id, datasetMeta: this.software})
    }
  }
}
</script>