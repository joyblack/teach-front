<template>
  <a-locale-provider :locale="locale">
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>首页</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>用户管理</span></span>
          <a-menu-item key="3"><router-link :to=" {name: 'user'} ">用户管理</router-link></a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="weibo" />
          <span>使用帮助</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item><a-icon type="home"></a-icon></a-breadcrumb-item>
          <a-breadcrumb-item>用户管理</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Copyright  2016 贵州工程应用技术学院  All Right Reserved 学校地址：贵州省毕节市七星关区学院路1号
      </a-layout-footer>
    </a-layout>
  </a-layout>
  </a-locale-provider>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  data () {
    return {
      // 国际化
      locale: zhCN,
      collapsed: false
    }
  }
}
</script>

<style>
  #components-layout-demo-side .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
