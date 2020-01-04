<template>
  <div>
    <section class="welcome py-5" id="info">
  <div class="container">
    <div class="head_part">
        <h3 class="heading">通知公告</h3>
        <p class="heading-bottom mb-5">The inform message.</p>
      </div>
  <a-carousel autoplay arrows>
        <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
          <a-icon type="left-circle" />
          </div>
        <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
          <a-icon type="right-circle" />
        </div>
        <div v-for="info in infos" v-bind:key="info.id" class="col-lg-12 my-info">
          <h3 class="mb-3 my-info-title">{{ info.title }}</h3>
          <div class="mb-3 my-info-time">发布时间: {{ info.create_time }}</div>
          <div class="my-info-content">
             <p v-html="info.content"></p>
          </div>
          <div class="my-info-detail">
            <a href="#" data-toggle="modal" data-target="#exampleModalCenter" role="button"> 查看详情 </a>
          </div>
          <div class="row about-grids">

          </div>
        </div>
      </a-carousel>
  </div>
</section>

<!-- pricing -->
<section class="pricing" id="news">
<div class="pricing-layer py-5">
  <div class="container py-3">
    <div class="head_part">
      <h3 class="heading">新闻中心</h3>
      <p class="heading-bottom mb-5">Check Our Pricing Plans</p>
    </div>
    <a-carousel autoplay arrows>
        <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
          <a-icon type="left-circle" style="color: white;"/>
          </div>
        <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
          <a-icon type="right-circle" style="color: #FFF" />
        </div>
        <div v-for="info in news" v-bind:key="info.id" class="col-lg-12 my-news">
          <h3 class="mb-3 my-news-title" style="color: white">{{ info.title }}</h3>
          <div class="mb-3 my-news-time">发布时间: {{ info.create_time }}</div>
          <div class="my-news-content">
             <p v-html="info.content"></p>
          </div>
          <div class="my-news-detail">
             <a href="#" data-toggle="modal" data-target="#exampleModalCenter" role="button"> 查看详情 </a>
          </div>
        </div>
      </a-carousel>
  </div>
