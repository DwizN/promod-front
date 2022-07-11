import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'

import './styles/global.scss';

Vue.config.productionTip = false

new Vue({
  router,
  store,

  beforeCreate () {
    this.$store.commit('initialiseStore')
  },
  
  render: h => h(App),
}).$mount('#app')