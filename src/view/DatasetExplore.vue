<template>
  <div>
    <nav-menu></nav-menu>
    <Row class="div-row">
      <Col span="4" class="div-row-col">
      <side-nav class="div-row-col-nav"></side-nav>
      </Col>
      <Col span="14">
      <div>content</div>
      </Col>
    </Row>
  </div>
</template>

<script>
import SideNav from '../components/SideNav'
export default {
  components: {
    NavMenu,
    SideNav
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.div-row {
  margin: 12px;
  min-height: 600px;
  background: #fff;
}

.div-row-col {
  background: #fff;
}

.div-row-col-nav {
  min-height: 600px;
  overflow: hidden;
}
</style>