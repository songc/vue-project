import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../view/Home.vue')
const TheCard = () => import('../view/TheCard.vue')
const TheCard2 = () => import('../view/TheCard2.vue')
const TheDatasetInfo = () => import('../view/TheDatasetInfo.vue')
const TheFileInfo = () => import('../view/TheFileInfo.vue')
const DatasetUpdate = () => import('../view/DatasetUpdate.vue')
const TheHome = () => import('../view/TheHome.vue')
const TheTeacher = () => import('../view/TheTeacher.vue')
const ThePhd = () => import('../view/ThePhd.vue')
const ThePaper = () => import('../view/ThePaper.vue')
const TheProject = () => import('../view/TheProject.vue')
const TheMaster = () => import('../view/TheMaster.vue')
const Page404 = () => import('../view/Page404.vue')
const DatasetBrowse = () => import('../view/DatasetBrowse.vue')

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
        component: TheCard2,
        props: route => {
          return {
            searchKeyWord: route.query.search
          }
        }
      },
      {
        path: 'dataset/:datasetId/get',
        name: 'datasetBrowse',
        component: DatasetBrowse
      },
      {
        path: 'user/:id/dashboard',
        name: 'dashBoard',
        component: TheCard
      },
      {
        path: 'user/:id/dataset/:datasetId/file',
        name: 'FileUpload',
        component: TheFileInfo
      },
      {
        path: 'user/:id/dataset/:datasetId/update',
        name: 'datasetUpdate',
        component: DatasetUpdate
      },
      {
        path: 'user/:id/dataset',
        name: 'datasetCreate',
        component: TheDatasetInfo
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
