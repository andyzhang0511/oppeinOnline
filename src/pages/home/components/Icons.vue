<template>
    <div class="icons">
        <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) in pagess" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
            <div class="icon-img" >
                    <img class="icon-img-content" :src="item.imgUrl" alt="">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
        </div>
        </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"HomeIcons",
    props:{
        iconList:Array
    },
    data(){
        return{
           swiperOption:{
               autoplay:false
           }
        }
    },
    computed:{
        // 页码和对应的数据项做一个关联
        pagess () {
            const pages = [];
            this.iconList.forEach((item,index)=>{
                // console.log(item)
                const page = Math.floor(index/8);
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl';
    .icons >>> .swiper-container
        width 100%
        overflow hidden
        // background yellow
        // 高/宽  宽高比
        // icon 区域的高度占比是50%
        height 0
        padding-bottom 50%
    .icons
        margin-top .1rem
        .icon 
            position relative
            overflow hidden
            float left  
            width 25%
            height 0
            padding-bottom 25%
            // background pink
            .icon-img
                position absolute
                top 0
                left 0
                right 0
                bottom .44rem             
                // background blue
                box-sizing border-box
                padding .1rem
                .icon-img-content
                    display block
                    margin 0 auto
                    height 100%
            .icon-desc
                position absolute
                bottom  0
                left 0
                right 0
                height .44rem
                line-height .44rem
                text-align center
                color $darkTextColor
                //引用封装好的css样式代码  文件在~styles/mixins.styl中
                ellipsis()
</style>