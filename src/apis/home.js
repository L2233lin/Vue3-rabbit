import request from '@/utils/request'

export const getBannerAPI = () => request.get('home/banner')

export const getNewAPI = () => request.get('/home/new')

export const getHotAPI = () => request.get('/home/hot')
