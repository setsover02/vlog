import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Write from '@/components/Write'
import View from '@/components/View'
Vue.use(Router)

/* eslint-disable no-new */
export default new Router({
  routes: [
    { path: '/main', name: 'Main', component: Main },
    { path: '/write', name: 'Write', component: Write },
    { path: '/view', name: 'View', component: View }
  ]
})
