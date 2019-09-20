<template>
    <div>
       <CityHeader></CityHeader>
       <SearchHeader :allCityList="allCityList"></SearchHeader>
       <CityList :hotCityList="hotCityList" 
       :allCityList="allCityList"
       :letter='letter'></CityList>
       <Alphabet :allCityList="allCityList" 
       @change="selectCityyyy"></Alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import SearchHeader from './components/Search'
import CityList from './components/List'
import Alphabet from './components/Alphabet'

import axios from 'axios'

export default {
    name:"City",
    data (){
        return{
            nowCity:'',
            hotCityList:[],
            allCityList:{},
            letter:''
        }
    },
    components:{
        CityHeader,
        SearchHeader,
        CityList,
        Alphabet
    },
    methods:{
        getCityInfo(){
            axios.get('qwe/city.json')
                .then(this.getCityInfoSucc)
        },
        getCityInfoSucc(res){
            console.log(res)
            if(res.data.ret&&res.data.data){
                this.hotCityList = res.data.data.hotCities
                console.log(this.hotCityList)
                this.allCityList = res.data.data.cities
                console.log(this.allCityList)
            }
        },
        selectCityyyy(letterrr){
            // 父组件接收到子组件Alphabet传递过来的letter数据
            // 然后把letter转发给list组件
            console.log(letterrr);
            this.letter = letterrr
        }
    },
    mounted(){
        this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>
    
</style>