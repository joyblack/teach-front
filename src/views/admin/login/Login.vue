<template>
  <div class="bg-img">
    <div class="bg-color">
      <a-layout-header>
        <h3 class="loginTitle">
          贵州工程技术学院管理平台
        </h3>
      </a-layout-header>
      <div>
        <LoginForm></LoginForm>
      </div>
      <a-layout-footer style="color: #ffffff;">
       贵州工程应用技术学院  ©2019
      </a-layout-footer>
    </div>

  </div>
</template>
<script>
import LoginForm from './Form.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>
<style scoped>
  .ant-layout-header {
    background: none;
  }
  .bg-img {
    position: absolute;
    height: 100%;
    background-image: url('./res/login_bg.jpg');
    background-size: cover;
    background-position: center top;
    display: block;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 0;
  }

  .bg-color {
    background: rgba(0, 0, 0, 0.45);
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
  }

  .ant-layout-footer {
    background: rgba(197, 197, 197, 0.17);
    padding: 14px 50px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    bottom: 0px;
    width: 100%;
    position: fixed;
    text-align: center;
  }

  .logo {
    position: fixed;
    top: 21%;
    left: 45%;
  }

  .loginTitle {
    color: #ffffff;
    font-weight:400;
    font-size: 32px;
    font-family: "Microsoft YaHei";
    text-align: center;
    letter-spacing: 3px;
  }

  @media screen and (max-width: 1366px) {
    .loginTitle {
      margin-top: 0.5%;
    }
  }

  @media screen and (min-width: 1367px) {
    .loginTitle {
      margin-top: 1%;
    }
  }

</style>
