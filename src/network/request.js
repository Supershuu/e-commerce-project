//封装axios网络请求
import axios from 'axios'
//如果没有default的时候import时需要写{}来引入
export default function request(config) {
  //创建一个axios的实列
  const instance = axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout:5000
  })
  return instance(config)
}