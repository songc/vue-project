<template>
  <div>
    <NavMenu @on-login="login=true" @on-register="register=true"></NavMenu>
    <div class="content">
      <router-view></router-view>
    </div>
    <FooterMenu></FooterMenu>
    <Modal v-model="login" title="Login in" ok-text='' cancel-text=''>
      <Login @on-success="login=false"></Login>
      <div slot="footer">
        <Button type="primary" long @click="login=false,register=true">New to The Site? Create Accout</Button>
      </div>
    </Modal>
    <Modal v-model="register" title="register" ok-text='' cancel-text=''>
      <Register @on-success="register=false"></Register>
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
    Login,
    Register
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
.content {
  background: #EEE;
  text-align: left;
}
.demo-carousel {
  background: #495060;
  width: auto;
  height: 400px;
}
</style>

