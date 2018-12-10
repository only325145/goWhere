<template>
  <div>
    <div class="city">
    城市选择
      <router-link to="/">
        <div class="iconfont backHome">&#xe749;</div>
      </router-link>
    </div>
    <Search></Search>
    <List></List>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import List from "./components/List.vue";
  export default {
    name: "city",
    components: {Search, List}
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