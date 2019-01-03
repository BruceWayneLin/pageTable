import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import dt from 'datatables.net'
import '@/assets/dataTable/css/dataTables.foundation.min.css'
import '@/assets/dataTable/css/dataTables.jqueryui.min.css'
import '@/assets/dataTable/css/dataTables.semanticui.min.css'
import '@/assets/dataTable/css/jquery.dataTables.min.css'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
