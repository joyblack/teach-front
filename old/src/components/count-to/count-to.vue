<template>
  <div>
    <span :id="elementId"></span>
  </div>
</template>
<script>
// 引入countup
import { CountUp } from 'countup'

// 要保证每个组件实例的ID不相同
export default {
  name: 'CountTo',
  computed: {
    // 唯一ID
    elementId () {
      return `count_up_${this._uid}`
    }
  },
  data () {
    return {
      counter: {}
    }
  },
  props: {
    // 起始值
    startVal: {
      type: Number,
      default: 0
    },
    // 终止值
    endVal: {
      type: Number,
      default: 100
    },
    // 小数点几位
    decimals: {
      type: Number,
      default: 0
    },
    // 渐变时长
    duration: {
      type: Number,
      default: 3
    },
    // 是否使用变速效果
    useEasing: {
      type: Boolean,
      default: false
    },
    // 是否使用分组
    useGrouping: {
      type: Boolean,
      default: false
    },
    // 分组符号
    separator: {
      type: String,
      default: ','
    },
    // 整数和小数的分隔符号
    decimal: {
      type: String,
      default: '.'
    },
    // 延迟动画时间
    delay: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    // 创建三方组件实例
    console.log(this.endVal)
    this.$nextTick(() => {
      // this.counter = new CountUp(this.elementId, this.startVal, this.endVal, this.decimals, this.duration, {
      //   useEasing: this.useEasing,
      //   useGrouping: this.useGrouping,
      //   separator: this.separator,
      //   decimal: this.decimal
      // })

      this.counter = new CountUp(this.elementId, this.endVal, {
        startVal: this.startVal,
        decimals: this.decimals,
        duration: this.duration,
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })

      console.log(this.counter)

      // 延迟效果实现
      setTimeout(() => {
        this.counter.start()
      }, this.delay)
    })
  }
}
</script>
