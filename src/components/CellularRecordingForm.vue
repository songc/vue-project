<template>
  <Form :model="cellularRecording">
      <FormItem label="Name">
        <Input v-model="cellularRecording.name" type="text"></Input>
      </FormItem>
      <FormItem label="Start Time">
        <DatePicker v-model="cellularRecording.startAt" type="datetime"></DatePicker>
      </FormItem>
      <FormItem label="Duration">
        <InputNumber v-model="cellularRecording.duration" :min="0"></InputNumber>
      </FormItem>
      <FormItem label="Rate">
        <InputNumber v-model="cellularRecording.rate" :min="0"></InputNumber>
      </FormItem>
      <FormItem label="ChannelNum">
        <InputNumber v-model="cellularRecording.channelNum" :min="0"></InputNumber>
      </FormItem>
      <FormItem label="Sampling Rate">
        <InputNumber v-model="cellularRecording.samplingRate" :min="0"></InputNumber>
      </FormItem>
      <FormItem label="Record Positon">
        <Input v-model="cellularRecording.recordPositon" type="text"></Input>
      </FormItem>
      <FormItem label="Stimulate Type">
        <Input v-model="cellularRecording.stimulateType" type="text"></Input>
      </FormItem>
      <FormItem label="Stimulate Material">
        <Input v-model="cellularRecording.stimulateMaterial" type="text"></Input>
      </FormItem>
      <FormItem label="Stimulate Detail">
        <Input v-model="cellularRecording.stimulateDetail" type="textarea"></Input>
      </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'CellularRecordingForm',
  props: {
    cellularRecording: Object
  }
}
</script>
