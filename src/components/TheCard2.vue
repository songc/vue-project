<template>
<div>
  <Row :gutter="20">
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
    <Page :total="page.total" :current="page.num" @on-change="changePageNum"></Page>
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
        num: 5,
        size: 9
      }
    }
  },
  computed: {
    datasets() {
      return this.$store.state.datasets
    }
  },
  created: function() {
    this.$store.dispatch('getPublicDatasets', this.page.num, this.page.size)
  },
  methods: {
    changePageNum(num) {
      this.page.num = num
      this.$store.dispatch('getPublicDatasets', this.page.num, this.page.size)
    },
    browseDataset(data) {
      this.$store.commit('changeCurrentDataset', data)
      this.$router.push(`/user/${this.userId}/dataset/get`)
    },
    updateDataset(data) {
      this.$store.commit('changeCurrentDataset', data)
      this.$router.push(`/user/${this.userId}/dataset/update`)
    },
    downLoadDataset(data) {

    }
  }
}
</script>

<style scoped>
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
