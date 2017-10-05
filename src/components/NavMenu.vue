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
      <Button @click="login = true">Sign up</Button>
      <Modal v-model="login" title="Login in" ok-text = '' cancel-text = ''>
        <Login></Login>
        <div slot="footer"></div>
      </Modal>
      or
      <Button @click="register = true">Sign in</Button>
      <Modal v-model="register" title="register" ok-text= '' cancel-text = ''>
        <Register></Register>
        <div slot="footer"></div>
      </Modal>
      </Col>
    </Row>
  </Menu>
</template>

<script>
import Login from './Login'
import Register from './Register'
export default {
  components: {
    Login,
    Register
  },
  data() {
    return {
      seachValue: '',
      login: false,
      register: false
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
