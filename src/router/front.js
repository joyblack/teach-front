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
        component: import('@/views/front/index/Index.vue')
      }
    ]
  }
]
