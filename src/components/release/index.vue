<template>
  <div class="release">

    <span class="icon_clone iconfont" alt="关闭" @click="$emit('cloneImgr');">&#xe68f;</span>
    <div class="release_conter">
      <div class="release_conter_left">

        <span style="z-index:100;background:#FF6969;" v-show="remolveFlage" ref="remolveImg">移除</span>
        <div class="uploadImg">
          <img ref="iamges" src="" alt="">
        </div>
        <span v-show="!remolveFlage">
          上传文件
          <input type="file" ref="files" @change="showImg" placeholder="上传文件" name="bgUrl" value="上传文件"
            accept="image/*">
        </span>
        <div id="jdt">0%
        </div>


      </div>
      <div class="release_conter_right">
        <ul>
          <li>
            <h4>标题</h4>
            <textarea name="" id="" cols="30" rows="10" placeholder="输入你的标题吧~" v-model="titles"></textarea>
          </li>
          <li>
            <h4>标签</h4>
            <textarea name="" id="" cols="30" rows="10" v-model="labels"></textarea>
          </li>
          <li>
            <span @click="$emit('cloneImgr');">取消</span>
            <span @click="uploadFile">发布</span>
          </li>
        </ul>
      </div>
    </div>


  </div>
</template>


<script>
//获取vuex中的方法
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      remolveFlage: false,
      titles: "",// 标题
      labels: "",// 标签
    }
  },

  methods: {

    // 获取调用store 中的提交数据
    ...mapActions("upload", ["GetUploadList"]),

    // 01：监听是否选择了文件 如果有那么就会调用这个方法
    showImg() {
      let file = this.$refs.files.files;


      // 判断图片类型
      let fileName = file[0].name.substring(file[0].name.lastIndexOf(".") + 1).toLowerCase() || "";

      //这里是上传图片错误的情况
      if (["jpg", "png", "webp", "gif"].includes(fileName) == false) {
        return alert("请上传 jpg/png/git/webp 格式图片")
      } else {
        // 获取上传的图片fiel 对象数据
        // 转换成功url 然后添加到img中的src 属性中
        let files = file[0];
        let imgUrl = globalThis.URL.createObjectURL(files);
        const img = this.$refs.iamges;
        img.alt = file.name;
        img.src = imgUrl;

        //显示移出按钮
        this.remolveFlage = true;

        //点击移出按钮的时候移出图片内容数据,并清空掉内存中的Url
        this.$refs.remolveImg.addEventListener('click', () => {
          imgUrl && globalThis.URL.revokeObjectURL(imgUrl);
          this.remolveFlage = false;
          this.$refs.files.value = "";
          const img = this.$refs.iamges;
          img.alt = ""
          img.src = "";
        })
      }











    },

    // 02:上传文件  功能
    async uploadFile() {

      let file = this.$refs.files.files;

      // 02:图片未上传 的判断
      if (file.length <= 0) {
        return alert("图片未上传")
        // 这里判读是否已经填完信息
      } else if (this.titles == "" || this.labels == "") {
        return alert("标题与标签忘记填了")
      } else if ((file[0].size / 1024) > 2500) {
        return alert("附件不能大于2M");
      } else {
        // 发送请求获取数据

        // 实例化一个FileReader 实例对象
        let reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = async (e) => {

          //发送请求获取数据
          let res = await this.GetUploadList(
            {
              filesUpload: {
                fileData: e.target.result,
                fileName: "img.jpg"
              },
              inputFile: {
                titles: this.titles,
                labels: this.labels,
                _id: this.userinfor._id,

              }
            }
          )

          //错误的情况
          if (res.state == false || res.code == 201) {
            return alert(res.massage);
          } else if (res.code == 401) {
            alert(res.massage);
            this.$router.push('/login')
          } else {
            //成功的状态将图片渲染到img标签上
            this.$refs.iamges.src = `http://192.168.43.209:${res.data.imgUrl}`;
            this.$emit('cloneImgr')
            return alert(res.massage);
          }


        }

      }





    },
  },




  computed: {
    ...mapState('login', ["userinfor"])
  }


}


</script>



<style lang="less" scoped>
//主要内容区域
.release {
  width: 1020px;
  height: 690px;
  // border: 1px solid red;
  position: absolute;
  left: 25%;
  top: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 9px #b1b1b14f;
  margin: 0 auto;
  z-index: 15;

  //关闭按钮
  .icon_clone {
    display: block;
    position: absolute;
    right: 10px;
    font-size: 24px;
    top: 10px;
    cursor: pointer;
  }

  .icon_clone:hover {
    opacity: 0.5;
  }



  //内容区域
  .release_conter {
    width: 900px;
    height: 600px;
    position: relative;
    // border: 1px solid rgb(34, 0, 255);
    margin: 40px auto;
    display: flex;
    justify-content: space-between;



    //上传图片内容区域
    .release_conter_left {
      width: 500px;
      height: 100%;
      background: #ebebeb;
      position: relative;
      // border: 1px solid red;


      span {
        display: block;
        width: 100px;
        height: 40px;
        font-size: 16px;
        color: #fff;
        background: #81BCFD;
        text-align: center;
        // overflow: hidden;
        line-height: 40px;
        position: relative;
        margin: 200px auto;
        border-radius: 10px;

        input {
          width: 100px;
          height: 40px;
          display: block;
          position: absolute;
          top: 0;
          opacity: 0;
        }





      }

      //进度条
      #jdt {
        width: 100%;
        height: 40px;
        background: red;
        position: absolute;
        bottom: 0;
        line-height: 40px;
        background: #81BCFD;
        border-radius: 0px 0px 20px 20px;
        color: #fff;
        text-align: center;
      }



      //显示图片区域
      .uploadImg {
        width: 100%;
        height: 100%;
        // border: 1px solid red;
        position: absolute;
        top: 0px;
        left: 0px;
        overflow: auto;

        img {
          display: block;
          width: auto;
          height: 100%;
          margin: 0 auto;
        }

      }






    }



    //提交区域
    .release_conter_right {
      width: 400px;
      height: 100%;
      // background: rgb(215, 173, 173);

      ul {
        width: 340px;
        height: 100%;
        // border: 1px solid red;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        li {
          // border: 1px solid red;

          textarea {
            width: 100%;
            // border: 1px solid #BBBBBB;
            border-radius: 10px;
            resize: none;
            padding: 10px;
            font-size: 14px;
          }
        }

        li:nth-child(1) {
          textarea {
            width: 100%;
            // border: 1px solid #BBBBBB;
          }
        }

        li:nth-child(2) {
          flex: 0.4;

          textarea {
            height: 100px;
          }
        }

        li:nth-child(3) {
          flex: 0.3;
          display: flex;
          justify-content: space-between;

          span {
            display: block;
            width: 134px;
            height: 54px;
            // background: red;
            text-align: center;
            color: #fff;
            line-height: 54px;
            border-radius: 10px;
            font-size: 24px;

            &:hover {
              cursor: pointer;
              opacity: 0.8;
            }
          }


          span:nth-child(1) {
            background: #FF6969;
          }

          span:nth-child(2) {
            background: #81BCFD;
          }
        }

      }
    }




  }



}
</style>

