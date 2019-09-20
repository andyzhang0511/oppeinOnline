<template>
  <div class="parent" ref="parent">
    <div class="home_body">
      <div class="pullDown">
        <span>{{pullDownMsg}}</span>
      </div>

      <HomeHeader></HomeHeader>
      <HomeSwiper :swiper="swiperList"></HomeSwiper>
      <HomeIcons :iconList="iconList"></HomeIcons>
      <HomeRecommendd :recommendList="recommendList"></HomeRecommendd>
      <HomeWeekend :weekendList="weekendList"></HomeWeekend>
    </div>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/icons";
import HomeRecommendd from "./components/Recommend";
import HomeWeekend from "./components/Weekend";

import axios from "axios";
import BScroll from "better-scroll";

export default {
  name: "Home",
  data() {
    return {
      pullDownMsg: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommendd,
    HomeWeekend
  },
  methods: {
    getHomeInfo() {
      axios.get("/qwe/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      console.log(res);
      if (res.data.ret && res.data.data) {
        // this.city = res.data.data.city;  没用vuex之前
        this.swiperList = res.data.data.swiperList;
        this.iconList = res.data.data.iconList;
        this.recommendList = res.data.data.recommendList;
        this.weekendList = res.data.data.weekendList;
        //滚动
        this.$nextTick(() => {
          var scroll222 = new BScroll(this.$refs.parent, {
            tap: true,
            click: true,
            probeType: 1
          });

          scroll222.on("scroll", pos => {
            if (pos.y > 30) {
              this.pullDownMsg = "正在更新中...";
            }
          });

          scroll222.on("touchEnd", pos => {
            console.log(222);
            if (pos.y > 30) {
              axios.get("/qwe/index.json").then(res => {
                if (res.data.ret && res.data.data) {
                  this.pullDownMsg = "更新成功！";
                  setTimeout(() => {
                    this.swiperList = res.data.data.swiperList;
                    this.iconList = res.data.data.iconList;
                    this.recommendList = res.data.data.recommendList;
                    this.weekendList = res.data.data.weekendList;
                    this.pullDownMsg = "";
                  }, 1000);
                }
              });
            }
          });
        });
      }
    }
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>

<style>
.parent {
  height: 13.5rem;
  overflow: hidden;
}
.pullDown {
  background-color: gray;
  margin: 0;
  padding: 0;
  border: none;
  text-align: center;
  font-size: 0.36rem;
}
</style>