<template>
  <div>
    <Card class="main" dis-hover>
      <p slot="title">Dataset Info</p>
      <Button slot="extra" type="primary" @click="save">Create Dataset</Button>
      <Row>
        <Col span="12" offset="6">
          <Form :model="dataset" label-position="left" :label-width="100">
            <FormItem prop="name" label="Name">
              <Input type="text" v-model="dataset.name" placeholder="dataset name" style="width: 300px"></Input>
            </FormItem>
            <FormItem prop="author" label="Author">
              <Input type="text" v-model="dataset.author" placeholder="dataset author" style="width: 300px"></Input>
            </FormItem>
            <FormItem prop="type" label="Type">
              <RadioGroup v-model="dataset.type">
                <Radio label="CSV">CSV</Radio>
                <Radio label="IMAGE">IMAGE</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem prop="description" label="Descript">
              <Input type="textarea" v-model="dataset.description" :autosize="{minRows: 4, maxRows: 10}" placeholder="dataset description" style="width: 300px"></Input>
            </FormItem>
            <FormItem prop="equipmentId" label="Equipment">
              <p v-if="equipments.length===0">You hasn't any template, Go to Create</p>
              <Select v-else v-model="dataset.equipmentId" style="width: 300px">
                <Option v-for="equipment in equipments" :value="equipment.id" :key="equipment.id">{{ equipment.name }}</Option>
              </Select>
              <Button type="primary" @click="equipmentModal=true">Create New</Button>
              <InfoShow type="Equipment" v-if="getEquipmentById" title="Equipment" :info="getEquipmentById"></InfoShow> 
            </FormItem>
            <FormItem prop="datasetMetaId" label="DatasetMeta">
              <p v-if="datasetMetas.length===0">You hasn't any template, Go to Create</p>
              <Select v-else v-model="dataset.datasetMetaId" style="width: 300px">
                <Option v-for="datasetMeta in datasetMetas" :value="datasetMeta.id" :key="datasetMeta.id">{{ datasetMeta.name }}</Option>
              </Select>
              <Button type="primary" @click="datasetMetaModal=true">Create New</Button>
              <InfoShow type="DatasetMeta" v-if="getDatasetMetaById" title="DatasetMeta" :info="getDatasetMetaById"></InfoShow>
            </FormItem>
          </Form>       
        </Col>
      </Row>    
    </Card>
      <Modal v-model="equipmentModal" title="Equipment Info">
        <Equipment @success="equipmentModal=false" @cancel="equipmentModal=false"></Equipment>
        <div slot="footer"></div>
      </Modal>
      <Modal v-model="datasetMetaModal" title="DatasetMeta Info">
        <DatasetMeta @success="datasetMetaModal=false" @cancel="datasetMetaModal=false"></DatasetMeta>
        <div slot="footer"></div>
      </Modal>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Equipment from '../components/EquipmentForm'
import DatasetMeta from '../components/DatasetMetaForm'
import InfoShow from '../components/InfoShow'
export default {
  name: 'TheDatasetInfo',
  components: {
    Equipment,
    DatasetMeta,
    InfoShow
  },
  data() {
    return {
      equipmentModal: false,
      datasetMetaModal: false,
      dataset: {
        name: '',
        author: '',
        type: 'CSV',
        description: '',
        equipmentId: null,
        datasetMetaId: null
      }
    }
  },
  computed: {
    ...mapState([
      'equipments',
      'datasetMetas'
    ]),
    getEquipmentById() {
      return this.$store.getters.getEquipmentById(this.dataset.equipmentId)
    },
    getDatasetMetaById() {
      return this.$store.getters.getDatasetMetaById(this.dataset.datasetMetaId)
    }
  },
  created() {
    let userId = this.$route.params.id
    this.$store.dispatch('getEquipments', userId)
    this.$store.dispatch('getDatasetMetas', userId)
  },
  methods: {
    save() {
      this.$store.dispatch('postDataset', {userId: this.$route.params.id, dataset: this.dataset}).then(() => {
        this.$router.push({
          name: 'FileUpload',
          params: { id: this.$route.params.id, datasetId: this.$store.state.currentDataset.id }
        })
      }).catch(res => {
        this.$emit('on-fail')
      })
    }
  }
}
</script>

<style scoped>
.main {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;
  min-height: 800px;
}
</style>
