<template>
  <el-form label-width="5rem" label-position="left">
    <el-form-item label="username">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="password">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item label="password">
      <el-input v-model="form.checkPassword"></el-input>
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="Sex">
      <el-radio-group v-model="form.sex">
        <el-radio label="Man"></el-radio>
        <el-radio label="Woman"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="address">
      <el-input v-model="form.address"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">Create</el-button>
      <el-button>Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        username: '',
        password: '',
        CheckPassword: '',
        email: '',
        sex: '',
        address: ''
      }
    }
  },
  methods: {}
}
</script>
