<template>
  <Form :model="imageMeta">
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
  </Form>
</template>

<script>
export default {
  name: 'ImageMetaForm',
  props: {
    imageMeta: Object
  }
}
</script>