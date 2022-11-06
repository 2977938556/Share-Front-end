import $https from './requir';



// 登录模块 数据接口

// 01：传递的参数进行服务端进行判断
export let getLogin = (data = {}) => $https({ url: '/logindata', method: 'post', data: data })

// 02: 注册模块
export let getRegister = (data = {}) => $https({ url: '/registerdata', method: 'post', data: data })

//03:登录后获取用户数据模块
export let getUser = () => $https({ url: '/user', method: 'post' })




// 作品上传接口

// 04:处理作品上传模块
export let getUpload = (data = {}) => $https({ url: '/fileUpload', method: 'post', data: data });



// 首页数据接口

// 05：honme 首页的数据
export let getHomeDate = (data) => $https({ url: `/home`, method: 'get', params: data });



// 内容详情接口

// 06：内容详情数据库
export let getDetail = (data) => $https({ url: '/detailData', method: 'get', params: data });



// 评论模块
export let getPinglun = (data) => $https({ url: "/pinglun", method: "post", data: data })




// 个人中心页面接口

// 07:获取用户个人中心数据的id
export let getUserId = (data) => $https({ url: '/userId', method: 'post', data: data })


// 08: 获取个人中的的作品数据
export let getUserImg = (data) => $https({ url: '/userList', method: 'post', data: data })


// 09: 通过id 获取用户数据
export let getuserEditUser = (data) => $https({ url: '/editUserList', method: "get", params: data })


// 09:个人中心数据更新接口
export let edituserGx = (data) => $https({ url: "/editUserGx", method: "post", data: data })






// 搜索数据接口


// 根据传递的参数返回搜索的数据
export let GetSearch = (data) => $https({ url: '/search', method: 'post', data: data })






