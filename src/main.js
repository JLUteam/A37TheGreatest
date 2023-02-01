import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import * as echarts from 'echarts'
import store from '@/store'
import getElementUi from '@/plugins'
import VueCordova from 'vue-cordova'

var VueTouch = require('vue-touch')
getElementUi(Vue)
Vue.use(VueTouch, { name: 'v-touch' })
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueCordova)
new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
