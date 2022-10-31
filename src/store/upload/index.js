import { getUpload } from '@/api/index'


export default {
  namespaced: true,
  state: {
  },
  mutations: {},

  actions: {
    // 01:处理图片
    async GetUploadList({ commit }, data) {
      let res = await getUpload(data || {});
      //02：如果返回的数据是错误的情况
      if (res.state == false || res.code == 201 || res.code == 401) {
        return res;
      } else {
        return res;
      }
    }

  },


  getters: {},
}