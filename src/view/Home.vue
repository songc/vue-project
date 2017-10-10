<template>
  <div>
    <NavMenu @on-login="login=true" @on-register="register=true"></NavMenu>
    <div class="content">
      <Row type="flex" align="middle">
        <Col span="24">
        <Carousel v-model="value1">
          <CarouselItem>
            <div class="demo-carousel">1</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">2</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">3</div>
          </CarouselItem>
        </Carousel>
        </Col>
      </Row>
      <Row :gutter="16">
        <Col span="6" offset="3">
        <Card>
          <p slot="title">Card</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
        </Card>
        </Col>
        <Col span="6">
        <Card>
          <p slot="title">Card</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
        </Card>
        </Col>
        <Col span="6">
        <Card>
          <p slot="title">Card</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
        </Card>
        </Col>
        <!-- <Col span="4">
        <Card>
          <p slot="title">Card</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
        </Card>
        </Col> -->
      </Row>
      <Row :gutter="16">
        <Col span="6" offset="3">
        <Card>
          <p slot="title">Card</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
        </Card>
        </Col>
        <Col span="6">
        <Card>
          <p slot="title">Card</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
        </Card>
        </Col>
        <Col span="6">
        <Card>
          <p slot="title">Card</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
        </Card>
        </Col>
        <!-- <Col span="4">
        <Card>
          <p slot="title">Card</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
        </Card>
        </Col> -->
      </Row>
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
      value1: 0,
      login: false,
      register: false
    }
  }
}
</script>

<style scoped>
.content {
  margin: 12px;
  min-height: 800px;
  background: #fff;
  text-align: left;
}
.demo-carousel {
  background: #495060;
  width: auto;
  height: 400px;
}
</style>

