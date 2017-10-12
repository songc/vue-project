<template>
  <div v-once>
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
Card {
  margin: 0px, 10px;
}
</style>
