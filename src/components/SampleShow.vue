<template>
  <Form :model="sample" :label-width="120" label-position="right" inline>
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