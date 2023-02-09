import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import * as echarts from 'echarts'
import store from '@/store'
import getElementUi from '@/plugins'
import VueCordova from 'vue-cordova'
import { MessageBox } from 'element-ui';
var VueTouch = require('vue-touch')
getElementUi(Vue)
Vue.use(VueTouch, { name: 'v-touch' })
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueCordova)
Vue.component(MessageBox.name, MessageBox)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$alert=MessageBox.alert
// Vue.prototype.$alter = MessageBox.alter
// document.addEventListener('deviceready', function () {
//   new Vue({
//     render: h => h(App),
//     store,
//     router,
//   }).$mount('#app')
// }, false)
  new Vue({
    render: h => h(App),
    store,
    router,
  }).$mount('#app')