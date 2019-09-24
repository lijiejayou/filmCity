import Vue from 'vue'
import Router from 'vue-router'
import filmList from '../view/film/film-list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/film-list',
      component:filmList
    }
  ]
})
