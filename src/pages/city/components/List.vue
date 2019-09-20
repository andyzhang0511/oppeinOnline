<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item in hotCityList" :key="item.id">
                        <div class="button" @click="handleCityClick(item.name)">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) in allCityList" :key="key" :ref="key">
                <!-- :key="key" 后面的key 指的是ABCDEF... -->
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id"  
                        @click="handleCityClick(innerItem.name)">
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:"CityList",
    props:{
        hotCityList:Array,
        allCityList:Object,
        letter:String
    },
    data(){
        return{

        }
    },
    methods:{
        handleCityClick(city){
            // alert(city)  打印的是城市名
            // this.$store.dispatch('changeCity',city)
            this.$store.commit('changeCityyy',city)
            this.$router.push('/')
        }
    },
    // 侦听器，监听letter的变化，一旦letter变了，就要做点事情了
    watch:{
        letter(){
            // console.log(this.letter);
            if (this.letter) {
                const element = this.$refs[this.letter][0]
                // console.log(element) // div为area的盒子
                this.scroll.scrollToElement(element)
            }
        }
    },
    // better-scroll的用法
    mounted (){
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-bottom
        &:before
            border-color #ccc
    .list
        overflow hidden
        position absolute
        top 1.58rem
        left 0 
        right 0
        bottom 0
        .title
            line-height .44rem
            background #eee
            padding-left .2rem
            color #666
            font-size .26rem
        .button-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem
            .button-wrapper
                float left
                width 33.33%
                .button
                    margin .1rem
                    padding .1rem 0
                    text-align center
                    border .02rem solid #ccc
                    border-radius .06rem
        .item-list
            .item
                line-height .76rem
                // color #666
                padding-left .2rem
</style>