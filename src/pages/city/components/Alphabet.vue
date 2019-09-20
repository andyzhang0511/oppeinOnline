<template>
    <ul class="list">
        <!-- <li class="item" v-for="(item,key) in allCityList" 
        :key="key" 
        @click="selectCity"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">
        {{key}}</li> -->
        <li class="item" v-for="item in letters" 
        :key="item" 
        :ref="item"
        @click="selectCity"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">
        {{item}}</li>
    </ul>
</template>

<script>
export default {
    name:"CityAlphabet",
    props:{
        allCityList:Object
    },
    computed:{
        letters(){
            const letters = []
            // 遍历allCityList对象
            for(let i in this.allCityList){
                letters.push(i)
            }
            return letters
            // ['A','B','C','D'...]
        }
    },
    data(){
        return{
            touchStatus:false,
            startY:0,
            timer:null
        }
    },
    updated(){
        // 当页面的数据被更新，同时页面完成渲染的时候，触发此钩子函数
        this.startY=this.$refs['A'][0].offsetTop
    },
    methods:{
        selectCity(e){
            console.log(e.target.innerText);
            // console.log(this.allCityList); {A,B,C,D...}
            // 向City父组件传递一个叫change的方法
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart(){
            // 触发开始
            this.touchStatus = true
        },
        handleTouchMove(e){
            if(this.touchStatus){
                // 通过节流限制函数执行的频率的写法
                //节流(throttle):就是指连续触发事件但是在 n 秒中只执行一次函数。
                if(this.timer){
                    clearTimeout(this.timer)
                }
                //正在做这件事情，延迟16ms执行
                //假设在这16ms之间，又去做了手指的滚动，那么它会把上一次要做的操作给清除掉，重新执行这一步要做的事情
                this.timer = setInterval(()=>{
                    const touchY = e.touches[0].clientY-79  // e.touches获取事件目标  79:蓝色区域高度像素值
                    const index = Math.floor((touchY-this.startY)/20)
                    // console.log(index)  //1,2,3,4...
                    if(index >= 0 && index <= this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                },16)
                
            }
        },
        handleTouchEnd(){
            // 触发结束
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        display flex
        flex-direction column
        // flex-direction row
        justify-content center
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        // background red
        .item
            text-align center
            line-height .4rem
            color $bgColor
</style>