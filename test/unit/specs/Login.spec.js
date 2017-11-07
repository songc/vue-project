import Vue from 'vue'
import iView from 'iview'
import Login from '@/components/Login'

Vue.use(iView)

describe('Login.vue', () => {
  const Constructor = Vue.extend(Login)
  const vm = new Constructor().$mount()
})
