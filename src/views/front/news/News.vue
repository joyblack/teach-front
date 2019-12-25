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
.news_banner{background:url(http://static.lllnet.cn/zj-web/static/images/news_banner.jpg) center top no-repeat; width:100%; height:186px; margin-bottom:20px;}

 /* 条目栏 */
 .info-container {
  height: 43px;
  border-bottom: #CCC dotted 1px;
  background: url('~@/assets/img/many_item.png') 0px 21px no-repeat;
  line-height: 43px;
 }

 .info-container a {
    float: left;
    padding-left: 13px;
    overflow: hidden;
    line-height: 43px;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 630px;
    font-size: 14px;
}

.info-container span {
    float: right;
    line-height: 43px;
    font-size: 12px;
    color: #999;
}
</style>
