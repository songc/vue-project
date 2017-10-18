import Vue from 'vue'
import {Spin} from 'iview'
import Router from 'vue-router'
import Home from '../view/Home.vue'
import TheCard from '../components/TheCard.vue'
import TheCard2 from '../components/TheCard2.vue'
import DatasetCreate from '../components/DatasetCreate.vue'
// import DatasetBrowse from '../components/DatasetBrowse.vue'
import DatasetUpdate from '../components/DatasetUpdate.vue'
import TheHome from '../components/TheHome.vue'
import TheTeacher from '../components/TheTeacher.vue'
import ThePhd from '../components/ThePhd.vue'
import ThePaper from '../components/ThePaper.vue'
import TheProject from '../components/TheProject.vue'
import TheMaster from '../components/TheMaster.vue'
import Page404 from '../components/Page404.vue'
const DatasetBrowse = () => ({
  component: import('../components/DatasetBrowse.vue'),
  loading: Spin,
  delay: 200,
  timeout: 3000
})

Vue.use(Router)
const routes = [
  { path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    name: 'main',
    component: Home,
    children: [
      {
        path: 'home',
        name: 'home',
        component: TheHome
      },
      {
        path: 'project',
        name: 'project',
        component: TheProject
      },
      {
        path: 'teacher',
        name: 'teacher',
        component: TheTeacher
      },
      {
        path: 'paper',
        name: 'paper',
        component: ThePaper
      },
      {
        path: 'phd',
        name: 'phd',
        component: ThePhd
      },
      {
        path: 'master',
        name: 'master',
        component: TheMaster
      },
      {
        path: 'dataset',
        name: 'dataset',
        component: TheCard2
      },
      {
        path: 'dashboard',
        name: 'dashBoard',
        component: TheCard
      },
      {
        path: 'dataset/post',
        name: 'datasetCreate',
        component: DatasetCreate
      },
      {
        path: 'dataset/get',
        name: 'datasetBrowse',
        component: DatasetBrowse
      },
      {
        path: 'dataset/update',
        name: 'datasetUpdate',
        component: DatasetUpdate
      }
    ]
  },
  {
    path: '/*',
    name: 'error',
    component: Page404
  }
]
export default new Router({
  routes
})
