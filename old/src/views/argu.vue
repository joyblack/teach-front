<template>
  <div>
  this is a test.
  {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    // name属性相关配置
    name: {
      // 接收参数类型
      type: String,
      // 默认值
      default: 'joy'
    }
  }
}
</script>
