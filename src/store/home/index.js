import { getHomeDate } from '@/api'

export default {
  namespaced: true,
  state: {
    dataSizes: 0,// 数据总量
    homeDatas: [],// 卡片数据

  },
  mutations: {
    ADDDATASIZE(state, value) {
      state.dataSizes = value;
    },
    ADDDHOMEFATA(state, value) {
      state.homeDatas = { ...value };
    }



  },
  actions: {
    //01： 首页的数据渲染，返回数据
    async GetHomeList({ commit }, data) {
      // console.log("发送的页码数", data)
      let res = await getHomeDate(data);

      //判断状态是否是错误的
      if (res.code != 200 || res.state != true) {
        return res;
      } else {
        commit('ADDDATASIZE', res.data.num || 0)
        commit('ADDDHOMEFATA', res.data.homeData || [])
        return res;
      }



    }





  },
  getters: {

  }
}