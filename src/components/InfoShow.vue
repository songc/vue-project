<template>
  <div>
    <div v-for="key in Object.keys(info)" :key="key">
      <p><strong>{{key}}:&ensp;</strong>{{info[key]}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoShow',
  props: {
    info: Object
  }
}
</script>
