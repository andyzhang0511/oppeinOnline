<template>
    <div class="header">
        <router-link to="/" class="header-left" tag="div">
            <span class="iconfont back-icon">&#58916</span>  
        </router-link>
        城市选择
    </div>
</template>

<script>
export default {
    name:"CityHeader",
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        position relative
        overflow hidden
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #fff
        background $bgColor
        font-size .32rem
        .header-left
            position absolute
            top 0
            left 0
            width  .64rem
            margin-left .2rem
            font-size .4rem
            color #fff
</style>