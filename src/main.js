import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Juices from './components/Juices.vue'
import Health from './components/Health.vue'
import Locations from './components/Locations.vue'
import About from './components/About'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/juices', component: Juices },
    { path: '/health', component: Health },
    { path: '/locations', component: Locations },
    { path: '/about', component: About }
  ]
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
