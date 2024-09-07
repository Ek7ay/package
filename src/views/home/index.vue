<template>
  <div class="common-layout">
    <el-container>
      <!-- 左侧导航 -->
      <Nav></Nav>

      <el-container>
        <el-header class="header">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">详情页</a></el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>

        <el-main style="padding: 0;"><router-view/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Nav from './nav.vue';




</script>


<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #f0e7e7;
  display: flex;
  align-items: center;
}
</style>