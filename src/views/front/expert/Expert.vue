<template>
  <div id="joy_expert">
    <div class="expert-banner">
    </div>
    <div class="joy_main" style="min-height: 300px">
      <a-tabs>
        <a-tab-pane tab="专家简介" key="1">
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
.expert-banner{background:url(./res/expert_banner.jpg) center top no-repeat; width:100%; height:186px; margin-bottom:20px;}
</style>
