import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexRouter from './front.js'
import AdminRouter from './admin.js'
import { setTile } from '@/lib/utils.js'

Vue.use(VueRouter)

const routes = [
  ...IndexRouter,
  ...AdminRouter,
  {
    path: '*',
    name: 'all',
    component: () => import('@/views/common/Error404.vue')
  }
]

const router = new VueRouter({
  routes
})

/**
 * 跳转前处理，登录判断等
 */
router.beforeEach((to, from, next) => {
  // 设置title
  to.meta && setTile(to.meta.title)
  next()
})

// 如前面所说，由于不能阻止页面跳转，因此也不会注入next参数。
// 后缀守卫可以用来消除路由跳转时的加载图片等。
router.afterEach((to, from) => {
  // 删除加载图片
})

export default router
