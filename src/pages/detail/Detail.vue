<template>
  <div>
    <Banner :sightName="sightName" :bannerImg="bannerImg"></Banner>
    <Header></Header>
    <div class="content">
      <List :list="categoryList"></List>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Axios from "axios";
  export default {
    name: "detail",
    components: {Banner, Header, List},
    data() {
      return{
        sightName: "",
        bannerImg: "",
        categoryList: [],
      }
    },
    methods: {
      getDtailInfor() {
        Axios.get("/detail.json").then(this.getDtailInforSucc);
      },
      getDtailInforSucc(res) {
        res = res.data;
        if(res.ret && res.data) {
          const data = res.data;
          this.sightName = data.sightName;
          this.bannerImg = data.bannerImg;
          this.categoryList = data.categoryList;
        }
      }
    },
    mounted() {
      this.getDtailInfor()
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    height: 20rem
</style>
 
