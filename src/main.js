import { createApp } from 'vue'
import './assets/styles/reset.scss'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import furitPrice from 'furit-price-ceshi'
import JsppUI from 'jsppui'
import 'jsppui/dist/style.css'
import VueLazyload from 'vue-lazyload'



createApp(App)
.use(router)
.use(ElementPlus)
.use(furitPrice)
.use(JsppUI)
.use(VueLazyload, {
  loading: 'http://localhost:3000/images/loading.gif',
  error: 'http://localhost:3000/images/error.jpg',
  preload: 1
})
.mount('#app')