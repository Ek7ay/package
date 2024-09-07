import { createRouter, createWebHashHistory } from 'vue-router'
import menuData from '@/config/menuConfig'

const routes = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    redirect: '/home/algoritmo'
  },

  // {
  //   path: '/home',
  //   meta: { title: '首页' },
  //   component: () => import('@/views/home/index.vue'),
  //   children: [
  //     {
  //       path: 'transfer',              //穿梭框
  //       component: () => import('@/views/transfer/index.vue')
  //     },
  //     {
  //       path: 'treemenu',              //无限极菜单
  //       component: () => import('@/views/treeMenu/index.vue')
  //     },
  //     {
  //       path: 'animation',              //动画
  //       component: () => import('@/views/animation/index.vue')
  //     },
  //     {
  //       path: 'algoritmo',              //算法
  //       component: () => import('@/views/algoritmo/index.vue')
  //     },
  //     {
  //       path: 'flex',
  //       component: () => import('@/views/flex/index.vue')
  //     },
  //     {
  //       path: 'tree',
  //       component: () => import('@/views/tree/index.vue')
  //     },
  //     {
  //       path: 'shopcar',
  //       component: () => import('@/views/shopCar/index.vue')
  //     },
  //     {
  //       path: 'player',
  //       component: () => import('@/views/player/index.vue')
  //     },
  //     {
  //       path: 'ajax',
  //       component: () => import('@/views/ajax/index.vue')
  //     },
  //     {
  //       path: 'form',
  //       component: () => import('@/views/form/index.vue')
  //     }
  //   ]
  // },
]

menuData.forEach(item => {
  routes.push({
    path: item.path,
    name: item.name,
    component: () => import(`@/views/${item.component }/index.vue`),
    children: item.children.map(v => {
      return {
        path: v.path,
        name: v.name,
        component: () => import(`@/views/${v.component }/index.vue`)
      }
    })
  })
});

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
