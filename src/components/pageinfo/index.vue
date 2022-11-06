<template>
  <div class="pagination">
    <!-- <p>{{ stringAend }}</p> -->
    <div class="btnsss">

      <!-- 上 -->

      <!-- 上一页 -->
      <button :disabled="pageNo == 1" @click="$emit('getPage', pageNo - 1)" v-if="dataSize != 0">
        上一页
      </button>
      <!-- 第一页 -->
      <button v-if="stringAend.start > 1" :class="{ active: pageNo == 1 }" @click="$emit('getPage', 1)">1</button>
      <!-- 点 -->
      <button v-if="stringAend.start > 2">.....</button>


      <!-- 中 -->
      <!-- 中间连续页码的地方:v-for、数组、对象、数字、字符串 -->
      <!-- 循环遍历的数据 -->
      <button v-for="(page, index) of stringAend.end" :key="index" v-show="page >= stringAend.start"
        @click="$emit('getPage', page)" :class="{ active: page == pageNo }">
        {{ page }}</button>



      <!--下 -->
      <!-- 点 -->
      <button v-if="stringAend.end < dataSizePage - 1">.....</button>
      <!-- 总页数 -->
      <button v-if="stringAend.end < dataSizePage" :class="{ active: pageNo == dataSizePage }"
        @click="$emit('getPage', dataSizePage)">
        {{ dataSizePage }}
      </button>
      <!--下一页  -->
      <button :disabled="pageNo == dataSizePage || dataSize == 0 " @click="$emit('getPage', pageNo + 1)" v-if="dataSize !== 0">
        下一页
      </button>

      <!-- 多少条数据 -->
      <button>共{{ dataSize }}条数据</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "PageInfor",

  data() {
    return {}
  },
  props: ["pageNo", "pageSize", "dataSize", "continmus"],
  computed: {

    //计算出有多少页数据
    dataSizePage() {
      return Math.ceil(this.dataSize / this.pageSize);
    },

    //计算出起始数字和结束的数字
    stringAend() {
      let start = 0, end = 0;//起始和结束


      // 不正常现象 总页数没有连续页码数多
      if (this.continmus > this.dataSizePage) {
        start = 1;
        end = this.dataSizePage;

        // 正常现象，总页数一定是大于5
      } else {
        //6 7 8 9 10 算法就是 当前页 + 2  || 当前页 — 2
        start = this.pageNo - Math.floor(this.continmus / 2);
        end = this.pageNo + Math.floor(this.continmus / 2);

        //还有不正常的现象  [satrt 小于了1]
        // 比如当前页在第一页那么以上的算法就会出现负数【修改起始数据】
        if (start < 1) {
          start = 1;
          end = this.continmus;
        }


        // 不正常现象，【end 大于了总页码数】
        if (end > this.dataSizePage) {
          end = this.dataSizePage;
          // 算法 总页数 — 页码数 + 1
          start = this.dataSizePage - this.continmus + 1;
        }
        // 11 12   13  14 15
        // 9 10 11 12   13
        // 13 - 5 = 8 + 1


        // if (this.pageNo > this.dataSizePage) {
        //   this.pageNo = this.dataSizePage
        // }

      }

      return { start, end }

    }







  }




};
</script>




<style lang="less" scoped>
.active {
  background: #409eff;
}

.pagination {
  margin: 0 auto;
  display: flex;
  align-items: center;

  .btnsss {
    height: 100%;
    margin: 0 auto;
  }

  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }

  button:hover {
    background: #40a0ff67;
    color: #fff;

  }
}
</style>