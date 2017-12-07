<template>
  <Form :model="equipment">
    <FormItem label="Name">
      <Input v-model="equipment.name" type="text"></Input>
    </FormItem>
    <FormItem label="Provider">
      <Input v-model="equipment.provider" type="text"></Input>
    </FormItem>
    <FormItem label="Description">
      <Input v-model="equipment.description" type="text"></Input>
    </FormItem>
      <Button type="primary" @click="save">Save</Button>
      <Button type="glory">Cancel</Button>
  </Form>
</template>

<script>
export default {
  name: 'EquipmentForm',
  props: {
    equipment1: Object
  },
  data() {
    return {
      equipment: {
        name: '',
        provider: '',
        description: ''
      }
    }
  },
  methods: {
    save() {
      this.$store.dispatch('postEquipment', {userId: this.$route.params.id, datasetMeta: this.equipment})
    }
  }
}
</script>
