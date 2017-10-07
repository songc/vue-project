<template>
  <div>
    <Table :columns="columnsTitle" :data="datasets" @on-click="watchDataset"></Table>
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
                    this.watchDataset(params.row)
                  }
                }
              }, 'Watch'),
              h('Button', {
                props: {
                  type: 'warning',
                  size: 'small'
                },
                style: {
                  display: this.isLogin ? 'inline-block' : 'none',
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.manageDataset(params.row)
                  }
                }
              }, 'Manage'),
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
    },
    isLogin: function() {
      return this.$store.state.isLogin
    },
    userId: function() {
      this.$store.state.user.id
    }
  },
  methods: {
    changePageNum(num) {
      this.page.number = num
      if (this.isLogin) {
        this.$store.dispatch('getPublicDatasets', this.page.number, this.page.size)
      } else {
        this.$store.dispatch('getDatasets')
      }
    },
    watchDataset(data) {
      this.$store.dispatch('getFile', data.id)
      this.$router.push(`/user/${this.userId}/dataset/get`)
    },
    manageDataset(data) {
      this.$store.dispatch('getFile', data.id)
      this.$router.push(`/user/${this.userId}/dataset/update`)
    },
    downLoadDataset(data) {

    }
  },
  created: function() {
    if (this.isLogin) {
      this.$store.dispatch('getPublicDatasets', this.page.number, this.page.size)
    } else {
      this.$store.dispatch('getDatasets', this.userId)
    }
  }
}
</script>

