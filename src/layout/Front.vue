<template>
  <div id="app">
    <div class="header_wrap">
    <div class="h_top">
        <div class="h_top_in">
            <div class="l_side">您好，欢迎来到河南工业大学专业技术人员继续教育网络培训服务平台！</div>
             <div class="r_side" id="login_div_top"><a href="#" data-toggle="modal" class="btn1" data-target="#myModal">请登录</a> | <a href="javascript:jumpAjaxPage(&#39;register&#39;);" id="top_reg_a_1">注册</a>   <a href="http://static.lllnet.cn/zj-web/static/html/jiti.html" class="jiti_entry">集体报名</a></div>
        </div>
    </div>
    <div class="h_middle">
        <div class="h_middle_in">
            <div class="logo">
              <a href="#">
                <img src="./img/logo.png" style="width:1200px;height:120px" alt="logo" />
              </a>
            </div>
        </div>
    </div>
    <div class="nav">
        <ul>
          <li v-for="(item, index) in nav" @click="routerLink(index, item.path)" :key="item.id">
            <router-link :to="item.path" :class="navIndex === index? 'current': ''">{{ item.title }}</router-link>
          </li>
        </ul>
    </div>
    </div>
      <router-view />
    <!-- footer -->
    <div class="footer">
      <div class="footer_in">
        <a href="#">首页</a>  |  <a href="#">新闻中心</a>  |  <a href="#">培训广场</a>  |  <a href="#">个人中心</a>   |  <a href="#" data-toggle="modal" data-target="#erweima">手机学习</a>  |  <a href="#">使用帮助</a>
      </div>
      <div class="f_b">
        主办单位：河南工业大学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        承办单位：北京爱迪科森教育科技股份有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        技术支持：爱迪学堂
        <br>京ICP备11016584号 | 京公网安备11010802025823
      </div>
    </div>

<div>
    <a-back-top :visibilityHeight="1" />
  </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      // 当前选中菜单
      navIndex: 0,
      // 菜单选项
      nav: [
        {
          id: 0,
          title: '首页',
          path: '/'
        },
        {
          id: 1,
          title: '通知公告',
          path: '/info'
        },
        {
          id: 2,
          title: '新闻中心',
          path: '/news'
        },
        {
          id: 3,
          title: '专家简介',
          path: '/expert'
        },
        {
          id: 4,
          title: '使用帮助',
          path: '/help'
        }
      ]
    }
  },
  methods: {
    routerLink (index, path) {
      this.navIndex = index
    }
  }
}
</script>
<style scoped>
@import '~@/assets/css/global.css';
</style>
