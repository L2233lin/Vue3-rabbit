// 封装购物车相关接口
import request from '@/utils/request'

// 加入购物车
export const insertCartAPI = ({ skuId, count }) =>
  request.post('/member/cart', {
    skuId,
    count
  })

// 获取最新的购物车列表
export const findNewCartListAPI = () => request.get('/member/cart')

// // 删除购物车
export const delCartAPI = (ids) =>
  request.delete('/member/cart', { data: { ids } })

// export const delCartAPI = (ids) => {
//   return request({
//     url: '/member/cart',
//     method: 'DELETE',
//     data: {
//       ids
//     }
//   })
// }

// 合并购物车
export const mergeCartAPI = (data) => request.post('/member/cart/merge', data)
