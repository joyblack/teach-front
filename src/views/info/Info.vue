<template>
  <div id="joy_info">
    <div class="news_banner">
    </div>
    <div class="joy_main" style="min-height: 412px">
      <a-tabs>
        <a-tab-pane tab="通知公告" key="1">
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
 .ant-tabs-nav-container {
   font-size: 17px;
   font-weight: bold;
 }

 .ant-tabs-nav .ant-tabs-tab-active {
   font-weight: 1000;
 }

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
