<template>
  <Card>
    <p v-if="title" slot="title">{{title}}</p>     
    <div>
      <p v-for="key in Object.keys(info)" :key="key"><strong>{{key}}:&ensp;</strong>{{info[key]}}</p>
    </div>
  </Card>
</template>

<script>
export default {
  name: 'InfoShow',
  props: {
    info: Object,
    title: String
  }
}
</script>
