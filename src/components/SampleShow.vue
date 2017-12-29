<template>
  <Form :model="sample" :label-width="80" label-position="left">
    <FormItem label="Name:">
      {{sample.name}}
    </FormItem>
    <FormItem label="Growth(day):">
      {{sample.growth}}
    </FormItem>
    <FormItem label="Period:">
      {{sample.period}}
    </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'SampleShow',
  props: {
    sample: Object
  }
}
</script>