<template>
  <div>
    <NavUser></NavUser>
    <Row class-name="content" type="flex" justify="center" align="middle">
      <Col span="12">
      <router-view></router-view>
      </Col>
    </Row>
    <FooterMenu></FooterMenu>
  </div>
</template>

<script>
import NavUser from '../components/NavUser'
import FooterMenu from '../components/FooterMenu'
export default {
  components: {
    NavUser,
    FooterMenu
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
