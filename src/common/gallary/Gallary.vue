<template>
    <div class="container" @click="closeDetail">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallary-img" :src="item" />
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name:'CommonGallary',
    props:{
        imgs:{
            type:Array,
            default(){
               
            }
        }
    },
    data () {
        return{
            openGallary:true,
            swiperOption: {
                //   轮播图点
                pagination: '.swiper-pagination',
                // 分页器 1/2  2/2
                paginationType : 'fraction',
                // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
                observer:true,
                observeParents:true
            }
        }
    },
    methods:{
        closeDetail(){
            this.$emit('close')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow inherit 
    .container
        display flex
        flex-direction column
        justify-content center

        z-index 99
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        background #000
        .wrapper
            // 撑出一个正方形的位置
            // overflow hidden
            height 0
            width 100%
            padding-bottom 100%
            .gallary-img
                width 100%
            .swiper-pagination
                color #fff
                bottom -1rem
</style>