import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false




//注册图标样式
import '@/assets/font_3690278_ygxtnjxwkhj/iconfont.css'

//注册全局组件
import imgHeader from '@/components/header'//头部组件
import imgRelease from '@/components/release'//发布组件教案
import imgDetaile from '@/components/detaile'// 详情组件
import imgFooter from '@/components/footer'// 底部组件
import imgPageinfor from '@/components/pageinfo'//  分页器
import imgLoading from '@/components/loading'// 无数据loding状态
Vue.component('imgHeader', imgHeader);
Vue.component('imgRelease', imgRelease)
Vue.component('imgDetaile', imgDetaile)
Vue.component('imgFooter', imgFooter)
Vue.component('imgPageinfor', imgPageinfor)
Vue.component('imgLoading', imgLoading)



//导入store数据仓库
import store from '@/store/index'

//导入路由
import router from '@/router'



// 导入过滤函数
import * as filter from '@/filters'
Object.keys(filter).forEach(keys => {
  Vue.filter(keys, filter[keys])
})





//解决 网页在缩放的时候布局会出现问题
import DevicePixelRatio from '@/utils/DevicePixelRatio '
new DevicePixelRatio().init();

//导入Api 接口 并绑定到原型上面
import * as Api from '@/api'


new Vue({
  render: h => h(App),
  router,//注册路由
  store,//注册仓库
  beforeCreate() {
    Vue.prototype.$Api = Api;
  }

}).$mount('#app')
