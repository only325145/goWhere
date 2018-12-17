<template>
  <div>
    <router-link to="/" tag="div" class="goback">
      <div class="iconfont back">&#xe749;</div>
    </router-link>
    <Banner></Banner>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
  export default {
    name: "detail",
    components: {Banner}
  }
</script>

<style lang="stylus" scoped>
  .goback
    position: absolute
    z-index: 1
    left: .1rem
    top: .1rem
    width: .7rem
    height: .7rem
    border-radius: 50%
    background-color: rgba(0,0,0,0.5)
    .back
      text-align: center
      font-size: .4rem
      line-height: .7rem
      color: #fff
</style>
 
