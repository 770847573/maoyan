import Vue from 'vue'
import Router from 'vue-router'
import admincenter from './views/admincenter.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Home1 from './views/Home1.vue'
import Signup from './views/signup.vue'
import Edituser from './views/edituser'
import information from './views/information'
import likelist from './views/likelist'
import Detail from './views/Detail'
import Mindtwo from './components/Mindtwo.vue'
import Mindone from './components/Mindone.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {
       path: '/',
       name: 'home',
       component: Home,
       children:[
         {
          path: '/',
          component: Home1,
         },
        {
            path:'mt',
            component:Mindtwo
        },
        {
            path:'mo',
            component:Mindone
        }
    ]
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
      path: '/admincenter',
      
      component: admincenter,
	  children:[
		  {
			  path:"/",
			  component:information
		  },
		  {
		  		path:"likelist",
		  		component:likelist
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
