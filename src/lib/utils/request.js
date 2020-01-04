/* 请求工具类
* nProgress浏览器上方进度加载
* */
import axios from 'axios'
import { TOKEN_KEY } from '@/constant/common.js'

class HttpRequest {
  constructor (url = '/api/') {
    this.baseUrl = url
    // 用于删除Loading资源
    this.queue = {}
  }

  getInstanceConfig () {
    // 在此处设置默认的配置
    return {
      baseURL: this.baseUrl,
      headers: {}
    }
  }

  getPostFileConfig () {
    // 在此处设置默认的配置
    return {
      baseURL: this.baseUrl,
      headers: {}
    }
  }

  // 拦截器
  interceptors (instance) {
    // 请求的拦截
    instance.interceptors.request.use(config => {
      // 添加token
      return config
    }, error => {
      return Promise.reject(error)
    })

    // 返回的拦截
    instance.interceptors.response.use(config => {
      config.headers.joy = localStorage.getItem(TOKEN_KEY.TOKEN)
      return config
    }, error => {
      return Promise.reject(error)
    })
  }

  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInstanceConfig(), options)
    // 添加拦截器
    this.interceptors(instance)
    return instance(options)
  }
}

export default HttpRequest
