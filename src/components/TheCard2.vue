<template>
<div class="thecard">
  <Row class-name="thecard-row">
    <Col span="8" v-for="(dataset, index) in datasets" :key="index" class-name="thecard-col">
      <Card class="thecard-card">
        <p slot="title">{{ dataset.name }}</p>
        <p slot="extra">{{ dataset.author }} </p>
        <p>{{ dataset.description | formatDescription }}</p>
        <div class="thecard-card-div">
          <Button type="info" @click="browseDataset(dataset)">Browse</Button>
          <Button type="ghost" @click="downLoadDataset(dataset)">DownLoad</Button>
        </div>
      </Card>
    </Col>
  </Row>
  <div class="thecard-page">
    <Page :total="total" :page-size='size' @on-change="changePageNum" show-total></Page>
  </div>
</div>
</template>

<script>
export default {
  name: 'TheCard2',
  filters: {
    formatDescription: function(value) {
      let limitnum = 97
      if (value.length > limitnum) {
        return value.substring(0, limitnum) + '...'
      }
      if (value.length <= limitnum) {
        return value.padEnd(limitnum + 3, ' ')
      }
    }
  },
  data() {
    return {
      total: 10,
      number: 1,
      size: 9
    }
  },
  computed: {
    datasets() {
      return this.$store.state.datasets
    }
  },
  watch: {
    '$route': 'fetchData',
    'number': 'fetchData'
  },
  created: function() {
    this.fetchData()
  },
  methods: {
    changePageNum(num) {
      this.number = num
    },
    browseDataset(data) {
      this.$store.commit('changeCurrentDataset', data)
      this.$router.push({name: 'datasetBrowse', params: {id: data.id}})
    },
    downLoadDataset(data) {

    },
    fetchData() {
      let payload = {
        pageNumber: this.number - 1,
        pageSize: this.size
      }
      this.$Spin.show()
      this.$store.dispatch('getPublicDatasets', payload).then((res) => {
        this.total = res.totalElements
        this.$Spin.hide()
      }).catch(res => {
        this.$Spin.hide()
        this.$Notice.error({
          title: 'GetDatasets Fail',
          desc: res
        })
      })
    }
  }
}
</script>

<style scoped>
.thecard {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}
.thecard-page {
  text-align: center;
  padding: 12px;
}
.thecard-col {
  padding: 12px;
}
.thecard-card {
  margin: 12px;
}
.thecard-card-div{
  display: flex;
  display: -webkit-flex;
  align-items: flex-end;
  margin-top: 12px;
  text-align: center;
}
</style>
