<template>
  <div id="home">
    <Header></Header>
    <HomeSwiper :list="swiperList"></HomeSwiper>
    <Icons :list="iconList"></Icons>
    <Recommend :list="recommendList"></Recommend>
    <Weekend :list="weekendList"></Weekend>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HomeSwiper from "./components/HomeSwiper.vue";
import Icons from "./components/Icons.vue";
import Recommend from "./components/Recommend.vue";
import Weekend from "./components/Weekend.vue";
import Axios from "axios";
export default {
  components: { Header, HomeSwiper, Icons, Recommend, Weekend },
  data() {
    return {
      //city: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  methods: {
    getHomeInfor() {
      Axios.get("/index.json").then(this.getHomeInforSucc);
    },
    getHomeInforSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        //this.city = res.data.city;
        this.swiperList = res.data.swiperList;
        this.iconList = res.data.iconList;
        this.recommendList = res.data.recommendList;
        this.weekendList = res.data.weekendList;
      }
    }
  },
  mounted() {
    this.getHomeInfor();
  }
};
</script>
