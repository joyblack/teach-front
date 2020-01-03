import request from './index'

const download = {
  // 下载文件
  expert: (id) => {
    return request.request({
      url: `download/expert/:id`,
      method: 'get'
    })
  }
}
export default download
