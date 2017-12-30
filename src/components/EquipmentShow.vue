<template>
  <Form :model="equipment" :label-width="120" label-position="right">
    <FormItem label="Name:" prop="name">
      {{equipment.name}}
    </FormItem>
    <FormItem label="Provider:" prop="provider">
      {{equipment.provider}}
    </FormItem>
    <FormItem label="Description:" prop="description">
      {{equipment.description}}
    </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'EquipmentShow',
  props: {
    equipment: Object
  }
}
</script>