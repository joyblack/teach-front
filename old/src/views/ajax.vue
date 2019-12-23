<template>
  <div>
  <button @click="getUserInfo"> 获取用户信息 </button>
    请求到的用户信息:
  </div>
</template>

<script>
import user from '@/api/user'

export default {
  methods: {
    getUserInfo () {
      user.getUserInfo(1).then(
        res => console.log(res)
      )
    }
  }
}
</script>
