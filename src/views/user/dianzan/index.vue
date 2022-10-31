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
  name: "Dianzan",
  data() {
    return {

    }
  },

  computed: {
    ...mapState('login', {
      shocang: (state) => {
        return state.userinfor.UserData.dianzng || [];
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
          height: 100%;
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
                border: 1px solid red;

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
</style>