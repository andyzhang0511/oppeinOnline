<template>
  <div>
    <DetailBanner :sightName="sightName"
    :bannerImg="bannerImg" :gallaryImgs="gallaryImgs">detail</DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content">
      <DetailList :list="list"></DetailList>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
        sightName:'',
        list:[],
        bannerImg:'',
        gallaryImgs:[]
    }
  },
  methods: {
    getDetailInfo() {
        axios.get("/qwe/detail.json",{
            params:{
                id:this.$route.params.id
            }
        })
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc(res){
      console.log(res)
      if(res.data.ret && res.data.data){
          this.list = res.data.data.categoryList
          this.sightName = res.data.data.sightName
          this.bannerImg = res.data.data.bannerImg
          this.gallaryImgs = res.data.data.gallaryImgs
      }        
    }
  },
  mounted() {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus">
.content {
  height: 50rem;
}
</style>