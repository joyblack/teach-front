import request from './index'

const file = {
  // 上传文件
  upload: (module, data) => {
    return request.request({
      url: `upload/${module}`,
      data: data,
      method: 'post'
    })
  },
  // 下载文件
  download: (module, id) => {
    return request.request({
      url: `download/${module}/${id}`,
      method: 'get'
    })
  }
}
export default file
