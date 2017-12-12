<template>
  <Form :model="imageMeta" :label-width="80" label-position="left">
      <FormItem label="Name">
        <Input v-model="imageMeta.name" type="text"></Input>
      </FormItem>
      <FormItem label="Start Time">
        <DatePicker v-model="imageMeta.startAt" type="datetime"></DatePicker>
      </FormItem>
      <FormItem label="Duration">
        <InputNumber v-model="imageMeta.duration" :min="0"></InputNumber>
      </FormItem>
      <FormItem label="Frame Rate">
        <InputNumber v-model="imageMeta.frameRate" :min="0"></InputNumber>
      </FormItem>
      <FormItem label="ChannelNum">
        <InputNumber v-model="imageMeta.channelNum" :min="0"></InputNumber>
      </FormItem>
      <FormItem label="SamplingRate">
        <InputNumber v-model="imageMeta.samplingRate" :min="0"></InputNumber>
      </FormItem>
      <FormItem label="Record Positon">
        <Input v-model="imageMeta.recordPositon" type="text"></Input>
      </FormItem>
      <FormItem label="Record Area">
        <Input v-model="imageMeta.recordArea" type="text"></Input>
      </FormItem>
      <FormItem label="Stimulate Type">
        <Input v-model="imageMeta.stimulateType" type="text"></Input>
      </FormItem>
      <FormItem label="Stimulate Material">
        <Input v-model="imageMeta.stimulateMaterial" type="text"></Input>
      </FormItem>
      <FormItem label="Stimulate Detail">
        <Input v-model="imageMeta.stimulateDetail" type="textarea"></Input>
      </FormItem>
      <FormItem label="Format">
        <Input v-model="imageMeta.format" type="text"></Input>
      </FormItem>
    <Button type="primary" @click="save">Save</Button>
    <Button type="ghost" @click="$emit('cancel')">Cancel</Button>
  </Form>
</template>

<script>
export default {
  name: 'ImageMetaForm',
  data() {
    return {
      imageMeta: {
        name: '',
        startAt: 0,
        duration: 0,
        frameRate: 0,
        recordPositon: null,
        recordArea: null,
        signalType: null,
        stimulateType: null,
        stimulateMaterial: null,
        format: null
      }
    }
  },
  methods: {
    save() {
      this.$store.dispatch('postImageMeta', {userId: this.$route.params.id, imageMeta: this.imageMeta})
        .then(() => {
          this.$emit('success')
        })
    }
  }
}
</script>