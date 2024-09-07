<template>
  <!-- <Transition>
    <div v-if="isShow">技术胖讲程序<p>hahha<span>1111</span> </p></div>
  </Transition>

  <el-button type="success" plain @click="hanldClick">切换动画</el-button> -->

  <div class="container">
    <Carousel
      :autoplay="true"
      :duration="3000"
      :initial="4"
      :hasDot="true"
      :hasDirector="true"
      dotBgColor="green"
    >
      <car-item
        v-for="(item, index) of carData"
        :key="index"
      >
        <img :src="getAssetsImages(item.img_name)">
      </car-item>
    </Carousel>
 </div>
</template>

<script setup>
// import { ref } from 'vue';
// const isShow = ref(false)

// const hanldClick = () => {
//   isShow.value = !isShow.value
// }

// 轮播图
import carData from '@/data/carousel'

const getAssetsImages = (name) => {
  return new URL(`../../assets/img/${name}`, import.meta.url).href;
}

</script>

<!-- <style lang="scss" scoped>
@keyframes comein {
  0% {
    transform: translateX(-120px);
  }

  100% {
    transform: translateX(0px);
  }
}

@keyframes comeout {
  0% {
    transform: translateX(0px);
  }

  100% {
    transform: translateX(-120px);
  }
}

.v-enter-active {
  animation: comein 1s;
}

.v-leave-active {
  animation: comeout 1s;
}
</style> -->

<style lang="scss" scoped>
  .container {
    width: 520px;
    height: 297px;
    margin: 80px auto;
  }
</style>