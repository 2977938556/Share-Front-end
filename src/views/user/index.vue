<template>
  <div id="user">
    <div class="user_conter">
      <div class="user_conter_center">

        <!-- 用户头像模块 -->
        <div class="user_conter_center_top">
          <ul>
            <li>
              <div class="user_img">
                <span>
                  <img :src="user.bgcUrl | imgBgcsplice" alt="">
                </span>
              </div>
              <div class="user_title">
                <span>
                  <h5>{{ user.author }}</h5>
                  <h6>{{ user.slogan }}</h6>
                </span>
              </div>
              <div class="user_edit">
                <a @click="getEdu(user.originator)">编辑资料模块</a>
              </div>
            </li>
          </ul>
        </div>
        <!-- 用户收藏点赞 导航栏模块 -->
        <div class="user_conter_center_middle">
          <ul>

            <!-- 我的模块 -->
            <li>
              <router-link to="/user/wode" active-class="activeRouter">
                <span class="iconfont woude">&#xe608;</span>
                <p>我的</p>
              </router-link>
            </li>

            <!-- 点赞页面 -->
            <li>
              <router-link to="/user/dianzan" active-class="activeRouter">
                <span class="iconfont dianzan">&#xe65c;</span>
                <p>点赞</p>
              </router-link>
            </li>

            <!-- 收藏页面 -->
            <li>
              <router-link to="/user/shocang" active-class="activeRouter">
                <span class="iconfont shocang">&#xe8bc;</span>
                <p>收藏</p>
              </router-link>
            </li>
          </ul>
        </div>


      </div>
      <!-- 用户数据模块 -->
      <div class="user_conter_center_button">
        <router-view></router-view>
      </div>
    </div>


  </div>

</template>
  
  
<script>


import { mapState, mapActions } from "vuex";




export default ({
  name: "user",

  computed: {

    // 获取用户数据
    ...mapState('user', {
      user: (state) => {
        return state.user || {};
      }
    })

  },

  methods: {
    //获取用户数据的方法
    ...mapActions('user', ["GetUserListId"]),

    // 点击按钮发送请求获取数据
    getEdu(val) {
      this.$router.push({
        path: '/editUser', query: {
          originator: val
        }
      })
    },

  },


  mounted() {
    // 发送请求获取用户数据
    this.GetUserListId()
  }



})

</script>




  
<style lang="less" scoped>
// 路由激活的样式
.activeRouter {
  color: #71A5FF !important;

  span {
    color: #71A5FF !important;
  }

  p {
    color: #71A5FF !important;

  }
}




// 总体盒子
.user_conter {
  width: 100%;
  // border: 1px solid red;

  //内容区域
  .user_conter_center {
    width: 1000px;
    height: 100%;
    // border: 1px solid red;
    margin: 0 auto;



    //01头像模块
    .user_conter_center_top {
      width: 100%;
      height: 360px;
      // border: 1px solid red;

      ul {
        width: 100%;
        height: 360px;
        // border: 1px solid rgb(89, 0, 255);

        li:nth-child(1) {
          font-size: 24px;
          height: 100%;
          display: flex;
          justify-content: space-between;

          div {
            // border: 1px solid red;
          }

          .user_img {
            flex: 0.5;
            display: flex;
            align-items: center;


            span {
              display: block;
              width: 220px;
              height: 220px;
              background: rgb(200, 200, 200);
              overflow: hidden;
              border-radius: 100%;
              // border: 10px solid rgb(0, 0, 0);
              position: relative;
              // transition: all 0.5s;
              border: 6px solid #000;

              img {
                display: block;
                width: 100%;
                height: 100%;
              }
            }

            // span:hover {
            //   transform: rotateY(180deg);
            //   cursor: pointer;
            // }
          }

          .user_title {
            flex: 3;
            display: flex;
            align-items: center;

            span {
              display: block;
              margin-top: 10px;
              padding-left: 50px;

              h5 {
                font-size: 60px;
              }

              h6 {
                font-size: 30px;
              }
            }
          }


          .user_edit {
            flex: 3;

            a {
              font-size: 16px;
              color: #71A5FF;
              line-height: 500px;
              padding-left: 200px;
            }

          }




        }

        li:nth-child(2) {
          // color: red;
          font-size: 24px;
        }


        li:nth-child(3) {
          // color: red;
          font-size: 24px;
        }



      }
    }




    //02 子集导航模块
    .user_conter_center_middle {
      width: 100%;
      height: auto;
      // border: 1px solid red;

      ul {
        width: 50%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        li {
          font-size: 16px;
          text-align: center;
          cursor: pointer;

          a {
            color: none;

            span {
              font-size: 70px;
              text-align: center;
              color: #000;
            }

            p {
              color: #000;
            }

          }
        }
      }

    }



  }




  // 数据模块
  .user_conter_center_button {
    width: 70%;
    height: auto;
    // border: 1px solid rgb(0, 34, 254);
    margin: 0 auto;
    padding: 20px;

  }




}
</style>