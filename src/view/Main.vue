<template>
  <div>
    <NavMenu @on-login="login=true" @on-register="register=true"></NavMenu>
    <Row class-name="content">
      <Col span="18" offset="3">
      <router-view></router-view>
      </Col>
    </Row>
    <FooterMenu></FooterMenu>
    <Modal v-model="login" title="Login in" ok-text='' cancel-text=''>
      <Login></Login>
      <div slot="footer">
        <Button type="primary" long @click="login=false,register=true">New to The Site? Create Accout</Button>
      </div>
    </Modal>
    <Modal v-model="register" title="register" ok-text='' cancel-text=''>
      <Register></Register>
      <div slot="footer">
        <Button type="primary" long @click="register=false,login=true">Have Account? Sign Up</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import NavMenu from '../components/NavMenu'
import FooterMenu from '../components/FooterMenu'
import Login from '../components/Login'
import Register from '../components/Register'
export default {
  components: {
    NavMenu,
    FooterMenu,
    Register,
    Login
  },
  data() {
    return {
      login: false,
      register: false
    }
  }
}
</script>

<style scoped>
.content{
  min-height: 600px;
  background: #fff;
  text-align: left;
  margin: 12px;
}
</style>
