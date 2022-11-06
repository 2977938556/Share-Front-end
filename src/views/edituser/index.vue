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
                  <img :src="users.bgcUrl | imgBgcsplice" alt="" ref="iamges">
                </span>
                <span class="xuanzeFile">
                  <p>上传头像</p>
                  <input type="file" ref="files" @change="showImg">
                </span>
              </label>
            </li>
            <!-- 02：昵称表单 -->
            <li>
              <span>昵称</span>
              <input type="text" v-model="author">
            </li>

            <!-- 02：名称模块 -->
            <li>
              <label for="mc">
                <span>标语</span>
                <input type="text" id="mc" v-model="slogan">
              </label>
            </li>


            <!-- 03：简介模块 -->
            <li>
              <label for="jj">
                <span>简介</span>
                <textarea name="" id="" cols="30" rows="10" itemid="jj" v-model="befint"></textarea>
              </label>
            </li>


            <!--04: 手机号 -->
            <li>
              <label for="phone">
                <span>手机号</span>
                <input type="text" id="phone" v-model="phone">
              </label>
            </li>

            <!-- 05：性别 -->
            <li class="check">
              <span>性别</span>
              <label for="">
                ♀<input type="checkbox" data-name="0" name="woman">
              </label>
              <label for="">
                ♂<input type="checkbox" name="mail" data-name="1">
              </label>
              <label for="">
                :)<input type="checkbox" name="secred" data-name="-1" checked>
              </label>
            </li>
          </ul>
        </div>
      </div>

      <!-- 提交模块 -->
      <div class="EditUser_center_btn">
        <div>
          <span>取消</span>
          <span @click="submitEdiuser">提交</span>
        </div>
      </div>

    </div>

  </div>
</template>



<script>
import { mapActions, mapState } from 'vuex';



export default {
  name: "EditUser",
  data() {
    return {
      bgcUrl: "",//头像数据
      author: "",//作者
      slogan: "",//标语
      befint: "",//简介,
      phone: "",// 手机号
      sex: "-1",// 性别

    }
  },
  computed: {
    ...mapState('edituser', ["users"])
  },
  methods: {
    // 获取用户数据接口
    ...mapActions('edituser', ["GetEditUser", "GetDituser"]),

    // 01:传递用户id 进行保存数据
    async getUser() {
      let originator = this.$route.query.originator;
      let res = await this.GetEditUser({ originator })
      if (res.code != 200 || res.state != true) {
        return alert("个人信息获取失败请重新登录一下");
      }

      // 将数据保存到data中的数据
      this.bgcUrl = this.users.bgcUrl;
      this.author = this.users.author;
      this.slogan = this.users.slogan || "";
      this.befint = this.users.befint || "";
      this.phone = this.users.phone || "";

    },


    // 监听是否上传头像
    // 01：监听是否选择了文件 如果有那么就会调用这个方法
    showImg() {
      let file = this.$refs.files.files;

      // 判断图片类型
      let fileName = file[0].name.substring(file[0].name.lastIndexOf(".") + 1).toLowerCase() || "";

      //这里是上传图片错误的情况
      if (["jpg", "png", "webp", "gif"].includes(fileName) == false) {
        return alert("请上传 jpg/png/git/webp 格式图片")
      }

      // 正确的话那么就将图片转换成base 64并显示给前端
      let files = file[0];
      let imgUrl = globalThis.URL.createObjectURL(files);
      const img = this.$refs.iamges;
      img.alt = file.name;
      img.src = imgUrl;

    },

    // 单选按钮模块
    checkoutMin() {
      let checkeds = document.querySelectorAll('.check input');
      checkeds.forEach(item => {
        item.addEventListener('click', (e) => {
          checkeds.forEach(i => {
            i.checked = false;
          })
          e.target.checked = true;
          if (e.target.checked == true) {
            let sex = e.target.dataset.name;
            this.sex = sex;
          }
        })
      })
    },




    // 数据上传功能
    async submitEdiuser() {

      let file = this.$refs.files.files;
      // 判断必填项是否填了
      if (this.author == "" || this.sex == "") {
        return alert("昵称和性别忘记填啦")

        // 这里判断是否上传了图片
      } else if (file.length != 0) {
        if ((file[0].size / 1024) > 10000) {
          return alert("图片不能大于10MB");
        } else {
          // 实例化一个FileReader 实例对象
          let reader = new FileReader();
          reader.readAsDataURL(file[0]);
          reader.onload = async (e) => {
            // 这里调用方法提交数据
            let res = await this.GetDituser({
              filesUpload: {
                fileData: e.target.result,
                // fileData: "111",
                fileName: file[0].type,
              },
              inputFile: {
                author: this.author,//作者
                slogan: this.slogan,//标语
                befint: this.befint,//简介,
                phone: this.phone,// 手机号
                sex: this.sex,// 性别 
                originator: this.$route.query.originator,
              }
            })
            if (res.code == 200 || res.state == false) {
              alert("更新成功")
              this.$router.go(-1)

            } else {
              alert("更新数据失败")

            }

          }

        }
        // 这里是直接调用方法上传数据[上面的是携带图片数据]
      } else if (file.length == 0) {
        /// 这里调用方法提交数据
        let res = await this.GetDituser({
          inputFile: {
            bgcUrl: this.bgcUrl,
            author: this.author,//作者
            slogan: this.slogan,//标语
            befint: this.befint,//简介,
            phone: this.phone,// 手机号
            sex: this.sex,// 性别
            originator: this.$route.query.originator,
          }
        })

        if (res.code == 200 || res.state == false) {
          alert("更新成功")
          this.$router.go(-1)

        } else {
          alert("更新数据失败")

        }


      }













    },




  },






  mounted() {

    this.getUser();
    this.checkoutMin();






  }


}



</script>



<style lang="less" scoped>
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
                // background: rgb(0, 0, 0);
                border-radius: 100px;

                img {
                  border-radius: 100px;

                  // display: block;
                  // margin: 0 auto;
                  width: auto;
                  height: 120%;
                  border: 1px solid rgb(104, 104, 104);

                }

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
                position: relative;
                left: 80px;
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
                }
              }

              .xuanzeFile:hover {
                opacity: 0.5;
                cursor: pointer;
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
              margin-top: 26px;

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
          cursor: pointer;
          transition: all 0.3s;

        }


        span:nth-child(1) {
          background: #454545;
        }

        span:hover {
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