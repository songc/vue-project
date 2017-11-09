<template>
  <div>
      <Card>
          <img :src="pngUrl">
      </Card>
  </div>
</template>

<script>
export default {
  name: 'imageShow',
  data() {
    return {
    }
  },
  computed: {
    pngUrl() {
      return this.$store.getters.getPngUrl
    }
  }
}
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>
