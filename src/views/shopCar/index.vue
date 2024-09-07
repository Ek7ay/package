<template>
  购物车
</template>

<script setup>
import { goods } from './data'
class UIGoods {
  constructor (g) {
    this.data = g;
    this.choose = 0;
  }
  // 获取总价
  getTotalPrice() {
    return this.data.price * this.choose
  }

  // 是否选中此件商品
  isChoose() {
    return this.choose > 0
  }

  //选择数量+1
  increase() {
    this.choose++
  }

  //选择数量-1
  decrease() {
    if(this.choose === 0) {
      return
    }
    this.choose--
  }
}

const uig = new UIGoods(goods[0])

// 整个界面的数据
class UIData {
  constructor(goods) {
    const uiGoods = []
    goods.forEach(item => uiGoods.push(new UIGoods(item)));
    this.uiGoods = uiGoods;
    this.deliveryThreshold = 30;
    this.deliveryPrice = 5;
  }

  //获取总价
  getTotalPrice() {
    return this.uiGoods.reduce((sum, curItem) => {
      return sum + curItem.getTotalPrice()
    }, 0)
  }

  //增加某件商品的选中数量
  increase(index) {
    this.uiGoods[index].increase();
  }

  //减少某件商品的选中数量
  decrease(index) {
    this.uiGoods[index].decrease();
  }

  //得到总共的选择数量
  getTotalChooseNumber() {
    return this.uiGoods.reduce((sum, curItem) => {
      return sum + curItem.choose;
    }, 0)
  }

  //购物车里有没有东西
  hasGoodsInCar() {
    return this.getTotalChooseNumber() > 0
  }

  // 是否达到配送标准
  isCrossDeliveryThreshold() {
    return this.getTotalPrice() >= this.deliveryThreshold;
  }

}

const ui = new UIData(goods)
console.log(ui)



</script>

<style lang="scss" scoped>

</style> 