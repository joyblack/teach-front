<template>
  <div id="joy_info">
    <div class="news_banner">
    </div>
    <div class="joy_main" style="min-height: 412px">
      <a-tabs>
        <a-tab-pane tab="新闻中心" key="1">
          <router-view />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.news_banner{background:url(./res/news_banner.jpg) center top no-repeat; width:100%; height:186px; margin-bottom:20px;}
</style>
