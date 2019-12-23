<template>
  <div class="home">
    <button @click="handleClick">返回上一页</button>
    <button @click="jump">argu</button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    handleClick () {
      // 获取路由实例
      this.$router.go(-1)
    },
    jump () {
      const name = 'zhaoyi'
      this.$router.push({
        path: `/argu/${name}`,
        props: true
      })
    }
  }
}
</script>
