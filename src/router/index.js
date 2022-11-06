import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//解决router多次点击的时候报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//导入store 仓库
import store from '@/store'



//一级路由
import Home from '@/views/home'//主页
import Search from '@/views/search'//搜索
import User from '@/views/user'//用户
import EditUser from '@/views/edituser'//用户/编辑个人信息
import Login from '@/views/login'//登录
import Register from '@/views/register'//注册
import Detail from '@/views/detail'//内容详情页面



// 二级路由
import Wode from '@/views/user/wude'//用户/我的
import Dianzan from '@/views/user/dianzan'//用户/点赞
import Shocang from '@/views/user/shocang'//用户收藏



//错误页面
import Error from '@/views/error'//404页面










let routes = [
  { path: '/', redirect: { name: "home" }, meta: { istoken: true } },//首页
  { path: '/home', name: "home", component: Home, meta: { istoken: true } },//首页
  { path: '/serach', name: "serach", component: Search, meta: { istoken: true } },//搜索
  { path: '/login', name: "login", component: Login, meta: { istoken: false } },//登录页面
  { path: '/register', name: "register", component: Register, meta: { istoken: false } },//注册页面


  //个人中心页面
  {
    path: '/user', name: "user", component: User, meta: { istoken: true }, redirect: '/user/wode', children: [
      // 配置子集路由
      { path: 'wode', name: "wode", component: Wode, meta: { istoken: true } },
      { path: 'dianzan', name: "dianzan", component: Dianzan, meta: { istoken: true } },
      { path: 'shocang', name: "shocang", component: Shocang, meta: { istoken: true } },
    ]
  },


  { path: '/editUser', name: "editUser", component: EditUser, meta: { istoken: true } },//编辑个人信息页面
  { path: '/detail', name: 'detail', component: Detail, meta: { istoken: true } },//内容详情页面
  { path: "*", name: "error", component: Error, meta: { istoken: false } },//

]


let router = new VueRouter({
  routes,
})





router.beforeEach(async (to, from, next) => {

  let token = store.state.login.token;
  let userinfor = store.state.login.userinfor;


  //01 :如果有token 
  if (token) {
    // 01_1那么就不可以再次进入登录页面
    if (to.path == "/login") {
      next('/home');
    } else {
      //这里我们需要判断用户是否有数据
      if (Object.keys(userinfor).length != 0) {
        next()
      } else {
        let value = await store.dispatch("login/GetUserList");
        //这里是获取数据失败的状态
        if (!value.state) {
          //清除掉本地的 token 
          await store.dispatch('login/OutUserList');

          //回到首页
          next('/home')

        } else if (value.state == true && value.code == 200) {
          //数据获取成功那么就跳转
          next()
        }


      }



      next()
    }
  } else {
    // 没有登录的话那么就限制 用户只能进入哪些页面
    let routerList = ["user", "wode", "dianzan", "shocang", "editUser"];
    //如果查找到数组中的路由那么就禁止进入只能进登录页面
    if (routerList.includes(to.name)) {
      next("/login");
    } else {
      next();
    }


  }





  next();
})






























// // // 全局路由守卫
// router.beforeEach(async (to, from, next) => {
//   // to :是跳转的路由
//   // from:是你从哪里来的守卫




//   let token = store.state.login.token;//获取仓库中的token
//   let userinfor = store.state.login.userinfor;

//   //判断是否有token
//   if (token) {
//     //如果用户已经登陆了那么就不许去登录页面
//     if (to.path == '/login') {
//       next('/home')
//     } else {
//       //这是有token的


//       //这里我们还需要判断是否有用户信息
//       //如果有用户信息那么就可以跳转
//       if (Object.keys(userinfor).length != 0) {
//         next();
//       } else {
//         //没有用户信息那么就 发送请求获取用户信息并且跳转
//         let value = await store.dispatch('login/GetUserList');

//         console.log("我没有数据")

//         //这里是获取数据失败的状态
//         if (!value.state) {
//           //清除掉本地的 token 
//           localStorage.removeItem('token');
//           await store.dispatch('login/OutUserList');

//           //回到首页
//           next('/?showAlert="abc"')

//         } else if (value.state == true && value.code == 200) {
//           //数据获取成功那么就跳转
//           next()
//         }

//       }
//       next()


//     }

//     //这里是没有token的
//   } else {

//     //没有登录的那么就需要限制用户不允许去哪些页面
//     // 
//     let toPath = to.path;
//     let routerList = ["user", "wode", "dianzan", "shocang","editUser"]
//     if (routerList.includes(to.name)) {
//       alert("请登录")
//       next('/login?redirect=' + toPath)
//     } else {
//       next()
//     }
//   }




//   next()
// })






export default router;


