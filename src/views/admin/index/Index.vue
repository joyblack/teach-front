<template>
  <div style="background: #ECECEC; padding: 30px">
    <a-row :gutter="16">
       <a-col :span="12">
        <a-card>
          <a-statistic
            title="专家数量"
            :value="0"
            :precision="0"
            :valueStyle="{color: '#3f8600'}"
            style="margin-right: 50px"
          >
            <template v-slot:prefix>
              <a-icon type="arrow-up" />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
             <a-col :span="12">
        <a-card>
          <a-statistic
            title="用户数量"
            :value="0"
            :precision="0"
            :valueStyle="{color: '#3f8600'}"
            style="margin-right: 50px"
          >
            <template v-slot:prefix>
              <a-icon type="arrow-up" />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
    </a-row>
      <a-row :gutter="16">
      <a-col :span="12">
        <a-card>
          <a-statistic
            title="新闻数量"
            :value="0"
            :precision="0"
            :valueStyle="{color: '#3f8600'}"
            style="margin-right: 50px"
          >
            <template v-slot:prefix>
              <a-icon type="arrow-up" />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          <a-statistic
            title="公告数量"
            :value="0"
            :precision="0"
            suffix=""
            valueClass="demo-class"
            :valueStyle="{ color: '#cf1322' }"
          >
            <template v-slot:prefix>
             <a-icon type="arrow-up" />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      numUser: 0,
      numExpert: 0,
      numNews: 0,
      numInfo: 0
    }
  }
}
</script>
