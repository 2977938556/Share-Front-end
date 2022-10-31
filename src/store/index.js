import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import login from '@/store/login'//登录数据
import register from '@/store/register'//注册数据
import upload from '@/store/upload'//上传数据
import home from '@/store/home'//上传数据




export default new Vuex.Store({
  modules: {
    login,
    register,
    upload,
    home
  }
})