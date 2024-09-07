<template>
  <div id="lazyload">
    <div class="container">
      <div class="box" v-for="item of imageData" :key="item.id">
        <div class="img-box">
          <img v-lazy="item.src" :alt="item.title" />
        </div>
        <div class="content-box">
          <h1>{{ item.title }}</h1>
          <p>{{ item.teacher }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted} from 'vue'
const imageData = ref([])
onMounted(async() => {
  const res = await axios('http://localhost:3000/imgs')
  imageData.value = res.data;
})


</script>

<style lang="scss" scoped>
.container {
  overflow: auto;
  height: 100%;
  margin: 0;
  .box {
    position: relative;
    height: 100px;
    padding: 5px 10px;
    border-bottom: 1px solid #ededed;

    .img-box {
      height: 100%;

      img {
        height: 100%;
      }
    }

    .content-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding-left: 166px;
    }

    h1 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
      color: #666;
    }
  }
}
</style>