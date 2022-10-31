<template>
  <div id="lregister">
    <div class="lregister_conter">


      <!-- 左侧标题区域 -->
      <div class="lregister_conter_left">
        <ul>
          <li>
            <span class="iconfont">&#xe601;</span>
          </li>
          <li>
            <h2>生命不息,奋斗不止
              <br>
              奉献不已
            </h2>
          </li>
        </ul>
      </div>


      <!-- 右侧输入区域 -->
      <div class="lregister_conter_right">
        <ul>
          <li>
            <span class="iconfont">&#xe61d;</span>
            <p>注册</p>
          </li>
          <li>
            <label for="">
              <span>用户名</span>
              <input type="text" placeholder="取一个用户名吧~" v-model="account">
              <p>错误展示</p>
            </label>
          </li>
          <li>
            <label for="">
              <span>密码</span>
              <input type="password" placeholder="请输入你的密码" v-model="password">
              <p>错误展示</p>
            </label>
          </li>

          <li>
            <label for="">
              <span>确认密码</span>
              <input type="password" placeholder="请输入你的密码" v-model="passwordB">
              <p v-show="flageError">{{errText}}</p>
            </label>
          </li>


          <li>
            <a>忘记密码</a>
          </li>
          <li>
            <div>
              <span>
                <router-link to="/login">登录</router-link>
              </span>
              <span @click="UserRegister">注册</span>
              <!-- <span @click="ceshi">测试</span> -->
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: 'Register',
  data() {
    return {
      //账户名称
      account: "",
      //密码
      password: "",
      passwordB: "",
      errText: "",
      flageError: false
    }
  },

  methods: {
    ...mapActions("register", { GetRegisterList: "GetRegisterList" }),
    //处理注册数据
    async UserRegister() {
      let res = await this.GetRegisterList({
        account: this.account,
        password: this.password,
        passwordB: this.passwordB
      });


      // console.log(res)


      // if (!res.state) {
      //   this.errText = res.massage;
      //   this.flageError = true;
      // } else if (res.code == 200 && res.state == true) {
      //   this.errText = res.massage;
      //   this.flageError = false;
      //   this.$router.push('/login')
      // }



      // 02_2发生错误的情况
      if (!res.state) {
        // alert(res.massage)
        this.errText = res.massage;
        this.flageError = true;

        // 02_3正确的情况
      } else if (res.code == 200 && res.state == true) {
        this.errText = res.massage;
        this.flageError = false;
      
        alert("注册成功")
        this.$router.push('/login')


      }





    },

    //测试
    // async ceshi() {
    //   let res = await this.$Api.ceshi();
    //   console.log(res)


    // }



  }



}
</script>



<style lang="less" scoped>
#lregister {
  width: 100%;
  height: 100%;
  overflow: auto;

  li {
    // border: 1px solid red;
  }



  //主体内容区域
  .lregister_conter {
    width: 1000px;
    // height: 700px;
    // border: 1px solid red;
    border-radius: 20px;

    margin: 130px auto;
    background: rgba(#fff, 0.8);
    overflow: hidden;






    // 01:左侧标题区域
    .lregister_conter_left {
      width: 50%;
      height: 100%;
      // border: 1px solid red;
      float: left;


      ul {
        width: 90%;
        height: 100%;
        // background: red;
        margin: 0 auto;

        li {
          // border: 1px solid blue;
        }

        li:nth-child(1) {
          // height: 40px;

          // color: rgb(0, 255, 64);

          span {
            display: block;
            font-size: 300px;
            margin-left: -20px;
          }
        }

        li:nth-child(2) {
          h2 {
            font-size: 34px;
            color: #1296DB;
            margin-top: -90px;
          }
        }


      }
    }


    //02:右侧控件区域
    .lregister_conter_right {
      width: 50%;
      height: 100%;
      background: #fff;
      border-radius: 20px;
      float: left;
      display: flex;
      align-items: center;

      ul {
        width: 90%;
        height: 90%;
        // border: 1px solid red;
        margin: 0 auto;

        li {
          position: relative;

          // border: 1px solid red;\
          input {
            width: 330px;
            height: 50px;
            border: 1px solid gainsboro;
            border-radius: 10px;
            padding-left: 10px;
            font-size: 18px;
            // margin-left: 10px;
            position: absolute;
            right: 0px;

          }




        }



        // 标题
        li:nth-child(1) {
          width: 100%;
          height: 160px;

          span {
            display: block;
            text-align: center;
            font-size: 80px;

          }

          p {
            text-align: center;
            font-size: 34px;
          }
        }

        // 输入用户名
        li:nth-child(2) {
          width: 100%;
          height: 100px;

          label {
            display: block;
            width: 100%;
            height: 100%;
            // background: red;

            span {
              font-size: 24px;
              line-height: 60px;
            }


            p {
              margin-left: 60px;
              font-size: 14px;
              color: red;
              display: none;
            }

          }
        }

        // 输入密码
        li:nth-child(3) {
          width: 100%;
          height: 100px;

          label {
            display: block;
            width: 100%;
            height: 100%;
            // background: red;

            span {
              font-size: 24px;
            }



            p {
              margin-left: 60px;
              font-size: 14px;
              color: rgb(255, 0, 0);
              display: none;
            }

          }
        }

        // 输入密码
        li:nth-child(4) {
          width: 100%;
          height: 100px;

          label {
            display: block;
            width: 100%;
            height: 100%;
            // background: red;


            span {
              font-size: 24px;
              line-height: 60px;
            }



            p {
              margin-left: 60px;
              font-size: 14px;
              color: rgb(255, 0, 0);
              // display: none;
            }

          }
        }

        // 忘记密码
        li:nth-child(5) {
          a {
            font-size: 14px;
            margin-left: 120px;
            color: #000;
          }
        }

        //提交按钮
        li:nth-child(6) {
          width: 100%;
          height: 160px;

          div {
            width: 80%;
            height: 100%;
            float: right;
            display: flex;
            // background: #1296DB;
            justify-content: space-around;
            align-items: center;

            span {
              display: block;
              width: 135px;
              height: 55px;
              border-radius: 10px;
              text-align: center;
              line-height: 55px;
              font-size: 24px;
              cursor: pointer;
            }

            span:nth-child(1) {
              background: #fff;
              border: 1px solid #81BCFD;

              a {
                display: block;
                width: 135px;
                height: 55px;
                border-radius: 10px;
                text-align: center;
                line-height: 55px;
                font-size: 24px;
                cursor: pointer;
                color: #000;
              }
            }

            span:nth-child(2) {
              color: #fff;
              background: #81BCFD;
            }


          }
        }

      }


    }



  }


}
</style>