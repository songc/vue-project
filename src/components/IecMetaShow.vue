<template>
  <Form :model="iecMeta" :label-width="120" label-position="right">
      <FormItem label="Name:">
        {{iecMeta.name}}
      </FormItem>
      <FormItem label="Start Time:">
        {{iecMeta.startAt}}
      </FormItem>
      <FormItem label="Duration:">
        {{iecMeta.duration}}
      </FormItem>
      <FormItem label="Rate:">
        {{iecMeta.rate}}
      </FormItem>
      <FormItem label="ChannelNum:">
        {{iecMeta.channelNum}}
      </FormItem>
      <FormItem label="Sampling Rate(HZ):">
        {{iecMeta.samplingRate}}
      </FormItem>
      <FormItem label="Record Positon:">
        {{iecMeta.recordPositon}}
      </FormItem>
      <FormItem label="Stimulate Type:">
        {{iecMeta.stimulateType}}
      </FormItem>
      <FormItem label="Stimulate Material:">
        {{iecMeta.stimulateMaterial}}
      </FormItem>
      <FormItem label="Stimulate Detail:">
        {{iecMeta.stimulateDetail}}
      </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'IecMetaShow',
  props: {
    iecMeta: Object
  }
}
</script>