<template>
  <div>
    <a-modal>
      模态框
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'UserEdit',
  methods: {
    openModal(record) {
      this.visible = true;
      if (record) {
        this.title = '修改' + record.loginName + '信息';
        this.formData.id = record.id
        this.loader()
        this.initDepartment()
      } else {
        this.title = "新增";
        this.initDepartment()
      }
    }
  }
}
</script>

<style scoped>

</style>
