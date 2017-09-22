<template>
  <div>
    <nav-menu></nav-menu>
    <el-row>
      <el-col :span="6">
        <side-menu></side-menu>
      </el-col>
      <el-col :span="18">
        <page-table></page-table>
      </el-col>
    </el-row>
  </div>
</template>


<script>
  import PageTable from '../components/PageTable.vue'
  import NavMenu from '../components/NavMenu.vue'
  import SideMenu from '../components/SideMenu.vue'
  export default {
    data() {
      return {
        datasets: {
        }
      }
    },
    components: {
      PageTable,
      NavMenu,
      SideMenu
    }
  }
</script>