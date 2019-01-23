import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import dt from 'datatables.net'
import '@/assets/dataTable/css/dataTables.foundation.min.css'
import '@/assets/dataTable/css/dataTables.jqueryui.min.css'
import '@/assets/dataTable/css/dataTables.semanticui.min.css'
import '@/assets/dataTable/css/jquery.dataTables.min.css'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  fas
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import axios from 'axios'
let config = {
  "game_id": "0",
  "version": "",
  "game_host": "",
  "api_host": "",
  "redirect_url": "",
  "debug": true
};

store.commit("setting/setConfig", config);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')