<template>
  <div id="joy_news_detail">
      <div class="news-container">
        <div class="news-header">
          <div class="news-title"><h2>新闻头</h2></div>
          <div class="news-date">发布时间：2019-10-20</div>
        </div>
        <div class="news-content">
          内容
        </div>
        <div class="news-footer">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsId: this.$route.params.id
    }
  },
  methods: {
  }
}
</script>

<style>
.news-container {
  margin: 0;
  padding: 0;
}

.news-container .news-header {
  position: relative;
  height: 80px;
  margin-bottom: 12px;
  text-align: center;
  border-bottom: 1px solid #d8dade;
}

.news-container .news-header .news-title {
  font-weight: bold;
}

.news-container .news-header .news-date {
  margin-top: 8px;
}

.news-container .news-content {
  margin: 12px;
  padding: 12px;
}

</style>
