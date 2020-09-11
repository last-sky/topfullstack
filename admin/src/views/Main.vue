<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        style="height: 100vh"
        :default-active="$route.path"
        mode="vertical"
        router
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-submenu
          v-for="(item, i) in menu.items"
          :key="`menu-item-${i}`"
          :index="`menu${i}`"
        >
          <template slot="title">{{ item.title }}</template>
          <el-menu-item
            v-for="(t, k) in item.items"
            :key="`menu-item-${i}-${k}`"
            :index="t.path"
            >{{ t.title }}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header> <h3>全站之巅-后他管理界面</h3></el-header>
      <el-main height>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Main extends Vue {
  menu = {
    items: [
      {
        title: "内容管理",
        items: [
          { title: "课程管理", path: "/courses/list" },
          { title: "课时管理", path: "/episodes/list" },
        ],
      },
      {
        title: "科目管理",
        items: [
          { title: "考试科目", path: "/subjects/list" },
          { title: "试题库", path: "/questions/list" },
          { title: "题型管理", path: "/questiontypes/list" },
        ],
      },
      {
        title: "运营管理",
        items: [{ title: "用户管理", path: "/users/list" }],
      },
    ],
  };
}
</script>

<style></style>