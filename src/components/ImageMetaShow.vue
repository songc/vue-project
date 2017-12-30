<template>
  <Form :model="imageMeta" :label-width="120" label-position="right">
      <FormItem label="Name:">
        {{imageMeta.name}}
      </FormItem>
      <FormItem label="Start Time:">
        {{imageMeta.startAt}}
      </FormItem>
      <FormItem label="Duration:">
        {{imageMeta.duration}}
      </FormItem>
      <FormItem label="Frame Rate:">
        {{imageMeta.frameRate}}
      </FormItem>
      <FormItem label="ChannelNum:">
        {{imageMeta.channelNum}}
      </FormItem>
      <FormItem label="SamplingRate:">
        {{imageMeta.samplingRate}}
      </FormItem>
      <FormItem label="Record Positon:">
        {{imageMeta.recordPositon}}
      </FormItem>
      <FormItem label="Record Area:">
        {{imageMeta.recordArea}}
      </FormItem>
      <FormItem label="Stimulate Type:">
        {{imageMeta.stimulateType}}
      </FormItem>
      <FormItem label="Stimulate Material:">
        {{imageMeta.stimulateMaterial}}
      </FormItem>
      <FormItem label="Stimulate Detail:">
        {{imageMeta.stimulateDetail}}
      </FormItem>
      <FormItem label="Format:">
        {{imageMeta.format}}
      </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'ImageMetaShow',
  props: {
    imageMeta: Object
  }
}
</script>