import axios from "axios";

import store from '@/store'



//配置基础路径 以及接口访问的端口号
let $https = axios.create({
  baseURL: "/api",
  timeout: 5000,
});


//配置请求拦截器
$https.interceptors.request.use((config) => {
  // let token = localStorage.getItem('token') || "";
  if (store.state.login.token) {
    config.headers['Authorization'] = store.state.login.token;
  }
  return config
})




//配置响应拦截器
//响应拦截器
$https.interceptors.response.use((res) => {
  // /请求成功就将请求的数据返回data回去
  return res.data;

}, (err) => {
  //响应失败的回调函数
  return Promise.reject(new Error('faile'))
})




export default $https;