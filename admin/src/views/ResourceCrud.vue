<template>
  <div>
    <avue-crud
      v-if="option.column"
      :page="page"
      :data="data.data"
      :option="option"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
      @on-load="changePage"
      @sort-change="changeSort"
      @search-change="search"
    >
    </avue-crud>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ResourceList extends Vue {
  @Prop(String) resource!: string;

  data: any = {};
  page: any = {
    total: 0,
    pagerCount: 5,
    currentPage: 1,
    pageSize: 10,
    pageSizes: [5, 10, 20, 30, 50],
    layout: "total, sizes, prev, pager, next, jumper",
    background: true,
  };
  option: any = {
    search: {
      span: 4,
    },
  };
  query: any = {
    limit: 2,
  };

  async search(where, done) {
    for (let k in where) {
      const field = this.option.column.find((v) => v.prop === k);
      if (field.regex) {
        where[k] = { $regex: where[k] };
      }
    }
    this.query.where = where;
    this.fetch();
    done();
  }

  async changeSort({ prop, order }) {
    if (!order) {
      this.query.sort = null;
    } else {
      this.query.sort = {
        [prop]: order === "ascending" ? 1 : -1,
      };
    }
    this.fetch();
  }

  async changePage({ pageSize, currentPage }) {
    this.query.page = currentPage;
    this.query.limit = pageSize;
    this.fetch();
  }

  async create(row, done) {
    await this.$http.post(`${this.resource}`, row);
    this.$message.success("创建成功!");
    this.fetch();
    done();
  }

  async update(row: any, index: any, done: any) {
    const data = JSON.parse(JSON.stringify(row));
    delete data.$index;
    await this.$http.put(`${this.resource}/${row._id}`, data);
    this.$message.success("更新成功!");
    this.fetch();
    done();
  }

  async remove(data) {
    try {
      await this.$confirm(`是否确认删除名称为：${data.name}`);
    } catch (e) {
      return;
    }
    await this.$http.delete(`${this.resource}/${data._id}`);
    this.$message({
      type: "success",
      message: "删除成功!",
    });
    this.fetch();
  }

  async fetchOption() {
    const res = await this.$http.get(`${this.resource}/option`);
    this.option = res.data;
  }

  async fetch() {
    const res = await this.$http.get(`${this.resource}`, {
      params: {
        query: this.query,
      },
    });
    this.page.total = res.data.total;
    this.data = res.data;
  }

  created() {
    this.fetchOption();
    this.fetch();
  }
}
</script>

<style scoped></style>