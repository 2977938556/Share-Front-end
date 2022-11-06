<template>
  <div id="app">
    <imgHeader v-if="$route.meta.istoken"></imgHeader>
    <router-view></router-view>
    <imgFooter></imgFooter>

  </div>


</template>


<script>
import DevicePixelRatio from '@/utils/DevicePixelRatio '
export default ({
  name: 'app',
  mounted() {
    new DevicePixelRatio().init();
  }
})
</script>




<style lange="less" >



* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  outline: none;
}

* input {
  border: none;
  border: 1px solid #BBBBBB;
  transition: all 0.5s;

}

#app {
  position: relative;

}

body {
  background: #fff;



}


/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 14px;
  height: 14px;
  background-color: #F5F5F5;
}

/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track {
  /* border-radius: 10px; */
  background-color: #bbbbbb;

}

/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  /* border-radius: 10px; */
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: rgb(177, 177, 177);


}






















</style>