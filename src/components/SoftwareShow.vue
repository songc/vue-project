<template>
  <Form :model="software" :label-width="120" label-position="right" inline>
    <FormItem label="Name:">
      {{software.name}}
    </FormItem>
    <FormItem label="Version:">
      {{software.version}}
    </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'SoftwareShow',
  props: {
    software: Object
  }
}
</script>