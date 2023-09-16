// 封装分类数据业务相关代码
import { onMounted, ref, watch } from 'vue'
import { getTopCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router'

export function useCategory() {
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async (id) => {
    // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
    const res = await getTopCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(() => getCategory(route.params.id))

  watch(route, () => {
    //防止从category跳转到其他路由也调用函数
    if (route.matched[1].path === '/category/:id') {
      getCategory(route.params.id)
    }
  })
  return {
    categoryData
  }
}
