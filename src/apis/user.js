// 封装所有和用户相关的接口函数
import request from '@/utils/request'

export const loginAPI = ({ account, password }) =>
  request.post('/login', {
    account,
    password
  })

export const getLikeListAPI = ({ limit = 4 }) =>
  request.get('/goods/relevant', {
    params: {
      limit
    }
  })
