import axios from './index'

export default {
  getUserInfo: (id) => {
    return axios.request({
      url: `user/${id}`,
      method: 'get'
    })
  }
}
