import request from './index'

const upload = {
  // 上传文件
  expert: (data) => {
    return request.request({
      url: 'upload/expert',
      data: data,
      method: 'post'
    })
  }
}
export default upload
