<template>
  <div>
    <div class="city">
    城市选择
      <router-link to="/">
        <div class="iconfont backHome">&#xe749;</div>
      </router-link>
    </div>
    <Search :cities="cities"></Search>
    <List :cities="cities" :letter="letter" :hot="hotCities"></List>
    <Alphabet :cities="cities" @change="leftPartchange"></Alphabet>
  </div>
</template>

<script>
import Axios from "axios";
import Search from "./components/Search.vue";
import List from "./components/List.vue";
import Alphabet from "./components/Alphabet.vue";
import { mapState } from 'vuex';
  export default {
    name: "city",
    components: {Search, List, Alphabet},
    data() {
      return {
        cities: {},
        hotCities: [],
        letter: ""
      }
    },
    methods: {
      getCityInfor() {
        Axios.get("/city.json").then(this.getCityInforSucc);
      },
      getCityInforSucc(res) {
        res = res.data;
        if(res.ret && res.data) {
          const data = res.data;
          this.cities = data.cities;
          this.hotCities = data.hotCities;
        }
      },
      leftPartchange(letter) {   //letter为传过来的数据
        this.letter = letter
      }
    },
    mounted() {
      this.getCityInfor();
    },
    /* activated() {
      console.log("cc");
    } */
  }
</script>

<style lang="stylus" scoped>
@import "../../assets/styles/varibles.styl"

  .city
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background-color: $bkcolor
    .backHome
      position: absolute
      top: 0
      width: .64rem
      font-size: .4rem
      color: #fff
</style>