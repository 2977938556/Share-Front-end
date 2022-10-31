<template>
  <div id="EditUser">
    <div class="EditUser_center">


      <!-- 头部标题模块 -->
      <div class="EditUser_center_top">
        <div>
          <h1>编辑个人资料</h1>
        </div>
      </div>

      <!-- 上传个人资料 -->
      <div class="EditUser_center_center">
        <div class="EditUser_center_center_input">
          <!-- 表单控件 -->
          <ul>
            <!-- 01：上传头像模块 -->
            <li>
              <label>
                <span class="imgBgc">
                  <img src="#" alt="">
                </span>
                <span class="xuanzeFile">
                  <p>上传头像</p>
                  <input type="file">
                </span>
              </label>
            </li>
            <!-- 02：昵称表单 -->
            <li>
              <span>昵称</span>
              <input type="text">
            </li>

            <!-- 02：名称模块 -->
            <li>
              <label for="mc">
                <span>标语</span>
                <input type="text" id="mc">
              </label>
            </li>


            <!-- 03：简介模块 -->
            <li>
              <label for="jj">
                <span>简介</span>
                <textarea name="" id="" cols="30" rows="10" itemid="jj"></textarea>
              </label>
            </li>



            <!--04: 手机号 -->
            <li>
              <label for="phone">
                <span>手机号</span>
                <input type="text" id="phone">
              </label>
            </li>



            <!-- 05：性别 -->
            <li>
              <span>性别</span>

              <label for="">
                ♂<input type="checkbox" name="woman">
              </label>
              <label for="">
                ♀<input type="checkbox" name="male">

              </label>

            </li>




          </ul>
        </div>
      </div>

      <!-- 提交模块 -->
      <div class="EditUser_center_btn">
        <div>
          <span>取消</span>
          <span>修改</span>
        </div>
      </div>

    </div>

  </div>
</template>



<script>
export default {
  name: "EditUser",

}
</script>



<style lang="less" scoped>
//主体
#EditUser {
  width: 100%;
  height: auto;
  // border: 1px solid red;


  // 主体内容区域
  .EditUser_center {
    width: 70%;
    height: auto;
    // border: 1px solid red;
    margin: 0 auto;


    // 01: 头部标题模块
    .EditUser_center_top {
      width: 100%;
      height: 120px;
      // border: 1px solid red;
      margin: 0 auto;

      div {
        h1 {
          line-height: 150px;
        }
      }
    }


    // 02：上传资料模块
    .EditUser_center_center {
      width: 100%;
      height: auto;
      // border: 1px solid red;

      .EditUser_center_center_input {
        width: 90%;
        height: auto;
        // border: 1px solid red;
        margin: 0 auto;

        ul {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          li {
            // border: 1px solid red;
            height: 120px;


            span {
              font-size: 24px;
              line-height: 40px;
            }

            input {
              // margin-left: 20px;
              // width: 100%;
              // height: 70px;
              // border-radius: 10px;
              // font-size: 24px;
              // padding-left: 10px;
            }
          }



          li:nth-child(1) {
            display: flex;
            align-items: center;

            label {
              display: flex;
              align-items: center;

              //放图片的
              .imgBgc {
                display: block;
                width: 80px;
                height: 80px;
                background: rgb(0, 0, 0);
                border-radius: 100px;
              }

              // 选择文件控件
              .xuanzeFile {
                display: block;
                width: 140px;
                height: 50px;
                border-radius: 10px;
                background: #81BCFD;
                text-align: center;
                line-height: 50px;
                color: #fff;
                // 6226822200285681372
                position: relative;
                left: 20px;
                overflow: hidden;

                p {
                  float: left;
                  position: absolute;
                  left: 20px;
                }

                input {
                  width: 100%;
                  height: 100%;
                  opacity: 0;
                  // border: 1px solid red;
                }
              }



            }
          }

          li:nth-child(2) {

            // flex: 1;
            input {
              width: 100%;
              height: 70px;
              border-radius: 10px;
              font-size: 24px;
              padding-left: 10px;
            }
          }

          li:nth-child(3) {
            input {
              width: 100%;
              height: 70px;
              border-radius: 10px;
              font-size: 24px;
              padding-left: 10px;
            }
          }

          li:nth-child(4) {
            height: 150px;

            span {
              display: block;
              text-align: left;
              font-size: 24px;
              // margin-block: 70px;
            }

            textarea {
              width: 100%;
              height: 80px;
              border-radius: 10px;
              resize: none;
              font-size: 24px;
              padding: 10px;
            }
          }


          li:nth-child(5) {
            input {
              width: 100%;
              height: 70px;
              border-radius: 10px;
              font-size: 24px;
              padding-left: 10px;
            }
          }

          li:nth-child(6) {
            display: flex;
            height: 80px;

            // justify-content: space-between;
            span {
              display: block;
              float: left;
              line-height: 80px;

            }

            label {
              display: block;
              width: 40px;
              height: 40px;
              // background: red;
              text-align: center;
              line-height: 3px;
              float: left;
              margin-left: 20px;
              font-size: 20px;
              margin-top:26px;

              input {
                width: 24px;
                height: 24px;
                border-radius: 10px;
                border: none;
              }
            }
          }
        }

      }
    }




    // 03：提交模块
    .EditUser_center_btn {
      width: 90%;
      height: 100px;
      // border: 1px solid rgb(0, 26, 255);
      position: relative;
      margin: 0 auto;

      div {
        width: 400px;
        height: auto;
        // border: 1px solid red;
        position: absolute;
        right: 10px;

        display: flex;
        justify-content: space-between;



        span {
          display: block;
          width: 180px;
          height: 55px;
          // border: 1px solid red;
          font-size: 24px;
          line-height: 55px;
          color: #fff;
          text-align: center;
          border-radius: 10px;
          cursor:pointer;
          transition: all 0.3s;

        }
        

        span:nth-child(1) {
          background: #454545;
        }
    span:hover{
          // background: red;
          box-shadow: 1px 1px 19px 0px #0000006e;
        }

        span:nth-child(2) {
          background: #81BCFD;
        }
      }
    }






  }



}
</style>