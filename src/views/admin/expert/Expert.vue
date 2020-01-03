<template>
  <div>
    <expert-search></expert-search>
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
              <a href="javascript:;" @click="deleteData(record)">删除</a>
          </span>
        </a-table>
      </div>
    </a-row>
    <expert-add ref="expertAdd"></expert-add>
    <expert-edit ref="expertEdit"></expert-edit>
  </div>
</template>

<script>
import ExpertSearch from './components/ExpertSearch.vue'
import ExpertAdd from './components/ExpertAdd.vue'
import ExpertEdit from './components/ExpertEdit.vue'
import { format } from '@/lib/utils/TableUtil.js'
import expert from '@/api/expert.js'
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
    title: '照片',
    dataIndex: 'photo',
    align: 'center'
  },
  {
    title: '身份证',
    dataIndex: 'idNumber',
    align: 'center'
  },
  {
    title: '状态',
    dataIndex: 'status',
    align: 'center',
    scopedSlots: { customRender: 'status' }
  },
  {
    title: '操作',
    dataIndex: 'action',
    align: 'center',
    scopedSlots: { customRender: 'edit' }
  }
]

export default {
  components: {
    ExpertSearch,
    ExpertEdit,
    ExpertAdd
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
      expert.page({
        page: this.pagination.current,
        size: this.pagination.pageSize,
        search: this.searchValue.search ? this.searchValue.search : null
      }).then(res => {
        res = res.data
        if (res.state) {
          format(res.data.data, vm.pagination.current, vm.pagination.pageSize)
          this.dataSource = res.data.data
          this.pagination.total = res.data.total
          this.loading = false
        } else {
          message.error(res.message)
        }
      })
      this.loading = false
    },
    add () {
      this.$refs.expertAdd.openModal()
    },
    edit (record) {
      if (record) {
        this.$refs.expertEdit.openModal(record)
      }
    },
    status (record, status) {
      if (record) {
        const _this = this
        confirm({
          title: '确认' + (status === 0 ? '禁用' : '启用') + '专家：' + record.name + '？',
          content: '单击确认按钮执行此操作',
          onOk () {
            expert.status(record.id, status).then(res => {
              if (res.data.state) {
                message.success('修改专家状态成功')
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
          title: '确认重置专家【' + record.name + '】的密码？',
          content: '单击确认按钮执行此操作',
          onOk () {
            expert.resetPassword(record.id).then(res => {
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
    // 删除专家
    deleteData (record) {
      const _this = this
      if (record) {
        confirm({
          title: '确认删除专家【' + record.name + '】？',
          content: '请小心执行此操作，单击确认执行',
          onOk () {
            expert.delete(record.id).then(res => {
              if (res.data.state) {
                message.success('删除专家成功')
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
