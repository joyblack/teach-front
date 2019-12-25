<template>
  <div>
    <!--横幅 -->
    <div class="flexslider1"></div>

    <!-- 学习流程 -->
    <div class="lct1"></div>

    <!-- 通知公告 -->
    <div class = "in_main_con">
      <a-row>
        <a-col :md="18">
          <a-tabs defaultActiveKey="1" size="large">
        <a-tab-pane tab="公需科目培训" key="1">
          <dl class="sq_r_side" style="margin-top:-20px">
              <dd style="overflow: auto;">
                  <div class="box1">
                    <ul>
                        <li>
                            <a href="javascript:jumpAjaxPage('grade/gradeDetail/2');"><img src="http://static.lllnet.cn/grade/gclc/1523072200617.jpg" class="fl" width="120" height="90"></a>
                              <div class="nr fl">
                                <h2><a href="javascript:jumpAjaxPage('grade/gradeDetail/2');">专业技术人员创新能力与创新思维</a></h2>
                                  <p>当代世界科学技术突飞猛进，高新科技及其产业发展成为改变人类生产生活方式...</p>
                              </div>
                          </li>
                        <li>
                            <a href="javascript:jumpAjaxPage('grade/gradeDetail/1');"><img src="http://static.lllnet.cn/grade/gclc/1523067148264.jpg" class="fl" width="120" height="90"></a>
                              <div class="nr fl">
                                <h2><a href="javascript:jumpAjaxPage('grade/gradeDetail/1');">《习近平谈治国理政》第二卷</a></h2>
                                  <p>
                                        《习近平谈治国理政》第二卷生动记录了以习近平同志为核心的党中...
                                                                      </p>
                              </div>
                          </li>
                        <li>
                            <a href="javascript:jumpAjaxPage('grade/gradeDetail/4');"><img src="http://static.lllnet.cn/grade/gclc/1526384337419.jpg" class="fl" width="120" height="90"></a>
                              <div class="nr fl">
                                <h2><a href="javascript:jumpAjaxPage('grade/gradeDetail/4');">新时代专业技术人员的机遇与挑战</a></h2>
                                  <p>
  新时代专业技术人员的机遇与挑战
                                  </p>
                              </div>
                          </li>
                        <li>
                            <a href="javascript:jumpAjaxPage('grade/gradeDetail/8');"><img src="http://static.lllnet.cn/grade/gclc/1526384329935.jpg" class="fl" width="120" height="90"></a>
                              <div class="nr fl">
                                <h2><a href="javascript:jumpAjaxPage('grade/gradeDetail/8');">专业技术人员内生动力与职业水平</a></h2>
                                  <p>
  专业技术人员内生动力与职业水平
                                  </p>
                              </div>
                          </li>
                      </ul>
                  </div>
              </dd>
          </dl>
        </a-tab-pane>
        <a-tab-pane tab="专业科目培训" key="2">Content of Tab 2</a-tab-pane>
        <a-tab-pane tab="粮食行业培训" key="3">Content of Tab 3</a-tab-pane>
      </a-tabs>
        </a-col>
        <a-col :md="6">
                  <div class="cx_box">
            <div class="t_t">
                <span></span>证书查询
              </div>
              <div class="zj_con">
                <ul>
                    <li>
                        <div class="cx_name">身份证号：</div>
                        <input id="certSearchUserIcard" type="text" value="" placeholder="请输入身份证号" class="in1">
                      </li>
                      <li>
                        <div class="cx_name">证书号：</div>
                        <input id="certSearchCertSn" type="text" value="" placeholder="请输入证书号" class="in2">
                      </li>
                      <li>
                        <input type="button" onclick="javascript:certSearch();" value="查询" class="l_btn1">
                      </li>
                  </ul>
              </div>
          </div>
        </a-col>
    </a-row>

    </div>

          <div class = "in_main_con" style="margin-top: 12px">
                <div class="banner1">
            <a href="javascript:jumpAjaxPage('grade/gradeDetail/6');"><img src="http://static.lllnet.cn/gclc-hngydx/static/images/banner1.jpg"></a>
          </div>

          <!-- 通知公告 -->
          <div class="i_box1">
              <dl class="sq_r_side1">
                  <dt>
                      <ol>
                          <li class="shnax1">
                              通知公告
                          </li>

                      </ol>
                  </dt>
                  <dd style="display: block;">
                    <div class="box1">
                      <a href="javascript:jumpAjaxPage('cms/cmsList?columnId=4742&amp;articleId=97241');"><img src="http://static.lllnet.cn/course/cms-1545817577446.png" class="fl"></a>
                      <ul class="news1">
                        <li>
                          <a href="javascript:jumpAjaxPage('cms/cmsList?columnId=4742&amp;articleId=97241');">恭贺河南工业大学荣获国家级专业技术人员继续教育基地 </a><span>2018-12-26</span></li>

                      </ul>
                    </div>
                  </dd>
              </dl>
        </div>

        <!-- 新闻中心 -->
        <div class="i_box1">
          <dl class="sq_r_side1">
              <dt>
                  <ol>
                      <li class="shnax1">
                          新闻中心
                      </li>

                  </ol>
              </dt>
              <dd style="display: block;">
                <div class="box1">
                  <a href="javascript:jumpAjaxPage('cms/cmsList?columnId=4742&amp;articleId=97241');"><img src="http://static.lllnet.cn/course/cms-1545817577446.png" class="fl"></a>
                  <ul class="news1">
                    <li>
                      <a href="javascript:jumpAjaxPage('cms/cmsList?columnId=4742&amp;articleId=97241');">恭贺河南工业大学荣获国家级专业技术人员继续教育基地 </a><span>2018-12-26</span></li>

                  </ul>
                </div>
              </dd>
          </dl>

          <div class="kf_box">
            <img src="http://static.lllnet.cn/gclc-hngydx/hngydx_kfnew.png">
          </div>
    </div>
    </div>
  </div>
</template>

<script>
import './index.css'

export default {
  name: 'home',
  description: '首页',
  components: {},
  data () {
    return {
    }
  }
}
</script>

<style>
.header_wrap {
  background: none;
}

.flexslider1 {
  background: url('./banner.jpg') center center no-repeat;
  width: 100%;
  height: 380px;
}

.lct1 {
  background: url(./progress.jpg) center center no-repeat;
  width: 100%;
  height: 82px;
  margin-bottom: 20px;
}

.banner1 {
  margin-bottom: 20px;
}

a {
  color: black;
}
</style>
