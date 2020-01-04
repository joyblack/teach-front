<template>
  <div>
    <news-search></news-search>
    <a-row>
      <div class="operate-button-container">
        <a-button type="primary" icon="plus" @click="add" :style="{ marginLeft: '8px' }">添加新闻</a-button>
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

          <span slot="banner" slot-scope="bannerId">
            <img :src="'/api/download/newsBanner/' + bannerId" style="width: 50px; height: 50px" >
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
  </div>
</template>

<script>
import NewsSearch from './Search.vue'
import { format } from '@/lib/utils/TableUtil.js'
import news from '@/api/news.js'
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
    title: '标题',
    dataIndex: 'title',
    align: 'center',
    width: '320px'
  },
  {
    title: '创作者',
    dataIndex: 'username',
    align: 'center'
  },
  // {
  //   title: '类型',
  //   dataIndex: 'newsType',
  //   align: 'center'
  // },
  {
    title: '封面',
    dataIndex: 'bannerId',
    align: 'center',
    scopedSlots: { customRender: 'banner' }
  },
  {
    title: '状态',
    dataIndex: 'status',
    align: 'center',
    scopedSlots: { customRender: 'status' }
  },
  {
    title: '发布时间',
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
  name: 'news',
  components: {
    NewsSearch
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
      news.page({
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
      this.$router.push({ name: 'newsAdd' })
    },
    edit (record) {
      if (record) {
        this.$router.push({ name: 'newsEdit', params: { id: parseInt(record.id) } })
      }
    },
    status (record, status) {
      if (record) {
        const _this = this
        confirm({
          title: '确认' + (status === 0 ? '禁用' : '启用') + '新闻【' + record.title + '】？',
          content: '单击确认按钮执行此操作',
          onOk () {
            news.status(record.id, status).then(res => {
              if (res.data.state) {
                message.success('修改新闻信息状态成功')
                _this.loader()
              } else {
                message.error(res.data.message)
              }
            })
          }
        })
      }
    },
    deleteData (record) {
      const _this = this
      if (record) {
        confirm({
          title: '确认删除新闻【' + record.title + '】？',
          content: '请小心执行此操作，单击确认执行',
          onOk () {
            news.delete(record.id).then(res => {
              if (res.data.state) {
                message.success('删除成功')
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
