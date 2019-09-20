// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入公共样式，保证在不同浏览器中显示的效果是一样的
import 'styles/reset.css'

// 解决手机的border放大问题
import 'styles/border.css'


// 解决移动端300ms click延迟问题
import fastClick from 'fastclick'
fastClick.attach(document.body)

//引入iconfont
import 'styles/iconfont.css'

// 引入swiper部分
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//引入vuex
import store from './store/'

// 引入loading组件
// import Loading from '@/common/loading'
// Vue.component('Loading',Loading);

//全局注册滚动组件
// import Scroller from '@/common/scroll'
// Vue.component('Scroller111',Scroller)

// Vue.component('Scroller111',Scroller)
// 第一个参数：全局组件的名字
// 第二个参数：import后面的那个Scroller

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})