import { getUserId, getUserImg, getUser } from '@/api'






export default {
  namespaced: true,
  state: {
    userList: [],
    user: {},
  },
  mutations: {
    // 保存作品模块
    ADDUSERLIST(state, value) {
      state.userList = value;
    },
    // 保存用户信息
    ADDUSERINFOR(state, value) {
      state.user = value;
    }
  },
  actions: {

    // 01:通过id 获取数据
    async GetUserImgList({ commit }, item) {
      return await getUserImg(item)
    },


    // 02:获取用户的id   
    async GetUserList(disp, data) {
      let res = await getUserId(data);


      // 判断数据是否返回了数据ID
      if (res.code != 200 || res.state != true) {

        return res;

      } else {
        // 保存数据
        let Promistall = []
        // 循环请求
        res.data.forEach((item, index) => {
          // 发送id 到服务器端并返回数据保存到数组中
          let sta = disp.dispatch('GetUserImgList', { id: item });
          Promistall.push(sta);
        })

        //保存到vuex 中 ( 目前不能使用这种方式保存数据)
        // disp.commit('ADDUSERLIST', await Promise.all(Promistall)) 

        // 返回参数
        return { code: 200, data: await Promise.all(Promistall), massage: "获取数据成功", state: true };

      }





    },



    //03:发送获取用户数据携带用户名称和token
    async GetUserListId({ commit }) {
      let res = await getUser();
      if (!res.state) {
        return res;
      } else {
        //05：将数据保存到vuex中
        commit('ADDUSERINFOR', res.data.UserData || {});
        //返回数据
        return res;
      }



    },






  },
  getter: {

  }
}