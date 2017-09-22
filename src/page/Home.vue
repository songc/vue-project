<template>
  <div>
    <nav-meun></nav-meun>
    <carousel></carousel>
  </div>
</template>

<script>
import NavMeun from '../components/NavMenu'
import Carousel from '../components/Carousel'
export default {
  data() {
    return {
      user: {
        id: 0,
        username: '',
        password: '',
        sex: '',
        email: '',
        address: ''
      }
    }
  },
  components: {
    NavMeun,
    Carousel
  }
}
</script>

