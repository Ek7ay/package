<template>
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>

<script setup>

</script>

<style lang="scss" scoped>
ul {
  width: 200px;
  height: 200px;
  border: 1px solid red;
  padding: 10px;
  display: flex;
  justify-content: space-between;

  li {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: blue;
  }

  li:nth-child(2) {
    align-self: center;
  }

  li:nth-child(3) {
    align-self: flex-end;
  }
}
</style>
