// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import store from './vuex/store'
import locale from 'iview/dist/locale/en-US'
// import './mock/mock'

Vue.config.productionTip = false
Vue.use(iView, {locale})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
