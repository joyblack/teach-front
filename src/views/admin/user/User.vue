<template>
  <div>
    <user-search></user-search>
    <a-row>
      <div class="operate-button-container">
        <a-button type="primary" icon="plus" @click="add" :style="{ marginLeft: '8px' }">新建</a-button>
      </div>
    </a-row>
    <a-row>
      <div class="search-result-list">
        <a-table :columns="columns" :dataSource="dataSource" :loading="loading" :pagination="pagination" bordered>
        </a-table>
      </div>
    </a-row>
    <user-edit ref="userEdit"></user-edit>
  </div>
</template>

<script>
import UserSearch from './components/UserSearch.vue'
import UserEdit from './components/UserEdit.vue'
import { format } from '@/lib/utils/TableUtil.js'
const columns = [
  {
    title: '序号',
    dataIndex: 'key',
    align: 'center'
  },
  {
    title: '用户名',
    dataIndex: 'username',
    align: 'center'
  },
  {
    title: '姓名',
    dataIndex: 'name',
    align: 'center'
  },
  {
    title: '用户状态',
    dataIndex: 'status',
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'action',
    align: 'center'
  }
]

let dataSource = [
  {
    id: 1,
    name: '赵义',
    username: 'zhaoyi',
    status: 1,
    action: 'sss'
  },
  {
    id: '2',
    name: '赵义',
    username: 'zhaoyi',
    status: 1,
    action: 'sss'
  }
]

format(dataSource, 1, 10)
console.log(dataSource)
export default {
  name: 'User',
  components: {
    UserSearch,
    UserEdit
  },
  data () {
    return {
      dataSource: dataSource,
      pagination: {
        showQuickJumper: true,
        showSizeChanger: true,
        pageSizeOptions: ['5', '10', '20', '30', '40', '50'],
        defaultPageSize: 1,
        defaultCurrent: 1,
        pageSize: 5,
        total: 0,
        current: 1,
        onShowSizeChange: this.pageSizeChange,
        showTotal: this.showTotal,
        onChange: this.pageChange
      },
      columns,
      loading: false
    }
  },
  methods: {
    search (values) {
      console.log(values)
    },
    showTotal (total) {
      return `共 ${total} 条`
    },
    pageChange (pageIndex, pageSize) {
      console.log('跳至', pageIndex, pageSize)
    },
    pageSizeChange (pageIndex, pageSize) {
      console.log('变化大小为', pageIndex, pageSize)
    },
    add () {
      this.$refs.userEdit.openModal()
    }
  }
}
</script>

<style scoped>
  .search-result-list {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 12px;
  }
  .operate-button-container {
    margin-top: 18px;
  }
</style>
