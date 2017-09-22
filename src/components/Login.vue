<template>
  <el-form label-width="80px">
      <el-form-item label="Username">
          <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="Password">
          <el-input v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Sign up</el-button>
      </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  }
}
</script>