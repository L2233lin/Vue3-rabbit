import request from '@/utils/request'

// 获取详情接口
export const getCheckoutInfoAPI = () => request.get('/member/order/pre')

//添加地址
export const addAddressAPI = (data) => request.post('/member/address', data)
//删除地址
export const deleteAddressAPI = (id) => request.delete(`/member/address/${id}`)
//修改地址
export const reAddressAPI = (data) =>
  request.put(`/member/address/${data.id}`, { data })
// 创建订单
export const createOrderAPI = (data) => request.post('/member/order', data)
