import request from '@/utils/request'

export const getOrderAPI = (id) => request.get(`/member/order/${id}`)
