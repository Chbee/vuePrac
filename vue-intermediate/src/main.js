import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { store } from './Store/store'

new Vue({
  el: '#app',
  store,
  render: h => h(App),
}).$mount('#app')
