import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/Index.vue'

Vue.use(Router)
const routes = [
{path: '/', name: 'home', component: Index}
]
export default new Router({
  routes
})
