<template>
  <div id="Home">
    <!-- <imgDetaile></imgDetaile> -->

    <div class="home_conter">

      <!-- 首页推荐标题模块 -->
      <div class="conter_top">
        <ul>
          <li>
            <h1>{{ title }}</h1>
          </li>
          <div class="star" @click="storeData($event)" v-if="(JSON.stringify(this.homeDatas) != '{}')">
            <button :class="{ actives: sortFlage == 0 }" data-store="0">升序</button>
            <button :class="{ actives: sortFlage == 1 }" data-store="1">降序</button>
          </div>
        </ul>
      </div>


      <!-- 首页卡片区域 -->
      <div class="conter_button">
        <div class="button_center">
          <ul>
            <!-- 卡片 -->
            <li v-for="item of homeDatas" :key=item._id>
              <div class="button_top">
                <img :src="item.imgUrl | imgSplice" :alt="item.labels">
              </div>
              <div class="button_button">
                <div class="button_button_top">
                  <div class="button_button_top_left">
                    <span>
                      <img :src="item.bgcUrl" alt="">

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
                  <div class="button_button_button_c">{{ item.time | fromData }}</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>



      <!-- 分页器模块 -->
      <div class="conter_pageinfor">
        <imgPageinfor :pageNo=pageNo :pageSize=pageSize :dataSize=dataSizes :continmus=continmus @getPage="getPageNum">
        </imgPageinfor>
      </div>


    </div>



  </div>
</template>



<script>
import { mapActions, mapState } from 'vuex'



export default {
  name: "Home",
  data() {
    return {
      title: "首页推荐",
      pageNo: 1,//当前是第几页
      pageSize: 3,//每一页需要展示多少条数据
      continmus: 5,//连续的页码数,
      sortFlage: 0,// 控制升序与降序
      trim: null,

    }
  },
  methods: {

    // 获取用户信息和退出登录方法
    ...mapActions("login", ["GetUserList", "OutUserList"]),
    // 获取首页数据方法
    ...mapActions("home", ["GetHomeList"]),



    //01获取用户信息
    getUserData() {
      // token已经通过设置请求头发送出去获取用户信息
      this.GetUserList().then(async (value) => {
        if (!value.state) {
          //清空vuex仓库中的数据
          let res = await this.OutUserList()
          alert(value.massage)
          this.$router.push('/login')
        } else if (value.state == true && value.code == 200) {
          return true;
        }

      }).catch(error => {
        return alert("404服务器出现问题,请稍后重试")
      })
    },

    //02：获取首页数据
    async getHomeData() {
      let res = await this.GetHomeList({
        page: this.pageNo,
        pageSize: this.pageSize,
        store: this.sortFlage,
      })
    },

    //03：分页器 点击发送请求获取数据
    async getPageNum(value) {
      this.pageNo = value;
      let res = await this.GetHomeList({
        page: this.pageNo,
        pageSize: this.pageSize,
        store: this.sortFlage,
      });
    },


    //04:降序与排序
    storeData(e) {
      // 获取自定义属性的值
      let store = e.target.dataset["store"];
      this.sortFlage = store == 0 ? 0 : 1;

      // 0: 升序
      // 1：降序

      // 节流 
      this.trim = setTimeout(() => {
        // 清除定时器
        if (this.trim != null) {
          clearTimeout(this.trim)
        }


        if (JSON.stringify(this.homeDatas) != "{}") {
          //发送请求
          return this.getHomeData({
            page: this.pageNo,
            pageSize: this.pageSize,
            store: this.sortFlage,
          });
        } else {
          return false;
        }




      }, 500)
    }

  },


  computed: {
    ...mapState("home", ["dataSizes", "homeDatas"])
  },
  
  mounted() {
    //调用获取用户状态
    this.getUserData()
    //调用获取首页数据
    this.getHomeData()
  },

}
</script>



<style lang="less" scoped>
#Home {
  width: 100%;
  height: auto;

  .home_conter {
    width: 100%;

    //顶部
    .conter_top {
      width: 100%;
      height: 100px;
      // border: 1px solid red;

      ul {
        width: 70%;
        height: 100px;
        // border: 1px solid red;
        margin: 0 auto;
        line-height: 100px;
        display: flex;
        justify-content: space-between;

        button {
          width: 40px;
          margin: 0 10px;
          outline: none;
          border-radius: 2px;
          // padding: 0 4px;
          // vertical-align: top;
          display: inline-block;
          font-size: 13px;
          // min-width: 35.5px;
          height: 28px;
          // line-height: 28px;
          cursor: pointer;
          box-sizing: border-box;
          text-align: center;
          border: 0;

          &[disabled] {
            color: #c0c4cc;
            cursor: not-allowed;
          }

          &.active {
            cursor: not-allowed;
            background-color: #409eff;
            color: #fff;
          }
        }

        button:hover {
          background: #40a0ff67;
          color: #fff;

        }

      }





    }


    //底部
    .conter_button {
      width: 100%;

      .button_center {
        width: 70%;
        margin: 0 auto;


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
                  flex: 1;
                  height: 60px;
                }

                .button_button_top_left {
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
                    float: left;
                    margin-left: 14px;
                    cursor: text;


                  }

                  h6 {
                    font-size: 12px;
                    float: left;
                    font-weight: 300;
                    margin-left: 14px;
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
    }

    .conter_pageinfor {
      display: flex;
      align-items: center;
      width: 100%;
      height: 200px;
    }


  }
}

.actives {
  background: #abd5ff;
  color: #fff;
}
</style>