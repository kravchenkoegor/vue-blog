import Vue from 'vue'
import App from './App'
import Panel from './components/Panel'
import router from './router'
import store from './store/store'
import { sync } from 'vuex-router-sync'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(require('vue-moment'))
sync(store, router)

Vue.component('Panel', Panel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
