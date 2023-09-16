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
    //防止从category跳转到home也调用函数
    if (Boolean(route.params.id) !== false) {
      getCategory(route.params.id)
    }
  })
  return {
    categoryData
  }
}
