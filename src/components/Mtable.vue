<template>
  <div>
    <Table :columns="columnsTitle" :data="datasets"></Table>
    <Page :total="page.total" :current="page.number" @on-change="changePageNum" @on-page-size-change="changePageSize" show-sizer></Page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columnsTitle: [
        { title: 'name', key: 'name' },
        { title: 'author', key: 'author' },
        { title: 'time', key: 'time' }
      ],
      page: {
        total: 0,
        number: 1,
        size: 10
      }
    }
  },
  computed: {
    datasets: function() {
      return this.$store.datasets
    }
  },
  methods: {
    changePageNum(event) {
      this.page.number = event
    },
    changePageSize(event) {
      this.page.size = event
    }
  }
}
</script>

