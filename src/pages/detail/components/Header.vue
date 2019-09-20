<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont back-icon">&#58916</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opcityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#58916</div>
      </router-link>商品详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true,
      opcityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop
      if (top > 30) {
        let opacity = top / 80
        opacity = opacity > 1 ? 1 : opacity
        this.opcityStyle = { opacity: opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  // 页面展示的时候去展示scroll事件,页面隐藏的时候对这个全局事件进行解绑deactivated()
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 页面即将替换成新的页面的时候，这个组件的deactivated生命周期钩子会被执行
  unmounted(){
    window.removeEventListener('scroll', this.handleScroll)
  }

}
</script>


<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header-abs {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.4rem;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;

  .iconfont {
    color: #fff;
    font-size: 0.4rem;
  }
}

.header-fixed {
  z-index 1
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;

  .header-fixed-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    margin-left: 0.2rem;
    font-size: 0.4rem;
    color: #fff;
  }
}
</style>