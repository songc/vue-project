<template>
<div class="thecard">
  <div v-if="datasets[0]" class="thecard-row">
    <Row  :gutter="16">
      <Col span="8" v-for="(dataset, index) in datasets" :key="index" class-name="thecard-col">
        <Card class="thecard-card">
          <p slot="title">{{ dataset.name }}</p>
          <p slot="extra">{{ dataset.author }} </p>
          <p>{{ dataset.description | formatDescription }}</p>
          <div class="thecard-card-div">
          <Button type="info" @click="browseDataset(dataset)">Browse</Button>
          <Button type="ghost" @click="updateDataset(dataset)">Modify</Button>
          <Button type="ghost" @click="downLoadDataset(dataset)">DownLoad</Button>
          <Button type="warning" @click="deleteDataset(dataset)">Delete</Button>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
  <div v-else class="no-datasets">
    <p>You has not created any dataset,you can 
      <Button type="text" size="large" @click="createDataset">Create New Dataset</Button> or 
      <Button type="text" size="large" @click="goPublicDatasets">Go to Public Datasets</Button> 
    </p>
  </div>
  <div class="thecard-page">
    <Page :current="number" :total="total" :page-size="size" @on-change="changePageNum" show-total></Page>
  </div>
</div>
</template>

<script>
export default {
  name: 'TheCard',
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
      modal: false,
      total: 0,
      number: 1,
      size: 9
    }
  },
  computed: {
    datasets() {
      return this.$store.getters.getDatasetByUserId(parseInt(this.$route.params.id))
    }
  },
  watch: {
    '$route': 'fetchData',
    'number': 'fetchData'
  },
  created() {
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
    updateDataset(data) {
      this.$store.commit('changeCurrentDataset', data)
      this.$router.push({name: 'datasetUpdate', params: {id: this.$route.params.id, datasetId: data.id}})
    },
    downLoadDataset(data) {
      const linkElement = document.createElement('a')
      linkElement.setAttribute('href', `/api/dataset/${data.id}/zip?name=${data.name}`)
      linkElement.setAttribute('download', data.name + '.zip')
      var clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: false
      })
      linkElement.dispatchEvent(clickEvent)
    },
    deleteDataset(data) {
      const _this = this
      let confirm = function () {
        _this.$store.dispatch('delDatasetById', data.id).then(res => {
          _this.$Message.info('delete success')
          _this.number = 1
        }).catch(res => {
          _this.$Notice.error({
            title: 'Fail to Delete Dataset' + data.name,
            desc: res
          })
        }).then(res => {
          _this.fetchData()
        })
      }
      this.$Modal.confirm({
        title: 'Delete',
        content: 'Do you really want to delete the dataset?',
        okText: 'Yes',
        cancelText: 'Cancle',
        onOk: confirm
      })
    },
    fetchData() {
      let payload = {
        userId: this.$route.params.id,
        pageNumber: this.number - 1,
        pageSize: this.size
      }
      this.$store.dispatch('getDatasets', payload).then(res => {
        this.total = res.totalElements
      })
    },
    createDataset() {
      this.$router.push({name: 'datasetCreate', params: {id: this.$route.params.id}})
    },
    goPublicDatasets() {
      this.$router.push({name: 'dataset'})
    }
  }
}
</script>

<style scoped>
.thecard {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  padding: 12px;
}
.thecard-page {
  text-align: center;
  margin: 12px;
}
.thecard-col {
  margin: 12px 0px;
}
.thecard-row {
  min-height: 600px;
}
.thecard-card-div{
  display: flex;
  display: -webkit-flex;
  align-items: flex-end;
  margin-top: 12px;
  text-align: center;
}
.no-datasets{
  padding-top: 150px;
  min-height: 500px;
  font-size: 25px;
  text-align:center
}
</style>
