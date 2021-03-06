import request from './index'

const user = {
  add: (data) => {
    return request.request({
      url: 'user/add',
      method: 'post',
      data: data
    })
  },
  delete: (id) => {
    return request.request({
      url: `user/delete/${id}`,
      method: 'delete'
    })
  },
  get: (id) => {
    return request.request({
      url: `user/get/${id}`,
      method: 'get'
    })
  },
  page: (data) => {
    return request.request({
      url: 'user/page',
      method: 'post',
      data: data
    })
  },
  edit: (data) => {
    return request.request({
      url: 'user/edit',
      method: 'put',
      data: data
    })
  },
  // 设置状态
  status: (id, status) => {
    return request.request({
      url: `user/status/${id}/${status}`,
      method: 'put'
    })
  },
  // 重置密码
  resetPassword: (id) => {
    return request.request({
      url: `user/resetPassword/${id}`,
      method: 'put'
    })
  },
  // 修改密码
  changePassword: (data) => {
    return request.request({
      url: 'user/changePassword',
      method: 'put',
      data: data
    })
  }
}
export default user
