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
