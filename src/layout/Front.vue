<template>
  <div>
    <header>
<div class="container">
<!-- nav -->
  <nav class="navbar navbar-expand-lg navbar-light py-4">
    <!-- logo -->
    <h1>
      <a class="navbar-brand" href="#"> <i class="fas fa-globe"></i>
        教育 <span>平台</span>
      </a>
    </h1>
    <!-- logo -->
    <button class="navbar-toggler ml-md-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- 导航 -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent" style="margin-top: -30px">
      <ul class="navbar-nav ml-lg-auto text-center">
        <li class="nav-item active mr-lg-2 ">
          <a class=" my-menu-item nav-link " href="/">首页
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item mr-lg-2">
          <router-link to="/info" class=" my-menu-item nav-link scroll">通知公告</router-link>
        </li>
        <li class="nav-item mr-lg-2">
           <router-link to="/news" class=" my-menu-item nav-link scroll">新闻中心</router-link>
        </li>
        <li class="nav-item mr-2">
          <router-link to="/expert" class=" my-menu-item nav-link scroll">专家简介</router-link>
        </li>
          <li class="nav-item mr-lg-2">
          <a class="my-menu-item nav-link scroll" href="#stats">建设状态</a>
        </li>
        <li class="nav-item mr-lg-2">
          <a class="my-menu-item nav-link scroll" href="#team">团队成员</a>
        </li>
        <li class="nav-item mr-lg-2">
          <router-link to="/help" class="my-menu-item nav-link">联系我们</router-link>
        </li>
      </ul>
    </div>
  </nav>
</div>
</header>
  <!-- 横幅 -->
  <div class="banner">
    <div class="banner-layer">
      <div class="container">
        <div class="agile_banner_info">
          <div class="agile_banner_info1">
            <div id="typed-strings" class="agileits_w3layouts_strings">
                <vue-typed-js :strings="['<p>开启你的 <i>求学之路</i></p>', '<p>展开你的 <i>翅膀</i></p>', '<p>一起加入我们吧 <i>朋友</i></p>']">
                  <span id="typed" class="typing" style="white-space:pre;"></span>
                </vue-typed-js>
            </div>
            <span id="typed" style="white-space:pre;"></span>
          </div>
        <div class="banner_agile_para">
          <p>欢迎来到毕节幼儿师范院校。</p>
        </div>
        <a href="#" role="button"> 了解更多 </a>
        </div>
      </div>
    </div>
  </div>

  <router-view></router-view>

  <!-- footer -->
  <footer class="py-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-sm-6 agileinfo_footer_grid footer-logo">
        <h2><a href="#"><i class="fas fa-globe"></i>
          教育 <span>平台</span></a></h2>
      </div>
      <div class="col-lg-2 col-sm-6 agileinfo_footer_grid">
        <h3 class="mb-3"> Navigation</h3>
        <div class="agileinfo-social-grids footer-w3icons">
          <ul>
            <li class="mb-1"><a href="#"><i class="fa fa-home"></i> 首页</a></li>
            <li class="mb-1"><a href="#"><i class="fa fa-home"></i> 关于我们</a></li>
            <li class="mb-1"><a href="#"><i class="fas fa-cogs"></i> 专家简介</a></li>
            <li class="mb-1"><a href="#"><i class="fas fa-users"></i> 团队成员</a></li>
            <li class="mb-1"><a href="#"><i class="fas fa-envelope-open"></i> 联系我们</a></li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 mt-lg-0 mt-sm-5 mt-3 agileinfo_footer_grid">
        <h3 class="mb-3"> Address</h3>
        <ul class="con_inner_text">
          <li class="mb-2"><span class="fa fa-map-marker" aria-hidden="true"></span>1234k joy black, <label> China.</label></li>
          <li class="mb-2"><span class="fas fa-envelope-open" aria-hidden="true"></span> <a href="mailto:1016037677@qq.com">1016037677@qq.com</a></li>
          <li class="mb-1"><span class="fa fa-phone" aria-hidden="true"></span> +135 3556 5497</li>
          <li class="mb-1"><span class="fa fa-clock" aria-hidden="true"></span> 8:00-17:00</li>
          <li class="mb-1"><span class="fa fa-globe" aria-hidden="true"></span> <a href="#">1016037677@qq.com</a></li>
        </ul>
      </div>
      <div class="col-lg-4 col-sm-6 mt-lg-0 mt-sm-5 mt-3 agileinfo_footer_grid">
        <h3 class="mb-3">Newsletter</h3>
        <p>This is a teach web, please don't set another hurt to this.</p>
        <form action="#" method="post">
          <input type="email" name="Email" placeholder="Email Address" required="">
          <input type="submit" value="Subscribe">
        </form>
      </div>

      <!-- copyright -->
      <div class="col-lg-12 copyright pr-0 pt-4 mt-4">
        <ul class="social">
          <li class="mr-3"><span class="fab mr-1 fa-facebook-f" aria-hidden="true"></span>Facebook</li>
          <li class="mr-3"><span class="fab mr-1 fa-twitter" aria-hidden="true"></span>Twitter</li>
          <li class="mr-3"><span class="fab mr-1 fa-linkedin" aria-hidden="true"></span>Linkedin</li>
          <li class=""><span class="fab mr-1 fa-google-plus" aria-hidden="true"></span>Google-plus</li>
        </ul>
      </div>

    </div>
  </div>
  </footer>
  <div id="components-back-top-demo-custom">
    <a-back-top>
      <div class="ant-back-top-inner">UP</div>
    </a-back-top>
    Scroll down to see the bottom-right
    <strong style="color: #1088e9"> blue </strong>
    button.
  </div>
