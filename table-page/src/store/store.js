import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import setting from './modules/setting'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: {},
  },
  mutations: {},
  modules: {
    setting
  },
  actions: {
    async callApi({
      commit,
      state
    }, data) {
      await axios.post(data['url'], data)
        .then(function (response) {
          state.tableData = JSON.parse(response['data']['payload'])
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
})