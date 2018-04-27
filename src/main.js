// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueTheMask from 'vue-the-mask'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(VueTheMask)

Vue.config.productionTip = false
Vue.url.options.root = 'http://127.0.0.1/CrudPessoa'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
