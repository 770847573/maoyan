import Vue from 'vue'
import Router from 'vue-router'
import admincenter from './views/admincenter.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Signup from './views/signup.vue'
import Edituser from './views/edituser'
import information from './views/information'
import likelist from './views/likelist'
import Detail from './views/Detail'
import Bangd from './views/Bd.vue'
import Diany from './views/Dy.vue'
import Shang from './views/Sc.vue'
import Edimall from './views/Edimall.vue'
import Rd from './views/Rd.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bangd',
      component: Bangd,
    },
    {
      path: '/diany',
      component: Diany,
    },
    {
      path: '/sc',
      component: Shang,
    },
    {
      path: '/edimall',
      component: Edimall,
    },
    {
      path: '/redian',
      component: Rd,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/center',

      component: admincenter,
      children: [{
          path: "/",
          component: information
        },
        {
          path: "likelist",
          component: likelist
        }
      ]
    },
    {
      path: '/edituser',
      name: 'edituser',
      component: Edituser
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
