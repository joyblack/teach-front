import request from './index'

const info = {
  add: (data) => {
    return request.request({
      url: 'info/add',
      method: 'post',
      data: data
    })
  },
  delete: (id) => {
    return request.request({
      url: `info/delete/${id}`,
      method: 'delete'
    })
  },
  get: (id) => {
    return request.request({
      url: `info/get/${id}`,
      method: 'get'
    })
  },
  page: (data) => {
    return request.request({
      url: 'info/page',
      method: 'post',
      data: data
    })
  },
  edit: (data) => {
    return request.request({
      url: 'info/edit',
      method: 'put',
      data: data
    })
  },
  // 设置状态
  status: (id, status) => {
    return request.request({
      url: `info/status/${id}/${status}`,
      method: 'put'
    })
  }
}
export default info
