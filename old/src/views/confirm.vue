<template>
  <div>
    confirm页面
  </div>
</template>

<script>
export default {
  beforeRouteLeave (to, from, next) {
    const leave = confirm('您确认要离开吗')
    if (leave) {
      next()
    } else {
      next(false)
    }
  }
}
</script>
