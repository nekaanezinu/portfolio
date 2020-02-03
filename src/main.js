import Vue from 'vue'
import App from './App.vue'
import Unicon from 'vue-unicons'
import { uniGithub, uniLinkedin, uniAt } from 'vue-unicons/src/icons'

Vue.config.productionTip = false

Unicon.add([
  uniGithub,
  uniLinkedin,
  uniAt
])

Vue.use(Unicon)

new Vue({
  render: h => h(App),
}).$mount('#app')
