<template>
  <div class="wrapper">
    <!-- v-if="list.length" 当ajax请求成功时swiper才能起作用 -->
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiper" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiper: Array
  },
  data() {
    return {
      swiperOption: {
        //   轮播图点
        pagination: '.swiper-pagination',
        // 无限循环
        loop: true,
        autoplay : 3000
      }
    }
  },
  computed:{
    showSwiper(){
      return this.swiper.length
    }
  }
}
</script>
<style lang="stylus" scoped>
// 页码小圆点
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  // 高/宽  宽高比
  height: 0;
  padding-bottom: 28.6458%;
  background: #ccc;

  .swiper-img {
    width: 100%;
  }
}
</style>