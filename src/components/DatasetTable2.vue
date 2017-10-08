<template>
  <div>
    <Table :columns="columnsTitle" :data="datasets" @on-click="browseDataset"></Table>
    <Page :total="page.total" :current="page.number" @on-change="changePageNum"></Page>
  </div>
</template>

<script>
export default {
  name: 'DatasetTable',
  data() {
    return {
      columnsTitle: [
        { title: 'name', key: 'name' },
        { title: 'author', key: 'author' },
        { title: 'time', key: 'time' },
        { title: 'action',
          key: 'action',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'info',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.browseDataset(params.row)
                  }
                }
              }, 'Browse'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.downLoadDataset(params.row)
                  }
                }
              }, 'Download')
            ])
          }}
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
      return this.$store.state.datasets
    }
  },
  created: function() {
    this.$store.dispatch('getPublicDatasets', this.page.number, this.page.size)
  },
  methods: {
    changePageNum(num) {
      this.page.number = num
      this.$store.dispatch('getPublicDatasets', this.page.number, this.page.size)
    },
    browseDataset(data) {
      this.$store.commit('changeCurrentDataset', data)
      this.$router.push('/public/dataset/get')
    },
    downLoadDataset(data) {

    }
  }
}
</script>