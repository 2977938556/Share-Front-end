import { getDetail, getPinglun } from '@/api'


export default {
  namespaced: true,
  state: {
    imgData: {},
  },
  mutations: {
    //保存作品数据
    ADDIMGDATA(state, value) {
      state.imgData = value;
    }
  },
  actions: {

    // 01：通过作品id 获取作品模块
    async GetImgData({ commit }, id) {
      let res = await getDetail(id);
      // 保存到数据仓库中
      // commit("ADDIMGDATA", res || {});

      if (res.code == 201 || res.state == false) {
        return res;
      } else {
        commit('ADDIMGDATA', res.data.imgDetail || {})
        return res;
      }






    },


    // 02:评论模块
    async UploadPl({ commit }, data) {
      let res = await getPinglun(data)

    
      return res;



    }


  },
  getters: {},
}


