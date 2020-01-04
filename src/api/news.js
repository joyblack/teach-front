import request from './index'

const news = {
  add: (data) => {
    return request.request({
      url: 'news/add',
      method: 'post',
      data: data
    })
  },
  delete: (id) => {
    return request.request({
      url: `news/delete/${id}`,
      method: 'delete'
    })
  },
  get: (id) => {
    return request.request({
      url: `news/get/${id}`,
      method: 'get'
    })
  },
  page: (data) => {
    return request.request({
      url: 'news/page',
      method: 'post',
      data: data
    })
  },
  edit: (data) => {
    return request.request({
      url: 'news/edit',
      method: 'put',
      data: data
    })
  },
  // 设置状态
  status: (id, status) => {
    return request.request({
      url: `news/status/${id}/${status}`,
      method: 'put'
    })
  }
}
export default news
