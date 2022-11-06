<template>
  <div class="detaile">
    <!-- <span class="icon_clone iconfont" alt="关闭">&#xe68f;</span> -->
    <div class="detaile_conter">
      <div class="detaile_conter_left">
        <img :src="imgData.imgUrl | imgSplice" alt="我是图一">
      </div>
      <div class="detaile_conter_right">
        <ul class="detaile_conter_right_conter">

          <li>
            <span class="toux">
              <img :src="imgData.bgcUrl | imgBgcsplice" alt="">
            </span>
            <h5>{{ imgData.author }}</h5>
            <h6>{{ imgData.slogan }}</h6>
          </li>

          <li>
            <h5>{{ imgData.title }}</h5>
          </li>


          <li>
            <h6>{{ imgData.labels }}</h6>
          </li>

          <li>
            <ul class="detaile_conter_right_plqu_qluq">
              <!-- 第一个li -->
              <li class="plqu_qluq_noe">
                <span class="iconfont">&#xe60d;</span>
                <span>评论区</span>
              </li>

              <!-- 第二个li评论数据 -->
              <li class="plqu_qluq_tow" v-if="imgData.pinglun">
                <!-- 评论区 -->
                <div class="detaile_conter" v-for="(item) in imgData.pinglun" :key="item._id">
                  <div class="tx">
                    <span>
                      <img :src="item.bgcUrl | imgBgcsplice">
                    </span>
                    <h5>{{ item.author }}</h5>
                  </div>
                  <p class="detaile_conter_conter">{{ item.conter }}</p>
                  <p class="detaile_conter_trim">{{ item.trim | fromData }}</p>
                </div>
              </li>

              <!-- <h1 v-else>暂无评论</h1> -->



              <!-- 第三个li 发布评论 -->
              <li class="plqu_qluq_tow_three">
                <input type="text" placeholder="请输入内容" ref="pl">
                <button @click="PinLun">评论</button>
              </li>


            </ul>
          </li>


        </ul>
      </div>
    </div>

  </div>
</template>


<script>

import { mapState, mapActions } from 'vuex';


export default {
  name: "Detaile",
  data() {
    return {
      plValue: "",
    }
  },

  methods: {
    ...mapActions('detail', ["GetImgData", "UploadPl"]),

    // 01：通过作品的id 获取用户的作品数据
    async getImg() {
      let imgid = this.$route.query.imgid;
      // 发送请求获取数据
      let res = await this.GetImgData({
        id: imgid
      });

      if (res.code == 201 || res.state == false) {
        alert(res.massage)
        this.$router.go(-1)
      }
    },



    // 02： 评论功能模块
    async PinLun() {

      let pl = this.$refs.pl;

      // console.log(pl.value)

      if (pl.value == "" || pl.value.length > 26) {
        return alert("评论不能为空，并且长度不能超出26个字符")
      }

      // 发送请求携带当前登录的id 进行获取数据
      let res = await this.UploadPl({ originator: this.userinfor.originator, imgId: this.$route.query.imgid, plValues: pl.value })



      if (res.code == 201 || res.status == false) {
        return alert("评论失败")
      } else {

        pl.value = ""
        this.getImg();
      }


    }



  },
  computed: {
    ...mapState('detail', ["imgData"]),
    ...mapState('login', {
      userinfor(state) {
        return state.userinfor.UserData;
      }
    })
  },
  mounted() {
    this.getImg()


  }




}


</script>



<style lang="less" scoped>
//主要内容区域
.detaile {
  width: 100%;
  height: 100%;
  // border: 1px solid red;
  background: #fff;
  // border-radius: 10px;
  // box-shadow: 0px 0px 20px 9px #b1b1b14f;
  margin: 0 auto;

  //内容区域
  .detaile_conter {
    width: 100%;
    height: 800px;
    position: relative;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;



    //展示图片区域
    .detaile_conter_left {
      width: 100%;
      height: 100%;
      background: #ebebeb;
      border-radius: 10px;
      // border: 1px solid rgb(34, 0, 255);
      // padding: 10px;
      position: relative;
      margin: 0 auto;
      padding: 50px;
      display: flex;
      align-items: center;

      img {
        display: block;
        height: 100%;
        margin: 0 auto;
        // background: red;
        margin: 0 auto;

      }








    }


    //提交区域
    .detaile_conter_right {
      width: 50%;
      height: 100%;

      .detaile_conter_right_conter {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;



        li {
          width: 100%;
          height: 50px;
        }

        //头像模块
        li:nth-child(1) {
          flex: 0.15;

          .toux {
            display: block;
            width: 80px;
            height: 80px;
            background: gainsboro;
            float: left;
            border-radius: 100px;
            overflow: hidden;
            border: 1px solid gainsboro;

            img {
              width: 100%;
              height: auto;

            }


          }

          h5 {
            display: block;
            font-size: 20px;
            cursor: text;
            padding-left: 100px;
            line-height: 40px
          }

          h6 {
            font-size: 16px;
            font-weight: 300;
            padding-left: 100px;
            cursor: text;
          }

        }

        //标题
        li:nth-child(2) {
          flex: 0.13;
          font-size: 24px;
        }


        //标签
        li:nth-child(3) {
          flex: 0.1;
        }

        //设置评论区的
        li:nth-child(4) {
          flex: 1;


          .detaile_conter_right_plqu_qluq {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;


            .plqu_qluq_noe {
              flex: 0.2;
              // background: red;
              border-bottom: 2px solid gainsboro;


            }

            .plqu_qluq_tow {
              flex: 2;
              overflow: auto;
              // display: flex;

              .detaile_conter {
                padding: 10px;
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: column;
                // background: gray;
                border-bottom: 1px solid gainsboro;

                .tx {
                  width: 100%;
                  display: flex;

                  span {
                    display: block;
                    width: 50px;
                    height: 50px;
                    border-radius: 100px;
                    background: red;
                    overflow: hidden;

                    img {
                      width: 100%;
                      height: auto;

                    }
                  }
                }

                .detaile_conter_conter {
                  font-size: 14px;
                  line-height: 24px;
                  float: right;
                  padding: 10px;

                }

                .detaile_conter_trim {
                  font-size: 12px;
                  position: absolute;
                  right: 0px;
                  bottom: 0px;
                  padding: 10px;
                }


              }
            }

            .plqu_qluq_tow_three {
              flex: 0.3;
              color: rebeccapurple;
              line-height: 40px;
              display: flex;
              justify-content: space-between;
              align-items: center;

              input {
                border: none;
                width: 90%;
                height: 40px;
                border-radius: 10px;
                padding-left: 10px;
                background: #EAEAEA;
              }

              button {
                width: 68px;
                height: 40px;
                background: #81BCFD;
                border-radius: 10px;
                border: none;
                color: #fff;
                font-size: 18px;
                cursor: pointer;

              }
            }

          }

        }



      }

    }



  }



}
</style>

