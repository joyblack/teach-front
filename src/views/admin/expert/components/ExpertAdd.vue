<template>
  <div>
    <a-modal :visible="visible"
             :title="title"
             @ok="ok"
             @cancel="cancel"
             :destroyOnclose="true"
             :confirm-loading="confirmLoading"
             :afterClose="afterClose"
             :maskClosable="false"
             :keyboard="true"
             :width="700">
      <a-form :form="form" :style="{ marginTop: '8px' }">
        <a-form-item label="姓名" v-bind="formItemLayout">
          <a-input placeholder="姓名"
                   allowClear
                   v-decorator="['name',{ initialValue:formData.name, rules: [{ required: true, message: '请输入姓名' }] }]"
          />
        </a-form-item>
        <a-form-item label="电话" v-bind="formItemLayout">
          <a-input placeholder="电话"
                   allowClear
                   v-decorator="['phone',{ initialValue:formData.phone, rules: [{ required: true, message: '请输入用户电话' }] }]"
          />
        </a-form-item>
        <a-form-item label="身份证号" v-bind="formItemLayout">
          <a-input placeholder="身份证号"
                   allowClear
                   v-decorator="['idNumber',{ initialValue:formData.idNumber, rules: [] }]"
          />
        </a-form-item>
        <a-form-item label="* 照片" v-bind="formItemLayout">
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
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
            <span slot="label">
                简介（选填）
            </span>
          <a-textarea placeholder="请输入简介" :rows="4"
                      v-decorator="['introduce',{ initialValue:formData.introduce, rules: [{ required: true, message: '简介不能为空'}] }]"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
            <span slot="label">
                备注（选填）
            </span>
          <a-textarea placeholder="请输入备注" :rows="4"
                      v-decorator="['remarks',{ initialValue:formData.remarks, rules: [] }]"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import expert from '@/api/expert.js'
import upload from '@/api/upload.js'
import { message } from 'ant-design-vue'
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  mounted () {
    this.loader()
  },
  data () {
    return {
      // 上传表单
      previewVisible: false,
      previewImage: '',
      fileList: [],
      accept: '.png,.jpg,.bmp,.jpeg,.gif,.svg',
      visible: false,
      title: '新增专家信息',
      confirmLoading: false,
      formItemLayout: {
        labelCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 7
          }
        },
        wrapperCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 12
          },
          md: {
            span: 10
          }
        }
      },
      formData: {
        id: null,
        name: null,
        idNumber: null,
        phone: null,
        photoId: null,
        remarks: null,
        introduce: null
      }
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
      if (fileList.length === 0) {
        this.fileList = fileList
        return false
      }
      // 构建表单信息
      const formData = new FormData()
      formData.append('file', fileList[fileList.length - 1].originFileObj)
      upload.expert(formData).then(res => {
        if (res.data.state) {
          const data = res.data.data
          this.fileList.push({
            uid: data.id.toString(),
            name: data.filename,
            status: 'done',
            url: '/api/download/expert/' + data.id
          })
          message.success('上传成功')
          this.formData.photoId = data.id
        } else {
          message.warning(res.data.message)
        }
      })
      return false
    },
    openModal (record) {
      this.visible = true
      this.fileList = []
    },
    // 确定
    ok () {
      this.form.validateFields((error, values) => {
        // 表单验证
        if (error) {
          return false
        }
        // 上传图片验证
        values.photoId = this.formData.photoId
        if (!values.photoId) {
          message.error('专家图片不能为空')
          return false
        }
        // 开启加载
        this.confirmLoading = true
        expert.add(values).then(res => {
          res = res.data
          if (res.state) {
            message.success('创建成功')
            // 加载列表
            this.$parent.loader()
            this.visible = false
          } else {
            message.error(res.message)
          }
        })
        this.confirmLoading = false
        // 重置上传图片
        this.fileList = {}
      })
    },
    cancel () {
      this.visible = false
      this.confirmLoading = false
    },
    // 加载数据
    loader () {
    },
    // 关闭后处理
    afterClose () {
      // 初始化表单
      this.form.resetFields()
    }
  }
}
</script>

<style scoped>

</style>
