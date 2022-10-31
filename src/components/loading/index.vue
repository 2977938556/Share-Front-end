<template>
  <div class="conter_loading">
    <img src="@/assets/zwxg.svg" alt="">
  </div>
</template>


<script>
export default ({
  name: "Loading",

})
</script>



<style lang="less" scoped>
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

</style>


