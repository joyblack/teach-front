import request from './index'

const expert = {
  add: (data) => {
    return request.request({
      url: 'expert/add',
      method: 'post',
      data: data
    })
  },
  delete: (id) => {
    return request.request({
      url: `expert/delete/${id}`,
      method: 'delete'
    })
  },
  get: (id) => {
    return request.request({
      url: `expert/get/${id}`,
      method: 'get'
    })
  },
  page: (data) => {
    return request.request({
      url: 'expert/page',
      method: 'post',
      data: data
    })
  },
  edit: (data) => {
    return request.request({
      url: 'expert/edit',
      method: 'put',
      data: data
    })
  },
  // 设置状态
  status: (id, status) => {
    return request.request({
      url: `expert/status/${id}/${status}`,
      method: 'put'
    })
  }
}
export default expert
