import { GetSearch } from '@/api'


export default {
  namespaced: true,
  state: {
    imgSearch: [],

  },
  mutations: {
    // 保存搜索到的数据
    ADDIMGSEARCH(state, value) {
      state.imgSearch = value;
    }

  },

  actions: {
    //01： 通过搜索的内容请求搜索的数据
    async GetImgSearchList({ commit }, data) {
      // console.log(data)
      let res = await GetSearch({ search: data })
      commit("ADDIMGSEARCH", res.data || [])
    }
  },


  getters: {},
}