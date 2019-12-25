<template>
  <div class="expert-index">
      <div class="team-members">
        <div class="single-member effect-1" v-for="item of experts" :key="item.id">
          <div class="member-image">
              <img :src="item.avatar" alt="Member">
          </div>
            <div class="member-info">
              <h4>Sophia</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <div class="social-touch">
                  <a class="go-detail" href="#">查看详情</a>
                </div>
            </div>
        </div>
      </div>
     <div class="load-more-container">
          <a-button type="default" size="large" @click="loadMore" :loading="loading">加载更多...</a-button>
      </div>
  </div>
</template>

<script>
import '@/assets/css/expert.css'

export default {
  data () {
    return {
      // 每页加载个数
      pageSize: 8,
      loading: false,
      experts: [
        {
          id: 1,
          name: '赵义',
          introduce: '这是一个简介说明',
          avatar: 'expert/expert_default1.jpg'
        },
        {
          id: 2,
          name: '赵义',
          introduce: '这是一个简介说明',
          avatar: 'expert/expert_default1.jpg'
        },
        {
          id: 3,
          name: '赵义',
          introduce: '这是一个简介说明',
          avatar: 'expert/expert_default1.jpg'
        },
        {
          id: 4,
          name: '赵义',
          introduce: '这是一个简介说明',
          avatar: 'expert/expert_default1.jpg'
        },
        {
          id: 5,
          name: '赵义',
          introduce: '这是一个简介说明',
          avatar: 'expert/expert_default1.jpg'
        },
        {
          id: 6,
          name: '赵义',
          introduce: '这是一个简介说明',
          avatar: 'expert/expert_default1.jpg'
        }
      ]
    }
  },
  methods: {
    loadMore () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style>

</style>
