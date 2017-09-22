<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router="true">
      <el-row type="flex" justify="space-around" align="middle">
        <el-col :span="5">
          <span>
            <img src="../assets/logo1.png" class="image">
          </span>
        </el-col>
        <el-col :span="12">
          <el-menu-item index="home">Home</el-menu-item>
          <el-submenu index="2">
            <template slot="title">People</template>
            <el-menu-item index="2-1">Teacher</el-menu-item>
            <el-menu-item index="2-2">Student</el-menu-item>
          </el-submenu>
          <el-menu-item index="/main">Project</el-menu-item>
        </el-col>
        <el-col :span="4">
          <el-button icon="search">search</el-button>
        </el-col>
        <el-col :span="4">
          <el-menu-item index="/login">Sign in</el-menu-item>
          <el-menu-item index="/register">Sign up</el-menu-item>
        </el-col>
      </el-row>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>

</style>
