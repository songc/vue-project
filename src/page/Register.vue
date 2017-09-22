<template>
  <div>
    <nav-menu></nav-menu>
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <register></register>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import NavMenu from '../components/NavMenu'
import Register from '../components/Register'
export default {
  data() {
    return {
      data: {
        name: ''
      }
    }
  },
  components: {
    NavMenu,
    Register
  }
}
</script>
