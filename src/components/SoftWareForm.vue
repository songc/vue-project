<template>
  <Form :model="software" :label-width="80" label-position="left">
    <FormItem label="Name">
      <Input v-model="software.name" type="text"></Input>
    </FormItem>
    <FormItem label="Version">
      <Input v-model="software.version" type="text"></Input>
    </FormItem>
    <Button type="primary" @click="save">Save</Button>
    <Button type="ghost" @click="$emit('cancel')">Cancel</Button>
  </Form>
</template>

<script>
export default {
  name: 'SoftwareForm',
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
      this.$store.dispatch('postSoftware', {userId: this.$route.params.id, software: this.software})
        .then(() => {
          this.$emit('success')
        })
    }
  }
}
</script>