<template>
  <Form :model="equipment" :label-width="80" label-position="left">
    <FormItem label="Name" prop="name">
      <Input v-model="equipment.name" type="text"></Input>
    </FormItem>
    <FormItem label="Provider" prop="provider">
      <Input v-model="equipment.provider" type="text"></Input>
    </FormItem>
    <FormItem label="Description" prop="description">
      <Input v-model="equipment.description" type="text"></Input>
    </FormItem>
      <Button type="primary" @click="save">Save</Button>
      <Button type="ghost" @click="$emit('cancel')">Cancel</Button>
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
      this.$store.dispatch('postEquipment', {userId: this.$route.params.id, equipment: this.equipment})
        .then(() => {
          this.$emit('success')
        })
    }
  }
}
</script>
