<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'about',
  beforeRouteEnter: (to, from, next) => {
    console.log(from.name)
    console.log(to.name)
    next()
  }
}
</script>
