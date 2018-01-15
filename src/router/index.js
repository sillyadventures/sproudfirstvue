import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import BackgroundChange from '@/components/BackgroundChange'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/change',
      name: 'BackgroundChange',
      component: BackgroundChange
    }
  ]
})
