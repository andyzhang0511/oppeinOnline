<template>
  <div class="wrapper" ref="wrapper">
    <!-- wrapper充当最外层的容器，就是黑色的区域 -->
    <!-- 把内容分发过来，用插槽 slot -->
    <slot></slot>

    <!-- 无线端点击事件 
    click:一般不用，存在延迟
    touchstart:无论点击还是滑动，事件都会被触发
    我们希望滑动的时候不触发，点击的时候触发，此时就适合用tap事件
    tap事件特点:点击触发，滑动不触发 -->

    <!-- better-scroll:必须等到滑动模块内容加载完毕之后才能触发其功能
    所以要等到数据渲染完毕之后才能调用better-scroll -->

  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroller",
  props: {
    handleToScroll: {
      type: Function,
      default: function () { }
    },
    handleToTouchEnd: {
      type: Function,
      default: function () { }
    }
  },
  mounted() {
    var scroll222 = new BScroll(this.$refs.wrapper, {
      tap: true,
      probeType: 1
    });

    this.scroll = scroll222;

    scroll222.on("scroll", pos => {
      this.handleToScroll(pos);
    });

    scroll222.on("touchEnd", pos => {
      this.handleToTouchEnd(pos);
    });
  },
  methods: {
    // 跳转到指定城市 A B C D
    toScrollTop(y) {
      this.scroll.scrollTo(0, y);
    }
  }
};
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>
