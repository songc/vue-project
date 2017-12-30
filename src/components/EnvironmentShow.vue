<template>
  <Form :model="environment" :label-width="120" label-position="right" inline>
    <FormItem label="Name:">
      {{environment.name}}
    </FormItem>
    <FormItem label="Light(Lux):">
      {{environment.light}}
    </FormItem>
    <FormItem label="Temperature(℃):">
      {{environment.temperature}}
    </FormItem>
    <FormItem label="Humidity(%):">
      {{environment.humidity}}
    </FormItem>
    <FormItem label="Pressure(kPa):">
      {{environment.pressure}}
    </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'EnvironmentShow',
  props: {
    environment: Object
  }
}
</script>