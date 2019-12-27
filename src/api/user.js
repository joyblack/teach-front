import request from './index'

const user = {
  get: (id) => {
    return request.request({
      url: `user/${id}`,
      method: 'get'
    })
  }
}
export default user
