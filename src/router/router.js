import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../view/Home.vue')
const TheCard = () => import('../components/TheCard.vue')
const TheCard2 = () => import('../components/TheCard2.vue')
const DatasetCreate = () => import('../components/DatasetCreate.vue')
const DatasetUpdate = () => import('../components/DatasetUpdate.vue')
const TheHome = () => import('../components/TheHome.vue')
const TheTeacher = () => import('../components/TheTeacher.vue')
const ThePhd = () => import('../components/ThePhd.vue')
const ThePaper = () => import('../components/ThePaper.vue')
const TheProject = () => import('../components/TheProject.vue')
const TheMaster = () => import('../components/TheMaster.vue')
const Page404 = () => import('../components/Page404.vue')
const DatasetBrowse = () => import('../components/DatasetBrowse.vue')

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
        path: 'user/:id/dashboard',
        name: 'dashBoard',
        component: TheCard
      },
      {
        path: 'user/:id/dataset',
        name: 'datasetCreate',
        component: DatasetCreate
      },
      {
        path: 'dataset/:id/get',
        name: 'datasetBrowse',
        component: DatasetBrowse
      },
      {
        path: 'dataset/:id/update',
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
