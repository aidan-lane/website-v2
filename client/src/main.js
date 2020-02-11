import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {SquareSpinner} from 'vue-spinners'
import VueMarkdown from 'vue-markdown-v2'

// add font awesome to global
library.add(fas, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('square', SquareSpinner)
Vue.component('vue-markdown', VueMarkdown)
dom.watch()

Vue.use(Buefy, {defaultIconPack: 'fas',})

// use http to make back requests
const axios = require('axios').default
axios.defaults.baseURL = '/api'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
