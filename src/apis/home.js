import request from '@/utils/request'

export const getBannerAPI = (params = {}) => {
  // 默认为1 商品为2
  const { distributionSite = '1' } = params
  return request.get('home/banner', {
    params: {
      distributionSite
    }
  })
}

export const getNewAPI = () => request.get('/home/new')

export const getHotAPI = () => request.get('/home/hot')

export const getGoodsAPI = () => request.get('/home/goods')
