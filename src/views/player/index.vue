<template>
  <div class="music-box">
    <audio ref="audio" controls :src="mp3"></audio>
    <div class="lrc-box" ref="lrcBox">
      <ul ref="ul" :style="'transform: translateY(' + off +'px);'">
        <li v-for="(item, index) in lrcData" :key="index">{{ item.words }}</li>
        <!-- <li>Lorem, ipsum dolor.</li> -->
      </ul>
    </div>
  </div>
</template>

<script setup>
import music from './music.mp3'
import { ref, nextTick } from 'vue'
const mp3 = ref(music)
import { lrc } from './lrc.js'

function parseLrc(lrc = '') {
  return lrc.split('\n').map(item => {
    let parts = item.split(']')
    let timeStr = parts[0].substring(1)
    const obj = {
      time: parseTime(timeStr),
      words: parts[1]
    }
    return obj
  })
}

function parseTime(timeStr) {
  let parts = timeStr.split(':');
  return +parts[0] * 60 + +parts[1];
}

const lrcData = parseLrc(lrc)

const audio = ref(null)
nextTick(() => {
  findIndex()
})

//拿到下标
function findIndex() {
  let curTime = audio.value.currentTime;
  for (let i = 0; i < lrcData.length; i++) {
    if (curTime < lrcData[i].time) {
      return i -1
    }
  }
  return lrcData.length - 1;
}

//容器高度 
const lrcBox = ref(null)
const ul = ref(null)
let lrcBoxHeight;
let liHeight;
let maxOffset;
nextTick(() => {
  lrcBoxHeight = lrcBox.value.clientHeight
  liHeight = ul.value.children[0].clientHeight
  maxOffset = ul.value.clientHeight - lrcBoxHeight
})

const off = ref('')
//计算ul元素的偏移量
function setOffset() {
  let index = findIndex();
  let offset = liHeight * index + liHeight/2 - lrcBoxHeight/2;
  if(offset < 0) {
    offset = 0
  }
  if(offset > maxOffset) {
    offset = maxOffset;
  }
  off.value = -offset

  // ul.value.style.transform = `translateY(- ${offset}px)`
  let li = ul.value.querySelector('.active')
  if(li) {
    li.classList.remove('active')
  }
  li = ul.value.children[index]
  if(li) {
    li.classList.add('active')
  }

}
nextTick(() => {
  audio.value.addEventListener('timeupdate', function () {
    setOffset()
  })
})

</script> 


<style lang="scss" scoped>
.music-box {
  height: 858px;
  background: #000;
  color: #666;
  text-align: center;

  audio {
    width: 450px;
    margin: 30px;
  }

  .lrc-box {
    height: 420px;
    overflow: hidden;

    ul {
      transition: 0.6s;

      // transform: translateY(-198px);
      li {
        height: 30px;
        line-height: 30px;
        transition: 0.2s;
      }

      .active {
        color: #fff;
        transform: scale(1.2);
      }
    }
  }
}</style>