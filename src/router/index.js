import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home.vue'
import Main from '../view/main/Main.vue'

Vue.use(Router)
const routes = [
{path: '/', name: 'home', component: Home},
{path: '/main', name: 'main', component: Main}
]
export default new Router({
  routes
})
