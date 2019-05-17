import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/router/Main'
import Write from '@/router/Write'
import View from '@/router/View'
Vue.use(Router)

/* eslint-disable no-new */
export default new Router({
  routes: [
    { path: '/main', name: 'Main', component: Main },
    { path: '/write', name: 'Write', component: Write },
    { path: '/view', name: 'View', component: View }
  ]
})
