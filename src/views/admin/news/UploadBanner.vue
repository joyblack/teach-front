<template>
  <div class="clearfix">
    <a-upload
      listType="picture-card"
      :fileList="fileList"
      :accept="accept"
      :beforeUpload="beforeUpload"
      :remove="handlerRemove"
      @preview="handlePreview"
      @change="handleChangePics"
    >
      <div v-if="fileList.length < 1">
        <a-icon type="plus" />
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script>
import file from '@/api/file.js'
import { message } from 'ant-design-vue'

export default {
  data () {
    return {
      // 上传表单
      previewVisible: false,
      previewImage: '',
      fileList: [],
      accept: '.png,.jpg,.bmp,.jpeg,.gif,.svg',
      bannerId: null
    }
  },
  methods: {
    // 删除文件时
    handlerRemove (file) {
      return true
    },
    handlePreview (file) {
      this.previewImage = file.url || file.thumbUrl
      this.previewVisible = true
    },
    beforeUpload (file) {
      return false
    },
    handleChangePics ({ fileList }) {
      console.log(fileList)
      if (fileList.length === 0) {
        this.bannerId = null
        this.fileList = fileList
        return false
      }
      // 构建表单信息
      const formData = new FormData()
      formData.append('file', fileList[fileList.length - 1].originFileObj)
      file.upload('newsBanner', formData).then(res => {
        if (res.data.state) {
          const data = res.data.data
          this.fileList.push({
            uid: data.id.toString(),
            name: data.filename,
            status: 'done',
            url: '/api/download/newsBanner/' + data.id
          })
          this.bannerId = data.id
        } else {
          message.warning(res.data.message)
        }
      })
      return false
    }
  }
}
</script>
<style>
  /* you can make up upload button and sample style by using stylesheets */
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
