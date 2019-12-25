import Index from '@/layout/Index.vue'

export default [
  {
    path: '/',
    name: 'index',
    component: Index,
    redirect: 'home',
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/front/index/Index.vue')
      },
      {
        path: '/expert',
        component: () => import(/* webpackChunkName: "about" */ '@/views/front/expert/Expert.vue'),
        children: [
          {
            path: '',
            name: 'expertIndex',
            component: () => import('@/views/front/expert/Index.vue')
          },
          {
            path: 'detail/:id',
            name: 'expertDetail',
            component: () => import('@/views/front/expert/Detail.vue')
          }
        ]
      },
      {
        path: '/news',
        component: () => import(/* webpackChunkName: "about" */ '@/views/front/news/News.vue'),
        children: [
          {
            // 默认页
            path: '',
            name: 'newsIndex',
            component: () => import('@/views/front/news/Index.vue')
          },
          {
            path: 'detail/:id',
            name: 'newsDetail',
            component: () => import('@/views/front/news/Detail.vue')
          }
        ]
      }
    ]
  }
]
