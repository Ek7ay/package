<template>
  <div class="side-bar">
    <tree-menu>
      <template v-for="item of menuData">
        <menu-item v-if="!item.children" :key="item.id">
          {{ item.title }}
        </menu-item>
        <re-sub-menu 
          :key="item"
          :data="item"
          v-else
        >
        </re-sub-menu>
      </template>
    </tree-menu>
  </div>
</template>

<script setup>
import menuData from '@/data/menu.js'
</script>

<style lang="scss" scoped>
.side-bar {
  width: 300px;
}
</style>