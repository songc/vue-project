<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <el-table :data="datasets">
          <el-table-column prop="name" label="name">
          </el-table-column>
          <el-table-column prop="author" label="author">
          </el-table-column>
          <el-table-column prop="date" label="date"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datasets: [{
        name: 'tree',
        author: 'songc',
        date: '2012'
      }, {
        name: 'tree',
        author: 'songc',
        date: '2012'
      }
      ]
    }
  }
}
</script>
