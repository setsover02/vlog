import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/spa/Main'
import Write from '@/spa/Write'
import View from '@/spa/View'
Vue.use(Router)

/* eslint-disable no-new */
export default new Router({
  routes: [
    { path: '/', name: 'Main', component: Main },
    { path: '/write', name: 'Write', component: Write },
    { path: '/view', name: 'View', component: View }
  ]
})