</div>
</section>

  <!-- 专家 -->
  <div class="testimonials py-5" id="expert">
    <div class="container py-3">
      <div class="head_part">
        <h3 class="heading">专家简介</h3>
        <p class="heading-bottom mb-5">The expert introduce.</p>
      </div>
      <div class="flexslider-info">
          <a-carousel autoplay arrows>
             <div
      slot="prevArrow"
      class="custom-slick-arrow"
      style="left: 10px;zIndex: 1"
    >
      <a-icon type="left-circle" />
    </div>
    <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
      <a-icon type="right-circle" />
    </div>
            <div v-for="expert in experts" v-bind:key="expert.id">
            <div class="flexslider">
            <ul class="slides">
              <li>
                <div class="row w3l-info1">
                  <div class="col-md-3 testimonials-grid-1">
                    <img :src="'/api/download/expert/' + expert.photoId" :alt="expert.name" />
                  </div>
                  <div class="col-md-9 testimonials-grid-2">
                    <i class="fas fa-quote-left"></i>
                    <p>{{ expert.introduce }}</p>
                    <h4>{{ expert.name }}</h4>
                    <h5> 知名专家 </h5>
                  </div>
                </div>
              </li>
            </ul>
          </div>
            </div>
          </a-carousel>
      </div>
    </div>
  </div>
  <!-- //testimonials -->

  <!-- 状态 -->
  <section class="stats" id="stats">
    <div class="wthree-different-dot1  py-5">
      <div class="container py-3">
        <div class="head_part">
          <h3 class="heading">状态</h3>
          <p class="heading-bottom mb-5">我们的当前的状态</p>
        </div>
        <div class="row agileits_stats_grids">
          <div class="col-md-3 col-6 mt-md-0 mt-5 agileinfo_stats">
            <div class="agileinfo_stats_grid">
              <ICountUp style="font-size:3em;color:#eee;font-weight:bold;"
                :endVal="endVal"
                :options="options"
                @ready="onReady"
              />
              <h3 style="margin-top: 2em">学员</h3>
            </div>
          </div>
          <div class="col-md-3 col-6 agileinfo_stats mid-w3l-stat">
            <div class="agileinfo_stats_grid">
              <p class="counter">654</p>
              <h3>专家</h3>
            </div>
          </div>
          <div class="col-md-3 col-6 agileinfo_stats mid-w3l-stat">
            <div class="agileinfo_stats_grid">
              <p class="counter">150</p>
              <h3>成员</h3>
            </div>
          </div>
          <div class="col-md-3 col-6 agileinfo_stats mid-w3l-stat">
            <div class="agileinfo_stats_grid">
              <p class="counter">150</p>
              <h3>奖状</h3>
            </div>
          </div>
          <div class="clearfix"> </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 团队成员 -->
  <section class="team py-5" id="team">
  <div class="container">
    <div class="head_part">
      <h3 class="heading">团队成员</h3>
      <p class="heading-bottom mb-5">Meet Our Team Professionals</p>
    </div>
    <div class="row team-grids">
      <div class="col-lg-3 col-sm-6 w3_agileits-team1">
        <img class="img-fluid" src="@/assets/front/images/t1.jpg" alt="">
        <div class="team-info">
          <h5 class="">Elmore</h5>
          <p>Client Management</p>
          <div class="social-icons">
            <ul>
              <li>
                <a href="#" class="fab fa-facebook-f mr-1 icon-border facebook"> </a>
              </li>
              <li class="mx-1">
                <a href="#" class="fab fa-twitter mr-1 icon-border twitter"> </a>
              </li>
              <li>
                <a href="#" class="fab fa-google-plus-g mr-1 icon-border googleplus"> </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 mt-sm-0 mt-5 w3_agileits-team1">
        <img class="img-fluid" src="@/assets/front/images/t2.jpg" alt="">
        <div class="team-info">
          <h5 class="">Blanton</h5>
          <p>Technical Support</p>
          <div class="social-icons">
            <ul>
              <li>
                <a href="#" class="fab fa-facebook-f mr-1 icon-border facebook"> </a>
              </li>
              <li class="mx-1">
                <a href="#" class="fab fa-twitter mr-1 icon-border twitter"> </a>
              </li>
              <li>
                <a href="#" class="fab fa-google-plus-g mr-1 icon-border googleplus"> </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 mt-lg-0 mt-5 w3_agileits-team1">
        <img class="img-fluid" src="@/assets/front/images/t3.jpg" alt="">
        <div class="team-info">
          <h5 class=""> Bass</h5>
          <p> General Manager</p>
          <div class="social-icons">
            <ul>
              <li>
                <a href="#" class="fab fa-facebook-f mr-1 icon-border facebook"> </a>
              </li>
              <li class="mx-1">
                <a href="#" class="fab fa-twitter mr-1 icon-border twitter"> </a>
              </li>
              <li>
                <a href="#" class="fab fa-google-plus-g mr-1 icon-border googleplus"> </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 mt-lg-0 mt-5 w3_agileits-team1">
        <img class="img-fluid" src="@/assets/front/images/t4.jpg" alt="">
        <div class="team-info">
          <h5 class=""> Glickon</h5>
          <p>Head of Department</p>
          <div class="social-icons">
            <ul>
              <li>
                <a href="#" class="fab fa-facebook-f mr-1 icon-border facebook"> </a>
              </li>
              <li class="mx-1">
                <a href="#" class="fab fa-twitter mr-1 icon-border twitter"> </a>
              </li>
              <li>
                <a href="#" class="fab fa-google-plus-g mr-1 icon-border googleplus"> </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  </div>
</template>

<script>
// import $ from 'jquery'
import ICountUp from 'vue-countup-v2'
import expert from '@/api/expert.js'
import info from '@/api/info.js'
import news from '@/api/news.js'

export default {
  name: 'home',
  description: '首页',
  components: {
    ICountUp
  },
  mounted () {
    // info
    info.page({
      page: 1,
      size: 5,
      search: null
    }).then(res => {
      res = res.data
      if (res.state) {
        this.infos = res.data.data
      }
    })
    // news
    news.page({
      page: 1,
      size: 5,
      search: null
    }).then(res => {
      res = res.data
      if (res.state) {
        this.news = res.data.data
      }
    })
    // experts
    expert.page({
      page: 1,
      size: 5,
      search: null
    }).then(res => {
      res = res.data
      if (res.state) {
        this.experts = res.data.data
      }
    })
  },
  data () {
    return {
      experts: [],
      news: [],
      infos: []
    }
  }
}
</script>

<style>

</style>
