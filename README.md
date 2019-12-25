# teach-front

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


```
,
      {
        path: '/help',
        name: 'help',
        component: () => import(/* webpackChunkName: "about" */ '@/views/front/Help.vue')
      },
      {
        path: '/info',
        component: () => import(/* webpackChunkName: "about" */ '@/views/front/news/News.vue'),
        children: [
          {
            // 默认页
            path: '',
            name: 'infoIndex',
            component: () => import('@/views/front/news/Index.vue')
          },
          {
            path: 'detail/:id',
            name: 'infoDetail',
            component: () => import('@/views/front/news/Detail.vue')
          }
        ]
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
```
