import { getRegister } from '@/api/index'



export default {
  namespaced: true,
  state: {
    user: [],
  },
  mutations: {},

  actions: {

    //01:处理注册的数据
    async GetRegisterList({ commit }, params) {
      
      let res= await getRegister(params)
      if (!res.state) {
        //返回失败的数据
        return res;
      } else {
        //02：返回数据
        return res;
      }


    }

  },


  getters: {},
}