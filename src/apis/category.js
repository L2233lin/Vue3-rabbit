import request from '@/utils/request'

export const getTopCategoryAPI = (id) =>
  request.get('/category', { params: { id } })
