import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import NotFound from '@/views/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path:'/login',
      name:'login',
      component:Login
    },{
      path:'/404',
      name:'notFound',
      component:NotFound
    },{
      path: "*", // 此处需特别注意置于最底部
      redirect: "/404"
    }
  ]
})
