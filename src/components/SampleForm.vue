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
  </Form>
</template>

<script>
export default {
  name: 'SampleForm',
  props: {
    sample: Object
  }
}
</script>
