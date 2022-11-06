<template>
  <div id="wude">
    <div class="user_conter_center_button_title">
      共有 "{{ userList.length }}"条数据”
    </div>
    <ul v-if="userList.length > 0" @click="getImgId">

      <!-- 卡片 -->
      <li v-for="item in userList" :key="item._id" :data-imgId="item._id">
        <div class="button_top">
          <img :src="item.imgUrl | imgSplice" alt="" :data-imgId="item._id">
        </div>
        <div class="button_button" :data-imgId="item._id">
          <div class="button_button_top" :data-imgId="item._id">
            <div class="button_button_top_left" :data-imgId="item._id">
              <span>
                <img :src="item.bgcUrl | imgBgcsplice" alt="" :data-imgId="item._id">
              </span>
              <h5 :data-imgId="item._id"> {{ item.author }}</h5>
              <h6 :data-imgId="item._id">{{ item.slogan }}</h6>

            </div>
            <div class="button_button_top_right" :data-imgId="item._id">
              <div>
                <span class="iconfont" :data-imgId="item._id">&#xe60d;</span>
                <span class="iconfont" :data-imgId="item._id">&#xe603;</span>
                <span class="iconfont" :data-imgId="item._id">&#xe8b9;</span>
              </div>
            </div>
          </div>
          <div class="button_button_button" :data-imgId="item._id">
            <div class="button_button_button_a" :data-imgId="item._id">{{ item.title }}</div>
            <div class="button_button_button_b" :data-imgId="item._id">{{ item.labels }}</div>
            <div class="button_button_button_c" :data-imgId="item._id">{{ item.time | fromData }}</div>
          </div>
        </div>
      </li>


    </ul>


    <!-- 无数据的时候 -->
    <imgLoading v-else></imgLoading>



  </div>




</template>

<script>

import { mapState, mapActions } from "vuex";

export default ({
  name: "Wude",

  data() {
    return {
      userList: [],
    }
  },
  methods: {
    ...mapActions('user', ["GetUserList"]),

    //01:这个是获取路由的数据 获取用户id数据 传递过去获取用户的数据 page:获取当前路由是哪个页面
    async getUser() {
      //  这里是传递 id 也就是用户的id 和传递是在哪个页面点击的获取数据 这边使用的是路由上的 name属性
      let res = await this.GetUserList({ _id: this._id, page: this.$route.name })
      // 判断返回的数据是有数据还是没有数 如果有数那么 就渲染 卡片
      if (res.code != 200 || res.state != true) {
        console.log("数据获取失败")
        this.userList = [];
        return false;
      }
      this.userList = res.data
    },

    //02:点击跳转到详情页面
    getImgId(e) {
      // console.log(e)
      // console.log(e.target)

      let imgId = e.target.dataset.imgid;
      console.log(imgId)

      // 判断是否为空
      if (imgId == "") {
        return alert("系统错误，请刷新重试");
      }
      // 携带参数进行路由的跳转
      this.$router.push({
        path: '/detail',
        query: {
          imgid: imgId,
        }
      })
    }

  },

  computed: {

    // _id 获取
    ...mapState('login', {
      _id: (state) => {
        return state.userinfor.UserData._id || "";
      },
    })
  },



  mounted() {
    // 将id 参数传递给store仓库中
    this.getUser()
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
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      width: 388px;
      height: 472px;
      margin-top: 60px;
      display: block;
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;
      transform: all 0.5s;
      box-shadow: 0px 0px 20px 0px #0000003d;



      //顶部图片内容
      .button_top {
        width: 100%;
        height: 300px;
        background: gainsboro;
        background-size: cover;
        overflow: hidden;
        position: relative;


        img {
          width: 100%;
          height: auto;
          margin: 0 auto;
          display: block;
          transition-property: all;
          transition-duration: 0.5s;
          transition-timing-function: cubic-bezier(0.05, 1.08, 0.3, 1.15);
          transition-delay: 0s;
        }

        img:hover {
          transform: scale(2);
        }
      }

      // 底部卡片区域
      .button_button {
        width: 100%;
        height: 172px;

        .button_button_top {
          width: 100%;
          height: 60px;
          display: flex;

          div {
            width: 100%;
            // flex: 1;
            height: 60px;

          }

          .button_button_top_left {
            width: 120%;
            // border: 1px solid rgba(255, 0, 238, 0.738);
            padding-top: 10px;

            span {
              display: block;
              width: 40px;
              height: 40px;
              background: gainsboro;
              float: left;
              border-radius: 100px;
              margin-left: 14px;
              overflow: hidden;
              border: 1px solid gainsboro;

              img {
                width: 100%;
                border-radius: 100px;
                height: 100%;
                border: 1px solid rgb(110, 110, 110);

              }

            }

            h5 {
              font-size: 14px;
              // float: left;
              margin-left: 14px;
              cursor: text;
            }

            h6 {
              font-size: 12px;
              // float: left;
              font-weight: 300;
              // margin-left: 14px;
              cursor: text;


            }
          }

          .button_button_top_right {
            // border: 1px solid rgba(255, 0, 238, 0.738);

            div {
              width: 60%;
              height: 40px;
              float: right;
              // border: 1px solid rgba(255, 0, 238, 0.738);
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding-right: 14px;

              span {
                font-size: 24px;
              }

              // span:nth-child(3) {
              //   border: 1px solid red;
              // }

              span:hover {
                cursor: pointer;
                color: #71A5FF;
              }

            }
          }

        }

        .button_button_button {
          width: 100%;
          height: 112px;
          // border: 1px solid rgba(0, 255, 140, 0.738);


          .button_button_button_a {
            width: 100%;
            height: 60px;
            // border: 1px solid rgba(0, 255, 140, 0.738);
            font-size: 14px;
            padding: 8px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2; // 想要超出三行显示 就把这里改成3就好了
            // padding-right: 14px;

            cursor: text;
            padding: 20PX;




          }

          .button_button_button_b {
            width: 100%;
            height: 20px;
            // border: 1px solid rgba(0, 255, 140, 0.738);
            font-size: 12px;
            padding-left: 20px;
            line-height: 20px;
            color: rgba(61, 61, 61, 0.563);
            cursor: text;

          }

          .button_button_button_c {
            float: right;
            padding-left: 8px;
            padding-right: 14px;
            font-size: 12px;
            color: rgba(61, 61, 61, 0.563);
            cursor: text;

          }

        }
      }


    }

    li:hover {
      transition: all 0.5s;
    }
  }

  ul:after {
    display: block;
    content: "";
    width: 32%;
    height: 0px;
  }
}


// .viewBox {
//   width: 100%;
//   height: 100%;
//   border: 1px solid red;
//   position:absolute;
//   top:30%;
//   left:0;
// }
</style>