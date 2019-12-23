<template>
  <div>
    对象模式传值: {{ fruit }}
  </div>
</template>

<script>
export default {
  props: {
    fruit: {
      type: String,
      default: 'apple'
    }
  }
}
</script>
