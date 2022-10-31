
<template>
  <div id="search">
    <div class="search_conter">
      <div class="conter_top">
        <ul>
          <li>
            <h1>{{title}}</h1>
          </li>
        </ul>
      </div>


      <div v-show="showSearch" class="conter_button">
        <div class="button_center">
          <ul>


            <!-- 卡片 -->
            <li>
              <div class="button_top">

              </div>
              <div class="button_button">
                <div class="button_button_top">
                  <div class="button_button_top_left">
                    <span></span>
                    <h5>FeiMao@110</h5>
                    <h6>越努力越不幸运</h6>
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
                  <div class="button_button_button_a">这是一个大海，这是一个大海这是一个大海，这是一个大海这是一个大海，这是一个人</div>
                  <div class="button_button_button_b">#大海 #海浪</div>
                  <div class="button_button_button_c">2022/10/1</div>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>


      <imgLoading v-show="!showSearch"></imgLoading>
    </div>
  </div>
</template>



<script>

export default {
  name: "Search",
  data() {
    return {
      title: "搜索结果",
      showSearch: true,
    }
  }
}
</script>



<style lang="less" scoped>
#search {
  width: 100%;
  height: auto;
  background: #fff;

  .search_conter {
    width: 100%;
    height: auto;

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
              // background: url('https://img2.baidu.com/it/u=379476991,2239051645&fm=253&fmt=auto&app=138&f=JPEG?w=740&h=470') no-repeat center center;
              background: gainsboro;
              background-size: cover;
            }

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

      }
    }



    //loading 无结果的时候
    .conter_loading {
      width: 100%;
      height: 100%;
      // border: 1px solid red;

      img {
        display: block;
        width: 50%;
        height: 50%;
        margin: 0 auto;
        // border: 1px solid red;
      }
    }




  }
}
</style>