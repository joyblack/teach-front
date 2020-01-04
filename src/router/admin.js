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
      },
      {
        path: 'expert',
        name: 'aExpert',
        component: () => import('@/views/admin/expert/Expert.vue')
      },
      {
        path: 'news',
        name: 'aNews',
        component: () => import('@/views/admin/news/Index.vue'),
        redirect: { name: 'newsList' },
        children: [
          {
            path: '',
            name: 'newsList',
            component: () => import('@/views/admin/news/List.vue')
          },
          {
            path: 'add',
            name: 'newsAdd',
            component: () => import('@/views/admin/news/Add.vue')
          },
          {
            path: 'edit/:id',
            name: 'newsEdit',
            props: true,
            component: () => import('@/views/admin/news/Edit.vue')
          }
        ]
      },
      {
        path: 'info',
        name: 'aInfo',
        component: () => import('@/views/admin/info/Index.vue'),
        redirect: { name: 'infoList' },
        children: [
          {
            path: '',
            name: 'infoList',
            component: () => import('@/views/admin/info/List.vue')
          },
          {
            path: 'add',
            name: 'infoAdd',
            component: () => import('@/views/admin/info/Add.vue')
          },
          {
            path: 'edit/:id',
            name: 'infoEdit',
            props: true,
            component: () => import('@/views/admin/info/Edit.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/admin/login/Login')
  }
]
