<template>
<div class="thecard">
  <div v-if="datasets[0]" class="thecard-row">
    <Row >
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
  </div>
  <div v-else class="thecard no-datasets">
    <p>No datasets</p>
  </div>
  <div class="thecard-page">
    <Page :total="total" :page-size='size' @on-change="changePageNum" show-total></Page>
  </div>
</div>
</template>

<script>
export default {
  name: 'TheCard2',
  props: ['searchKeyWord'],
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
      this.$router.push({name: 'datasetBrowse', params: {datasetId: data.id}})
    },
    downLoadDataset(data) {
      const linkElement = document.createElement('a')
      linkElement.setAttribute('href', `/api/dataset/${data.id}/zip?name=${data.name}`)
      linkElement.setAttribute('download', `${data.name}.zip`)
      var clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: false
      })
      linkElement.dispatchEvent(clickEvent)
    },
    fetchData() {
      let payload = {
        seachKeyWord: this.searchKeyWord,
        pageNumber: this.number - 1,
        pageSize: this.size
      }
      this.$store.dispatch('getPublicDatasets', payload).then((res) => {
        this.total = res.totalElements
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
.thecard-row {
  min-height: 600px;
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
.no-datasets {
  padding-top: 200px;
  text-align: center;
  min-height: 500px;
  font-size: 50px;
}
</style>
