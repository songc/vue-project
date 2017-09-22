import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home'
import Login from '../page/Login'
import Main from '../page/Main.vue'
import Register from '../page/Register.vue'

Vue.use(Router)
const routes = [
  {path: '/main', component: Main},
  {path: '/register', component: Register},
  {path: '/', name: 'Hello', component: Home},
  {path: '/login', name: 'login', component: Login}
]
export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'Hello',
  //     component: Hello
  //   }
  // ]
  routes
})
