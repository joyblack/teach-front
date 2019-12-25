import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/help',
    name: 'help',
    component: () => import(/* webpackChunkName: "about" */ '../views/Help.vue')
  },
  {
    path: '/info',
    component: () => import(/* webpackChunkName: "about" */ '../views/news/News.vue'),
    children: [
      {
        // 默认页
        path: '',
        name: 'infoIndex',
        component: () => import('../views/news/Index.vue')
      },
      {
        path: 'detail/:id',
        name: 'infoDetail',
        component: () => import('../views/news/Detail.vue')
      }
    ]
  },
  {
    path: '/expert',
    component: () => import(/* webpackChunkName: "about" */ '../views/expert/Expert.vue'),
    children: [
      {
        path: '',
        name: 'expertIndex',
        component: () => import('../views/expert/Index.vue')
      },
      {
        path: 'detail/:id',
        name: 'expertDetail',
        component: () => import('../views/expert/Detail.vue')
      }
    ]
  },
  {
    path: '/news',
    component: () => import(/* webpackChunkName: "about" */ '../views/news/News.vue'),
    children: [
      {
        // 默认页
        path: '',
        name: 'newsIndex',
        component: () => import('../views/news/Index.vue')
      },
      {
        path: 'detail/:id',
        name: 'newsDetail',
        component: () => import('../views/news/Detail.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
