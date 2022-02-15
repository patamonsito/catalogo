import Vue from 'vue'
import AppM from './App-mobile.vue'
import AppT from './App-tablet.vue'
import AppP from './App-pc.vue'
import router from './router'
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => (window.matchMedia("(max-width: 600px)").matches == true ? h(AppM) : window.matchMedia("(max-width: 1264px)").matches == true ? h(AppT) : window.matchMedia("(max-width: 9999px)").matches == true ? h(AppP) : h(AppP))
}).$mount('#app')