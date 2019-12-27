<template>
  <div>
    <a-form :form="form" class="login-form" @submit="login">
      <h3 class="form-title">账号登录</h3>
      <a-form-item style="margin-left:10%;margin-top:9%;margin-bottom:30px;">
        <a-input placeholder="用户名"
                 size="large"
                 style="height:50px;width:320px;"
                 v-decorator="['username',{ initialValue:loginInfo.username,rules: [{ required: true, message: '请输入用户名' }]}]"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color:#3683d3;font-size:24px;"
          />
        </a-input>
      </a-form-item>
      <a-form-item style="margin-left: 10%">
        <a-input-password placeholder="密码"
                          size="large"
                          style="height:50px;
                          width:320px;"
                          v-decorator="['password',{ initialValue:loginInfo.password,rules: [{ required: true, message: '请输入密码' }] }]"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color:#3683d3;font-size:24px;"
          />
        </a-input-password>
      </a-form-item>

      <a-form-item style="margin-left: 10%;margin-top: 8%">
        <a-button
          type="primary"
          html-type="submit"
          class="login-form-button">
          登 录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      loginInfo: {
        username: null,
        password: null
      }
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  methods: {
    // 登录方法
    login () {
      this.form.validateFields((error, values) => {
        if (!error) {
          console.log(values)
        }
      })
    }
  }
}
</script>

<style>
  .ant-input-affix-wrapper .ant-input {
    border-radius: 0;
    padding-left: 43px !important;
  }

  form {
    position: fixed;
    top: 25%;
    left: 60%;
    width: 400px;
    height: 436px;
    background-image: url("./res/loginFrame.png");
    background-size: cover;
    background-position: center top;
  }

  .form-title {
    color: #fff;
    font-size: 24px;
    text-align: center;
    margin-top: 60px;
  }

  .card-title {
    margin: 0;
    color: #333;
    font-weight: 500;
    text-align: center;
    font-size: 28px;
  }

  .login-form-button {
    width: 320px;
    height: 50px;
    color: #022c39;
    font-size: 16px;
    border-color: #fec601;
    border-radius: 0;
    background-color: #fec601;
  }
</style>
