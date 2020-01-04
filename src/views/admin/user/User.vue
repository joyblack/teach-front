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
        <a-table :columns="columns" :dataSource="dataSource" :loading="loading" :pagination="pagination" :scroll="{ x: 1500 }" bordered>
          <span slot="status" slot-scope="status">
            <span v-if="status === 1">
              <a-tag color="blue">启用</a-tag>
            </span>
            <span v-else>
               <a-tag color="red">禁用</a-tag>
            </span>
          </span>

          <span slot="edit" slot-scope="text, record">
            <a href="javascript:;" @click="edit(record)">编辑</a>
            <span v-if="record.status === 1">
                    <a-divider type="vertical"/>
                    <a href="javascript:;" @click="status(record, 0)">禁用</a>
               </span>
                <span v-else>
                   <a-divider type="vertical"/>
                     <a href="javascript:;" @click="status(record, 1)">启用</a>
                </span>
                <a-divider type="vertical"/>
              <a href="javascript:;" @click="resetPassword(record)">重置密码</a>
                <a-divider type="vertical"/>
              <a href="javascript:;" @click="deleteData(record)">删除</a>
          </span>
        </a-table>
      </div>
    </a-row>
    <user-add ref="userAdd"></user-add>
    <user-edit ref="userEdit"></user-edit>
  </div>
</template>

<script>
import UserSearch from './components/UserSearch.vue'
import UserAdd from './components/UserAdd.vue'
import UserEdit from './components/UserEdit.vue'
import { format } from '@/lib/utils/TableUtil.js'
import user from '@/api/user.js'
import { message, Modal } from 'ant-design-vue'

const confirm = Modal.confirm
// const info = Modal.info;

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
    title: '电话',
    dataIndex: 'phone',
    align: 'center'
  },
  {
    title: '用户状态',
    dataIndex: 'status',
    align: 'center',
    scopedSlots: { customRender: 'status' }
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'action',
    align: 'center',
    scopedSlots: { customRender: 'edit' }
  }
]

export default {
  name: 'User',
  components: {
    UserSearch,
    UserEdit,
    UserAdd
  },
  data () {
    return {
      dataSource: null,
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
      searchValue: {},
      columns,
      loading: false
    }
  },
  mounted () {
    this.loader()
  },
  methods: {
    search (values) {
      this.searchValue = values
      this.pagination.defaultCurrent = 1
      this.pagination.current = 1
      this.loader()
    },
    showTotal (total) {
      return `共 ${total} 条`
    },
    pageChange (page, size) {
      this.pagination.current = page
      this.loader()
    },
    pageSizeChange (page, size) {
      this.loader()
    },
    loader () {
      this.loading = true
      const vm = this
      user.page({
        page: this.pagination.current,
        size: this.pagination.pageSize,
        search: this.searchValue.search ? this.searchValue.search : null
      }).then(res => {
        res = res.data
        if (res.state) {
          format(res.data.data, vm.pagination.current, vm.pagination.pageSize)
          this.dataSource = res.data.data
          // this.pagination.total = res.data.totalElements
          this.pagination.total = res.data.total
          this.loading = false
        } else {
          message.error(res.message)
        }
      })
      this.loading = false
    },
    add () {
      this.$refs.userAdd.openModal()
    },
    edit (record) {
      if (record) {
        this.$refs.userEdit.openModal(record)
      }
    },
    status (record, status) {
      if (record) {
        const _this = this
        confirm({
          title: '确认' + (status === 0 ? '禁用' : '启用') + '用户：' + record.username + '？',
          content: '单击确认按钮执行此操作',
          onOk () {
            user.status(record.id, status).then(res => {
              if (res.data.state) {
                message.success('修改用户状态成功')
                _this.loader()
              } else {
                message.error(res.data.message)
              }
            })
          }
        })
      }
    },
    resetPassword (record) {
      if (record) {
        confirm({
          title: '确认重置用户【' + record.username + '】的密码？',
          content: '单击确认按钮执行此操作',
          onOk () {
            user.resetPassword(record.id).then(res => {
              if (res.data.state) {
                message.success('重置密码成功')
              } else {
                message.error(res.data.message)
              }
            })
          }
        })
      }
    },
    // 删除用户
    deleteData (record) {
      const _this = this
      if (record) {
        confirm({
          title: '确认删除用户【' + record.username + '】？',
          content: '请小心执行此操作，单击确认执行',
          onOk () {
            user.delete(record.id).then(res => {
              if (res.data.state) {
                message.success('删除用户成功')
                // 若当前页只有一条数据，并且不为第一页，则跳转到上一页
                if (_this.dataSource.length === 1 && _this.pagination.current > 1) {
                  _this.pagination.current = _this.pagination.current - 1
                }
                _this.loader()
              } else {
                message.error(res.data.message)
              }
            })
          }
        })
      }
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