</div>
</template>

<script>
import { VueTypedJs } from 'vue-typed-js'
export default {
  name: 'Index',
  components: {
    VueTypedJs
  },
  data () {
    return {
      endVal: 1000,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      }
    }
  },
  methods: {
  }
}
</script>
<style>
@import '~@/assets/front/css/bootstrap.css';
@import '~@/assets/front/css/style.css';
@import '~@/assets/front/css/fontawesome-all.css';

.my-menu-item {
  font-size:16px !important;
  font-weight: bold !important;
  letter-spacing: 3px !important;
}
  .ant-carousel >>> .custom-slick-arrow {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #17a2b8;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
  }
  .ant-carousel >>> .custom-slick-arrow:before {
    display: none;
  }
  .ant-carousel >>> .custom-slick-arrow:hover {
    color: #17a2b8;
    opacity: 1;
  }

  .ant-carousel >>> .slick-slide h3 {
    color: #17a2b8;
  }

  /* 公告 */
  .my-info {
    height: 500px;
  }

  .my-info-content {
    height: 300px;
    overflow-y: auto;
  }

  .my-info-detail {
    margin-bottom: 0px;
    text-align: right;
  }

  .my-info-detail a {
    padding: 6px 25px;
    color: #fff;
    background: #17a2b8;
    font-size: 15px;
    letter-spacing: 1px;
    display: inline-block;
    margin-top: 1.5em;
    border-radius: 35px;
  }

  /* 新闻 */
  .my-news {
    height: 500px;
  }

  .my-news-content {
    height: 300px;
    overflow-y: auto;
  }

  .my-news-detail {
    margin-bottom: 0px;
    text-align: right;
  }

  .my-news-detail a {
    padding: 6px 25px;
    color: #000;
    background: #FFF;
    font-size: 15px;
    letter-spacing: 1px;
    display: inline-block;
    margin-top: 1.5em;
    border-radius: 35px;
  }

  .my-news-content p{
    color: white !important;
  }

  /** 回到顶部 */
    #components-back-top-demo-custom .ant-back-top {
    bottom: 100px;
  }
  #components-back-top-demo-custom .ant-back-top-inner {
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 4px;
    background-color: #fd5c63;
    color: #fff;
    text-align: center;
    font-size: 20px;
  }

::-webkit-scrollbar-track-piece { /*滚动条凹槽的颜色，还可以设置边框属性*/
background-color:#f8f8f8;
}
::-webkit-scrollbar {/*滚动条的宽度*/
width:9px;
height:9px;
}
::-webkit-scrollbar-thumb {/*滚动条的设置*/
background-color:#fd5c63;
background-clip:padding-box;
min-height:28px;
}
::-webkit-scrollbar-thumb:hover {
background-color:#bbb;
}
</style>
