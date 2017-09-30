import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/Index.vue'
import Login from '../view/Login.vue'

Vue.use(Router)
const routes = [
{path: '/', name: 'home', component: Index},
{path: '/test', name: 'test', component: Login}
]
export default new Router({
  routes
})
