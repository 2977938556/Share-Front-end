//导入APi接口
import { getLogin, getUser } from '@/api/index'

//导入本地存储模块
import { setToken, getToken, remolveToken } from '@/utils/token';

// console.log("测试本地获取token'", getToken())

export default {
  namespaced: true,
  state: {
    userinfor: {},
    token: getToken(),
  },

  mutations: {
    //保存user账户信息
    ADDUSER(state, value) {
      state.user = value;
    },
    //保存token
    ADDTOKEN(state, value) {
      state.token = value;
    },
    //登录数据返回回来的时候添加用户数据
    ADDUSERINFOR(state, value) {
      state.userinfor = value;
    },

    //删除用户数据和
    REMOLVEUSER(state) {
      state.userinfor = {}
      state.token = ""
      remolveToken()
    }

  },


  actions: {

    //01:发送登录请求
    async GetLoginList({ commit }, params) {
      //清空数据
      // commit('REMOLVEUSER')


      //02：发送请求数据
      let res = await getLogin(params);

      //03：通过判断数据状态判断数据是成功还是失败
      if (!res.state) {
        return res;


        //登录成功的时候
      } else {

        //04:持久化
        setToken('token', res.data.token || "");

        //05：将数据保存到vuex中
        // commit('ADDUSER', res.data.UserData);
        commit('ADDTOKEN', res.data.token || "");


        //06：返回数据
        return res;
      }
    },



    //02:发送获取用户数据携带用户名称和token
    async GetUserList({ commit }) {
      let res = await getUser();
      if (!res.state) {
        return res;
      } else {
        //05：将数据保存到vuex中
        commit('ADDUSERINFOR', res.data || {});
        //返回数据
        return res;
      }



    },




    //03：退出登录状态
    async OutUserList({ commit }) {

      commit('REMOLVEUSER');




      if (getToken() == null) {

        return {
          code: 200,
          massage: "退出成功",
          state: true,
        }

      } else {

        return {
          code: 201,
          massage: "退出失败",
          state: false,
        }
        // 2022 年 10 月  22 日 处理的登录状态token




      }
    }
    
    
    
  },
  getters: {

  },
}