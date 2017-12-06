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
  </Form>
</template>

<script>
export default {
  name: 'SoftwareForm',
  props: {
    software: Object
  }
}
</script>