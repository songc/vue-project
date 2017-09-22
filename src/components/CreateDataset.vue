<template>
  <el-form label-position="top">
    <el-form-item label="name">
      <el-input v-model="dataset.name"></el-input>
    </el-form-item>
    <el-form-item label="author">
      <el-input v-model="dataset.author"></el-input>
    </el-form-item>
    <el-form-item label="status">
      <el-radio-group v-model="dataset.status">
        <el-radio label="open"></el-radio>
        <el-radio label="close"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="description">
      <el-input type="textarea" v-model="dataset.description"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"></el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data(){
    return {
      dataset:{
        name:'',
        author:'',
        status:'',
        description:''
      }
    }
  }
}
</script>

