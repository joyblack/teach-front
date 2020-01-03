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
                   :disabled="true"
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
                      v-decorator="['remarks',{ initialValue:formData.remarks, rules: [] }]"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import user from '@/api/user.js'
import { message } from 'ant-design-vue'
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  data () {
    return {
      visible: false,
      title: '编辑用户',
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
        remarks: null
      }
    }
  },
  methods: {
    openModal (record) {
      this.visible = true
      // 加载数据
      this.formData.id = record.id
      this.loader()
    },
    // 确定
    ok () {
      this.form.validateFields((error, values) => {
        if (!error) {
          this.confirmLoading = true
        }
        values.id = this.formData.id
        user.edit(values).then(res => {
          res = res.data
          if (res.state) {
            message.success('更新成功')
            // 加载列表
            this.$parent.loader()
            this.visible = false
          } else {
            message.error(res.message)
          }
        })
        this.confirmLoading = false
      })
    },
    cancel () {
      this.visible = false
      this.confirmLoading = false
    },
    // 加载数据
    loader () {
      // 通过ID获取数据
      user.get(this.formData.id).then(res => {
        res = res.data
        if (res.state) {
          this.formData = {
            id: res.data.id,
            name: res.data.name,
            username: res.data.username,
            phone: res.data.phone,
            remarks: res.data.remarks
          }
        }
      })
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
