import { getuserEditUser, edituserGx } from '@/api'

export default {
  namespaced: true,
  state: {
    users: {}
  },
  mutations: {
    ADDUSERDATA(state, value) {
      state.users = value;
    }

    
  },

  
  actions: {

    // 01 :获取用户id数据
    async GetEditUser({ commit }, data) {
      let res = await getuserEditUser(data)

      if (res.code == 201 || res.state == false) {
        return res;
      }
      commit('ADDUSERDATA', { ...res.data } || {})
      return res;
    },


    // 02: 获取用户的修改的用户数据
    async GetDituser({ commit }, data) {
      let res = await edituserGx(data);

      
      return res;
    }


  },
  getters: {},
}

