<template>
  <div>
    <Button type="primary" @click="getRest">Classify</Button>
    <Table :columns="columns" :data="predictRes" ref="table"></Table>
  </div>
</template>

<script>
import axios from '../api/axios.js'
export default {
  name: 'ClassfiResultShow',
  data() {
    return {
      results: [],
      columns: [{
        type: 'index',
        align: 'center'
      }, {
        title: 'predict',
        key: 'predict'
      }]
    }
  },
  computed: {
    predictRes() {
      const res = []
      for (let i = 0; i < this.results.length; i++) {
        res.push({
          predict: this.results[i]
        })
      }
      return res
    }
  },
  methods: {
    getRest() {
      axios.get('/predict/hello', {timeout: 1000000}).then(res => {
        this.results = res.data
      })
    }
  }
}

</script>