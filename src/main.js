import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'

import './styles/global.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, faCartArrowDown, } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass, faInstagram, faCartArrowDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,

  beforeCreate () {
    this.$store.commit('initialiseStore')
  },
  
  render: h => h(App),
}).$mount('#app')
