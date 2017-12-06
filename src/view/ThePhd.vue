<template>
  <div v-once class="phd-div">
    <Row type="flex" justify="center">
      <Col span="18" class="phd-col">
      <Row type="flex" justify="center" :gutter="16">
        <Col span="4">
        <Card>
          <p slot="title">Dong-Jie Zhao</p>
          <img src="../assets/Phd/zhaodongjie.png">
        </Card>
        </Col>
      </Row>
      <Row type="flex" justify="center" :gutter="16">
        <Col span="4">
        <Card>
          <p slot="title">Lin Xue</p>
          <img src="../assets/Phd/xuelin.png">
        </Card>
        </Col>
      </Row>
      <Row type="flex" justify="center" :gutter="16">
        <Col span="4">
        <Card>
          <p slot="title">Jun Li</p>
          <img src="../assets/Phd/lijun.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Yang Chen</p>
          <img src="../assets/Phd/chenyang.png">
        </Card>
        </Col>
      </Row>
      <Row type="flex" justify="center" :gutter="16">
        <Col span="4">
        <Card>
          <p slot="title">Jian-Xu Wang</p>
          <img src="../assets/Phd/wangjianxu.png">
        </Card>
        </Col>
      </Row>
      <Row type="flex" justify="center" :gutter="16">
        <Col span="4">
        <Card>
          <p slot="title">Li-Feng Fan</p>
          <img src="../assets/Phd/fanlifeng.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Zi-Yang Wang</p>
          <img src="../assets/Phd/wangziyang.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Yong-Qian Wang</p>
          <img src="../assets/Phd/wangyongqian.png">
        </Card>
        </Col>
        <Col span="4">
        <Card>
          <p slot="title">Peng-Fei Wang</p>
          <img src="../assets/Phd/zhaopengfei.png">
        </Card>
        </Col>
      </Row>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.phd-div {
  padding: 12px;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.phd-col {
  background-color: #fff;
}
</style>
