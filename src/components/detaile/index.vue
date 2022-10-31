<template>
  <div class="detaile">
    <!-- <span class="icon_clone iconfont" alt="关闭">&#xe68f;</span> -->
    <div class="detaile_conter">
      <div class="detaile_conter_left">
        <img src="https://img2.baidu.com/it/u=1151592386,1952657971&fm=253&fmt=auto&app=120&f=JPEG?w=111&h=150"
          alt="我是图一">
      </div>
      <div class="detaile_conter_right">
        <ul class="detaile_conter_right_conter">
          <li>
            <span class="toux"></span>
            <h5>FeiMao@110</h5>
            <h6>越努力越不幸运</h6>
          </li>
          <li>
            <h5>这是一个大海</h5>
          </li>
          <li>
            <h6>#大海</h6>
          </li>
          <li>
            <ul class="detaile_conter_right_plqu_qluq">
              <li>
                <span class="iconfont">&#xe60d;</span>
                <span>评论区</span>
              </li>
              <li>

                <!-- 评论区 -->
                <div class="detaile_conter">
                  <div class="tx">
                    <span></span>
                    <h5>FeiMao@110</h5>
                  </div>
                  <p class="detaile_conter_conter">你拍的很好很好看耶</p>
                  <p class="detaile_conter_trim">2022.10.9</p>
                </div>
                <div class="detaile_conter">
                  <div class="tx">
                    <span></span>
                    <h5>FeiMao@110</h5>
                  </div>
                  <p class="detaile_conter_conter">你拍的很好很好看耶</p>
                  <p class="detaile_conter_trim">2022.10.9</p>
                </div>
                <div class="detaile_conter">
                  <div class="tx">
                    <span></span>
                    <h5>FeiMao@110</h5>
                  </div>
                  <p class="detaile_conter_conter">你拍的很好很好看耶</p>
                  <p class="detaile_conter_trim">2022.10.9</p>
                </div>
                <div class="detaile_conter">
                  <div class="tx">
                    <span></span>
                    <h5>FeiMao@110</h5>
                  </div>
                  <p class="detaile_conter_conter">你拍的很好很好看耶</p>
                  <p class="detaile_conter_trim">2022.10.9</p>
                </div>

              </li>
              <li>
                <input type="text" placeholder="请输入内容">
                <button>评论</button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>


  </div>
</template>


<script>
export default {
  name: "Detaile",
  data() {
    return {}
  },

  methods: {
    a() {
      console.log("1")
    }
  }




}


</script>



<style lang="less" scoped>
//主要内容区域
.detaile {
  width: 1000px;
  height: 690px;
  // border: 1px solid red;
  position: absolute;
  left: 25%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 9px #b1b1b14f;
  margin: 0 auto;

  //内容区域
  .detaile_conter {
    width: 100%;
    height: 600px;
    position: relative;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;



    //展示图片区域
    .detaile_conter_left {
      width: 90%;
      height: 100%;
      // background: #ebebeb;
      // border: 1px solid rgb(34, 0, 255);
      // padding: 10px;
      position: relative;
      display: flex;
      align-items: center;

      img {
        display: block;
        width: 90%;
        height: 100%;
        background: red;
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
            width: 40px;
            height: 40px;
            background: gainsboro;
            float: left;
            border-radius: 100px;
            // margin-left: 14px;

          }

          h5 {
            display: block;
            font-size: 14px;
            cursor: text;
            padding-left: 60px;


          }

          h6 {
            font-size: 12px;
            font-weight: 300;
            padding-left: 60px;
            cursor: text;
          }

        }

        //标题
        li:nth-child(2) {
          flex: 0.13
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

            li:nth-child(1) {
              flex: 0.2;
            }

            li:nth-child(2) {
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

            li:nth-child(3) {
              flex: 0.3;
              color: rebeccapurple;
              line-height: 40px;
              display: flex;
              justify-content: space-between;
              align-items: center;

              input {
                border: none;
                width: 240px;
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

