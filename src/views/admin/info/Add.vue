<template>
  <div>
      <a-form :form="form" :style="{ marginTop: '8px' }">
        <a-form-item label="标题" v-bind="formItemLayout">
          <a-input placeholder="请输入公告标题"
                   allowClear
                   v-decorator="['title',{ initialValue:formData.username, rules: [{ required: true, message: '公告标题不能为空' }] }]"
          />
        </a-form-item>
        <a-form-item label="创建者" v-bind="formItemLayout">
          <a-input placeholder="创建者"
                   allowClear
                   v-decorator="['username',{ initialValue: '管理员', rules: [{ required: true, message: '请输入创作者名字' }] }]"
          />
        </a-form-item>

        <a-form-item label="封面" v-bind="formItemLayout">
          <upload-banner ref="uploadBanner"></upload-banner>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="内容">
          <div ref="editor">
          </div>
        </a-form-item>

        <a-form-item v-bind="formItemLayoutWithOutLabel">
          <a-button type="green" @click="returnBack">
            返回
          </a-button>
          <a-button type="primary" @click="add" style="margin-left: 8px">
            提交
          </a-button>
        </a-form-item>
      </a-form>
  </div>
</template>

<script>
import info from '@/api/info.js'
import UploadBanner from './UploadBanner'
import { message } from 'ant-design-vue'
import E from 'wangeditor'
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  mounted () {
    this.loader()
  },
  components: {
    UploadBanner
  },
  data () {
    return {
      title: '新增用户',
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
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 10, offset: 0 },
          sm: { span: 8, offset: 15 }
        }
      },
      formData: {
        id: null,
        title: null,
        username: null,
        bannerId: null,
        content: null,
        remarks: null
      }
    }
  },
  methods: {
    add () {
      this.form.validateFields((error, values) => {
        if (!error) {
          this.confirmLoading = true
        }
        // banner
        this.formData.bannerId = this.$refs.uploadBanner.bannerId

        // content
        this.formData.content = this.editorContent

        Object.assign(this.formData, values)
        info.add(this.formData).then(res => {
          res = res.data
          if (res.state) {
            message.success('添加成功，1秒后跳转到管理页面...', 1, () => {
              this.$router.push({ name: 'infoList' })
            })
          } else {
            message.error(res.message)
          }
        })
        this.confirmLoading = false
      })
    },
    returnBack () {
      this.$router.push({ name: 'infoList' })
    },
    cancel () {
      this.confirmLoading = false
    },
    // 加载数据
    loader () {
      // 初始化编辑器
      let editor = new E(this.$refs.editor)
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      // 配置服务器端地址
      editor.customConfig.uploadImgServer = '/api/upload/infoPhoto'
      // 配置文件表单key
      editor.customConfig.uploadFileName = 'file'
      editor.create()
    },
    afterClose () {
      this.form.resetFields()
    }
  }
}
</script>

<style scoped>

</style>
