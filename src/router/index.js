import Vue from 'vue'
import Router from 'vue-router'
//Views
import HomeView from '@/views/HomeView'
import LoginView from '@/views/LoginView'


Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/',
      name: 'Home',
      component: HomeView 
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    }
  ]
})