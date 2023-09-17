import { createApp } from 'vue'
import pinia from '@/stores/index'

import App from './App.vue'
import router from './router'
// 全局指令注册
import { lazyPlugin } from '@/directives'
// 引入全局组件插件
import { componentPlugin } from '@/components'

// 引入初始化样式文件
import '@/styles/common.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
