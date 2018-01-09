<template>
  <Row type="flex" justify="space-around" align="top" class-name="layout-footer">
    <Col span="6">
      <h4>About us</h4>
      <ButtonGroup vertical size="small">
        <Button type="text" @click="go('teacher')">Teacher</Button>
        <Button type="text" @click="go('master')">Master</Button>
        <Button type="text" @click="go('phd')">Ph.D</Button>
        <Button type="text" @click="go('project')">Project</Button>
        <Button type="text" @click="go('paper')">Paper</Button>
      </ButtonGroup>
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
      <h1>PlantEleSh</h1>
    </Col>
  </Row>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    go(name) {
      this.$router.push({name: name})
    }
  }
}
</script>

<style scoped>
.layout-footer {
  background-color: #fff;
  /* border: 1px solid #d7dde4; */
  min-height: 120px;
  padding: 12px;
}
</style>


