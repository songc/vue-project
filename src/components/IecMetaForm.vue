<template>
  <Form :model="iecMeta" :label-width="80" label-position="left">
      <FormItem label="Name">
        <Input v-model="iecMeta.name" type="text"></Input>
      </FormItem>
      <FormItem label="Start Time">
        <DatePicker v-model="iecMeta.startAt" type="datetime"></DatePicker>
      </FormItem>
      <FormItem label="Duration">
        <InputNumber v-model="iecMeta.duration" :min="0"></InputNumber>
      </FormItem>
      <FormItem label="Rate">
        <InputNumber v-model="iecMeta.rate" :min="0"></InputNumber>
      </FormItem>
      <FormItem label="ChannelNum">
        <InputNumber v-model="iecMeta.channelNum" :min="0"></InputNumber>
      </FormItem>
      <FormItem label="Sampling Rate">
        <InputNumber v-model="iecMeta.samplingRate" :min="0"></InputNumber>
      </FormItem>
      <FormItem label="Record Positon">
        <Input v-model="iecMeta.recordPositon" type="text"></Input>
      </FormItem>
      <FormItem label="Stimulate Type">
        <Input v-model="iecMeta.stimulateType" type="text"></Input>
      </FormItem>
      <FormItem label="Stimulate Material">
        <Input v-model="iecMeta.stimulateMaterial" type="text"></Input>
      </FormItem>
      <FormItem label="Stimulate Detail">
        <Input v-model="iecMeta.stimulateDetail" type="textarea"></Input>
      </FormItem>
      <Button type="primary" @click="save">Save</Button>
      <Button type="ghost" @click="$emit('cancel')">Cancel</Button>
  </Form>
</template>

<script>
export default {
  name: 'IecMetaForm',
  data() {
    return {
      iecMeta: {
        name: '',
        startAt: 0,
        duration: 0,
        rate: 0,
        channelNum: 0,
        recordPositon: '',
        samplingRate: 0,
        signalType: '',
        stimulateType: '',
        stimulateMaterial: '',
        stimulateDetail: ''
      }
    }
  },
  methods: {
    save() {
      this.$store.dispatch('postIecMeta', {userId: this.$route.params.id, iecMeta: this.iecMeta})
        .then(() => {
          this.$emit('success')
        })
    }
  }
}
</script>
