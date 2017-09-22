<template>
  <div>
    <nav-menu></nav-menu>
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <login></login>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import NavMenu from '../components/NavMenu'
import Login from '../components/Login'
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
    NavMenu,
    Login
  }
}
</script>