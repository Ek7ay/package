<template>
  <div class="algoritmo">
    算法逻辑练习
  </div>

  <input ref="debo" type="text" v-model="inputRef">

  <FruitPrice/>  

  <Stars
      :num="num"
      :size="size"
      @getStarNum="getStarNum"
    />
  

</template>

<script setup>
import {reactive, toRefs} from 'vue'

const state = reactive({
  num: 2,
  size: 30
})
let {num, size} = toRefs(state)
const getStarNum = (num) => {
  console.log(num)
}

// import { getMaxCount } from './tool.js'
// 1, 获取字符串中出现最多的字母和该字母的次数
let str = 'hellohtmlhellocsshellojavascript'
// let res = getMaxCount(str)


//2, 获取字符串中第一个不重复字符的下标 百度面试题
let str1 = 'abkcabcdedefg'
// import { firstSubscript } from './tool.js'
// const res2 = firstSubscript(str1)


//3, 任务队列，并发任务控制  百度面试题
// import { addTask } from './superTask'


// addTask(1000, 1)  //10000ms后输出，任务1完成
// addTask(1000, 2)  //5000ms后输出，任务2完成
// addTask(1000, 3)  //8000ms后输出，任务3完成 
// addTask(1000, 4)  //12000ms后输出，任务4完成 
// addTask(1000, 5)  //15000ms后输出，任务5完成


//4，全排列


//5， 阶乘    n! = n * (n-1) * (n-2) ... * 1
// 5! = 4 *3 * 2 * 1
import { factorial } from './tool'
let res1 = factorial(4)

//6, 防抖
import { debounce } from './tool'
import { ref, nextTick } from 'vue'
const inputRef = ref('123')
const debo = ref(null)

nextTick(() => {
  debo.value.addEventListener('keyup', debounce(() => {
    console.log(debo.value.value)
  }, 600))
})


//7,处理地址栏url
// let url = '?spm_id_from=333.1007.tianma.2-2-5.click&vd_source=c49f9254db7852af47aa83a4b690920b'
import { urlDeal } from './tool'


// 8,数组合并同类项的值 
const mergeArr = [
  { "name": 'a', "val": ['111'] },
  { "name": 'b', "val": ['333'] },
  { "name": 'a', "val": ['11331'] },
  { "name": 'b', "val": ['4445'] },
  { "name": 'c', "val": ['666'] }]

// [{"name": "a", "val": ["111", "11331"]},
//  {"name": "b", "val": ["333", "4445"]},
//  {"name": "c", "val": ["666"]}]


//9, 深拷贝
const deepCloneObj = {
  age: 20,
  name: 'xxx',
  address: {
    city: 'beijing'
  },
  arr: ['a', 'b', 'c']
}

// import { deepClone } from './tool'
// const deepCloneObj2 = deepClone(deepCloneObj)
// deepCloneObj2.address.city = '上海'
// console.log(deepCloneObj, deepCloneObj2)


// 10,
const obj = { a: 1, b: 2, c: 3, d: 4 };
// pick(obj, "a")  =>  {a : 1};
// pick(obj, "a", "b") => {a : 1, b : 2};
// 火花思维面试题
import { pick } from './tool'


//11, 产生一个数组，长度为10，并向其中随机插入1-50的整数，并且不能重复
// 马蜂窝面试题
import { randomFn } from './tool'


// 12,  fn(17610159688)    176****9688  掩码
import { mask } from './tool'
// console.log(mask(18531407506))


//13, 死循环
function delay(duration) {
  let start = Date.now()
  while (Date.now() - start < duration) { }
}

//14, 搜索关键字，返回完整路径
// import { search } from './tool'

const treedata = {
  label: "北京市",
  children: [
    {
      label: '朝阳区',
      children: [
        { label: '建外街道' },
        { label: '三里屯街道' }
      ]
    },
    {
      label: '东城区',
      children: [
        { label: '东直门街道' },
        {
          label: '东华门街道',
          children: [
            { label: '胡家园社区' },
            { label: '新中街社区' }
          ]
        }
      ]
    }
  ]
}

// const searchres = search('街', treedata)
// console.log(searchres)



//15,打印出 1 - 10000 之间的所有对称数
// const arr = Array.from({length: 10000}, (v, i) => i + 1)
// function filterFn(item) {
//   const reverseNum = item.toString().split('').reverse().join('')
//   return reverseNum == item
// }
// console.log(arr.filter(filterFn)) 











</script> 

<style scoped lang="less"></style>