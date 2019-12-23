# 简介

# 1、解决跨域问题
1、从客户端解决，只需设置代理即可。即将代理放到与服务端api相同的域（参考跨域上下文）。

2、从服务端解决，服务端允许跨域请求，例如php的
```php
// thinkphp/route.php
Route::get('think', function () {
    return 'hello,ThinkPHP5!';
});

Route::get('hello/:name', 'index/hello');

// 允许跨域
Route::get('user/:id', 'user/get')
    ->allowCrossDomain();

return [];
```

3、使用axios请求
```js
// views/ajax.vue
<template>
  <div>
  <button @click="getUserInfo"> 获取用户信息 </button>
    请求到的用户信息:
  </div>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    getUserInfo () {
        // 这里写了前缀则直接调用，否则会以当前服务器地址作为上下文
      axios.get('http://localhost/teach/user/1').then(
        res => console.log(res)
      )
    }
  }
}
</script>
```
# 2、封装axios
```js
import axios from 'axios'
import { baseUrl } from '@/config'

class HttpRequest {
  constructor (url = baseUrl) {
    this.baseUrl = url
    // 用于删除Loading资源
    this.queue = {}
  }

  getInstanceConfig () {
    // 在此处设置默认的配置
    const config = {
      baseURL: this.baseUrl,
      headers: {}
    }
    return config
  }

  // 拦截器
  interceptors (instance) {
    // 请求的拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loding...
      return config
    }, error => {
      return Promise.reject(error)
    })

    // 返回的拦截
    instance.interceptors.response.use(res => {
      return res
    }, error => {
      return Promise.reject(error)
    })
  }

  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInstanceConfig(), options)
    // 添加拦截器
    this.interceptors(instance)
    // 返回实例
    return instance(options)
  }
}

export default HttpRequest
```
接下来从api文件夹中设置资源获取
```js
// api/index.js
import HttpRequest from '@/lib/axios'

const axios = new HttpRequest()

export default axios
```

便可以使用了，这时候每个不同的资源模块从api下建立不同的文件，例如用户请求
```js
// api/user.js
import axios from './index'

export default {
  getUserInfo: (id) => {
    return axios.request({
      url: `user/${id}`,
      method: 'get'
    })
  }
}
```
## 2.1、请求与响应拦截
之前我们的代码可以设置拦截效果
```js
  // 拦截器
  interceptors (instance) {
    // 请求的拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loding...
      return config
    }, error => {
      return Promise.reject(error)
    })

    // 返回的拦截
    instance.interceptors.response.use(res => {
      return res
    }, error => {
      return Promise.reject(error)
    })
  }
```

# 3、请求实战
修改之前的ajax请求
```js
// views/ajax.vue
<template>
  <div>
  <button @click="getUserInfo"> 获取用户信息 </button>
    请求到的用户信息:
  </div>
</template>

<script>
import user from '@/api/user'

export default {
  methods: {
    getUserInfo () {
      user.getUserInfo(1).then(
        res => console.log(res)
      )
    }
  }
}
</script>
```