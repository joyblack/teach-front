import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexRouter from './front.js'

Vue.use(VueRouter)

const routes = [
  ...IndexRouter
]

const router = new VueRouter({
  routes
})

export default router
