<template>
  <Form :model="sample" :label-width="80" label-position="left">
    <FormItem label="Name">
      <Input v-model="sample.name" type="text"></Input>
    </FormItem>
    <FormItem label="Growth(day)">
      <Input v-model="sample.growth" type="text"></Input>
    </FormItem>
    <FormItem label="Period">
      <Input v-model="sample.period" type="text"></Input>
    </FormItem>
    <Button type="primary" @click="save">Save</Button>
    <Button type="ghost" @click="$emit('cancel')">Cancel</Button>
  </Form>
</template>

<script>
export default {
  name: 'SampleForm',
  data() {
    return {
      sample: {
        name: null,
        growth: null,
        period: null
      }
    }
  },
  methods: {
    save() {
      this.$store.dispatch('postSample', {userId: this.$route.params.id, sample: this.sample})
        .then(() => {
          this.$emit('success')
        })
    }
  }
}
</script>
