<template>
  <div>
    <count-to :end-val='100'></count-to>
  </div>
</template>

<script>
// 由于编写了index.js，此处可以直接引入
import CountTo from '@/components/count-to'

export default {
  name: 'count_to',
  components: {
    CountTo
  }
}
</script>
