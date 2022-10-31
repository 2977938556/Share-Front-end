<template>
  <div id="imgHeader">
    <!-- 遮罩层 -->
    <div class="mask" v-if="imgReleaseFlage" @click="faBuImg"></div>
    <imgRelease @cloneImgr="faBuImg" v-if="imgReleaseFlage"></imgRelease>


    <div class="header-box">
      <ul>
        <!-- logo 标志 -->
        <li>
          <router-link to="/"> <span class="iconfont">&#xe601;</span></router-link>
        </li>

        <!-- 搜索框内容区域 -->
        <li>
          <div>
            <span v-show="showIcon" ref="icon_sosuo" class="iconfont">&#xe752;
            </span>
            <input @focus="showIconfont" @blur="hideIconfont" type="text" v-model="searchValue">
            <button @click="searchContent">搜索</button>
          </div>
        </li>

        <!-- 首页，发布，登录，头像，退出登录模块 -->
        <li>
          <div>
            <router-link to="/">
              <span class="iconfont home">&#xe600;</span>
            </router-link>
            <span class="iconfont fabu" @click="faBuImg">&#xe8bd;</span>

            <!-- 这里是未登录的情况下 -->
            <router-link to="/login" v-if="UserData == ''">
              <span class="iconfont wdlu">&#xe61d;</span>
            </router-link>

            <!-- 这里是登录的情况下 -->
            <router-link to="/user" v-else>
              <span class="touxiang">
                <img :src="UserData.bgcUrl" alt="">
              </span>
            </router-link>
            <router-link to="/" v-if="UserData">
              <span class="outUser" @click="userOut">退出登录</span>
            </router-link>


          </div>
        </li>

      </ul>
    </div>


  </div>
</template>


<script>


import { mapState, mapActions } from 'vuex'

export default ({
  name: "imgHeader",


  data() {
    return {
      showIcon: true,//控制搜索图标的显示与隐藏
      searchValue: "",//控输入框中的数据
      time: null,
      imgReleaseFlage: false,
    }
  },

  computed: {
    //获取用户数据
    ...mapState('login', {
      UserData: (state) => {
        return state.userinfor.UserData || "";
      }
    })
  },



  methods: {
    //获取Vuex 退出登录的
    ...mapActions("login", ["GetUserList", "OutUserList"]),

    //-01:获取焦点的时候 隐藏搜索图标
    showIconfont() {
      this.showIcon = false;
    },

    //-02:移出焦点的时候  判断是否需要显示图标
    hideIconfont() {
      if (this.searchValue == "") this.showIcon = true;
    },

    //-03：理搜索的结果以及跳页面
    searchContent() {
      //这里判断一下路由是否在当前的路由
      if (this.$route.name == "serach") {
        if (this.searchValue == "") {
          return alert("内容不可以为空")
        } else {
          //这里需要 获取ajax请求
          // 这里运用了节流操作
          if (this.time !== null) {
            clearTimeout(this.time);
          }

          //将定时器的数值重新赋予给time  ，并且发送请求
          this.time = setTimeout(() => {
            console.log("获取ajax请求获取搜索数据")
          }, 500);

          return;
        }
        //如果不在search 搜索页面那么就需要进行一下判断数据是否为空
      } else {
        //判断input 输入框中是否为空,如果不为空那么就跳转路由到search  并携带参数
        if (this.searchValue != "") {
          this.$router.push({ path: "/serach", query: { inputValue: this.searchValue, } }).catch(err => { })
        } else if (this.searchValue == "") {
          return alert("搜索的内容不可以为空")
        }
      }


    },


    //04：处理用户退出登录
    async userOut() {
      let res = await this.OutUserList()
      if (!res.state) {
        alert(res.massage)
      } else if (res.code == 200 && res.state == true) {
        alert(res.massage)
        //成功退出登录后跳转到登录页面
        this.$router.push('/login')

      }
    },


    //05：点击发布按钮显示发布按钮  && 子集的取消和关闭按钮都会激活这个
    faBuImg() {
      this.imgReleaseFlage = !this.imgReleaseFlage;
    },


  },












})

</script>

<style lang="less" scoped>
#imgHeader {
  width: 100%;
  height: 100px;
  background: #fff;
  position: sticky;
  top: 0px;
  box-shadow: 0px 17px 19px 0px #00000021;
  z-index: 10;

  //遮罩
  .mask {
    width: 100%;
    height: 1080px;
    background: rgba(0, 0, 0, 0.459);
    position: fixed;
    z-index: 13;
    top: 0px;
    left: 0px;
  }

  .header-box {
    width: 80%;
    height: 100px;
    // background: red;
    margin: 0 auto;

    ul {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-between;
      // border: 1px solid blue;

      li {
        flex: 1;
        height: 100px;
        // border: 1px solid blue;
      }

      li:nth-child(1) {
        height: 100px;
        overflow: hidden;
        position: relative;

        span {
          display: block;
          font-size: 160px;
          // border: 1px solid blue;
          position: absolute;
          top: -30px;
          left: 0;
          color: #000;

        }
      }

      li:nth-child(2) {
        flex: 1.6;


        div {
          width: 100%;
          height: 100%;
          // background: blue;

          display: flex;
          align-items: center;

          span {
            font-size: 34px;
            position: absolute;
            line-height: 50px;
            padding-left: 10px;
          }

          input {
            width: 100%;
            height: 50px;
            border-radius: 14px;
            background-color: rgba(228, 228, 228, 0.62);
            padding-left: 10px;
            font-size: 24px;
          }

          button {
            margin-left: 10px;
            border: none;
            background-color: rgba(228, 228, 228, 0.62);
            width: 60px;
            height: 46px;
            font-size: 20px;
            color: rgba(8, 8, 8, 0.911);
            border: 1px solid rgba(179, 179, 179, 0.552);

            border-radius: 14px;

          }

        }


      }


      li:nth-child(3) {

        div {
          width: 80%;
          height: auto;
          background-color: rgba(228, 228, 228, 0.62);
          margin: 25px auto;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          padding-left: 10px;
          padding-right: 10px;


          span {
            // font-size: 40px;
            color: #000;
            // padding-left: 2px;
          }





          .outUser {
            font-size: 14px;
          }




          span:hover {
            color: #71A5FF;
            cursor: pointer;
          }

        }
      }


    }
  }

  .home {
    font-size: 42px;
  }

  .fabu {
    font-size: 42px;
  }

  .wdlu {
    font-size: 42px;
    line-height: 40px;

  }

  .touxiang {
    display: block;
    width: 42px;
    height: 42px;
    border-radius: 100px;
    background: gainsboro;
    overflow: hidden;
    line-height: 40px;
    border: 1px solid red;



    img {
      display: block;
      width: 100%;
    }


  }

  .outUser {
    line-height: 50px;
  }


}
</style>