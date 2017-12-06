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
  </Form>
</template>

<script>
export default {
  name: 'EquipmentForm',
  props: {
    equipment: Object
  }
}
</script>
