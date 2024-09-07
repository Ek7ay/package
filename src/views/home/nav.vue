<template>
  <el-aside width="200px" class="menu">
    <el-menu
      default-active="algoritmo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
    >
      <el-menu-item 
        v-for="item in menu" 
        :key="item.name" 
        :index="item.path"
      >
        <el-icon><document /></el-icon>
        <span>{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import menuData from '@/config/menuConfig'
import { computed } from 'vue';
const router = useRouter();

const menu = computed(() => menuData[0].children)

const handleOpen = (key, keyPath) => {
  // console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  // console.log(key, keyPath)
}
 
const handleSelect = (key, keyPath) => {
  router.push(`/home/${key}`)
}

</script>

<style lang="scss" scoped>
.menu {
  background-color: rgb(202, 218, 233);
  height: 100vh;
  .el-menu {
    border-right: none;
    background-color: transparent;
}
}
</style>
