import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home.vue'
import Main from '../view/Main.vue'
import TheCard from '../components/TheCard.vue'
import TheCard2 from '../components/TheCard2.vue'
import DatasetCreate from '../components/DatasetCreate.vue'
import DatasetBrowse from '../components/DatasetBrowse.vue'
import DatasetUpdate from '../components/DatasetUpdate.vue'

Vue.use(Router)
const routes = [
  { path: '/',
    redirect: '/home'
  },
  { path: '/home',
    name: 'home',
    component: Home,
    children: []
  },
  {
    path: '/public',
    name: 'public',
    component: Main,
    children: [{
      path: 'dataset',
      name: 'publicDataset',
      component: TheCard2
    }, {
      path: 'dataset/get',
      name: 'publicDatasetBrowse',
      component: DatasetBrowse
    }]
  },
  { path: '/user/:id',
    name: 'user',
    component: Main,
    children: [{
      path: 'dataset',
      name: 'datasetList',
      component: TheCard
    }, {
      path: 'dataset/post',
      name: 'datasetCreate',
      component: DatasetCreate
    }, {
      path: 'dataset/get',
      name: 'datasetBrowse',
      component: DatasetBrowse
    }, {
      path: 'dataset/update',
      name: 'datasetUpdate',
      component: DatasetUpdate
    }]
  }
]
export default new Router({
  routes
})
