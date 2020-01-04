<template>
  <div id="components-form-demo-advanced-search">
    <a-form :form="form" @submit="search" layout="inline">
      <a-row :gutter="{md: 8, lg: 24, xl: 48}">
        <a-col :md="8" :sm="24">
          <a-form-item label="搜索" :style="{width: '100%'}" v-bind="formItemLayout">
            <a-input placeholder="按标题/作者进行搜索" v-decorator="['search']"></a-input>
          </a-form-item>
        </a-col>
        <a-col :md="8" :sm='24' :style="{marginTop:'4px'}">
          <a-button type="primary" html-type="submit">
            搜索
          </a-button>
          <a-button :style="{ marginLeft: '8px' }" @click="resetSearch">
            重置
          </a-button>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script>
export default {
  name: 'UserSearch',
  data () {
    return {
      form: this.$form.createForm(this),
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 }
        }
      }
    }
  },
  computed: {
    count () {
      return this.expand ? 11 : 7
    }
  },
  methods: {
    search (e) {
      e.preventDefault()
      let values = this.form.getFieldsValue()
      this.$parent.search(values)
    },
    resetSearch () {
      this.form.resetFields()
      this.$parent.search({})
    }
  }
}
</script>
<style>
  .ant-advanced-search-form {
    padding: 12px;
    background: #fbfbfb;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
  }

  .ant-advanced-search-form .ant-form-item {
    display: flex;
  }

  .ant-advanced-search-form .ant-form-item-control-wrapper {
    flex: 1;
  }

  #components-form-demo-advanced-search .ant-form {
    max-width: none;
  }
</style>
