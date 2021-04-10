//封装首页请求的数据
import request from './request.js'

//获取首页轮播图推荐等信息 API接口为http://152.136.185.210:7878/api/m5/home/multidata
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
// 获取首页商品展示的信息 API接口为http://152.136.185.210:7878/api/m5/home/data?type=sell&page=1
// type有三种:sell,pop,new
export function getHomeGoodsData(type,page) {
  return request({
    url:'/home/data',
    params:{
      type:type,
      page:page
    }
  })
}