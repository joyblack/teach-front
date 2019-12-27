import Admin from '@/layout/Admin.vue'

export default [
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    redirect: 'ahome',
    children: [
      {
        path: '',
        name: 'ahome',
        component: () => import('@/views/admin/index/Index.vue')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/admin/user/User.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/admin/login/Login')
  }
]
