<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back">&#xe749;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe615;</span>
      <input class="search" type="text" placeholder="输入城市/景点/游玩主题"></div>
    <div class="header-right">{{this.city}}
      <span class="iconfont choose">&#xe627;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    city: String
  }
};
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"   //样式里引入样式文件使用@符号
  .header
    display: flex 
    line-height: .86rem
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
      width: 1.24rem
      float: right
      text-align: center
      .choose
        font-size: .25rem
</style>
