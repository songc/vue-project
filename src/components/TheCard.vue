<template>
<div class="thecard">
  <Row :gutter="16" class-name="thecard-row">
    <Col span="8" v-for="(dataset, index) in datasets" :key="index" class-name="thecard-col">
      <Card class="thecard-card">
        <p slot="title">{{ dataset.name }}</p>
        <p slot="extra">{{ dataset.author }} </p>
        <p>{{ dataset.description | formatDescription }}</p>
        <div class="thecard-card-div">
          <Button type="info" @click="browseDataset(dataset)">Browse</Button>
          <Button type="ghost" @click="updateDataset(dataset)">Modify</Button>
          <Button type="ghost" @click="downLoadDataset(dataset)">DownLoad</Button>
        </div>
      </Card>
    </Col>
  </Row>
  <div class="thecard-page">
    <Page :total="page.total" :current="page.number" @on-change="changePageNum"></Page>
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
      page: {
        total: 10,
        number: 5,
        size: 9
      }
    }
  },
  computed: {
    datasets() {
      return this.$store.state.datasets
    }
  },
  beforeCreate: function() {
    this.$store.dispatch('getDatasets', this.$store.state.user.id)
  },
  methods: {
    changePageNum(num) {
      this.page.number = num
      this.$store.dispatch('getDatasets')
    },
    browseDataset(data) {
      this.$store.commit('changeCurrentDataset', data)
      this.$router.push(`/dataset/get`)
    },
    updateDataset(data) {
      this.$store.commit('changeCurrentDataset', data)
      this.$router.push(`/dataset/update`)
    },
    downLoadDataset(data) {

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
.thecard-card-div{
  display: flex;
  display: -webkit-flex;
  align-items: flex-end;
  margin-top: 12px;
  text-align: center;
}
</style>
