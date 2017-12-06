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
  </Form>
</template>

<script>
export default {
  name: 'EnvironmentFrom',
  props: {
    'environment': Object
  }
}
</script>
