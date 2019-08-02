import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import './registerServiceWorker'
import axios from 'axios'

import Header from '@/components/header'
import Header2 from '@/components/header2'
import Aside from '@/components/aside'
import Mind from '@/components/Mind.vue'
import Mind1 from '@/components/Mind1.vue'
import Mind2 from '@/components/Mind2.vue'
import Footer from '@/components/Footer.vue'

Vue.component('my-header',Header)
Vue.component('my-header2',Header2)
Vue.component('my-aside',Aside)
Vue.component('my-Mind',Mind)
Vue.component('my-Mind1',Mind1)
Vue.component('my-Mind2',Mind2)
Vue.component('my-footer',Footer)
axios.defaults.baseURL='http://localhost:81';
axios.defaults.withCredentials = true;
Vue.prototype.axios = axios;

Vue.use(ElementUI);
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
