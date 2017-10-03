<template>
  <div>
    <nav-login></nav-login>
    <Row class-name="content">
      <mtable></mtable>
    </Row>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
import NavLogin from './NavLogin'
import FooterMenu from '../../components/FooterMenu'
import Mtable from './Mtable'
export default {
  components: {
    NavLogin,
    FooterMenu,
    Mtable
  }
}
</script>

<style scoped>
.content{
  min-height: 600px;
  background: #fff;
  margin: 12px;
}
</style>
