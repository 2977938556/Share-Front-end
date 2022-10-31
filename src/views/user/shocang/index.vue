<template>
  <div id="wude">
    <div class="user_conter_center_button_title">
      共有 “{{ shocang.length }}条数据”
    </div>

    <ul v-if="shocang.length >= 0">
      <!-- 卡片 -->
      <li v-for="item in shocang" :key="item.id">
        <div class="button_top">
          <img :src="item.imgUrl | imgSplice" :alt="item.labels">
        </div>
        <div class="button_button">
          <div class="button_button_top">
            <div class="button_button_top_left">
              <span>
                <img :src="item.bgcUrl" :alt="item.labels">
              </span>
              <h5>{{ item.author }}</h5>
              <h6>{{ item.slogan }}</h6>

            </div>
            <div class="button_button_top_right">
              <div>
                <span class="iconfont">&#xe60d;</span>
                <span class="iconfont">&#xe603;</span>
                <span class="iconfont">&#xe8b9;</span>
              </div>
            </div>
          </div>
          <div class="button_button_button">
            <div class="button_button_button_a">{{ item.title }}</div>
            <div class="button_button_button_b">{{ item.labels }}</div>
            <div class="button_button_button_c">{{ item.time | fromData}}</div>
          </div>
        </div>
      </li>
    </ul>


    <imgLoading else></imgLoading>


  </div>
</template>

<script>
import { mapState } from "vuex";

export default ({
  name: "Shocang",
  data() {
    return {

    }
  },
  computed: {
    ...mapState('login', {
      shocang: (state) => {
        return state.userinfor.UserData.shocang || [];
      }
    })
  }
})


</script>


<style lang="less" scoped>
//04 用户数据模块

#wude {
  width: 100%;
  height: auto;
  // border: 1px solid rgb(0, 34, 254);

  // 标题
  .user_conter_center_button_title {
    width: 100%;
    height: 50px;

    text-align: center;
    line-height: 80px;
  }




  // 数据列表
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;


    li {
      width: 380px;
      height: 420px;
      background: gainsboro;
      border-radius: 10px;
      margin-top: 40px;
    }

    // li:nth-child(1) {
    //   margin-top: 0;
    // }

    // li:nth-child(2) {
    //   margin-top: 0;
    // }

    // li:nth-child(3) {
    //   margin-top: 0;
    // }
  }

  ul:after {
    display: block;
    content: "";
    width: 32%;
    height: 0px;
  }
}
</style>