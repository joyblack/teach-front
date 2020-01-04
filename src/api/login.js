import request from './index'

const login = {
  login: (data) => {
    return request.request({
      url: 'login/login',
      method: 'post',
      data: data
    })
  }
}
export default login
