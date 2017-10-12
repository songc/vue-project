<template>
  <Row type="flex" justify="space-around" align="top" class-name="layout-footer">
    <Col span="6">
    <h4>About us</h4>
    <ul>
      <li>Teacher</li>
      <li>Student</li>
      <li>Project</li>
      <li>Parper</li>
    </ul>
    </Col>
    <Col span="6">
    <h4>Suggest</h4>
    <ul>
      <li>Feedback</li>
      <li>Bug</li>
    </ul>
    </Col>
    <Col span="6">
    <h4>Contack us</h4>
    <p>Telephone: +86-62737778</p>
    </Col>
    <Col span="6">
    <img src="../assets/logo1.png">
    </Col>
  </Row>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.layout-footer {
  background-color: #fff;
  border: 1px solid #d7dde4;
  min-height: 120px;
  padding: 12px;
}
</style>


