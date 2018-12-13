<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back">&#xe749;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe615;</span>
      <input class="search" type="text" placeholder="输入城市/景点/游玩主题">
    </div>
    <router-link to="/city" tag="div">
      <div class="header-right">{{this.currentCity}}
        <span class="iconfont choose">&#xe627;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "Header",
  /* props: {
    city: String
  } */
  computed: mapState({     //当有大括号时，mapXXXX写成...mapXXXX
      currentCity: "city"    //mapState里也可以是一个对象，将state里的city数据映射到该组件计算属性中名为currentCity的数据
    })   //mapMutations和mapActions要写在methods里
};
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"   //样式里引入样式文件使用@符号
  .header
    display: flex 
    line-height: $headerHeight
    background-color: $bkcolor
    color: white
    .header-left
      width: .64rem
      float: left
      .back
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .65rem
      margin-top: .12rem
      margin-left: .2rem
      background-color: white
      border-radius: .1rem
      color: #ccc
      .search
        font-size: .24rem
        margin: 0 0 .15rem .1rem
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem   /* width设定值时如果城市名太长将把后面的图标挤到下一行，更改为样式可以解决这个问题 */
      float: right
      text-align: center
      color: #fff
      .choose
        font-size: .25rem
</style>
