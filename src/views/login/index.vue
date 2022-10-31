<template>
  <div id="login">
    <div class="login_conter">


      <!-- 左侧标题区域 -->
      <div class="login_conter_left">
        <ul>
          <li>
            <span class="iconfont">&#xe601;</span>
          </li>
          <li>
            <h2>分享你的美好，<br>
              生活总是充满着美好
            </h2>
          </li>
        </ul>
      </div>


      <!-- 右侧输入区域 -->
      <div class="login_conter_right">
        <ul>
          <li>
            <span class="iconfont">&#xe61d;</span>
            <p>登录</p>
          </li>
          <li>
            <label for="">
              <span>账户</span>
              <input type="text" placeholder="输入你的账户名称或者用户名" v-model="account">
              <p></p>
            </label>
          </li>
          <li>
            <label for="">
              <span>密码</span>
              <input type="password" placeholder="请输入你的密码" v-model="password">
              <p v-show="flageError">{{errText}}</p>
            </label>
          </li>
          <li>
            <a>忘记密码</a>
          </li>
          <li>
            <div>
              <span>
                <router-link to="/register">注册</router-link>
              </span>
              <span @click="UsetLogin">登录</span>
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
  name: 'login',

  data() {
    return {
      account: "",
      password: "",
      errText: "",
      flageError: false,
    }

  },


  methods: {
    //获取VUEX/中的获取数据方法
    ...mapActions("login", ["GetLoginList"]),

    //02 :登录提交账户数据
    async UsetLogin() {
      // 02_1发送请求到Vuex中进行获取数据
      let res = await this.GetLoginList({ account: this.account, password: this.password })

      // 02_2发生错误的情况
      if (!res.state) {
        // alert(res.massage)
        this.errText = res.massage;
        this.flageError = true;

        // 02_3正确的情况
      } else if (res.code == 200 && res.state == true) {
        //设置显示或者隐藏
        this.errText = res.massage;
        this.flageError = false;




        // 判断是否在未登录的情况下点击必须要登录的页面
        // 如果有参数那么登录成功后跳转到 原页面
        if (this.$route.query.redirect) {
          return this.$router.push(this.$route.query.redirect)
        } else {
          //否则登录成功后那么就回到首页
          this.$router.push('/')
        }



      }
    }




  }

}
</script>



<style lang="less" scoped>
.erorShow {
  display: block;
}

.erorNoew {
  display: none;
}

#login {
  width: 100%;
  height: 100%;
  // background: rgb(51, 51, 51);
  // overflow-x: hid;
  overflow: auto;


  //主体内容区域
  .login_conter {
    width: 920px;
    height: 660px;
    // border: 1px solid red;
    border-radius: 20px;

    margin: 130px auto;
    background: rgba(#fff, 0.8);
    overflow: hidden;






    // 01:左侧标题区域
    .login_conter_left {
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
    .login_conter_right {
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

          // border: 1px solid red;\
          input {
            width: 340px;
            height: 50px;
            border: 1px solid gainsboro;
            border-radius: 10px;
            padding-left: 10px;
            font-size: 18px;
            margin-left: 10px;
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
              // display: none;
            }

          }
        }

        // 忘记密码
        li:nth-child(4) {
          a {
            font-size: 14px;
            margin-left: 60px;
            color: #000;
          }
        }

        //提交按钮
        li:nth-child(5) {
          width: 100%;
          height: 160px;

          div {
            width: 90%;
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