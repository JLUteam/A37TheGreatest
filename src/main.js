import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import * as echarts from 'echarts'
import store from '@/store'
import getElementUi from '@/plugins'
import VueCordova from 'vue-cordova'
import { MessageBox } from 'element-ui';
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
var VueTouch = require('vue-touch')
getElementUi(Vue)
Vue.use(VueTouch, { name: 'v-touch' })
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueCordova)
 Vue.use(VXETable)
Vue.component(MessageBox.name, MessageBox)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$prompt = MessageBox.prompt

Vue.prototype.$XModal = VXETable.modal
Vue.prototype.$XPrint = VXETable.print
Vue.prototype.$XSaveFile = VXETable.saveFile
Vue.prototype.$XReadFile = VXETable.readFile
new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus = this	//安装全局事件总线
  }
}).$mount('#app')

