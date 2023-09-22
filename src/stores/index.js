import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

//pinia 独立维护
const pinia = createPinia()
pinia.use(persist)

export default pinia

//仓库 统一导出
export * from './modules/userStore'
export * from './modules/categoryStore'

//export * from './modules/user' 等价于==>
// 1. import { useUserStore } from './modules/user'
// 2. export { useUserStore }
