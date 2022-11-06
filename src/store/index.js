import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import login from '@/store/login'//登录数据
import register from '@/store/register'//注册数据
import upload from '@/store/upload'//上传数据
import home from '@/store/home'//上传数据
import detail from '@/store/detail'//作品详情数据
import user from '@/store/user'// 个人中心数据
import edituser from '@/store/edituser'// 编辑个人信息数据
import search from '@/store/search'// 搜索页面




export default new Vuex.Store({
  modules: {
    login,
    register,
    upload,
    home,
    detail,
    user,
    edituser,
    search,
  }
})