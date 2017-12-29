<template>
  <Form :model="environment" :label-width="80" label-position="left">
    <FormItem label="Name" prop="name">
      <Input v-model="environment.name" type="text"></Input>
    </FormItem>
    <FormItem label="Light(Lux)" prop="light">
      <InputNumber v-model="environment.light" :min="0"></InputNumber>
    </FormItem>
    <FormItem label="Temperature(℃)" prop="temperature">
      <InputNumber v-model="environment.temperature"></InputNumber>
    </FormItem>
    <FormItem label="Humidity(%)" prop="humidity">
      <InputNumber v-model="environment.humidity"></InputNumber>
    </FormItem>
    <FormItem label="Pressure(kPa)" prop="pressure">
      <InputNumber v-model="environment.pressure"></InputNumber>
    </FormItem>
      <Button type="primary" @click="save">Save</Button>
      <Button type="ghost" @click="$emit('cancel')">Cancel</Button>
  </Form>
</template>

<script>
export default {
  name: 'EnvironmentFrom',
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
      this.$store.dispatch('postEnvironment', {userId: this.$route.params.id, environment: this.environment})
        .then(() => {
          this.$emit('success')
        })
    }
  }
}
</script>
