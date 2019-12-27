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
        <a-form-item label="用户名" v-bind="formItemLayout">
          <a-input placeholder="请输入用户名"
                   allowClear
                   v-decorator="['username',{ initialValue:formData.username, rules: [{ required: true, message: '请输入用户名' }] }]"
          />
        </a-form-item>
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
        <a-form-item v-bind="formItemLayout">
            <span slot="label">
                备注（选填）
            </span>
          <a-textarea placeholder="请输入备注" :rows="4"
                      v-decorator="['remarks',{ initialValue:formData.remark, rules: [] }]"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import request from ''
export default {
  name: 'UserEdit',
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  mounted () {
    this.loadData()
  },
  data () {
    return {
      visible: false,
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
      formData: {
        id: null,
        name: null,
        username: null,
        phone: null,
        remark: null
      }
    }
  },
  methods: {
    openModal (record) {
      this.visible = true
      // if (record) {
      //   this.title = '修改' + record.loginName + '信息'
      //   this.formData.id = record.id
      //   this.loader()
      // } else {
      //   this.title = '新增'
      // }
    },
    // 确定
    ok () {
      this.form.validateFields((error, values) => {
        if (!error) {
          this.confirmLoading = true

        }
      })
      console.log('ok')
    },
    cancel () {
      this.visible = false
    },
    // 加载数据
    loadData () {
      console.log('load data...')
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
