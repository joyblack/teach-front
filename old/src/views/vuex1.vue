<template>
  <div>
    （根state）appName: {{ appName }} <br>
    （模块state）username: {{ username }}<br>
    (getter) appWithVersion: {{ appWithVersion }}
    <p><button @click="changeAppName">修改appName</button></p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'vuex1',
  data () {
    return {
      username: this.$store.state.user.username,
      appWithVersion: this.$store.getters.appWithVersion
    }
  },
  computed: {
    appName () {
      return this.$store.state.appName
    }
  },
  methods: {
    ...mapMutations(['SET_APP_NAME']),
    changeAppName () {
      this.SET_APP_NAME('bestApps')
    }
  }
}
</script>
