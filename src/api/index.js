import $https from "./requir";



// 一：登录模块

// 01：传递的参数进行服务端进行判断
export let getLogin = (data = {}) => $https({ url: '/logindata', method: "post", data: data })




// 02: 注册模块
export let getRegister = (data = {}) => $https({ url: '/registerdata', method: 'post', data: data })



//03:登录后获取用户数据模块
export let getUser = () => $https({ url: '/user', method: "post" })




// 04:处理作品上传模块
export let getUpload = (data = {}) => $https({ url: "/fileUpload", method: "post", data: data });




// 05：honme 首页的数据
export let getHomeDate = (data) => $https({ url: `/home`, method: "get", params: data });