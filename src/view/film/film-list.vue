<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="filmName" label="电影名称"></el-table-column>
      <el-table-column prop="director" label="导演"></el-table-column>
      <el-table-column prop="starring" label="主演"></el-table-column>
    </el-table>
  </div>
</template>

<script>
name: "filmList";
export default {
  mounted() {
    this.getList();
  },
  data() {
    return {
      tableData: [] //列表数据
    };
  },
  methods: {
    getList() {
      this.$api.filmList().then(res => {
        if (res.code === 0) {
          this.tableData = res.data.list;
        }
      });
    }
  }
};
</script>

<style>
</style>