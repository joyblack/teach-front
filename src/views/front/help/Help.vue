<template>
  <div id="joy_help">
    <div class="joy_main" style="min-height: 412px">
      <a-tabs tabPosition="left" :tabBarGutter="tabBarGutter">
          <a-tab-pane tab="联系我们" key="1">
            <div class="contact">
              <div class="header">基地联系方式</div>
              <div class="contact-item" v-for="item of contactBase" :key="item.id">
                <div class="item-icon">
                  <a-icon type="phone" theme="twoTone" size="large" style="fontSize: 24px"/>
                </div>
                <div class="item-content">
                  {{item.name}}：{{item.phone}}
                </div>
              </div>
            </div>

            <div class="contact" style="margin-top: 48px">
              <div class="header">人社部门联系方式</div>
              <div class="contact-item" v-for="item of contactMan" :key="item.id">
                <div class="item-icon">
                  <a-icon type="phone" theme="twoTone" size="large" style="fontSize: 24px"/>
                </div>
                <div class="item-content">
                  {{item.name}}：{{item.phone}}
                </div>
              </div>
            </div>
        </a-tab-pane>
        <a-tab-pane tab="帮助中心" key="2">
          暂无
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabBarGutter: 1,
      contactBase: [
        {
          id: 1,
          name: '赫章',
          phone: '3231115'
        },
        {
          id: 2,
          name: '织金',
          phone: '7624378'
        }
      ],
      contactMan: [
        {
          id: 1,
          name: '唐尧',
          phone: '13595755354'
        },
        {
          id: 2,
          name: '彭美',
          phone: '18308577767'
        },
        {
          id: 3,
          name: '甘德高',
          phone: '18786530906'
        }
      ]
    }
  }
}
</script>

<style>
.help-banner {
  background: url(./res/help_banner.jpg) center top no-repeat;
  width: 100%;
  height: 186px;
  margin-bottom: 20px;
}

.contact {
  width: 100%;
}

.contact-item {
  padding: 12px;
  margin: 12px;
  width: 100%;
}
.contact .header{
  width: 100%;
  font-size: 18px;
  padding: 8px;
  margin-bottom: 12px;
  font-weight: bold;
  border-bottom: 1px  solid black;
}

.item-icon {
  float: left;
  margin-right: 12px;
}

.item-content {
  float: left;
  font-size: 18px;
}
</style>
