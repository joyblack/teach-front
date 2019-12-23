import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import { setTitle } from '@/lib/util'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded（懒加载） when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '关于'
    }

  },
  // 动态路由匹配
  {
    name: 'argu',
    path: '/argu/:name',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  // 嵌套路由
  {
    path: '/parent',
    component: () => import('@/views/parent.vue')
  },
  {
    path: '/about1',
    component: () => import('@/views/about1.vue'),
    props: {
      fruit: 'banana'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/confirm',
    name: 'confirm',
    component: () => import('@/views/confirm.vue')
  },
  {
    path: '/vuex1',
    name: 'vuex1',
    component: () => import('@/views/vuex1.vue')
  },
  {
    path: '/ajax',
    name: 'ajax',
    component: () => import('@/views/ajax')
  },
  {
    path: '/count-to',
    name: 'countTo',
    component: () => import('@/views/count-to')
  },
  {
    path: '*',
    name: 'all',
    component: () => import('@/views/error_404.vue')
  }
]

const router = new VueRouter({
  routes
})

// 是否登录
const HAS_LOGIN = true
/**
 * to：即将跳转的路由对象
 * from：当前的路由对象（离开的路由对象）
 * next: 函数，如果确定要做跳转，会用到他。
 */
router.beforeEach((to, from, next) => {
  // 设置title
  to.meta && setTitle(to.meta.title)
  // 若当前前往的不是登录界面，则进行是否登录判断
  if (to.name !== 'login') {
    if (HAS_LOGIN) {
      next()
    } else {
      next({
        // 若没有登录，跳转到login页面，可以使用对象形式等。
        name: 'login'
      })
    }
  } else {
    if (HAS_LOGIN) {
      next({ name: 'home' })
    } else {
      next()
    }
  }
})

// 如前面所说，由于不能阻止页面跳转，因此也不会注入next参数。
// 后缀守卫可以用来消除路由跳转时的加载图片等。
router.afterEach((to, from) => {
  // 删除加载图片
})

export default router
