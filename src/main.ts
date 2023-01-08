import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import Markdown from 'vue3-markdown-it'

import 'element-plus/dist/index.css'
import 'vue3-carousel/dist/carousel.css'

import './index.css'
// deps
import App from './App.vue'
import router from './router'

// @ts-ignore
import { registerSW } from 'virtual:pwa-register'

registerSW({
  onNeedRefresh() {},
  onOfflineReady() {}
})

const app = createApp(App)
app.use(ElementPlus)
app.use(Markdown)
app.use(createPinia()).use(router).mount('#app')
