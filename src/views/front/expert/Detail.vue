<template>
  <div id="news_detail">
    <div class="expert-container" v-for="item of news" :key="item.id">

    </div>
  </div>
</template>

<script>
export default {
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
