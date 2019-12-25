<template>
  <div id="news_detail">
    <div class="expert-container" v-for="item of news" :key="item.id">

    </div>
  </div>
</template>

<script>
export default {
  name: 'expert_detail',
  descrition: '专家信息详情',
  data () {
    return {
      news: [
        {
          id: 1, title: '恭贺河南工业大学荣获国家级专业技术人员继续教育基地1', date: '2019-12-20'
        },
        {
          id: 2, title: '恭贺河南工业大学荣获国家级专业技术人员继续教育基地2', date: '2019-11-02'
        },
        {
          id: 3, title: '恭贺河南工业大学荣获国家级专业技术人员继续教育基地3', date: '2019-08-11'
        }
      ]
    }
  }
}
</script>

<style>

</style>
