<template>
  <div>
    <Banner :sightName="sightName" :bannerImg="bannerImg"  @haveclick="imgShow"></Banner>
    <Header></Header>
    <div class="content">
      <List :list="categoryList"></List>
    </div>
    <Fade>
      <ShowImg :show="show" @change="change"></ShowImg>
    </Fade>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import ShowImg from "./components/ShowImg.vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Fade from "@/common/fade/Fade.vue";
import Axios from "axios";
  export default {
    name: "detail",
    components: {Banner, Header, List, ShowImg, Fade},
    data() {
      return{
        sightName: "",
        bannerImg: "",
        categoryList: [],
        show: false
      }
    },
    methods: {
      getDtailInfor() {
        Axios.get("/detail.json?id=" + this.$route.params.id).then(this.getDtailInforSucc);
      },
      getDtailInforSucc(res) {
        res = res.data;
        if(res.ret && res.data) {
          const data = res.data;
          this.sightName = data.sightName;
          this.bannerImg = data.bannerImg;
          this.categoryList = data.categoryList;
        }
      },
      imgShow() {
        this.show = true
      },
      change() {
        this.show = false
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
 
