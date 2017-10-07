<template>
  <Menu mode="horizontal" theme="light" active-name="1">
    <Row type="flex" justify="space-around" align="middle">
      <img src="../assets/logo1.png">
      <Col span="6" >
      <MenuItem name="1"> Home
      </MenuItem>
      <MenuItem name="2"> Project
      </MenuItem>
      <MenuItem name="3"> People
      </MenuItem>
      <MenuItem name="4"> About
      </MenuItem>
      </Col>
      <Col span="4">
      <Input v-model="seachValue">
        <Button slot="append" icon="ios-search"></Button>
      </Input>
      </Col>
      <Col span="4">
      <Button @click="login">Sign up</Button>
      or
      <Button @click="register">Sign in</Button>
      </Col>
    </Row>
  </Menu>
</template>

<script>
export default {
  data() {
    return {
      seachValue: ''
    }
  },
  methods: {
    login() {
      this.$emit('on-login')
    },
    register() {
      this.$emit('on-register')
    }
  }
}
</script>

<style scoped>

</style>
