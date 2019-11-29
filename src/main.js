import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Main from './components/Main.vue'
import Juices from './components/Juices.vue'
import Health from './components/Health.vue'
import Locations from './components/Locations.vue'
import About from './components/About'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Main },
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
