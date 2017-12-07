<template>
  <Form :model="environment">
    <FormItem label="name">
      <Input v-model="environment.name" type="text"></Input>
    </FormItem>
    <FormItem label="light">
      <InputNumber v-model="environment.light" :min="0"></InputNumber>
    </FormItem>
    <FormItem label="temperature">
      <InputNumber v-model="environment.humidity"></InputNumber>
    </FormItem>
    <FormItem label="pressure">
      <InputNumber v-model="environment.pressure"></InputNumber>
    </FormItem>
      <Button type="primary" @click="save">Save</Button>
      <Button type="glory">Cancel</Button>
  </Form>
</template>

<script>
export default {
  name: 'EnvironmentFrom',
  props: {
    environment1: Object
  },
  data() {
    return {
      environment: {
        name: '',
        light: 0,
        temperature: 0,
        humidity: 0,
        pressure: 0
      }
    }
  },
  methods: {
    save() {
      this.$store.dispatch('postEnvionment', {userId: this.$route.params.id, datasetMeta: this.environment})
    }
  }
}
</script>
