<template>
  <div class="header">
        <div class="header-left">
          <span class="iconfont back-icon">&#58916</span>
        </div>
        <div class="header-input">
          <span class="iconfont">&#58930</span>
           欧派家居欢迎您
        </div>
        <router-link to="/city" tag="div" class="header-right">
        <!-- <div class="header-right"> -->
         {{this.$store.state.city}}<span class="iconfont arrow-icon">&#58954</span>
        <!-- </div> -->
        </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  // props:{
  //     city:String
  // }没用vuex之前
}
</script>

<style lang="stylus" scoped>

@import '~styles/varibles.styl'
 .header
    display flex
    line-height $headerHeight
    background $bgColor
    color #fff
    .header-left
        width  .64rem
        float left
        margin-left .2rem
        .back-icon
            text-align center
            font-size .3rem
    .header-input
        flex 1
        height .64rem
        line-height .64rem
        margin-top .12rem
        margin-left .2rem
        padding-left .2rem
        background  #fff
        border-radius .1rem
        color #ccc
    .header-right
        // overflow hidden //表示超出隐藏
        // text-overflow:ellipsis//文本超出用省略号代替
        // white-space:nowrap//文本不换行
        min-width 1.04rem
        padding 0 .1rem
        float right
        text-align center
        color #fff
        .arrow-icon
          margin-left .1rem
          font-size .24rem

</style>