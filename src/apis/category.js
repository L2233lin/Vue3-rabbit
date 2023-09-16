import request from '@/utils/request'

export const getTopCategoryAPI = (id) =>
  request.get('/category', { params: { id } })

export const getCategoryFilterAPI = (id) =>
  request.get('/category/sub/filter', { params: { id } })

/**
* @description: 获取导航数据
* @data { 
   categoryId: 1005000 ,
   page: 1,
   pageSize: 20,
   sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
 } 
* @return {*}
*/
export const getSubCategoryAPI = (data) =>
  request.post('/category/goods/temporary', data)
